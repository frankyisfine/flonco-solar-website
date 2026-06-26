"use client";

import { useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useInView } from "framer-motion";

interface Slide {
  name: string;
  slug: string;
  image: string;
}

export default function ProductSlider({ slides }: { slides: Slide[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, scroll: 0 });
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const updateButtons = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
    setTimeout(updateButtons, 350);
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(#E85D04 1px, transparent 1px), linear-gradient(90deg, #E85D04 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3">
            Discover Solar Products
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1E293B] mb-3 tracking-tight">
            What <span className="text-primary">We Supply</span>
          </h2>
        </motion.div>

        {/* Slider container */}
        <div className="relative group">
          {/* Left arrow */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/95 border border-gray-200 shadow-lg flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all -ml-4"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {/* Right arrow */}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/95 border border-gray-200 shadow-lg flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all -mr-4"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

          {/* Scrollable track */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4 -mx-4 px-4"
            onScroll={updateButtons}
            onMouseDown={(e) => {
              setDragging(true);
              dragStart.current = { x: e.clientX, scroll: scrollRef.current?.scrollLeft ?? 0 };
            }}
            onMouseMove={(e) => {
              if (!dragging || !scrollRef.current) return;
              const dx = e.clientX - dragStart.current.x;
              scrollRef.current.scrollLeft = dragStart.current.scroll - dx;
            }}
            onMouseUp={() => setDragging(false)}
            onMouseLeave={() => setDragging(false)}
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {slides.map((slide, i) => (
              <motion.div
                key={slide.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                className="flex-shrink-0 w-[260px] sm:w-[300px] lg:w-[340px]"
              >
                <Link
                  href={`/products/${slide.slug}`}
                  className={`block group/card relative rounded-2xl overflow-hidden border border-gray-100 hover:border-accent/30 hover:shadow-xl transition-all duration-300 bg-white ${dragging ? "pointer-events-none" : ""}`}
                  draggable={false}
                >
                  {/* Image */}
                  <div className="aspect-[4/3] bg-gray-50 relative overflow-hidden">
                    <Image
                      src={slide.image}
                      alt={slide.name}
                      fill
                      className="object-cover group-hover/card:scale-105 transition-transform duration-500"
                      sizes="340px"
                      draggable={false}
                    />
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Label */}
                  <div className="p-4 sm:p-5">
                    <h3 className="text-base sm:text-lg font-bold text-[#1E293B] group-hover/card:text-primary transition-colors">
                      {slide.name}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View all link */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors group"
          >
            View All Products
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
