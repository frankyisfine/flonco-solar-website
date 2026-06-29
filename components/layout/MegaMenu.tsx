"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { ChevronDown, Sun, BatteryFull, Zap, Car, Droplets, Wind, Factory, Cpu, Wrench, Package, Plug, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { NavItem } from "@/lib/site-config";

const iconMap: Record<string, React.ElementType> = {
  solar: Sun,
  "solar pv": Sun,
  panel: Sun,
  "energy storage": BatteryFull,
  battery: BatteryFull,
  storage: BatteryFull,
  ev: Car,
  charging: Car,
  pump: Droplets,
  water: Droplets,
  air: Wind,
  conditioner: Wind,
  "off-grid": Globe,
  microgrid: Globe,
  oem: Factory,
  inverter: Cpu,
  mounting: Wrench,
  "complete pv": Package,
  "complete system": Package,
  "pump inverter": Plug,
};

function getIcon(label: string): React.ElementType {
  const lower = label.toLowerCase();
  for (const [key, icon] of Object.entries(iconMap)) {
    if (lower.includes(key)) return icon;
  }
  return Zap;
}

export default function MegaMenu({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const children = item.children ?? [];
  const activeChild = children[activeIdx];

  // Hover to open, delayed close
  const handleEnter = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setOpen(true);
  }, []);

  const handleLeave = useCallback(() => {
    timerRef.current = setTimeout(() => setOpen(false), 200);
  }, []);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  // Click outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const Icon = activeChild ? getIcon(activeChild.label) : Zap;
  const isProjects = item.label === "Projects";

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* Trigger */}
      <Link
        href={item.href}
        className="relative inline-flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold text-gray-500 hover:text-primary transition-colors"
        onClick={(e) => {
          if (children.length > 0) e.preventDefault(); // block parent nav, use dropdown
        }}
      >
        {item.label}
        {children.length > 0 && (
          <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
        )}
      </Link>

      {/* Dropdown */}
      <AnimatePresence>
        {open && children.length > 0 && (
          <motion.div
            className="absolute left-0 top-full mt-1 bg-white rounded-2xl border border-gray-100 shadow-2xl shadow-gray-900/10 overflow-hidden z-50 flex"
            style={{ width: "600px" }}
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.15 }}
          >
            {/* Left: child list */}
            <div className="w-1/2 border-r border-gray-50 py-3">
              {children.map((child, i) => (
                <Link
                  key={child.href + child.label}
                  href={child.href}
                  onClick={() => setOpen(false)}
                  onMouseEnter={() => setActiveIdx(i)}
                  className={`block px-5 py-2.5 text-sm transition-colors ${
                    i === activeIdx
                      ? "bg-bg-light text-primary font-semibold"
                      : "text-gray-600 hover:bg-gray-50 hover:text-primary"
                  }`}
                >
                  {child.label}
                </Link>
              ))}
            </div>

            {/* Right: preview */}
            <div className="w-1/2 p-6 flex flex-col items-center justify-center text-center bg-gradient-to-br from-bg-light to-white">
              {activeChild?.image ? (
                <div className="w-full max-w-[220px] mb-4 rounded-xl overflow-hidden bg-white border border-gray-100">
                  <img
                    src={activeChild.image}
                    alt={activeChild.label}
                    className="w-full h-28 object-contain p-2"
                  />
                </div>
              ) : !isProjects ? (
                <div className="w-16 h-16 rounded-2xl bg-primary/8 flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
              ) : null}
              <h4 className="text-sm font-bold text-[#1E293B] mb-2">
                {activeChild?.label}
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed max-w-[220px] mb-3">
                {activeChild?.desc}
              </p>

              {/* Sub-children (e.g. Residential / Commercial / Utility) */}
              {activeChild?.children && activeChild.children.length > 0 && (
                <div className="flex gap-1.5 flex-wrap justify-center">
                  {activeChild.children.map((sub) => (
                    <Link
                      key={sub.href + sub.label}
                      href={sub.href}
                      onClick={() => setOpen(false)}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-primary/8 text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
