"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { siteConfig } from "@/lib/site-config";

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#C44A03] via-[#E85D04] to-[#F0731E] text-white">
      {/* Animated background dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              delay: Math.random() * 3,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/10 blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-accent/20 blur-2xl pointer-events-none" />

      <div ref={ref} className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs mb-6 border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <Sparkles className="w-3.5 h-3.5 text-accent" />
          Free Consultation & Quotation
        </motion.div>

        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-black mb-5 tracking-tight leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Ready to Power Your
          <br />
          Next <span className="text-accent">Solar Project</span>?
        </motion.h2>

        <motion.p
          className="text-orange-100 max-w-lg mx-auto mb-10 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Tell us your requirements and receive factory-direct pricing within 24 hours.
          Or schedule a visit to tour our production lines in person.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 px-10 py-4 bg-accent text-[#1E293B] font-bold rounded-xl hover:bg-accent-light transition-all shadow-2xl hover:shadow-accent/30 hover:-translate-y-0.5 text-base"
          >
            Send an Inquiry
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.span>
          </Link>
          <a
            href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-10 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/20 hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5 text-green-400" />
            Chat on WhatsApp
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mt-12 pt-10 border-t border-white/10 text-xs text-orange-200/60"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <span>✓ Response within 24h</span>
          <span>✓ Factory-direct pricing</span>
          <span>✓ No minimum order</span>
          <span>✓ Worldwide shipping</span>
        </motion.div>
      </div>
    </section>
  );
}
