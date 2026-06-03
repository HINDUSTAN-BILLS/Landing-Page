"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/* ═══════════════════════════════════════════════════════════════════════════
   Metric data
   ═══════════════════════════════════════════════════════════════════════════ */

const metrics = [
  { label: "Markets Analyzed", value: "156", change: "+12" },
  { label: "Revenue Opportunity", value: "$24.8M", change: "+18%" },
  { label: "Avg Viability Score", value: "87.3%", change: "+4.2%" },
  { label: "Launch Ready", value: "23", change: "+5" },
];

/* ═══════════════════════════════════════════════════════════════════════════
   Main Component
   ═══════════════════════════════════════════════════════════════════════════ */

export default function HeroDashboard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  // Mouse position for 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for the tilt
  const springConfig = { stiffness: 150, damping: 25 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), springConfig);

  // Track mouse relative to container
  function handleMouseMove(e: React.MouseEvent) {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  // Trigger entrance animation when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsInView(true); },
      { threshold: 0.2 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[1280px] mx-auto"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "2000px" }}
    >
      {/* ── Dramatic ambient glow (behind everything) ── */}
      <div className="absolute -inset-20 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-[#7366fe]/20 blur-[150px]" />
        <div className="absolute top-[30%] right-[10%] w-[400px] h-[400px] rounded-full bg-[#5a52cc]/15 blur-[120px]" />
        <div className="absolute bottom-[20%] left-[15%] w-[300px] h-[300px] rounded-full bg-[#9747FF]/10 blur-[100px]" />
      </div>

      {/* ── 3D Tilting Dashboard Card ── */}
      <motion.div
        className="relative z-10 rounded-[20px] overflow-hidden shadow-[0_32px_120px_rgba(115,102,254,0.25),0_8px_32px_rgba(0,0,0,0.3),0_1px_2px_rgba(0,0,0,0.2)]"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Card inner */}
        <div className="relative h-[700px] bg-gradient-to-br from-[#12101f] via-[#171530] to-[#0d0b1a] border border-white/[0.08] rounded-[20px] overflow-hidden">

          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(115,102,254,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(115,102,254,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

          {/* Scanning beam animation */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(180deg, transparent 0%, rgba(115,102,254,0.04) 50%, transparent 100%)",
              backgroundSize: "100% 120px",
              animation: "scanBeam 6s ease-in-out infinite",
            }}
          />

          {/* Noise texture overlay */}
          <div className="absolute inset-0 opacity-[0.015]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }} />

          {/* ── Dashboard Content ── */}
          <div className="relative z-10 flex flex-col h-full p-8">

            {/* Top bar — window chrome */}
            <motion.div
              className="flex items-center justify-between mb-8"
              initial={{ opacity: 0, y: -10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="flex items-center gap-2.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>

              {/* URL bar */}
              <div className="flex items-center gap-2 px-5 py-2 rounded-lg bg-white/[0.04] border border-white/[0.06] min-w-[300px]">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="text-white/20">
                  <path d="M8 1a5 5 0 0 0-5 5v1H2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-1V6a5 5 0 0 0-5-5zm-3 6V6a3 3 0 1 1 6 0v1H5z" fill="currentColor" />
                </svg>
                <span className="text-[11px] text-white/25 font-mono">app.pulse.ai/dashboard</span>
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                <div className="w-2 h-2 rounded-full bg-[#28c840] animate-pulse" />
                <span className="text-[10px] text-white/40 font-mono tracking-wider">LIVE</span>
              </div>
            </motion.div>

            {/* Header */}
            <motion.div
              className="flex items-end justify-between mb-8"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.45, duration: 0.6 }}
            >
              <div>
                <p className="text-[#7366fe]/60 text-[10px] font-mono uppercase tracking-[4px] mb-2">Pulse Intelligence</p>
                <h3 className="text-white text-[24px] font-bold leading-tight tracking-[-0.02em]">Market Expansion Overview</h3>
              </div>
              <div className="flex gap-1.5">
                {["7D", "30D", "90D"].map((t, i) => (
                  <div key={t} className={`px-3 py-1.5 rounded-md text-[10px] font-semibold transition-all ${i === 1 ? "bg-[#7366fe] text-white shadow-[0_0_20px_rgba(115,102,254,0.3)]" : "bg-white/[0.04] text-white/30 hover:bg-white/[0.06]"}`}>
                    {t}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Metric cards — staggered entrance */}
            <div className="grid grid-cols-4 gap-3 mb-6">
              {metrics.map((m, i) => (
                <motion.div
                  key={i}
                  className="group relative rounded-xl p-5 overflow-hidden"
                  initial={{ opacity: 0, y: 25, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ delay: 0.6 + i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Animated gradient border */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-px">
                    <div className="absolute inset-px rounded-[11px] bg-[#14122a]" />
                  </div>

                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: "linear-gradient(105deg, transparent 40%, rgba(115,102,254,0.06) 50%, transparent 60%)" }}
                  />

                  <div className="relative z-10">
                    <p className="text-white/30 text-[10px] mb-2.5 font-medium uppercase tracking-[1px]">{m.label}</p>
                    <p className="text-white text-[28px] font-bold leading-none mb-2 tracking-[-0.02em]">{m.value}</p>
                    <span className="text-[#28c840] text-[11px] font-semibold flex items-center gap-1">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 2L8 6H2L5 2Z" fill="currentColor" /></svg>
                      {m.change}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Chart area */}
            <motion.div
              className="flex-1 relative rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              {/* Chart border */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-px">
                <div className="absolute inset-px rounded-[11px] bg-[#14122a]/80" />
              </div>

              <div className="relative z-10 p-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-white/35 text-[11px] font-medium tracking-wide">Expansion Velocity</p>
                  <div className="flex gap-5">
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#7366fe]" />
                      <span className="text-white/25 text-[10px]">Markets</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#28c840]" />
                      <span className="text-white/25 text-[10px]">Revenue</span>
                    </div>
                  </div>
                </div>

                <div className="flex-1 relative">
                  <svg className="w-full h-full" viewBox="0 0 800 220" preserveAspectRatio="none">
                    {/* Grid lines */}
                    {[0, 1, 2, 3].map((i) => (
                      <line key={i} x1="0" y1={55 * i + 10} x2="800" y2={55 * i + 10} stroke="white" strokeWidth="0.5" opacity="0.03" />
                    ))}

                    {/* Revenue filled area */}
                    <defs>
                      <linearGradient id="heroGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#7366fe" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#7366fe" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <motion.path
                      d="M0 180 Q50 170 100 155 T200 130 T300 100 T400 85 T500 60 T600 40 T700 25 T800 15 L800 220 L0 220Z"
                      fill="url(#heroGrad)"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 1.5, duration: 1 }}
                    />

                    {/* Main chart line — self-drawing */}
                    <motion.path
                      d="M0 180 Q50 170 100 155 T200 130 T300 100 T400 85 T500 60 T600 40 T700 25 T800 15"
                      fill="none"
                      stroke="#7366fe"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={isInView ? { pathLength: 1, opacity: 0.9 } : {}}
                      transition={{ delay: 1.3, duration: 1.5, ease: "easeOut" }}
                    />

                    {/* Secondary line */}
                    <motion.path
                      d="M0 195 Q50 190 100 180 T200 165 T300 145 T400 130 T500 110 T600 90 T700 75 T800 60"
                      fill="none"
                      stroke="#28c840"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeDasharray="5 4"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={isInView ? { pathLength: 1, opacity: 0.4 } : {}}
                      transition={{ delay: 1.6, duration: 1.5, ease: "easeOut" }}
                    />

                    {/* End-of-line pulse */}
                    <motion.circle
                      cx="800" cy="15" r="4" fill="#7366fe"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 2.8 }}
                    />
                    <motion.circle
                      cx="800" cy="15" r="4" fill="#7366fe" opacity="0.4"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 0.4 } : {}}
                      transition={{ delay: 2.8 }}
                    >
                      <animate attributeName="r" values="4;14;4" dur="2.5s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.4;0;0.4" dur="2.5s" repeatCount="indefinite" />
                    </motion.circle>
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* ── Floating UI elements (break out of the card) ── */}

      {/* Floating notification — top right */}
      <motion.div
        className="absolute -top-6 -right-8 z-20 bg-[#14122a] border border-white/[0.1] rounded-xl px-4 py-3 shadow-[0_8px_40px_rgba(0,0,0,0.4)] backdrop-blur-md"
        initial={{ opacity: 0, y: 20, x: -10 }}
        animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
        transition={{ delay: 1.8, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#7366fe]/20 flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="#7366fe"><path d="M8 0l2.5 5 5.5.8-4 3.9.9 5.3L8 12.5 3.1 15l.9-5.3-4-3.9L5.5 5z" /></svg>
          </div>
          <div>
            <p className="text-white text-[11px] font-semibold">New market identified</p>
            <p className="text-white/30 text-[9px]">Pune West — 91% viability</p>
          </div>
        </div>
      </motion.div>

      {/* Floating badge — bottom left */}
      <motion.div
        className="absolute -bottom-4 -left-6 z-20 bg-[#14122a] border border-[#28c840]/20 rounded-lg px-3.5 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
        initial={{ opacity: 0, y: -15, x: 10 }}
        animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
        transition={{ delay: 2.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#28c840]" />
          <span className="text-[#28c840] text-[11px] font-semibold">Revenue +18% ↑</span>
        </div>
      </motion.div>

      {/* Floating user activity — mid right */}
      <motion.div
        className="absolute top-[45%] -right-10 z-20 bg-[#14122a] border border-white/[0.08] rounded-lg px-3 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 2.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center gap-2">
          <div className="flex -space-x-1.5">
            <div className="w-5 h-5 rounded-full bg-[#7366fe] border-2 border-[#14122a] text-[7px] text-white flex items-center justify-center font-bold">A</div>
            <div className="w-5 h-5 rounded-full bg-[#e85d04] border-2 border-[#14122a] text-[7px] text-white flex items-center justify-center font-bold">R</div>
            <div className="w-5 h-5 rounded-full bg-[#28c840] border-2 border-[#14122a] text-[7px] text-white flex items-center justify-center font-bold">K</div>
          </div>
          <span className="text-white/35 text-[9px]">3 viewing</span>
        </div>
      </motion.div>

      {/* ── CSS Keyframes ── */}
      <style jsx>{`
        @keyframes scanBeam {
          0% { background-position: 0% -120px; }
          50% { background-position: 0% 820px; }
          100% { background-position: 0% -120px; }
        }
      `}</style>
    </div>
  );
}
