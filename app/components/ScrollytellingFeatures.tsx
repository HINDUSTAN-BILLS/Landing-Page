"use client";

import { useRef, useState, type ComponentType } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  type MotionValue,
} from "framer-motion";
import {
  LaunchSequencerVisual,
  RevenueRadarVisual,
  SchemeSimulatorVisual,
  MarketTimeMachineVisual,
  DistributorCopilotVisual,
  IntelligenceThreadsVisual,
} from "./ConceptualVisuals";
import ScrollUnderline from "./ScrollUnderline";

/* ═══════════════════════════════════════════════════════════════════════════
   Feature Data
   ═══════════════════════════════════════════════════════════════════════════ */

interface Feature {
  title: string;
  subtitle: string;
  description: string;
  color: string;
  Screen: ComponentType;
}

const features: Feature[] = [
  {
    title: "Launch Sequencer™",
    subtitle: "Your optimal market entry\nsequence, automated",
    description:
      "Our AI analyzes pincode-level viability to create a prioritized expansion roadmap—launch in the right markets, in the right order.",
    color: "#6c77b0",
    Screen: LaunchSequencerVisual,
  },
  {
    title: "Revenue Radar™",
    subtitle: "Detect hidden revenue\nleakage in real-time",
    description:
      "The Radar scans channel mix and coverage gaps to identify exactly where money is walking out the door—with actionable recovery strategies.",
    color: "#e85d04",
    Screen: RevenueRadarVisual,
  },
  {
    title: "Scheme Simulator™",
    subtitle: "Predict discount outcomes\nbefore you commit capital",
    description:
      "Simulate any margin structure to see predicted ROI and break-even timelines—eliminating guesswork from distributor schemes.",
    color: "#7366fe",
    Screen: SchemeSimulatorVisual,
  },
  {
    title: "Market Time-Machine™",
    subtitle: "Find the precise moment\nto enter each market",
    description:
      "Compare seasonality patterns and competitive timing to see how your market opportunity evolves—avoiding waste and missed windows.",
    color: "#8f4d75",
    Screen: MarketTimeMachineVisual,
  },
  {
    title: "Distributor Copilot™",
    subtitle: "AI-powered distributor\nmatching & negotiation",
    description:
      "Access pincode-specific distributor profiles and recommended financial structures—then generate data-backed negotiation briefs.",
    color: "#7b4096",
    Screen: DistributorCopilotVisual,
  },
  {
    title: "Intelligence Threads™",
    subtitle: "Every data point, one\nstrategic narrative",
    description:
      "Our AI connects retail intelligence, online signals, and competitive dynamics into a coherent market story you can act on.",
    color: "#55269c",
    Screen: IntelligenceThreadsVisual,
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   Feature Text — left column, crossfades on scroll
   ═══════════════════════════════════════════════════════════════════════════ */

function FeatureText({
  feature,
  index,
  scrollYProgress,
  total,
}: {
  feature: Feature;
  index: number;
  scrollYProgress: MotionValue<number>;
  total: number;
}) {
  const seg = 1 / total;
  const start = index * seg;
  const end = start + seg;
  const mid = (start + end) / 2;

  const fadeIn = start + seg * 0.2;
  const fadeOut = end - seg * 0.2;

  const opacity = useTransform(
    scrollYProgress,
    index === 0
      ? [0, fadeIn, fadeOut, end, 1]
      : index === total - 1
        ? [0, start, fadeIn, fadeOut, 1]
        : [0, start, fadeIn, fadeOut, end, 1],
    index === 0
      ? [1, 1, 1, 0, 0]
      : index === total - 1
        ? [0, 0, 1, 1, 1]
        : [0, 0, 1, 1, 0, 0]
  );

  const y = useTransform(
    scrollYProgress,
    index === 0
      ? [0, fadeIn, fadeOut, end, 1]
      : index === total - 1
        ? [0, start, fadeIn, fadeOut, 1]
        : [0, start, fadeIn, fadeOut, end, 1],
    index === 0
      ? [0, 0, 0, -30, -30]
      : index === total - 1
        ? [30, 30, 0, 0, 0]
        : [30, 30, 0, 0, -30, -30]
  );

  return (
    <motion.div
      initial={{ opacity: index === 0 ? 1 : 0 }}
      className="absolute inset-0 flex flex-col justify-center pointer-events-none"
      style={{ opacity, y }}
    >
      {/* Badge */}
      <div
        className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full mb-8 w-fit"
        style={{
          backgroundColor: feature.color + "15",
          border: `1px solid ${feature.color}30`,
        }}
      >
        <div
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: feature.color }}
        />
        <span
          className="text-[11px] font-bold uppercase tracking-[2.5px]"
          style={{ color: feature.color }}
        >
          {feature.title}
        </span>
      </div>

      {/* Subtitle */}
      <h3 className="text-[42px] leading-[1.12] font-bold text-[#333] mb-6 whitespace-pre-line">
        {feature.subtitle}
      </h3>

      {/* Description */}
      <p className="text-[17px] leading-[28px] text-[#333] opacity-70 max-w-[420px]">
        {feature.description}
      </p>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   Feature Mockup — right column, crossfades on scroll
   ═══════════════════════════════════════════════════════════════════════════ */

function FeatureMockup({
  Screen,
  index,
  scrollYProgress,
  total,
}: {
  Screen: ComponentType;
  index: number;
  scrollYProgress: MotionValue<number>;
  total: number;
}) {
  const seg = 1 / total;
  const start = index * seg;
  const end = start + seg;
  const mid = (start + end) / 2;

  const fadeIn = start + seg * 0.15;
  const fadeOut = end - seg * 0.15;

  const opacity = useTransform(
    scrollYProgress,
    index === 0
      ? [0, fadeIn, fadeOut, end, 1]
      : index === total - 1
        ? [0, start, fadeIn, fadeOut, 1]
        : [0, start, fadeIn, fadeOut, end, 1],
    index === 0
      ? [1, 1, 1, 0, 0]
      : index === total - 1
        ? [0, 0, 1, 1, 1]
        : [0, 0, 1, 1, 0, 0]
  );

  const scale = useTransform(
    scrollYProgress,
    index === 0
      ? [0, fadeIn, fadeOut, end, 1]
      : index === total - 1
        ? [0, start, fadeIn, fadeOut, 1]
        : [0, start, fadeIn, fadeOut, end, 1],
    index === 0
      ? [1, 1, 1, 0.95, 0.95]
      : index === total - 1
        ? [0.95, 0.95, 1, 1, 1]
        : [0.95, 0.95, 1, 1, 0.95, 0.95]
  );

  return (
    <motion.div
      initial={{ opacity: index === 0 ? 1 : 0 }}
      className="absolute inset-0 flex items-center justify-center"
      style={{ opacity, scale }}
    >
      <div className="w-full h-full">
        <Screen />
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   Progress Indicator — dots + counter on right edge
   ═══════════════════════════════════════════════════════════════════════════ */

function ProgressDot({
  color,
  start,
  end,
  scrollYProgress,
}: {
  color: string;
  start: number;
  end: number;
  scrollYProgress: MotionValue<number>;
}) {
  const seg = end - start;

  const dotScale = useTransform(
    scrollYProgress,
    [start, start + seg * 0.2, end - seg * 0.2, end],
    [0.6, 1.4, 1.4, 0.6]
  );

  const dotOpacity = useTransform(
    scrollYProgress,
    [start, start + seg * 0.2, end - seg * 0.2, end],
    [0.2, 1, 1, 0.2]
  );

  return (
    <motion.div
      className="w-2 h-2 rounded-full transition-colors"
      style={{
        backgroundColor: color,
        scale: dotScale,
        opacity: dotOpacity,
      }}
    />
  );
}

function ProgressIndicator({
  scrollYProgress,
  activeIndex,
}: {
  scrollYProgress: MotionValue<number>;
  activeIndex: number;
}) {
  return (
    <div className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 z-20">
      {/* Counter */}
      <span className="text-[11px] font-mono text-[#333]/30 mb-1 tabular-nums select-none">
        {String(activeIndex + 1).padStart(2, "0")}
        <span className="text-[#333]/15">
          {" / "}
          {String(features.length).padStart(2, "0")}
        </span>
      </span>

      {/* Dots */}
      {features.map((f, i) => {
        const seg = 1 / features.length;
        return (
          <ProgressDot
            key={i}
            color={f.color}
            start={i * seg}
            end={i * seg + seg}
            scrollYProgress={scrollYProgress}
          />
        );
      })}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   Main Component
   ═══════════════════════════════════════════════════════════════════════════ */

export default function ScrollytellingFeatures() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Track active feature index for the counter
  const [activeIndex, setActiveIndex] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const newIndex = Math.min(
      features.length - 1,
      Math.max(0, Math.floor(latest * features.length))
    );
    setActiveIndex(newIndex);
  });

  return (
    <section 
      className="relative z-20 transition-colors duration-1000 ease-out"
      style={{ backgroundColor: features[activeIndex].color + "05" }}
    >
      {/* ── Section Header ── */}
      <div className="pt-24 pb-16 text-center max-w-[640px] mx-auto px-4">
        <h2 className="text-[56px] leading-[56px] text-[#333] mb-6 font-bold">
          Expansion just got
          <br />
          an <ScrollUnderline variant="circle" color="#5a67d8">upgrade</ScrollUnderline>
        </h2>
        <p className="text-[18px] leading-[24px] text-[#333]">
          From market sequencing to distributor matching, every feature drives
          <br />
          expansion precision and profitability.
        </p>
      </div>

      {/* ── Scrollytelling Container (6 × 100vh) ── */}
      <div
        ref={containerRef}
        className="relative"
        style={{ height: `${features.length * 100}vh` }}
      >
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          {/* Ambient glow behind mockup */}
          <div
            className="absolute pointer-events-none"
            style={{
              right: "5%",
              top: "15%",
              width: "45%",
              height: "70%",
              background: `radial-gradient(ellipse at center, ${features[activeIndex].color}15, transparent 60%)`,
              transition: "background 1s ease",
              filter: "blur(50px)",
            }}
          />

          <div className="relative max-w-[1280px] mx-auto px-16 w-full grid grid-cols-2 gap-20 items-center">
            {/* Left column: Feature text */}
            <div className="relative h-[380px]">
              {features.map((f, i) => (
                <FeatureText
                  key={i}
                  feature={f}
                  index={i}
                  scrollYProgress={scrollYProgress}
                  total={features.length}
                />
              ))}
            </div>

            {/* Right column: Feature mockup */}
            <div className="relative h-[520px] rounded-2xl shadow-[0_16px_80px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.06)] border border-black/[0.06] overflow-hidden bg-white">
              {features.map((f, i) => (
                <FeatureMockup
                  key={i}
                  Screen={f.Screen}
                  index={i}
                  scrollYProgress={scrollYProgress}
                  total={features.length}
                />
              ))}
            </div>
          </div>

          {/* Progress indicator */}
          <ProgressIndicator
            scrollYProgress={scrollYProgress}
            activeIndex={activeIndex}
          />
        </div>
      </div>

      {/* ── Section Footer ── */}
      <div className="pt-16 pb-24 text-center max-w-[640px] mx-auto px-4">
        <h2 className="text-[56px] leading-[56px] text-[#333] mb-6 font-bold">
          Leave every market decision
          <br />
          feeling <ScrollUnderline variant="scribble-underline" color="#7366fe">Pulse-certain</ScrollUnderline>
        </h2>
        <p className="text-[18px] leading-[24px] text-[#333]">
          Pulse connects all your expansion decisions into one unified strategic
          <br />
          narrative. Track every market, every distributor, every decision—and
          <br />
          never second-guess your GTM strategy again.
        </p>
      </div>
    </section>
  );
}
