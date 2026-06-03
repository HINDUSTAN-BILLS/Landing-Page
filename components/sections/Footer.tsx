"use client";

import { motion } from "framer-motion";
import { Mail, Globe, Share2, Heart } from "lucide-react";

export default function Footer() {
  const footerColumns = [
    {
      title: "Product",
      links: [
        "Pincode Viability Score",
        "Scheme Simulator",
        "Distributor Co-pilot",
        "Revenue Leakage Detection",
        "Board-Ready Playbooks",
        "Pricing",
      ],
    },
    {
      title: "Use Cases",
      links: [
        "First-Time Founders",
        "Growth-Stage Brands",
        "Investor-Backed Scale-ups",
        "Omnichannel Transition",
      ],
    },
    {
      title: "Solutions",
      links: [
        "By Industry",
        "Beauty & Personal Care",
        "Food & Beverage",
        "Home & Living",
        "Fashion & Apparel",
        "Health & Wellness",
      ],
    },
    {
      title: "Resources",
      links: [
        "Blog",
        "Case Studies",
        "Guides",
        "Webinars",
        "Documentation",
        "API Docs",
      ],
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Careers",
        "Press",
        "Partners",
        "Security",
        "Contact",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <footer className="bg-[#0F172A] text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {footerColumns.map((column, index) => (
            <motion.div key={index} variants={itemVariants}>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-white/60 hover:text-[#E85D04] transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-white/10 my-12" />

        {/* Bottom Footer */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left - Copyright */}
          <motion.div variants={itemVariants}>
            <div className="mb-4">
              <h2 className="text-xl font-bold text-white mb-2">GTM OS</h2>
              <p className="text-sm text-white/50">
                © 2025 Your Company Name. All rights reserved.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 text-xs text-white/50">
              <a href="#" className="hover:text-[#E85D04] transition-colors">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#" className="hover:text-[#E85D04] transition-colors">
                Terms of Service
              </a>
              <span>•</span>
              <a href="#" className="hover:text-[#E85D04] transition-colors">
                DPA
              </a>
            </div>
          </motion.div>

          {/* Center - Trust Badges */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-1 text-xs text-white/70 bg-white/5 px-3 py-2 rounded-lg border border-white/10">
                <Globe className="w-3 h-3" />
                SOC 2 Compliant
              </div>
              <div className="flex items-center gap-1 text-xs text-white/70 bg-white/5 px-3 py-2 rounded-lg border border-white/10">
                <Globe className="w-3 h-3" />
                ISO 27001
              </div>
            </div>
          </motion.div>

          {/* Right - Social Links */}
          <motion.div variants={itemVariants} className="md:text-right">
            <div className="flex items-center justify-end md:justify-end gap-4 mb-4">
              <motion.a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center hover:bg-[#E85D04] transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Heart className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center hover:bg-[#E85D04] transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Share2 className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:hello@yourcompany.com"
                className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center hover:bg-[#E85D04] transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
            <div className="text-xs text-white/50">
              <p className="mb-2">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#E85D04] text-xs"
                />
                <button className="px-3 py-2 bg-[#E85D04] text-white rounded-lg hover:bg-[#d84c00] transition-colors text-xs font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          className="mt-12 pt-8 border-t border-white/10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-xs text-white/50">
            Nestlé-grade data refers to the quality and granularity of retail
            intelligence traditionally available only to large enterprises with
            extensive retail data infrastructure. Your Company Name is not
            affiliated with Nestlé.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
