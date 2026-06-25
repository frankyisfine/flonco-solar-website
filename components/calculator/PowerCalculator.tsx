"use client";

import { useState, useCallback } from "react";
import {
  Calculator,
  Loader2,
  AlertCircle,
  MapPin,
  Sun,
  Zap,
  BarChart3,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { countries } from "@/lib/countries";
import { runCalculation, validateKw, MIN_KW, MAX_KW } from "@/lib/solar-calc";
import type { CalculationResult } from "@/lib/solar-calc";

type Status = "idle" | "loading" | "success" | "error";

export default function PowerCalculator() {
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [kw, setKw] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [kwWarning, setKwWarning] = useState<string | null>(null);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setKwWarning(null);

      const kwNum = parseFloat(kw);

      // Validate
      const validationError = validateKw(kwNum);
      if (validationError) {
        // If it's a hard error (NaN, <=0), block submission
        if (kwNum <= 0 || Number.isNaN(kwNum)) {
          setErrorMsg(validationError);
          setStatus("error");
          return;
        }
        // Soft warning — proceed but show
        setKwWarning(validationError);
      }

      setStatus("loading");
      setErrorMsg("");

      try {
        const r = await runCalculation({
          postalCode,
          countryCode: country,
          kw: kwNum,
        });
        setResult(r);
        setStatus("success");
      } catch (err) {
        setStatus("error");
        if (err instanceof DOMException && err.name === "AbortError") {
          setErrorMsg(
            "Request timed out. Please check your internet connection and try again.",
          );
        } else if (err instanceof TypeError) {
          setErrorMsg(
            "Network error — please check your connection and try again.",
          );
        } else {
          setErrorMsg(
            err instanceof Error ? err.message : "An unexpected error occurred.",
          );
        }
      }
    },
    [postalCode, country, kw],
  );

  const kwWarningLevel = kwWarning ? "soft" : null;

  return (
    <section className="py-12 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Error banner */}
        <AnimatePresence>
          {status === "error" && (
            <motion.div
              className="mb-6 flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold mb-1">Calculation Failed</p>
                <p className="text-sm">{errorMsg}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Country dropdown */}
          <div>
            <label
              htmlFor="country"
              className="block text-sm font-semibold text-[#1E293B] mb-1.5"
            >
              Country / Region
            </label>
            <select
              id="country"
              required
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              disabled={status === "loading"}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm bg-white focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition-all disabled:opacity-50 appearance-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 1rem center",
                paddingRight: "2.5rem",
              }}
            >
              <option value="">Select your country / region...</option>
              {countries.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          {/* Postal code */}
          <div>
            <label
              htmlFor="postalCode"
              className="block text-sm font-semibold text-[#1E293B] mb-1.5"
            >
              Postal / ZIP Code
            </label>
            <input
              id="postalCode"
              type="text"
              required
              placeholder="e.g. 10001, 2000, SW1A 1AA"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              disabled={status === "loading"}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition-all disabled:opacity-50 placeholder:text-gray-400"
            />
          </div>

          {/* kW input */}
          <div>
            <label
              htmlFor="kw"
              className="block text-sm font-semibold text-[#1E293B] mb-1.5"
            >
              Planned System Capacity (kW)
            </label>
            <input
              id="kw"
              type="number"
              required
              step="0.1"
              min={MIN_KW}
              max={MAX_KW}
              placeholder="e.g. 10"
              value={kw}
              onChange={(e) => {
                setKw(e.target.value);
                setKwWarning(null);
              }}
              disabled={status === "loading"}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition-all disabled:opacity-50 placeholder:text-gray-400"
            />
            {kwWarningLevel === "soft" && (
              <p className="mt-1.5 text-xs text-amber-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {kwWarning}
              </p>
            )}
            <p className="mt-1.5 text-xs text-gray-400">
              Typical residential: 3–15 kW | Commercial: 20–500 kW
            </p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl hover:shadow-primary/20 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Calculating...
              </>
            ) : (
              <>
                <Calculator className="w-5 h-5" />
                Calculate
              </>
            )}
          </button>
        </form>

        {/* Results */}
        <AnimatePresence>
          {status === "success" && result && (
            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* Hero number */}
              <div className="text-center bg-gradient-to-b from-bg-light to-white rounded-2xl border border-orange-100 p-8 sm:p-10 shadow-sm">
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent text-xs font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full mb-4">
                  <MapPin className="w-3.5 h-3.5" />
                  {result.locationName}
                </div>

                <div className="text-5xl sm:text-6xl font-black text-primary mb-2 tabular-nums">
                  {result.annualKwh.toLocaleString()}
                </div>
                <p className="text-lg text-gray-500 font-medium">
                  kilowatt-hours per year
                </p>

                {/* Supporting stats */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-orange-100">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-accent mb-1">
                      <Sun className="w-4 h-4" />
                    </div>
                    <div className="text-2xl font-bold text-[#1E293B] tabular-nums">
                      {result.avgDailyPsh}
                    </div>
                    <div className="text-xs text-gray-400">Peak Sun Hours</div>
                    <div className="text-[10px] text-gray-400 mt-0.5">
                      daily average
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-accent mb-1">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div className="text-2xl font-bold text-[#1E293B] tabular-nums">
                      {result.dailyKwh.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-400">kWh per Day</div>
                    <div className="text-[10px] text-gray-400 mt-0.5">
                      avg production
                    </div>
                  </div>

                  <div className="text-center col-span-2 sm:col-span-1">
                    <div className="flex items-center justify-center gap-1 text-accent mb-1">
                      <BarChart3 className="w-4 h-4" />
                    </div>
                    <div className="text-2xl font-bold text-[#1E293B] tabular-nums">
                      {result.monthlyKwh.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-400">kWh per Month</div>
                    <div className="text-[10px] text-gray-400 mt-0.5">
                      avg production
                    </div>
                  </div>
                </div>

                {/* Parameters used */}
                <div className="mt-8 pt-6 border-t border-orange-100 flex flex-wrap justify-center gap-x-6 gap-y-1 text-xs text-gray-400">
                  <span>
                    System:{" "}
                    <strong className="text-gray-500">{result.kw} kW</strong>
                  </span>
                  <span>
                    Efficiency factor:{" "}
                    <strong className="text-gray-500">0.75</strong>
                  </span>
                  <span>
                    Data:{" "}
                    <strong className="text-gray-500">
                      {result.dataPointsUsed.toLocaleString()} days
                    </strong>
                  </span>
                </div>
              </div>

              {/* Disclaimer */}
              <p className="mt-4 text-xs text-gray-400 text-center leading-relaxed max-w-lg mx-auto">
                This is an estimate based on 5-year historical solar radiation
                data for your location. Actual production varies with panel
                orientation, tilt angle, shading, temperature, inverter
                efficiency, and system configuration. For a detailed project
                analysis,{" "}
                <a
                  href="/contact"
                  className="text-accent hover:underline font-medium"
                >
                  contact our team
                </a>
                .
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
