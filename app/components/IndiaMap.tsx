"use client";

import React, { useState, useRef } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Shield, TrendingUp, Users, ArrowUpRight } from "lucide-react";

// Real-world coordinates of major cities where Pulse "monitors" market data
const markerData = [
  {
    city: "Delhi (Connaught Place)",
    pincode: "110001",
    coordinates: [77.2167, 28.6139] as [number, number],
    viability: 96,
    category: "Premium Cosmetics",
    distributors: 24,
    revenue: "₹4.8 Cr/mo",
    growth: "+18%",
  },
  {
    city: "Mumbai (Bandra West)",
    pincode: "400050",
    coordinates: [72.84, 19.06] as [number, number],
    viability: 94,
    category: "Organic Gourmet Foods",
    distributors: 19,
    revenue: "₹6.2 Cr/mo",
    growth: "+22%",
  },
  {
    city: "Bengaluru (Indiranagar)",
    pincode: "560038",
    coordinates: [77.64, 12.97] as [number, number],
    viability: 91,
    category: "Health & Wellness",
    distributors: 15,
    revenue: "₹3.9 Cr/mo",
    growth: "+14%",
  },
  {
    city: "Chennai (Nungambakkam)",
    pincode: "600034",
    coordinates: [80.24, 13.06] as [number, number],
    viability: 86,
    category: "Apparel & Athleisure",
    distributors: 12,
    revenue: "₹2.7 Cr/mo",
    growth: "+9%",
  },
  {
    city: "Hyderabad (Banjara Hills)",
    pincode: "500034",
    coordinates: [78.44, 17.41] as [number, number],
    viability: 88,
    category: "Beverages & Cold Brews",
    distributors: 14,
    revenue: "₹3.2 Cr/mo",
    growth: "+12%",
  },
  {
    city: "Kolkata (Park Street)",
    pincode: "700016",
    coordinates: [88.35, 22.55] as [number, number],
    viability: 82,
    category: "Packaged Snacks",
    distributors: 11,
    revenue: "₹1.8 Cr/mo",
    growth: "+7%",
  },
  {
    city: "Jaipur (C-Scheme)",
    pincode: "302001",
    coordinates: [75.79, 26.91] as [number, number],
    viability: 85,
    category: "Heritage & Ethnic Wear",
    distributors: 8,
    revenue: "₹1.5 Cr/mo",
    growth: "+15%",
  },
  {
    city: "Pune (Koregaon Park)",
    pincode: "411001",
    coordinates: [73.89, 18.53] as [number, number],
    viability: 89,
    category: "Fitness & Supplements",
    distributors: 13,
    revenue: "₹2.9 Cr/mo",
    growth: "+16%",
  },
];

