import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Factory, ShieldCheck, Zap, Package, Truck, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Manufacturing",
  description:
    "Tour FLONCO's joint-manufacturing facilities in Anhui, China. See our solar module production lines, battery assembly, quality control, and global logistics.",
};

const highlights = [
  {
    icon: Factory,
    title: "800MW+ Annual Capacity",
    desc: "Strategic joint-manufacturing bases in Anhui Province, equipped with fully automated production lines for solar modules and battery systems.",
  },
  {
    icon: ShieldCheck,
    title: "100% Quality Inspection",
    desc: "Every module undergoes EL (electroluminescence) testing, IV curve tracing, and visual inspection before leaving our facility.",
  },
  {
    icon: Zap,
    title: "PERC · TOPCon · HJT",
    desc: "Our production lines are configured for multiple cell technologies, allowing us to deliver the right efficiency-to-cost ratio for every project.",
  },
  {
    icon: Package,
    title: "LiFePO4 Battery Assembly",
    desc: "From cell sorting to pack integration, our battery division produces residential and commercial storage systems with rigorous BMS testing.",
  },
];

const process = [
  { step: "01", title: "Cell Sorting", desc: "Incoming cells are graded by efficiency, color, and electrical characteristics — only grade A+ cells enter production." },
  { step: "02", title: "String Welding", desc: "Automated multi-busbar welding ensures consistent, low-resistance connections across every cell string." },
  { step: "03", title: "Lamination", desc: "Cells are encapsulated between tempered glass and durable backsheet in vacuum laminators for 25+ year outdoor durability." },
  { step: "04", title: "Framing & Junction Box", desc: "Anodized aluminum frames and IP68 junction boxes are attached, with bypass diodes pre-installed." },
  { step: "05", title: "EL & IV Testing", desc: "100% electroluminescence imaging and IV curve tracing under standard test conditions (STC)." },
  { step: "06", title: "Packing & Shipping", desc: "Modules are packed in reinforced cartons and loaded into containers with full export documentation." },
];

export default function FactoryPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-primary py-16 sm:py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
              Manufacturing & Quality
            </h1>
            <p className="text-orange-100 text-lg leading-relaxed">
              See how FLONCO solar modules and battery systems are built — from
              cell sorting to final shipment. Backed by strategic joint-manufacturing
              bases in Anhui, China&apos;s photovoltaic heartland.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h) => {
              const Icon = h.icon;
              return (
                <div key={h.title} className="p-6 rounded-2xl border border-gray-100 hover:border-accent/30 hover:shadow-md transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-primary/6 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base font-bold text-[#1E293B] mb-2">{h.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{h.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Production process */}
      <section className="py-16 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1E293B] text-center mb-12">
            Module Production <span className="text-primary">Process</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((p) => (
              <div key={p.step} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl font-black text-accent/30 tabular-nums">{p.step}</span>
                  <h3 className="font-bold text-[#1E293B]">{p.title}</h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility images */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1E293B] text-center mb-10">
            Inside Our <span className="text-primary">Facilities</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              <Image src="/factory/module-inspection.jpg" alt="Module production line" width={600} height={400} className="w-full aspect-[3/2] object-cover" />
              <div className="p-4">
                <h4 className="text-sm font-bold text-[#1E293B]">Module Production Line</h4>
                <p className="text-xs text-gray-400 mt-1">Automated string welding & lamination</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              <Image src="/factory/battery-line.jpg" alt="Battery assembly" width={600} height={400} className="w-full aspect-[3/2] object-cover" />
              <div className="p-4">
                <h4 className="text-sm font-bold text-[#1E293B]">Battery Pack Assembly</h4>
                <p className="text-xs text-gray-400 mt-1">LiFePO4 cell sorting & BMS integration</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              <Image src="/factory/warehouse.jpg" alt="Warehouse & logistics" width={600} height={400} className="w-full aspect-[3/2] object-cover" />
              <div className="p-4">
                <h4 className="text-sm font-bold text-[#1E293B]">Warehouse & Logistics</h4>
                <p className="text-xs text-gray-400 mt-1">Pre-shipment QC & container loading</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            See It for Yourself
          </h2>
          <p className="text-orange-100 mb-8 leading-relaxed">
            We welcome customer visits to our Hefei manufacturing bases. Walk the
            production floor, inspect our quality systems, and meet the team behind
            your solar products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-accent text-[#1E293B] font-bold rounded-xl hover:bg-accent-light transition-all shadow-lg"
            >
              Schedule a Visit →
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/20"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
