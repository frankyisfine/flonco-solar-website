"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Factory, Package, Sparkles, FileCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

const FEATURES = [
  {
    icon: Factory,
    title: "Deep Factory Partnerships",
    description:
      "Beyond Tier-1 brands, we've built exclusive relationships with specialized factories that produce high-quality solar products without the brand premium. Ideal for budget-conscious projects.",
  },
  {
    icon: Sparkles,
    title: "OEM / Private Label Service",
    description:
      "Put your brand on our products. We handle everything — packaging design, logo printing, and documentation — so your customers see your name, not ours.",
  },
  {
    icon: Package,
    title: "Volume-Based OEM Pricing",
    description:
      "Large orders enjoy free OEM customization. Smaller quantities are accommodated at transparent cost-based pricing. No hidden fees, no surprises.",
  },
  {
    icon: FileCheck,
    title: "Certification Support",
    description:
      "Our non-Tier-1 factory products come with detailed spec sheets and testing reports. For specific certification requirements, our team will guide you through the documentation.",
  },
];

export default function SourceFactory() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 bg-gradient-to-b from-[#FFF8F0] to-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/[0.03] rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/4" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-1.5 bg-accent/10 text-accent text-xs font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full mb-4">
            <Factory className="w-3.5 h-3.5" />
            Direct Sourcing
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1E293B] mb-4 tracking-tight">
            Beyond Big Brands —{" "}
            <span className="text-primary">Source Smarter</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
            Not every project needs a Tier-1 label. We connect you directly with vetted
            Chinese factories that deliver solid quality at competitive prices — with full
            OEM and white-label flexibility. We also supply specialized solar applications
            including solar water pumps, solar air conditioners, and EV charging stations —
            just ask.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {FEATURES.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 * i }}
                className="group relative p-6 rounded-2xl bg-white border border-gray-100 hover:border-accent/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/6 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-bold text-[#1E293B] mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-white border border-orange-100 rounded-2xl px-6 py-4 shadow-sm">
            <span className="text-sm text-gray-500">
              💡 Interested in OEM or want to learn more about our factory partnerships?
            </span>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-white bg-primary hover:bg-primary-dark px-5 py-2.5 rounded-xl transition-colors shadow-md shrink-0"
            >
              Talk to Our Team
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            For non-Tier-1 product certifications and testing reports, please contact our sales team.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
