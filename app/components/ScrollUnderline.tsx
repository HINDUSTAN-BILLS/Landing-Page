"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

interface ScrollUnderlineProps {
  children: React.ReactNode;
  color?: string;
  variant?: "scribble-underline" | "circle" | "zigzag";
  className?: string;
}

export default function ScrollUnderline({
  children,
  color = "#5a67d8",
  variant = "scribble-underline",
  className = "",
}: ScrollUnderlineProps) {
  const ref = useRef<HTMLSpanElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end 95%", "end 55%"],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  // SVG paths scaled within a 100x100 viewBox so they can wrap the whole text if needed.
  // We use preserveAspectRatio="none" to stretch them exactly to the word's bounding box.
  const paths = {
    "scribble-underline": "M -5 90 C 20 105, 30 75, 45 95 C 40 105, 65 110, 80 85 C 85 70, 95 105, 105 85",
    "zigzag": "M -2 85 Q 10 65 18 95 T 35 70 T 50 100 T 68 75 T 82 105 T 102 80",
    "circle": "M 10 30 C 40 -5, 85 -5, 95 35 C 110 75, 75 115, 20 95 C -10 80, -5 20, 30 10",
  };

  const isCircle = variant === "circle";

  return (
    <span ref={ref} className={`relative inline-block whitespace-nowrap ${className}`}>
      {children}
      <motion.svg
        className="absolute left-0 w-full overflow-visible pointer-events-none"
        style={{
          // For circle, we want it to cover the entire text block. For underlines, stick to the bottom.
          top: isCircle ? "-10%" : "auto",
          bottom: isCircle ? "auto" : "-10%",
          height: isCircle ? "120%" : "30%",
          width: isCircle ? "110%" : "105%",
          marginLeft: isCircle ? "-5%" : "-2.5%",
          zIndex: 0,
        }}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <motion.path
          d={paths[variant]}
          fill="none"
          stroke={color}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ pathLength }}
          vectorEffect="non-scaling-stroke"
        />
      </motion.svg>
    </span>
  );
}
