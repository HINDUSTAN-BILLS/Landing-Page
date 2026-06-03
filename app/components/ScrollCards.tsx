"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  BarChart3,
  Target,
  Truck,
  LineChart,
  Map,
  ShieldCheck,
  Zap,
  TrendingUp,
  Globe,
  Users,
} from "lucide-react";

const topRowCards = [
  {
    title: "Market Sizing",
    description:
      "Pincode-level demand estimation with AI-powered market viability scoring across 15,000+ locations.",
    icon: BarChart3,
    accent: "from-[#e85d04] to-[#ff7a1a]",
    accentGlow: "rgba(232,93,4,0.15)",
    metric: "15K+",
    metricLabel: "Pincodes",
  },
  {
    title: "Competitive Intel",
    description:
      "Real-time competitor mapping, pricing intelligence, and white-space identification in every micro-market.",
    icon: Target,
    accent: "from-[#7366fe] to-[#a78bfa]",
    accentGlow: "rgba(115,102,254,0.15)",
    metric: "360°",
    metricLabel: "Coverage",
  },
  {
    title: "Distribution Plan",
    description:
      "AI-matched distributor recommendations with territory optimization and route-to-market strategy.",
    icon: Truck,
    accent: "from-[#06b6d4] to-[#22d3ee]",
    accentGlow: "rgba(6,182,212,0.15)",
    metric: "3.2x",
    metricLabel: "Efficiency",
  },
  {
    title: "Financial Model",
    description:
      "Board-ready P&L projections, unit economics, and scenario planning calibrated to your exact category.",
    icon: LineChart,
    accent: "from-[#10b981] to-[#34d399]",
    accentGlow: "rgba(16,185,129,0.15)",
    metric: "48hr",
    metricLabel: "Delivery",
  },
  {
    title: "Expansion Roadmap",
    description:
      "Phased launch sequencing with city-tier prioritization and investment-stage milestone planning.",
    icon: Map,
    accent: "from-[#f59e0b] to-[#fbbf24]",
    accentGlow: "rgba(245,158,11,0.15)",
    metric: "100%",
    metricLabel: "Board-Ready",
  },
];

const bottomRowCards = [
  {
    title: "Revenue Radar",
    description:
      "Detect revenue leakage, track sell-through rates, and identify underperforming territories in real-time.",
    icon: TrendingUp,
    accent: "from-[#ec4899] to-[#f472b6]",
    accentGlow: "rgba(236,72,153,0.15)",
    metric: "₹18L",
    metricLabel: "Saved Monthly",
  },
  {
    title: "Risk Assessment",
    description:
      "Regulatory compliance checks, market saturation analysis, and risk-adjusted opportunity scoring.",
    icon: ShieldCheck,
    accent: "from-[#8b5cf6] to-[#a78bfa]",
    accentGlow: "rgba(139,92,246,0.15)",
    metric: "47",
    metricLabel: "Risk Factors",
  },
  {
    title: "Launch Sequencer",
    description:
      "Automated go-to-market timelines with dependency mapping and resource allocation optimization.",
    icon: Zap,
    accent: "from-[#e85d04] to-[#ff7a1a]",
    accentGlow: "rgba(232,93,4,0.15)",
    metric: "2x",
    metricLabel: "Faster Launch",
  },
  {
    title: "Channel Strategy",
    description:
      "Omnichannel mix optimization across D2C, marketplace, modern trade, and general trade channels.",
    icon: Globe,
    accent: "from-[#06b6d4] to-[#22d3ee]",
    accentGlow: "rgba(6,182,212,0.15)",
    metric: "4+",
    metricLabel: "Channels",
  },
  {
    title: "Retailer Network",
    description:
      "Intelligent retailer profiling, onboarding workflows, and performance benchmarking dashboards.",
    icon: Users,
    accent: "from-[#10b981] to-[#34d399]",
    accentGlow: "rgba(16,185,129,0.15)",
    metric: "500+",
    metricLabel: "Retailers",
  },
];

interface CardData {
  title: string;
  description: string;
  icon: React.ElementType;
  accent: string;
  accentGlow: string;
  metric: string;
  metricLabel: string;
}

function Card({ card }: { card: CardData }) {
  const Icon = card.icon;
  return (
    <div
      className="group relative flex-shrink-0 w-[340px] mt-9 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.03]"
      style={{
        background:
          "linear-gradient(135deg, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.85) 100%)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: `0 8px 32px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.06)`,
      }}
    >
      {/* Glow accent on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${card.accentGlow}, transparent 70%)`,
        }}
      />

      {/* Top gradient line */}
      <div
        className={`h-[2px] w-full bg-gradient-to-r ${card.accent} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
      />

      <div className="relative p-6">
        {/* Icon + Metric row */}
        <div className="flex items-start justify-between mb-4">
          <div
            className={`w-10 h-10 rounded-xl bg-gradient-to-br ${card.accent} flex items-center justify-center shadow-lg`}
            style={{
              boxShadow: `0 4px 16px ${card.accentGlow}`,
            }}
          >
            <Icon className="w-5 h-5 text-white" />
          </div>
          <div className="text-right">
            <div
              className={`text-xl font-black bg-gradient-to-r ${card.accent} bg-clip-text text-transparent`}
            >
              {card.metric}
            </div>
            <div className="text-[10px] text-white/40 font-medium uppercase tracking-wider">
              {card.metricLabel}
            </div>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-white font-bold text-lg mb-2 tracking-tight">
          {card.title}
        </h3>

        {/* Description */}
        <p className="text-white/45 text-sm leading-relaxed font-medium">
          {card.description}
        </p>

        {/* Bottom accent dots */}
        <div className="flex items-center gap-1.5 mt-5">
          <div
            className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${card.accent}`}
          />
          <div className="w-1 h-1 rounded-full bg-white/15" />
          <div className="w-1 h-1 rounded-full bg-white/10" />
        </div>
      </div>
    </div>
  );
}

export default function ScrollCards() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Top row moves right as you scroll down, bottom row moves left
  const topRowX = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  const bottomRowX = useTransform(scrollYProgress, [0, 1], [200, -200]);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden py-4"
      style={{ height: "620px" }}
    >
      {/* Edge fade masks */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#FDFBF7] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#FDFBF7] to-transparent" />

      {/* Top row — moves right on scroll */}
      <motion.div
        className="flex gap-6 mb-6 will-change-transform"
        style={{ x: topRowX }}
      >
        {/* Duplicate for seamless coverage */}
        {[...topRowCards, ...topRowCards].map((card, i) => (
          <Card key={`top-${i}`} card={card} />
        ))}
      </motion.div>

      {/* Bottom row — moves left on scroll (opposite direction) */}
      <motion.div
        className="flex gap-6 will-change-transform"
        style={{ x: bottomRowX }}
      >
        {[...bottomRowCards, ...bottomRowCards].map((card, i) => (
          <Card key={`bottom-${i}`} card={card} />
        ))}
      </motion.div>
    </div>
  );
}
