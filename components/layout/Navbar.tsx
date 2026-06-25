"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { navLinks, siteConfig } from "@/lib/site-config";
import type { NavItem } from "@/lib/site-config";
import { motion, AnimatePresence } from "framer-motion";
import SearchBar from "./SearchBar";
import MegaMenu from "./MegaMenu";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg shadow-orange-900/5"
          : "bg-white/90 backdrop-blur-md"
      } border-b border-orange-50`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className="relative">
              <Image
                src="/logo.svg"
                alt={siteConfig.name}
                width={40}
                height={40}
                className="h-10 w-auto relative z-10"
                priority
              />
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-md scale-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

              // Items with children render as MegaMenu
              if (link.children && link.children.length > 0) {
                return <MegaMenu key={link.href} item={link} />;
              }

              // Plain links
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "text-primary"
                      : "text-gray-500 hover:text-primary"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-0 bg-primary/8 rounded-lg"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="ml-3 px-5 py-2.5 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary-dark transition-all shadow-md hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
            >
              Get a Quote
            </Link>
            <div className="ml-1">
              <SearchBar />
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-orange-50 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="md:hidden pb-4 border-t border-orange-50 pt-3"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                  return (
                    <div key={link.href}>
                      <Link
                        href={link.href}
                        className={`block px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "text-gray-600 hover:text-primary hover:bg-orange-50"
                        }`}
                      >
                        {link.label}
                      </Link>
                      {link.children && link.children.length > 0 && (
                        <div className="ml-4 border-l-2 border-orange-100 pl-3 mt-1 space-y-1">
                          {link.children.map((child) => (
                            <Link
                              key={child.href + child.label}
                              href={child.href}
                              className="block px-3 py-1.5 rounded-lg text-xs text-gray-500 hover:text-primary hover:bg-orange-50 transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
                <Link
                  href="/contact"
                  className="mt-2 px-5 py-2.5 bg-primary text-white text-sm font-bold rounded-lg text-center hover:bg-primary-dark transition-colors"
                >
                  Get a Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
