"use client";

import { continentLabels, systemTypeLabels } from "@/lib/projects";
import type { SystemType } from "@/lib/projects";
import { MapPin } from "lucide-react";

interface Props {
  activeContinent: string;
  activeSystemType: string;
  onContinentChange: (c: string) => void;
  onSystemTypeChange: (t: string) => void;
}

const continents = [
  { key: "all", label: "All Regions" },
  { key: "na", label: "North America" },
  { key: "sa", label: "South America" },
  { key: "eu", label: "Europe" },
  { key: "as", label: "Asia" },
  { key: "af", label: "Africa" },
  { key: "oc", label: "Oceania" },
];

const systemTypes = [
  { key: "all", label: "All Types" },
  ...(Object.entries(systemTypeLabels) as [SystemType, string][]).map(([key, label]) => ({ key, label })),
];

export default function ProjectFilters({
  activeContinent,
  activeSystemType,
  onContinentChange,
  onSystemTypeChange,
}: Props) {
  return (
    <section className="pb-6 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Continent filter */}
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="w-4 h-4 text-gray-400 shrink-0" />
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mr-1">
            Region
          </span>
          <div className="flex flex-wrap gap-1.5">
            {continents.map((c) => (
              <button
                key={c.key}
                onClick={() => onContinentChange(c.key)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeContinent === c.key
                    ? "bg-primary text-white shadow-sm"
                    : "text-gray-500 hover:text-primary hover:bg-orange-50"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* System type filter */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mr-1">
            Type
          </span>
          <div className="flex flex-wrap gap-1.5">
            {systemTypes.map((t) => (
              <button
                key={t.key}
                onClick={() => onSystemTypeChange(t.key)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeSystemType === t.key
                    ? "bg-primary text-white shadow-sm"
                    : "text-gray-500 hover:text-primary hover:bg-orange-50"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
