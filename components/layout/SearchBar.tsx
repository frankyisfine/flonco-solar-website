"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Search, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { search, type SearchResult } from "@/lib/search-data";

const CATEGORY_COLORS: Record<string, string> = {
  Product: "bg-blue-100 text-blue-700",
  "Brand Partner": "bg-amber-100 text-amber-700",
  Solution: "bg-green-100 text-green-700",
  Page: "bg-gray-100 text-gray-600",
  Tool: "bg-purple-100 text-purple-700",
};

export default function SearchBar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [activeIdx, setActiveIdx] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Search on input change
  useEffect(() => {
    if (query.trim().length > 0) {
      setResults(search(query));
      setActiveIdx(-1);
      setOpen(true);
    } else {
      setResults([]);
    }
  }, [query]);

  // Close on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  const navigate = useCallback(
    (href: string) => {
      setOpen(false);
      setQuery("");
      router.push(href);
    },
    [router],
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!open || results.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx((prev) => Math.min(prev + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter" && activeIdx >= 0) {
      e.preventDefault();
      navigate(results[activeIdx].href);
    }
  };

  return (
    <div ref={containerRef} className="relative">
      {/* Search trigger */}
      <button
        onClick={() => {
          setOpen(!open);
          setTimeout(() => inputRef.current?.focus(), 50);
        }}
        className="p-2 rounded-lg text-gray-500 hover:text-primary hover:bg-orange-50 transition-colors"
        aria-label="Search"
      >
        <Search className="w-4 h-4" />
      </button>

      {/* Search panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute right-0 top-full mt-2 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-2xl border border-gray-100 shadow-2xl shadow-gray-900/10 overflow-hidden z-50"
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.15 }}
          >
            {/* Input */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
              <Search className="w-4 h-4 text-gray-400 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                placeholder='Search products, brands, solutions...'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 text-sm outline-none placeholder:text-gray-400 text-gray-700"
                autoFocus
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="p-0.5 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X className="w-3.5 h-3.5 text-gray-400" />
                </button>
              )}
            </div>

            {/* Results */}
            <div className="max-h-80 overflow-y-auto">
              {query.trim().length === 0 ? (
                <div className="px-4 py-6 text-center text-sm text-gray-400">
                  Type to search products, brands, or solutions…
                </div>
              ) : results.length === 0 ? (
                <div className="px-4 py-6 text-center text-sm text-gray-400">
                  No results found for &ldquo;{query}&rdquo;
                </div>
              ) : (
                results.map((r, i) => (
                  <button
                    key={`${r.href}-${r.title}`}
                    onClick={() => navigate(r.href)}
                    onMouseEnter={() => setActiveIdx(i)}
                    className={`w-full text-left px-4 py-3 flex items-start gap-3 transition-colors border-b border-gray-50 last:border-0 ${
                      i === activeIdx
                        ? "bg-bg-light"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    {/* Category badge */}
                    <span
                      className={`shrink-0 text-[10px] px-1.5 py-0.5 rounded-full font-semibold mt-0.5 ${
                        CATEGORY_COLORS[r.category] || "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {r.category}
                    </span>

                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-[#1E293B] truncate">
                        {r.title}
                      </div>
                      <div className="text-xs text-gray-400 truncate mt-0.5">
                        {r.description}
                      </div>
                    </div>

                    <ArrowRight
                      className={`w-4 h-4 shrink-0 mt-1 transition-opacity ${
                        i === activeIdx ? "text-primary opacity-100" : "opacity-0"
                      }`}
                    />
                  </button>
                ))
              )}
            </div>

            {/* Footer hint */}
            <div className="px-4 py-2 border-t border-gray-100 flex items-center gap-4 text-[10px] text-gray-400">
              <span>
                <kbd className="px-1 py-0.5 rounded bg-gray-100 border border-gray-200 text-[10px]">↑↓</kbd>{" "}
                Navigate
              </span>
              <span>
                <kbd className="px-1 py-0.5 rounded bg-gray-100 border border-gray-200 text-[10px]">↵</kbd>{" "}
                Go
              </span>
              <span>
                <kbd className="px-1 py-0.5 rounded bg-gray-100 border border-gray-200 text-[10px]">Esc</kbd>{" "}
                Close
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
