"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { MessageCircle, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/lib/site-config";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const len = testimonials.length;

  const goTo = useCallback(
    (index: number, dir: number) => {
      setDirection(dir);
      setCurrent(index);
    },
    [],
  );

  const next = useCallback(() => goTo((current + 1) % len, 1), [current, len, goTo]);
  const prev = useCallback(() => goTo((current - 1 + len) % len, -1), [current, len, goTo]);

  // Auto-advance
  useEffect(() => {
    intervalRef.current = setInterval(next, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [next]);

  // Pause on hover
  const pause = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };
  const resume = () => {
    intervalRef.current = setInterval(next, 5000);
  };

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <section className="py-20 bg-bg-light relative overflow-hidden">
      {/* Decorative quote marks */}
      <div className="absolute top-8 right-8 opacity-[0.03] pointer-events-none select-none">
        <Quote className="w-64 h-64 text-primary rotate-12" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3">
            Testimonials
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1E293B] mb-3 tracking-tight">
            Trusted by <span className="text-primary">Importers Worldwide</span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto text-base leading-relaxed">
            Hear from solar distributors and project developers who partner with us.
          </p>
        </div>

        {/* Testimonial carousel */}
        <div
          className="relative bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden"
          onMouseEnter={pause}
          onMouseLeave={resume}
        >
          <div className="relative min-h-[280px] sm:min-h-[240px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 p-8 sm:p-12 flex flex-col justify-center"
              >
                {/* Quote text */}
                <div className="relative mb-6">
                  <Quote className="absolute -top-1 -left-1 w-6 h-6 text-accent/20 -translate-x-full -translate-y-1/2 hidden sm:block" />
                  <p className="text-gray-600 text-lg leading-relaxed italic">
                    &ldquo;{testimonials[current].quote}&rdquo;
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-primary">
                      {testimonials[current].author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-[#1E293B] text-sm">
                      {testimonials[current].author}
                    </div>
                    <div className="text-xs text-gray-500">
                      {testimonials[current].role}, {testimonials[current].company}
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-accent/10 text-accent font-semibold">
                        {testimonials[current].country}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          {len > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 border border-gray-100 shadow-sm flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 border border-gray-100 shadow-sm flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </>
          )}
        </div>

        {/* Dots */}
        {len > 1 && (
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > current ? 1 : -1)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-primary w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
