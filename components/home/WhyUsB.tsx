"use client";

import Image from "next/image";
import { Factory, ShieldCheck, Cpu, Globe, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const items = [
  {
    icon: Factory,
    title: "Joint-Manufacturing Bases",
    desc: "800MW+ annual capacity. Strategic production partnerships in Anhui province give you factory-direct pricing with full production traceability.",
  },
  {
    icon: ShieldCheck,
    title: "Brand-Owned Quality Standards",
    desc: "FLONCO sets its own specifications from cell selection to BMS logic. TÜV, CE, IEC 61215/61730, and ISO 9001 certified.",
  },
  {
    icon: Cpu,
    title: "System Integration Expertise",
    desc: "From rooftop to utility-scale, our engineering team designs and delivers complete solar + storage solutions — not just components.",
  },
  {
    icon: Globe,
    title: "Global Service, Local Support",
    desc: "30+ countries served. Dedicated account managers, multilingual communication, and reliable after-sales support worldwide.",
  },
];

export default function WhyUsB() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3">
                Why FLONCO
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E293B] mb-3 tracking-tight">
                Factory-Backed.
                <br />
                <span className="text-primary">Brand-Owned.</span>
              </h2>
              <p className="text-gray-500 max-w-lg text-base leading-relaxed mb-10">
                We own the FLONCO brand, control the quality through joint-manufacturing
                bases, and deliver complete solar solutions worldwide.
              </p>
            </motion.div>

            <div className="space-y-6">
              {items.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.12 * i }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/6 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#1E293B] mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              <Link
                href="/factory"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
              >
                Tour our manufacturing facilities
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* Right: Factory image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <Image
                src="/factory/module-inspection.jpg"
                alt="FLONCO manufacturing facility"
                width={700}
                height={500}
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-white text-xs bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                Module production line — Hefei, Anhui
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
