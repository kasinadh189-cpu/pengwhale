"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Story", href: "#story" },
  { label: "Tokenomics", href: "#tokenomics" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Gallery", href: "#gallery" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl"
      >
        <div
          className={`rounded-2xl transition-all duration-500 ${
            isScrolled
              ? "bg-[#0a1628]/80 backdrop-blur-xl border border-cyan-500/20 shadow-lg shadow-cyan-900/20"
              : "bg-[#0a1628]/40 backdrop-blur-md border border-cyan-500/10"
          }`}
        >
          <div className="px-4 sm:px-6">
            <div className="flex items-center justify-between h-14 sm:h-16">
              {/* Logo */}
              <a href="#" className="flex items-center gap-2">
                <span className="text-lg sm:text-xl">🐧</span>
                <span className="font-serif font-normal text-cyan-100 text-lg sm:text-xl tracking-wider">
                  Whalentine
                </span>
              </a>

              {/* Desktop Nav */}
              <div className="hidden md:flex items-center gap-6">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-cyan-200/80 hover:text-cyan-100 transition-colors text-sm font-light tracking-wide"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#"
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-sky-600 rounded-lg text-white font-medium text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 tracking-wide"
                >
                  Buy $WHALENTINE
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 text-cyan-200"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 bg-[#0a1628]/98 backdrop-blur-lg pt-20"
        >
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-cyan-100 text-2xl font-medium py-3 border-b border-cyan-500/20"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-6 py-4 bg-gradient-to-r from-cyan-500 to-sky-600 rounded-xl text-white font-semibold text-lg text-center shadow-lg shadow-cyan-500/20"
              >
                Buy $WHALENTINE
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