export default function IndiaMap() {
  const [hoveredMarker, setHoveredMarker] = useState<typeof markerData[0] | null>(null);
  const [activeTab, setActiveTab] = useState<"viability" | "distributors" | "revenue">("viability");
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (marker: typeof markerData[0], event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (containerRect) {
      setTooltipPos({
        x: rect.left - containerRect.left + rect.width / 2,
        y: rect.top - containerRect.top - 8,
      });
    }
    setHoveredMarker(marker);
  };

  return (
    <div ref={containerRef} className="w-full flex flex-col items-center relative">
      {/* 3 Interactive Filter Tags in place of legacy pill tags */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-10 z-20">
        <button
          onClick={() => setActiveTab("viability")}
          className={`px-6 py-2 rounded-full border text-[14px] font-semibold transition-all duration-300 ${
            activeTab === "viability"
              ? "bg-[#5c6ae4] text-white border-[#5c6ae4] shadow-lg shadow-[#5c6ae4]/20"
              : "border-[rgba(92,106,228,0.2)] text-[#5c6ae4] hover:bg-[#5c6ae4]/5"
          }`}
        >
          Viability Score
        </button>
        <button
          onClick={() => setActiveTab("distributors")}
          className={`px-6 py-2 rounded-full border text-[14px] font-semibold transition-all duration-300 ${
            activeTab === "distributors"
              ? "bg-[#5c6ae4] text-white border-[#5c6ae4] shadow-lg shadow-[#5c6ae4]/20"
              : "border-[rgba(92,106,228,0.2)] text-[#5c6ae4] hover:bg-[#5c6ae4]/5"
          }`}
        >
          Active Distributors
        </button>
        <button
          onClick={() => setActiveTab("revenue")}
          className={`px-6 py-2 rounded-full border text-[14px] font-semibold transition-all duration-300 ${
            activeTab === "revenue"
              ? "bg-[#5c6ae4] text-white border-[#5c6ae4] shadow-lg shadow-[#5c6ae4]/20"
              : "border-[rgba(92,106,228,0.2)] text-[#5c6ae4] hover:bg-[#5c6ae4]/5"
          }`}
        >
          Revenue Mapped
        </button>
      </div>

      {/* Centered Map Container (Bigger and direct on section background) */}
      <div 
        className="w-full max-w-[1000px] h-[660px] flex items-center justify-center relative transform-gpu"
        style={{
          perspective: 1200,
          transformStyle: "preserve-3d",
          transform: "rotateX(20deg) rotateY(-2deg) rotateZ(-2deg)",
        }}
      >
        <div className="w-[820px] h-[660px] relative select-none">
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{
              scale: 1140,
              center: [79.9, 22.4], // Perfectly adjusted to prevent above/right clipping
            }}
            width={820}
            height={660}
            style={{
              filter: "drop-shadow(0 20px 15px rgba(15, 23, 42, 0.25)) drop-shadow(0 30px 25px rgba(15, 23, 42, 0.15))",
            }}
          >
            {/* 3D Extrusion Bottom Layer */}
            <g transform="translate(0, 8)">
              <Geographies geography="/india_states_gist.json">
                {({ geographies }: { geographies: any[] }) =>
                  geographies.map((geo: any) => (
                    <Geography
                      key={`${geo.rsmKey}-extrusion`}
                      geography={geo}
                      style={{
                        default: {
                          fill: "#090d16", // Solid dark graphite
                          stroke: "#090d16",
                          strokeWidth: 1.0,
                          outline: "none",
                        },
                        hover: {
                          fill: "#090d16",
                          stroke: "#090d16",
                          outline: "none",
                        },
                      }}
                    />
                  ))
                }
              </Geographies>
            </g>

            {/* Top Solid Layer (Dark, not transparent) */}
            <g transform="translate(0, 0)">
              <Geographies geography="/india_states_gist.json">
                {({ geographies }: { geographies: any[] }) =>
                  geographies.map((geo: any) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      style={{
                        default: {
                          fill: "#1e293b", // Solid dark slate
                          stroke: "rgba(255, 255, 255, 0.12)", // Clean border outline
                          strokeWidth: 0.8,
                          outline: "none",
                          transition: "all 300ms ease",
                        },
                        hover: {
                          fill: "#2d3748", // Lighter slate on hover
                          stroke: "#5c6ae4", // Pulse branding blue outline on hover
                          strokeWidth: 1.2,
                          outline: "none",
                          transition: "all 300ms ease",
                        },
                        pressed: {
                          outline: "none",
                        },
                      }}
                    />
                  ))
                }
              </Geographies>
            </g>

            {/* City Markers */}
            {markerData.map((marker, idx) => {
              const isSelected = hoveredMarker?.city === marker.city;

              // Core color matching active filter tag
              let coreColor = "fill-[#ff7a1a]";
              let glowColor = "#ff7a1a";
              if (activeTab === "distributors") {
                coreColor = "fill-[#22d3ee]";
                glowColor = "#22d3ee";
              } else if (activeTab === "revenue") {
                coreColor = "fill-emerald-400";
                glowColor = "#34d399";
              }

              return (
                <Marker key={idx} coordinates={marker.coordinates}>
                  <g
                    onMouseEnter={(e) => handleMouseEnter(marker, e)}
                    onMouseLeave={() => setHoveredMarker(null)}
                    className="cursor-pointer"
                  >
                    {/* Animated outer glow circle */}
                    <circle
                      r={isSelected ? 16 : 10}
                      className="animate-ping origin-center opacity-30"
                      style={{
                        fill: glowColor,
                        animationDuration: "2s",
                      }}
                    />
                    {/* Center solid indicator dot */}
                    <circle
                      r={isSelected ? 9 : 6}
                      className={`${coreColor} transition-all duration-300`}
                      stroke="rgba(255,255,255,0.8)"
                      strokeWidth={isSelected ? 1.5 : 0.8}
                    />
                  </g>
                </Marker>
              );
            })}
          </ComposableMap>
        </div>
      </div>

      {/* Floating Popbox Tooltip right above the hovered hub */}
      <AnimatePresence>
        {hoveredMarker && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 pointer-events-none rounded-xl p-4 shadow-2xl flex flex-col gap-2 min-w-[260px] border border-white/10 backdrop-blur-md"
            style={{
              left: tooltipPos.x,
              top: tooltipPos.y,
              transform: "translate(-50%, -100%)",
              background: "linear-gradient(135deg, rgba(15,23,42,0.95) 0%, rgba(30,41,59,0.9) 100%)",
            }}
          >
            {/* Top Indicator Line color-coded */}
            <div 
              className={`h-[3px] w-1/3 rounded-full mb-1 ${
                activeTab === "viability" 
                  ? "bg-[#ff7a1a]" 
                  : activeTab === "distributors" 
                    ? "bg-[#22d3ee]" 
                    : "bg-emerald-400"
              }`} 
            />

            {/* City Title */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#5c6ae4]" />
                <span className="text-white/40 text-[9px] font-bold uppercase tracking-wider">
                  PINCODE {hoveredMarker.pincode}
                </span>
              </div>
              <h5 className="text-white font-extrabold text-sm mt-0.5 leading-tight">
                {hoveredMarker.city.split(" (")[0]}
              </h5>
              <span className="text-white/40 text-[9px] font-semibold">
                {hoveredMarker.city.split(" (")[1]?.replace(")", "")}
              </span>
            </div>

            <div className="h-px bg-white/5 my-1" />

            {/* Metric Displays */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-0.5">
                <span className="text-white/40 text-[8px] font-bold uppercase tracking-wider">
                  Viability Score
                </span>
                <span className="text-white font-black text-sm">
                  {hoveredMarker.viability}/100
                </span>
              </div>

              <div className="flex flex-col gap-0.5">
                <span className="text-white/40 text-[8px] font-bold uppercase tracking-wider">
                  Est. Category Sales
                </span>
                <span className="text-white font-black text-sm flex items-center gap-1">
                  {hoveredMarker.revenue}
                  <span className="text-emerald-400 text-[8px] font-semibold">
                    {hoveredMarker.growth}
                  </span>
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-1">
              <div className="flex flex-col gap-0.5">
                <span className="text-white/40 text-[8px] font-bold uppercase tracking-wider">
                  Top Brand Category
                </span>
                <span className="text-white font-semibold text-[10px] truncate">
                  {hoveredMarker.category}
                </span>
              </div>

              <div className="flex flex-col gap-0.5">
                <span className="text-white/40 text-[8px] font-bold uppercase tracking-wider">
                  Distributor Network
                </span>
                <span className="text-cyan-400 font-extrabold text-[10px]">
                  {hoveredMarker.distributors} Active Vetted
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
