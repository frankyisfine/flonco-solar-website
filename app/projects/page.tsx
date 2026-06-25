import type { Metadata } from "next";
import { Suspense } from "react";
import ProjectList from "@/components/projects/ProjectList";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore our solar project portfolio — 17+ installations across 6 continents covering solar PV, energy storage, EV charging, and hybrid systems.",
};

function ProjectListFallback() {
  return (
    <section className="py-16 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden animate-pulse"
            >
              <div className="aspect-[16/10] bg-gray-100" />
              <div className="p-5 space-y-3">
                <div className="h-3 bg-gray-100 rounded w-1/3" />
                <div className="h-4 bg-gray-100 rounded w-2/3" />
                <div className="h-3 bg-gray-100 rounded w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProjectsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-primary py-14 sm:py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 tracking-tight">
              Our Projects
            </h1>
            <p className="text-orange-100 text-lg leading-relaxed">
              Real installations, real results. Browse our portfolio of completed
              solar energy projects across six continents.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive project list with filters */}
      <Suspense fallback={<ProjectListFallback />}>
        <ProjectList />
      </Suspense>
    </>
  );
}
