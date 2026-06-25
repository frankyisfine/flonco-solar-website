"use client";

import { Zap, Globe, Package, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { siteConfig } from "@/lib/site-config";

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / 120;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { value: siteConfig.stats.supplierPartners, suffix: "MW+", label: "Annual Module Capacity", icon: Zap },
  { value: siteConfig.stats.marketsServed, suffix: "+", label: "Export Countries", icon: Globe },
  { value: siteConfig.stats.manufacturingBases, suffix: "", label: "Joint-Manufacturing Bases", icon: Package },
  { value: siteConfig.stats.yearsExperience, suffix: "+", label: "Years Industry Experience", icon: Users },
];

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="py-10 bg-white border-b border-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center">
              <div className="flex items-center justify-center gap-1.5 mb-1.5">
                <stat.icon className="w-3.5 h-3.5 text-accent/60" />
                <span className="text-2xl sm:text-3xl font-black text-primary">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </span>
              </div>
              <div className="text-xs sm:text-sm text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
