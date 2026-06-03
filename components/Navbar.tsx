"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { label: "Product", href: "#product" },
    { label: "Use Cases", href: "#usecases" },
    { label: "Pricing", href: "#pricing" },
    { label: "Changelog", href: "#changelog" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#fdfbf7]/90 backdrop-blur-xl shadow-[0_1px_40px_rgba(0,0,0,0.06)] border-b border-[#f0ece4]"
          : "bg-transparent"
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2 flex-shrink-0"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#e85d04] to-[#ff7a1a] flex items-center justify-center shadow-lg">
              <Zap className="w-4 h-4 text-white" fill="white" />
            </div>
            <span className="font-bold text-xl text-[#0f172a] tracking-tight">
              Pulse<span className="text-[#e85d04]">GTM</span>
            </span>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-[#0f172a]/70 hover:text-[#e85d04] transition-colors text-sm font-medium rounded-lg hover:bg-[#e85d04]/5"
                whileHover={{ y: -1 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <motion.button
              className="px-4 py-2 text-[#0f172a] font-medium text-sm hover:text-[#e85d04] transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Sign In
            </motion.button>
            <motion.button
              className="px-5 py-2.5 bg-gradient-to-r from-[#e85d04] to-[#ff7a1a] text-white rounded-xl font-semibold text-sm shadow-[0_4px_16px_rgba(232,93,4,0.35)] hover:shadow-[0_6px_24px_rgba(232,93,4,0.45)] transition-all"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
            >
              Get Started Free
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden w-10 h-10 rounded-xl border border-[#f0ece4] flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? (
              <X className="w-5 h-5 text-[#0f172a]" />
            ) : (
              <Menu className="w-5 h-5 text-[#0f172a]" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="md:hidden pb-6 pt-2"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-[#f0ece4] p-4 shadow-xl">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="block py-3 px-3 text-[#0f172a]/80 hover:text-[#e85d04] font-medium text-sm rounded-lg hover:bg-[#e85d04]/5 transition-colors"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="flex gap-3 mt-4 pt-4 border-t border-[#f0ece4]">
                <button className="flex-1 px-4 py-2.5 text-[#0f172a] border border-[#e0d8cc] rounded-xl font-medium text-sm">
                  Sign In
                </button>
                <button className="flex-1 px-4 py-2.5 bg-gradient-to-r from-[#e85d04] to-[#ff7a1a] text-white rounded-xl font-semibold text-sm shadow-lg">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
