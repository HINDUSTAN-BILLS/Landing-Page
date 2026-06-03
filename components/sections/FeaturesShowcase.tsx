"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  BarChart3,
  MapPin,
  Zap,
  Users,
  TrendingDown,
  FileText,
  ChevronRight,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  Cell,
  LineChart,
  Line,
  Area,
  AreaChart,
} from "recharts";

const features = [
  {
    id: 1,
    title: "Online-to-Offline Recognition Multiplier",
    subtitle: "Calculate Your True Brand Impact Across Channels",
    description:
      "Your online presence isn't just digital—it's your offline conversion engine. Our proprietary calculator measures how digital brand recognition translates into in-store purchases.",
    points: [
      "Combines online awareness metrics with offline transaction data",
      "Shows exactly which markets have highest conversion potential",
      "Brands with strong O2O recognition see 3.2x higher conversion rates",
    ],
    icon: BarChart3,
    color: "#e85d04",
    chart: "bar",
  },
  {
    id: 2,
    title: "Pincode Viability Score",
    subtitle: "Know Exactly Where to Launch—Down to the Pincode",
    description:
      "Every pincode tells a story. We rate each market on a 0-100 scale using three proprietary dimensions: velocity, density, and competitive intensity.",
    points: [
      "Velocity: Current category sales momentum and growth trajectory",
      "Density: Concentration of your target consumers in the area",
      "Competitive Intensity: Market crowding and white space identification",
    ],
    icon: MapPin,
    color: "#7366fe",
    chart: "radial",
  },
  {
    id: 3,
    title: "Scheme Simulator",
    subtitle: "Predict Distributor Discount Outcomes Before You Commit",
    description:
      "The biggest mistake in offline expansion? Guessing at distributor schemes. Our AI simulates discount structures using historical category data to show ROI before you spend.",
    points: [
      "Margin Impact Analysis: See how different discounts affect unit economics",
      "Uplift Prediction: Predict sales volume increases from category data",
      "ROI Calculator: Understand payback periods and break-even timelines",
    ],
    icon: Zap,
    color: "#e85d04",
    chart: "area",
  },
  {
    id: 4,
    title: "Distributor Appointment Co-pilot",
    subtitle: "Match with the Right Distributors—Financial Structures Included",
    description:
      "Finding distributors is easy. Finding the right distributors with optimal financial arrangements is what separates successful expansions from expensive failures.",
    points: [
      "Pincode-Specific Recommendations with curated distributor list",
      "Performance Scoring: Historical performance with similar categories",
      "Negotiation Briefs with data-backed talking points for every meeting",
    ],
    icon: Users,
    color: "#7366fe",
    chart: "bar",
  },
  {
    id: 5,
    title: "Revenue Leakage Detection Engine",
    subtitle: "Find the Holes in Your Revenue Bucket Before They Drain Runway",
    description:
      "Most D2C brands are bleeding revenue in ways they can't see. Our AI analyzes your channel mix, pricing architecture, and market coverage to surface every leak.",
    points: [
      "Channel Conflict: Online pricing cannibalizing offline sales",
      "Coverage Gaps: High-potential markets with limited presence",
      "Timing Errors: Markets where you're too early or too late",
    ],
    icon: TrendingDown,
    color: "#e85d04",
    chart: "area",
  },
  {
    id: 6,
    title: "Board-Ready Playbook Generator",
    subtitle: "From Analysis to Action: Your 90-Day Execution Roadmap",
    description:
      "All intelligence in the world means nothing if it can't be executed. Our system synthesizes everything into a comprehensive, board-ready playbook ready in 48 hours.",
    points: [
      "Market Sequencing Plan with prioritized launch order and rationale",
      "Distributor Roadmap showing appointment sequence and target terms",
      "KPI Dashboard with success metrics and milestone tracking",
    ],
    icon: FileText,
    color: "#7366fe",
    chart: "bar",
  },
];

// Chart data
const barData = [
  { city: "Mumbai", score: 94, potential: 88 },
  { city: "Delhi", score: 88, potential: 92 },
  { city: "Bangalore", score: 81, potential: 76 },
  { city: "Pune", score: 75, potential: 84 },
  { city: "Hyderabad", score: 68, potential: 71 },
];

const radialData = [
  { name: "Velocity", value: 87, fill: "#e85d04" },
  { name: "Density", value: 72, fill: "#7366fe" },
  { name: "Competition", value: 58, fill: "#ff7a1a" },
];

const areaData = [
  { month: "Jan", revenue: 42, projected: 48 },
  { month: "Feb", revenue: 38, projected: 52 },
  { month: "Mar", revenue: 55, projected: 58 },
  { month: "Apr", revenue: 63, projected: 68 },
  { month: "May", revenue: 71, projected: 75 },
  { month: "Jun", revenue: 88, projected: 90 },
];

