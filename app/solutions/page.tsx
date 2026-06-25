import type { Metadata } from "next";
import Link from "next/link";
import { Sun, BatteryFull, Car, Droplets, Wind, Plug, Package, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Solar Solutions",
  description:
    "Full-scenario solar energy solutions — residential, commercial, industrial, off-grid, and hybrid systems tailored to your needs.",
};

const solutions = [
  {
    icon: Sun,
    title: "Solar PV Solution",
    desc: "Grid-tied, off-grid, and hybrid photovoltaic systems for residential, commercial, and utility-scale applications.",
    href: "/products/solar-panels",
  },
  {
    icon: BatteryFull,
    title: "Solar + Storage Solution",
    desc: "Combine solar generation with battery storage for energy independence, peak shaving, and backup power.",
    href: "/products/energy-storage",
  },
  {
    icon: Plug,
    title: "Solar + Storage + EV Charging",
    desc: "Integrated solar, battery, and EV charging infrastructure for homes, workplaces, and commercial fleets.",
    href: "/products/ev-charging-stations",
  },
  {
    icon: Car,
    title: "EV Charging Solution",
    desc: "AC and DC fast charging stations for residential, commercial, and public charging networks.",
    href: "/products/ev-charging-stations",
  },
  {
    icon: Droplets,
    title: "Solar Water Pumping",
    desc: "Solar-powered water pumping for agricultural irrigation, livestock, and community water supply.",
    href: "/products/solar-water-pumps",
  },
  {
    icon: Wind,
    title: "Solar Air Conditioning",
    desc: "Hybrid solar AC systems that reduce cooling electricity costs by up to 90%.",
    href: "/products/solar-air-conditioners",
  },
  {
    icon: Package,
    title: "Complete System Packages",
    desc: "Pre-engineered turnkey solar kits with panels, inverters, batteries, and mounting included.",
    href: "/products/complete-pv-systems",
  },
  {
    icon: Zap,
    title: "Off-Grid & Microgrid",
    desc: "Independent power systems for remote locations, islands, and critical infrastructure.",
    href: "/contact",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <section className="bg-primary py-16 sm:py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
              Solar Solutions
            </h1>
            <p className="text-orange-100 text-lg leading-relaxed">
              From a single rooftop to a multi-megawatt solar farm — we deliver
              complete, tailored energy solutions for every application and
              budget.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((sol) => {
              const Icon = sol.icon;
              return (
                <Link
                  key={sol.title}
                  href={sol.href}
                  className="group p-6 rounded-2xl border border-gray-100 bg-white hover:border-accent/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/6 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1E293B] mb-2 group-hover:text-primary transition-colors">
                    {sol.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {sol.desc}
                  </p>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-500">
              Don&apos;t see your application?{" "}
              <Link
                href="/contact"
                className="text-accent font-semibold hover:underline"
              >
                Tell us what you need →
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
