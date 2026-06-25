"use client";

import { Factory, ShieldCheck, BadgeCheck, Zap, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { whyChooseUs } from "@/lib/site-config";
import Link from "next/link";

const iconMap: Record<string, React.ElementType> = {
  Factory,
  ShieldCheck,
  BadgeCheck,
  Zap,
};

const colorAccents = [
  "bg-orange-50 text-orange-600 border-orange-100",
  "bg-amber-50 text-amber-600 border-amber-100",
  "bg-yellow-50 text-yellow-600 border-yellow-100",
  "bg-red-50 text-red-500 border-red-100",
];

function ReasonCard({
  item,
  index,
}: {
  item: (typeof whyChooseUs)[number];
  index: number;
}) {
  const Icon = iconMap[item.icon] || BadgeCheck;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="group relative pl-16 pb-10 last:pb-0"
    >
      {/* Vertical line */}
      {index < whyChooseUs.length - 1 && (
        <div className="absolute left-[27px] top-14 bottom-0 w-px bg-orange-100 group-hover:bg-accent/30 transition-colors duration-500" />
      )}

      {/* Numbered icon */}
      <div className="absolute left-0 top-0">
        <div className="relative">
          <motion.div
            className={`w-14 h-14 rounded-2xl border flex items-center justify-center shadow-sm ${colorAccents[index]}`}
            whileHover={{ rotate: -6, scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Icon className="w-6 h-6" />
          </motion.div>
          <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center">
            {index + 1}
          </span>
        </div>
      </div>

      <h3 className="text-lg font-bold text-[#1E293B] mb-2 group-hover:text-primary transition-colors duration-300">
        {item.title}
      </h3>
      <p className="text-sm text-gray-500 leading-relaxed max-w-md">
        {item.description}
      </p>

      {/* Decorative dot */}
      <motion.div
        className="absolute left-[23px] top-[60px] w-3 h-3 rounded-full bg-accent/0 group-hover:bg-accent/20 transition-colors duration-500"
        whileHover={{ scale: 2 }}
      />
    </motion.div>
  );
}

export default function WhyChooseUs() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-[#FFF8F0] relative overflow-hidden">
      {/* Decorative sun pattern */}
      <div className="absolute top-10 right-10 opacity-[0.03] pointer-events-none">
        <svg width="300" height="300" viewBox="0 0 300 300">
          <circle cx="150" cy="150" r="80" fill="#E85D04" />
          {Array.from({ length: 16 }).map((_, i) => {
            const angle = (i * 22.5 * Math.PI) / 180;
            const x2 = 150 + 140 * Math.cos(angle);
            const y2 = 150 + 140 * Math.sin(angle);
            return (
              <line
                key={i}
                x1="150" y1="150" x2={x2} y2={y2}
                stroke="#E85D04"
                strokeWidth="3"
                strokeLinecap="round"
              />
            );
          })}
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Header + reasons */}
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E293B] mb-4 tracking-tight">
                Not Just a Supplier,
                <br />
                <span className="text-primary">Your Growth Partner</span>
              </h2>
              <p className="text-gray-500 max-w-lg text-lg leading-relaxed mb-10">
                We bridge the gap between global buyers and China&apos;s best solar
                manufacturers — delivering quality, value, and peace of mind.
              </p>
            </motion.div>

            <div className="space-y-0">
              {whyChooseUs.map((item, index) => (
                <ReasonCard key={item.title} item={item} index={index} />
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <motion.div
            className="relative lg:sticky lg:top-24"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Large centered decorative element */}
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Outer glow ring */}
              <motion.div
                className="absolute inset-0 rounded-full bg-accent/10"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute inset-8 rounded-full bg-accent/5"
                animate={{ scale: [1, 0.95, 1] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Center content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <div className="w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center mb-6 rotate-3">
                  <Zap className="w-10 h-10 text-accent" />
                </div>
                <div className="text-5xl font-black text-primary mb-2">2+</div>
                <div className="text-sm font-semibold text-gray-500">
                  Years of Solar<br />Export Excellence
                </div>

                {/* Floating stat badges */}
                {[
                  { value: "15+", label: "Markets", pos: "top-0 right-4", delay: 0 },
                  { value: "30+", label: "Partners", pos: "bottom-8 right-0", delay: 0.3 },
                  { value: "50+", label: "Projects", pos: "bottom-8 left-0", delay: 0.6 },
                ].map((badge) => (
                  <motion.div
                    key={badge.label}
                    className={`absolute ${badge.pos} bg-white rounded-2xl px-3 py-2 shadow-lg border border-orange-50`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + badge.delay }}
                  >
                    <div className="text-lg font-black text-primary">{badge.value}</div>
                    <div className="text-[10px] text-gray-400 font-medium">{badge.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA link */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors group"
          >
            Learn more about our story
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