function FeatureChart({ type, color }: { type: string; color: string }) {
  if (type === "bar") {
    return (
      <div className="w-full h-52">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={barData} barGap={4}>
            <XAxis dataKey="city" tick={{ fontSize: 10, fill: "#0f172a80" }} axisLine={false} tickLine={false} />
            <YAxis hide />
            <Tooltip
              contentStyle={{ background: "#0f172a", border: "none", borderRadius: "12px", color: "white", fontSize: 12 }}
              cursor={{ fill: "rgba(0,0,0,0.04)" }}
            />
            <Bar dataKey="score" name="Viability Score" radius={[6, 6, 0, 0]} fill={color} opacity={0.9} />
            <Bar dataKey="potential" name="Growth Potential" radius={[6, 6, 0, 0]} fill={color} opacity={0.3} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }

  if (type === "radial") {
    return (
      <div className="w-full h-52 flex items-center justify-center">
        <div className="relative">
          <RadialBarChart
            width={200}
            height={200}
            cx={100}
            cy={100}
            innerRadius={35}
            outerRadius={90}
            data={radialData}
            startAngle={90}
            endAngle={-270}
          >
            <RadialBar dataKey="value" cornerRadius={8} background={{ fill: "#f0ece4" }}>
              {radialData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </RadialBar>
          </RadialBarChart>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-black text-[#0f172a]">94</div>
              <div className="text-xs text-[#0f172a]/50">Score</div>
            </div>
          </div>
        </div>
        <div className="ml-4 space-y-3">
          {radialData.map((d) => (
            <div key={d.name} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ background: d.fill }} />
              <div>
                <div className="text-xs font-bold text-[#0f172a]">{d.name}</div>
                <div className="text-xs text-[#0f172a]/50">{d.value}/100</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-52">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={areaData}>
          <defs>
            <linearGradient id="gradRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={color} stopOpacity={0.3} />
              <stop offset="95%" stopColor={color} stopOpacity={0} />
            </linearGradient>
            <linearGradient id="gradProjected" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#7366fe" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#7366fe" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" tick={{ fontSize: 10, fill: "#0f172a80" }} axisLine={false} tickLine={false} />
          <YAxis hide />
          <Tooltip
            contentStyle={{ background: "#0f172a", border: "none", borderRadius: "12px", color: "white", fontSize: 12 }}
          />
          <Area type="monotone" dataKey="revenue" name="Actual Revenue" stroke={color} strokeWidth={2} fill="url(#gradRevenue)" />
          <Area type="monotone" dataKey="projected" name="AI Projected" stroke="#7366fe" strokeWidth={2} strokeDasharray="5 5" fill="url(#gradProjected)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default function FeaturesShowcase() {
  const [activeFeature, setActiveFeature] = useState(0);
  const feature = features[activeFeature];
  const Icon = feature.icon;

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#fdfbf7] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#7366fe]/4 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7366fe]/10 border border-[#7366fe]/20 mb-5">
            <span className="text-xs font-bold text-[#7366fe] uppercase tracking-widest">
              6 Powerful Modules
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0f172a] mb-4 tracking-tight">
            Everything you need to{" "}
            <span className="gradient-text">expand with precision</span>
          </h2>
          <p className="text-lg text-[#0f172a]/55 max-w-2xl mx-auto">
            Six powerful AI modules working together to transform your GTM strategy from guesswork to precision
          </p>
        </motion.div>

        {/* Feature tabs + content */}
        <div className="grid lg:grid-cols-5 gap-6 items-start">
          {/* Left: Feature list */}
          <div className="lg:col-span-2 space-y-2">
            {features.map((f, i) => {
              const FIcon = f.icon;
              const isActive = i === activeFeature;
              return (
                <motion.button
                  key={f.id}
                  id={`feature-tab-${f.id}`}
                  onClick={() => setActiveFeature(i)}
                  className={`w-full text-left px-4 py-4 rounded-2xl border transition-all duration-300 group flex items-start gap-3 ${
                    isActive
                      ? "bg-white border-[#f0ece4] shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
                      : "bg-transparent border-transparent hover:bg-white/60 hover:border-[#f0ece4]"
                  }`}
                  whileHover={{ x: 2 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${
                      isActive ? "shadow-md" : "opacity-50 group-hover:opacity-80"
                    }`}
                    style={{ background: isActive ? f.color + "18" : "transparent" }}
                  >
                    <FIcon className="w-5 h-5" style={{ color: f.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`text-sm font-bold truncate transition-colors ${isActive ? "text-[#0f172a]" : "text-[#0f172a]/60"}`}>
                      {f.title}
                    </div>
                    {isActive && (
                      <motion.div
                        className="text-xs mt-0.5 font-medium"
                        style={{ color: f.color }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        {f.subtitle}
                      </motion.div>
                    )}
                  </div>
                  {isActive && (
                    <ChevronRight className="w-4 h-4 flex-shrink-0 mt-1" style={{ color: f.color }} />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Right: Active feature detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFeature}
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <div className="bg-white rounded-3xl border border-[#f0ece4] shadow-[0_8px_48px_rgba(0,0,0,0.07)] overflow-hidden">
                {/* Header */}
                <div className="p-6 sm:p-8 border-b border-[#f0ece4]">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm"
                      style={{ background: feature.color + "18" }}
                    >
                      <Icon className="w-6 h-6" style={{ color: feature.color }} />
                    </div>
                    <div>
                      <div
                        className="text-xs font-bold uppercase tracking-widest mb-0.5"
                        style={{ color: feature.color }}
                      >
                        Module {feature.id}
                      </div>
                      <h3 className="text-lg sm:text-xl font-black text-[#0f172a]">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-[#0f172a]/60 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Chart visualization */}
                <div className="px-6 sm:px-8 py-5 bg-[#fafaf8] border-b border-[#f0ece4]">
                  <div className="text-xs font-bold uppercase tracking-widest text-[#0f172a]/30 mb-4">
                    Live Data Preview
                  </div>
                  <FeatureChart type={feature.chart} color={feature.color} />
                </div>

                {/* Points */}
                <div className="p-6 sm:p-8">
                  <div className="space-y-3">
                    {feature.points.map((point, i) => (
                      <motion.div
                        key={i}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ background: feature.color + "20" }}
                        >
                          <div className="w-1.5 h-1.5 rounded-full" style={{ background: feature.color }} />
                        </div>
                        <p className="text-sm text-[#0f172a]/70 leading-relaxed">{point}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
