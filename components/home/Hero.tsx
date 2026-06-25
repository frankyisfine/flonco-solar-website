"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[85vh] min-h-[560px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-solar.mp4" type="video/mp4" />
        </video>
        {/* Dark gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/60" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {/* Glass-card with headline */}
        <motion.div
          className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 sm:px-12 py-6 sm:py-8 mb-8 shadow-2xl shadow-black/20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.15]">
            Powering the{" "}
            <span className="relative inline-block">
              Future
              <motion.span
                className="absolute -bottom-1 left-0 h-1 bg-accent rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              />
            </span>
            <br className="sm:hidden" />{" "}
            with Solar
          </h1>
        </motion.div>

        {/* Greentech-style intro */}
        <motion.p
          className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          FLONCO SOLAR — Your Reliable Renewable Energy Partner &amp; System Integrator.
          Backed by Advanced Manufacturing Bases in Anhui, China.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link
            href="/products"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-[#1E293B] font-bold rounded-xl hover:bg-accent-light transition-all shadow-xl hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-0.5 text-base"
          >
            Explore Products
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/20 hover:-translate-y-0.5"
          >
            Request a Quote
          </Link>
        </motion.div>
      </div>

      {/* Scroll-down indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.2, duration: 0.5 },
          y: { delay: 1.2, duration: 2, repeat: Infinity },
        }}
      >
        <span className="flex flex-col items-center gap-1 text-white/50 text-[10px] uppercase tracking-widest">
          Scroll
          <ChevronDown className="w-4 h-4" />
        </span>
      </motion.div>
    </section>
  );
}
