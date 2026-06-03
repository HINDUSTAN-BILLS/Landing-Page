"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Zap, TrendingUp, MapPin, Shield } from "lucide-react";
import { useRef } from "react";

const statItems = [
  { value: "48hr", label: "Market Playbook" },
  { value: "15K+", label: "Pincodes Covered" },
  { value: "3.2x", label: "Avg. Conversion Lift" },
  { value: "100%", label: "Board-Ready Output" },
];

const trustBadges = ["D2C Founders", "Growth Brands", "VC-Backed Scale-ups", "Enterprise"];

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
  };

  return (
    <section
      id="product"
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-[#fdfbf7] pt-24 pb-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#e85d04]/6 blur-[120px]" />
        <div className="absolute -top-20 -right-40 w-[500px] h-[500px] rounded-full bg-[#7366fe]/8 blur-[100px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full bg-[#e85d04]/4 blur-[80px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          className="text-center max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex justify-center mb-7">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#e85d04]/20 shadow-[0_2px_16px_rgba(232,93,4,0.12)]">
              <span className="w-2 h-2 rounded-full bg-[#e85d04] pulse-dot" />
              <span className="text-sm font-semibold text-[#0f172a]">
                AI-Powered GTM Operating System
              </span>
              <span className="text-xs px-2 py-0.5 bg-[#e85d04] text-white rounded-full font-medium">
                NEW
              </span>
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#0f172a] mb-6 leading-[1.04] tracking-tight"
          >
            Your board-ready{" "}
            <br className="hidden sm:block" />
            <span className="gradient-text">expansion playbook</span>
            <br className="hidden sm:block" />
            in{" "}
            <span className="relative inline-block">
              48 hours
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[#e85d04] to-[#ff7a1a] rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                style={{ originX: 0 }}
              />
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-[#0f172a]/60 mb-10 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            The only AI GTM platform powered by Nestlé-grade offline + online retail data.
            Know exactly where to launch, which distributors to appoint, and where
            revenue is leaking—before you spend a rupee.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
          >
            <motion.button
              id="hero-cta-primary"
              className="group px-8 py-4 bg-gradient-to-r from-[#e85d04] to-[#ff7a1a] text-white rounded-2xl font-bold text-lg shadow-[0_8px_32px_rgba(232,93,4,0.4)] hover:shadow-[0_12px_40px_rgba(232,93,4,0.55)] transition-all flex items-center justify-center gap-2"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Get Your Free Market Assessment
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              id="hero-cta-secondary"
              className="px-8 py-4 border-2 border-[#0f172a]/15 text-[#0f172a] rounded-2xl font-bold text-lg hover:border-[#e85d04]/40 hover:bg-[#e85d04]/5 transition-all backdrop-blur-sm"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              Schedule Demo
            </motion.button>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-14 max-w-3xl mx-auto"
          >
            {statItems.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="stat-highlight p-4 text-center rounded-2xl"
                whileHover={{ y: -3, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
              >
                <div className="text-2xl sm:text-3xl font-black gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-[#0f172a]/50 font-semibold uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Hero Dashboard Visual */}
        <motion.div
          className="relative max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="relative rounded-3xl overflow-hidden border border-white/80 shadow-[0_32px_100px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.04)] bg-white/60 backdrop-blur-sm">
            {/* Fake browser chrome */}
            <div className="flex items-center gap-2 px-5 py-4 bg-[#f8f5f0] border-b border-[#ece8e0]">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c940]" />
              <div className="flex-1 mx-4 h-7 rounded-lg bg-white border border-[#e0dbd4] flex items-center px-3">
                <span className="text-xs text-[#0f172a]/40 font-medium">app.pulsegmt.com/dashboard</span>
              </div>
            </div>

            {/* Dashboard content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {/* Left sidebar */}
              <div className="bg-[#0f172a] p-5 hidden md:block">
                <div className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-4">Navigation</div>
                {["Market Overview", "Pincode Scores", "Revenue Radar", "Distributors", "Playbook"].map((item, i) => (
                  <div
                    key={item}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl mb-1 cursor-pointer transition-colors ${
                      i === 0
                        ? "bg-[#e85d04]/20 text-[#ff7a1a]"
                        : "text-white/50 hover:text-white/80"
                    }`}
                  >
                    <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? "bg-[#e85d04]" : "bg-white/20"}`} />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

              {/* Main dashboard */}
              <div className="col-span-2 p-5 sm:p-6 bg-[#fafaf8]">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h3 className="font-bold text-[#0f172a] text-base sm:text-lg">Market Expansion Dashboard</h3>
                    <p className="text-xs text-[#0f172a]/50 mt-0.5">48-hour analysis complete</p>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-200 rounded-xl">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-xs text-green-700 font-semibold">Playbook Ready</span>
                  </div>
                </div>

                {/* Metric cards */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[
                    { label: "Markets Ranked", value: "47", change: "+12 this week", icon: MapPin, color: "text-[#e85d04]" },
                    { label: "Opportunity Size", value: "₹2.4Cr", change: "High confidence", icon: TrendingUp, color: "text-green-600" },
                    { label: "Revenue at Risk", value: "₹18L", change: "Leakage detected", icon: Shield, color: "text-amber-600" },
                  ].map((card) => {
                    const Icon = card.icon;
                    return (
                      <div key={card.label} className="bg-white rounded-2xl p-3 sm:p-4 border border-[#f0ece4] shadow-sm">
                        <Icon className={`w-4 h-4 ${card.color} mb-2`} />
                        <div className="text-lg sm:text-2xl font-black text-[#0f172a]">{card.value}</div>
                        <div className="text-[10px] sm:text-xs text-[#0f172a]/50 font-medium">{card.label}</div>
                        <div className={`text-[10px] sm:text-xs ${card.color} font-semibold mt-1`}>{card.change}</div>
                      </div>
                    );
                  })}
                </div>

                {/* Pincode list */}
                <div className="bg-white rounded-2xl border border-[#f0ece4] overflow-hidden">
                  <div className="px-4 py-3 border-b border-[#f0ece4] flex items-center justify-between">
                    <span className="text-xs font-bold text-[#0f172a] uppercase tracking-wide">Top Priority Pincodes</span>
                    <span className="text-xs text-[#e85d04] font-semibold">View All →</span>
                  </div>
                  {[
                    { pincode: "400001", city: "Mumbai - Colaba", score: 94, color: "bg-green-500" },
                    { pincode: "110001", city: "Delhi - Connaught Place", score: 88, color: "bg-green-400" },
                    { pincode: "560001", city: "Bangalore - MG Road", score: 81, color: "bg-amber-400" },
                  ].map((row) => (
                    <div key={row.pincode} className="flex items-center gap-3 px-4 py-3 border-b border-[#f0ece4] last:border-0">
                      <div className={`w-2 h-2 rounded-full ${row.color}`} />
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold text-[#0f172a]">{row.pincode}</div>
                        <div className="text-[10px] text-[#0f172a]/50 truncate">{row.city}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-[#f0ece4] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[#e85d04] to-[#ff7a1a] rounded-full"
                            style={{ width: `${row.score}%` }}
                          />
                        </div>
                        <span className="text-xs font-black text-[#0f172a]">{row.score}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating badges */}
          <motion.div
            className="absolute -top-4 -right-4 sm:-right-8 bg-white rounded-2xl px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-[#f0ece4] hidden sm:flex items-center gap-3"
            initial={{ opacity: 0, x: 20, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 1.2 }}
            style={{ animation: "float 4s ease-in-out infinite" }}
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#e85d04] to-[#ff7a1a] flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-xs font-black text-[#0f172a]">Analysis Complete</div>
              <div className="text-[10px] text-[#0f172a]/50">47 markets ranked in 43hrs</div>
            </div>
          </motion.div>

          <motion.div
            className="absolute -bottom-4 -left-4 sm:-left-8 bg-[#0f172a] rounded-2xl px-4 py-3 shadow-xl hidden sm:flex items-center gap-3"
            initial={{ opacity: 0, x: -20, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            <div className="text-2xl font-black gradient-text">3.2x</div>
            <div>
              <div className="text-xs font-bold text-white">Conversion Lift</div>
              <div className="text-[10px] text-white/50">vs. manual approach</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <p className="text-sm text-[#0f172a]/40 mb-5 font-medium uppercase tracking-widest">
            Trusted by founders at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {trustBadges.map((text, i) => (
              <motion.div
                key={text}
                className="px-5 py-2.5 bg-white border border-[#f0ece4] rounded-xl text-sm font-semibold text-[#0f172a]/50 shadow-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + i * 0.08 }}
                whileHover={{ y: -2, borderColor: "rgba(232,93,4,0.3)", color: "#0f172a" }}
              >
                {text}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
