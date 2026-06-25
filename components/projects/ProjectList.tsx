"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { MapPin, Zap, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, getFilteredProjects, continentLabels, systemTypeLabels } from "@/lib/projects";
import type { SystemType } from "@/lib/projects";
import ProjectFilters from "./ProjectFilters";

export default function ProjectList() {
  const searchParams = useSearchParams();
  const initialContinent = searchParams.get("continent") ?? "all";

  const [activeContinent, setActiveContinent] = useState(initialContinent);
  const [activeSystemType, setActiveSystemType] = useState("all");

  const filtered = useMemo(
    () => getFilteredProjects(activeContinent, activeSystemType),
    [activeContinent, activeSystemType],
  );

  return (
    <>
      {/* Filters */}
      <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-sm">
        <div className="pt-6">
          <ProjectFilters
            activeContinent={activeContinent}
            activeSystemType={activeSystemType}
            onContinentChange={setActiveContinent}
            onSystemTypeChange={setActiveSystemType}
          />
        </div>
        {/* Results count */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-sm text-gray-400">
            Showing <span className="font-semibold text-gray-600">{filtered.length}</span>{" "}
            of {projects.length} projects
            {activeContinent !== "all" && (
              <> in <span className="text-primary font-medium">{continentLabels[activeContinent]}</span></>
            )}
            {activeSystemType !== "all" && (
              <> · <span className="text-primary font-medium">{systemTypeLabels[activeSystemType as SystemType]}</span></>
            )}
          </p>
        </div>
      </div>

      {/* Project grid */}
      <section className="py-10 bg-bg-light min-h-[400px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg mb-2">No projects match your filters.</p>
              <button
                onClick={() => {
                  setActiveContinent("all");
                  setActiveSystemType("all");
                }}
                className="text-sm text-accent hover:underline font-medium"
              >
                Reset all filters →
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filtered.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.25 }}
                    className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-accent/30 hover:shadow-lg transition-all duration-300"
                  >
                    {/* Image placeholder */}
                    <div className="aspect-[16/10] bg-gradient-to-br from-primary/10 via-accent/5 to-bg-light flex items-center justify-center">
                      <Zap className="w-10 h-10 text-primary/20 group-hover:text-primary/40 transition-colors" />
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      {/* Badges */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 font-semibold">
                          {continentLabels[project.continent]}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-50 text-green-700 font-semibold">
                          {systemTypeLabels[project.systemType]}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-[#1E293B] mb-1.5 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center gap-4 text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {project.country}
                        </span>
                        <span className="flex items-center gap-1">
                          <Zap className="w-3 h-3" />
                          {project.capacity}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
