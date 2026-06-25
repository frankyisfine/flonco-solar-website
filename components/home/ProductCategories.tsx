"use client";

import Link from "next/link";
import { ArrowRight, Sun, Cpu, BatteryFull, Wrench, Package, Wind, Droplets, Plug, Car } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { products } from "@/lib/products";

const iconMap: Record<string, React.ElementType> = {
  "solar-panels": Sun,
  "inverters": Cpu,
  "energy-storage": BatteryFull,
  "mounting-systems": Wrench,
  "complete-pv-systems": Package,
  "solar-air-conditioners": Wind,
  "solar-water-pumps": Droplets,
  "solar-pump-inverters": Plug,
  "ev-charging-stations": Car,
};

function ProductCard({ product, index }: { product: typeof products[number]; index: number }) {
  const Icon = iconMap[product.slug] || Sun;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link
        href={`/products/${product.slug}`}
        className="group relative block p-6 rounded-2xl bg-white border border-orange-100 hover:border-accent/50 hover:shadow-xl transition-all duration-500 overflow-hidden"
      >
        {/* Subtle gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">
          {/* Icon with animated ring */}
          <div className="relative w-14 h-14 mb-5">
            <div className="absolute inset-0 bg-primary/5 rounded-2xl group-hover:bg-accent/10 transition-colors duration-500" />
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-accent/20 transition-all duration-500" />
            <div className="relative w-full h-full flex items-center justify-center">
              <Icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-300" />
            </div>
          </div>

          {/* Number badge */}
          <span className="absolute top-0 right-0 text-5xl font-black text-gray-50 group-hover:text-accent/5 transition-colors duration-500">
            {String(index + 1).padStart(2, "0")}
          </span>

          <h3 className="text-lg font-bold text-[#1E293B] mb-2 group-hover:text-primary transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">
            {product.description}
          </p>

          {/* Feature tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {product.features.slice(0, 3).map((f) => (
              <span
                key={f}
                className="text-[11px] px-2.5 py-1 bg-[#FFF8F0] text-primary/70 rounded-full font-medium"
              >
                {f.length > 30 ? f.slice(0, 30) + "..." : f}
              </span>
            ))}
          </div>

          <span className="inline-flex items-center gap-1.5 text-sm font-bold text-accent group-hover:gap-2.5 transition-all duration-300">
            Learn more
            <motion.span
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ProductCategories() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #E85D04 1px, transparent 1px),
            radial-gradient(circle at 80% 20%, #E85D04 1px, transparent 1px),
            radial-gradient(circle at 50% 80%, #FFBA08 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3">
            What We Supply
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E293B] mb-4 tracking-tight">
            Complete Solar Solutions,
            <br />
            <span className="text-primary">One Trusted Partner</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg leading-relaxed">
            From core components to turnkey systems — everything you need for
            residential, commercial, and industrial solar projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products
            .filter((p) =>
              ["solar-panels", "inverters", "energy-storage", "mounting-systems", "complete-pv-systems"].includes(p.slug)
            )
            .map((product, index) => (
              <ProductCard key={product.slug} product={product} index={index} />
            ))}
        </div>

        {/* Bottom link */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors group"
          >
            View All Products
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
