"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { brandPartners } from "@/lib/site-config";

const TIER_COLORS: Record<string, string> = {
  "Tier 1": "bg-amber-100 text-amber-700 border-amber-200",
};

export default function BrandPartners() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const categories = [...new Set(brandPartners.map((b) => b.category as string))];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(#E85D04 1px, transparent 1px), linear-gradient(90deg, #E85D04 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3">
            Premium Brand Distribution
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1E293B] mb-3 tracking-tight">
            Also Distributing <span className="text-primary">Premium Brands</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Beyond our FLONCO-brand products, we distribute Tier-1 solar brands —
            giving you the flexibility to choose the right component for every project.
          </p>
        </motion.div>

        {/* Brand grid by category */}
        {categories.map((category) => (
          <div key={category} className="mb-8 last:mb-0">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4 text-center">
              {category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {(brandPartners as readonly { name: string; category: string; tier: string; logo: string | null }[])
                .filter((b) => b.category === category)
                .map((brand, i) => (
                  <motion.div
                    key={brand.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                    whileHover={{ y: -4, scale: 1.03 }}
                    className="group relative"
                  >
                    <div className="relative p-4 rounded-xl bg-gradient-to-b from-bg-light to-white border border-gray-100 hover:border-accent/30 hover:shadow-lg transition-all duration-300 text-center">
                      {/* Brand logo */}
                      <div className="h-14 flex items-center justify-center mb-2">
                        {brand.logo ? (
                          <Image
                            src={brand.logo}
                            alt={`${brand.name} logo`}
                            width={160}
                            height={48}
                            className="max-w-[140px] max-h-10 w-auto h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        ) : (
                          <span className="text-lg font-black text-primary/50">
                            {brand.name}
                          </span>
                        )}
                      </div>

                      {/* Tier badge only (name is in the logo) */}
                      <span
                        className={`inline-block text-[10px] px-1.5 py-0.5 rounded-full font-semibold border ${TIER_COLORS[brand.tier] || "bg-gray-100 text-gray-600 border-gray-200"}`}
                      >
                        {brand.tier}
                      </span>

                      {/* Hover glow */}
                      <div className="absolute inset-0 rounded-xl bg-accent/0 group-hover:bg-accent/[0.02] transition-colors duration-300 pointer-events-none" />
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
