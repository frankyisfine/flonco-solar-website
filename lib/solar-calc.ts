// Solar calculator utilities — geocoding, radiation data, production estimates

import { countries } from "./countries";

// ---- Constants ----

const GEOCODING_URL = "https://geocoding-api.open-meteo.com/v1/search";
const ARCHIVE_URL = "https://archive-api.open-meteo.com/v1/archive";

/** System efficiency factor: accounts for inverter (~5%), temperature (~10%), wiring/soiling/mismatch (~10%) */
const SYSTEM_EFFICIENCY = 0.75;

/** 1 Peak Sun Hour = 1 kWh/m² = 3.6 MJ/m² */
const MJ_TO_PSH = 1 / 3.6;

/** 5-year window for averaging solar radiation data */
const ARCHIVE_START = "2020-01-01";
const ARCHIVE_END = "2024-12-31";

/** Fetch timeout in milliseconds */
const FETCH_TIMEOUT_MS = 15_000;

// ---- Types ----

export interface GeocodingResult {
  lat: number;
  lon: number;
  name: string;
  country: string;
  countryCode: string;
}

export interface CalculationInput {
  postalCode: string;
  countryCode: string;
  kw: number;
}

export interface CalculationResult {
  annualKwh: number;
  dailyKwh: number;
  monthlyKwh: number;
  avgDailyPsh: number;
  kw: number;
  locationName: string;
  dataPointsUsed: number;
}

// ---- Helpers ----

function fetchWithTimeout(url: string): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  return fetch(url, { signal: controller.signal }).finally(() =>
    clearTimeout(timer),
  );
}

// ---- API functions ----

/**
 * Geocode a postal code + country to lat/lon via Open-Meteo Geocoding API.
 * Returns the first result matching the selected country code.
 */
export async function geocodeLocation(
  postalCode: string,
  countryCode: string,
): Promise<GeocodingResult> {
  const params = new URLSearchParams({
    name: postalCode,
    count: "10",
    language: "en",
    format: "json",
  });

  const res = await fetchWithTimeout(`${GEOCODING_URL}?${params}`);
  if (!res.ok) {
    throw new Error(
      `Geocoding service returned ${res.status}. Please try again later.`,
    );
  }

  const data = await res.json();
  const results: Array<Record<string, unknown>> = data.results ?? [];

  // Filter by country code (case-insensitive)
  const match = results.find(
    (r) =>
      typeof r.country_code === "string" &&
      r.country_code.toLowerCase() === countryCode.toLowerCase(),
  );

  if (!match) {
    const countryName =
      countries.find((c) => c.code === countryCode)?.name ?? countryCode;
    throw new Error(
      `No location found in ${countryName} for postal code "${postalCode}".`,
    );
  }

  return {
    lat: match.latitude as number,
    lon: match.longitude as number,
    name: (match.name as string) ?? postalCode,
    country: (match.country as string) ?? countryCode,
    countryCode: (match.country_code as string) ?? countryCode,
  };
}

/**
 * Fetch 5-year historical daily solar radiation data (MJ/m²/day) from Open-Meteo.
 * Filters out null/missing days and returns the average daily PSH.
 */
export async function fetchSolarRadiation(
  lat: number,
  lon: number,
): Promise<{ avgDailyPsh: number; dataPointsUsed: number }> {
  const params = new URLSearchParams({
    latitude: lat.toFixed(4),
    longitude: lon.toFixed(4),
    start_date: ARCHIVE_START,
    end_date: ARCHIVE_END,
    daily: "shortwave_radiation_sum",
    timezone: "auto",
  });

  const res = await fetchWithTimeout(`${ARCHIVE_URL}?${params}`);
  if (!res.ok) {
    throw new Error(
      `Solar data service returned ${res.status}. Please try again later.`,
    );
  }

  const data = await res.json();

  const dailyValues: number[] = (data.daily?.shortwave_radiation_sum ?? [])
    .filter((v: unknown) => typeof v === "number" && !Number.isNaN(v));

  if (dailyValues.length === 0) {
    throw new Error(
      "No solar radiation data available for this location. The coordinates may be in an area without sufficient historical data.",
    );
  }

  const totalMJ = dailyValues.reduce((sum: number, v: number) => sum + v, 0);
  const avgDailyMJ = totalMJ / dailyValues.length;
  const avgDailyPsh = avgDailyMJ * MJ_TO_PSH;

  return { avgDailyPsh, dataPointsUsed: dailyValues.length };
}

/**
 * Calculate estimated annual energy production.
 *
 * Formula: Annual kWh = kW × PSH × 365 × system_efficiency
 */
export function computeProduction(
  kw: number,
  avgDailyPsh: number,
): Pick<CalculationResult, "annualKwh" | "dailyKwh" | "monthlyKwh"> {
  const annualKwh = Math.round(kw * avgDailyPsh * 365 * SYSTEM_EFFICIENCY);
  const dailyKwh = Math.round((annualKwh / 365) * 10) / 10;
  const monthlyKwh = Math.round(annualKwh / 12);

  return { annualKwh, dailyKwh, monthlyKwh };
}

// ---- Full pipeline ----

/**
 * Run the full calculation pipeline: geocode → radiation → production.
 * Returns the complete CalculationResult.
 */
export async function runCalculation(
  input: CalculationInput,
): Promise<CalculationResult> {
  const geo = await geocodeLocation(input.postalCode, input.countryCode);
  const radiation = await fetchSolarRadiation(geo.lat, geo.lon);
  const production = computeProduction(input.kw, radiation.avgDailyPsh);

  return {
    annualKwh: production.annualKwh,
    dailyKwh: production.dailyKwh,
    monthlyKwh: production.monthlyKwh,
    avgDailyPsh: Math.round(radiation.avgDailyPsh * 100) / 100,
    kw: input.kw,
    locationName: `${geo.name}, ${geo.country}`,
    dataPointsUsed: radiation.dataPointsUsed,
  };
}

// ---- Validation ----

export const MIN_KW = 0.1;
export const MAX_KW = 50_000;

export function validateKw(kw: number): string | null {
  if (Number.isNaN(kw) || kw <= 0) {
    return "Please enter a valid positive number for system capacity.";
  }
  if (kw < MIN_KW) {
    return `System capacity is very small (< ${MIN_KW} kW). Results may not be meaningful.`;
  }
  if (kw > MAX_KW) {
    return `System capacity exceeds ${MAX_KW.toLocaleString()} kW. This calculator is designed for distributed generation systems.`;
  }
  return null; // valid
}
