"use client";

// Abstract conceptual visuals for each feature
// Instead of fake product screens, these use geometric shapes,
// gradients, and subtle animations to evoke each concept.

export function LaunchSequencerVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#f0eeff] to-[#e8e4ff]">
      {/* Ambient glow */}
      <div className="absolute w-[300px] h-[300px] rounded-full bg-[#6c77b0]/20 blur-[80px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      
      {/* Concentric rings representing sequential market launches */}
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="absolute rounded-full border-2 border-[#6c77b0]"
          style={{
            width: `${80 + i * 70}px`,
            height: `${80 + i * 70}px`,
            opacity: 0.12 + (4 - i) * 0.15,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            animation: `pulse-ring ${2 + i * 0.4}s ease-in-out infinite alternate`,
          }}
        />
      ))}

      {/* Center target dot */}
      <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-[#6c77b0] to-[#4a56a0] shadow-[0_0_40px_rgba(108,119,176,0.5)] flex items-center justify-center">
        <div className="w-5 h-5 rounded-full bg-white/90" />
      </div>

      {/* Orbital points — markets being sequenced */}
      {[0, 1, 2].map((i) => (
        <div
          key={`orbit-${i}`}
          className="absolute z-10"
          style={{
            width: `${180 + i * 70}px`,
            height: `${180 + i * 70}px`,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            animation: `orbit ${8 + i * 3}s linear infinite`,
          }}
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-lg"
            style={{
              width: `${16 - i * 2}px`,
              height: `${16 - i * 2}px`,
              backgroundColor: i === 0 ? "#6c77b0" : i === 1 ? "#8b93c7" : "#b0b6da",
            }}
          />
        </div>
      ))}

      {/* Directional lines */}
      <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 400 400">
        <line x1="200" y1="200" x2="340" y2="80" stroke="#6c77b0" strokeWidth="1" opacity="0.15" strokeDasharray="4 4" />
        <line x1="200" y1="200" x2="60" y2="120" stroke="#6c77b0" strokeWidth="1" opacity="0.15" strokeDasharray="4 4" />
        <line x1="200" y1="200" x2="320" y2="300" stroke="#6c77b0" strokeWidth="1" opacity="0.15" strokeDasharray="4 4" />
      </svg>

      <style jsx>{`
        @keyframes pulse-ring {
          0% { transform: translate(-50%, -50%) scale(1); }
          100% { transform: translate(-50%, -50%) scale(1.05); }
        }
        @keyframes orbit {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export function RevenueRadarVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#fff5ee] to-[#ffe8d5]">
      {/* Ambient glow */}
      <div className="absolute w-[280px] h-[280px] rounded-full bg-[#e85d04]/15 blur-[80px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      
      {/* Radar sweep */}
      <svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 400 400">
        {/* Grid circles */}
        {[60, 110, 160].map((r) => (
          <circle key={r} cx="200" cy="200" r={r} fill="none" stroke="#e85d04" strokeWidth="0.8" opacity="0.15" />
        ))}
        {/* Cross-hairs */}
        <line x1="200" y1="40" x2="200" y2="360" stroke="#e85d04" strokeWidth="0.5" opacity="0.12" />
        <line x1="40" y1="200" x2="360" y2="200" stroke="#e85d04" strokeWidth="0.5" opacity="0.12" />
        
        {/* Sweep arm */}
        <g style={{ transformOrigin: "200px 200px", animation: "sweep 4s linear infinite" }}>
          <line x1="200" y1="200" x2="200" y2="40" stroke="#e85d04" strokeWidth="2" opacity="0.6" />
          <defs>
            <linearGradient id="sweepGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e85d04" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#e85d04" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M200,200 L200,40 A160,160 0 0,1 313,92 Z" fill="url(#sweepGrad)" />
        </g>

        {/* Revenue blips */}
        <circle cx="230" cy="140" r="5" fill="#e85d04" opacity="0.8">
          <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="160" cy="170" r="4" fill="#e85d04" opacity="0.6">
          <animate attributeName="opacity" values="0.6;0.15;0.6" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="270" cy="220" r="3" fill="#e85d04" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.1;0.5" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="145" cy="250" r="6" fill="#ff4500" opacity="0.7">
          <animate attributeName="opacity" values="0.7;0.2;0.7" dur="1.8s" repeatCount="indefinite" />
        </circle>
      </svg>

      <style jsx>{`
        @keyframes sweep {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export function SchemeSimulatorVisual() {
  const bars = [65, 85, 45, 90, 70, 55, 80];
  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#f3f0ff] to-[#ebe5ff]">
      {/* Ambient glow */}
      <div className="absolute w-[250px] h-[250px] rounded-full bg-[#7366fe]/15 blur-[70px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      
      {/* Abstract bar chart with curves */}
      <svg className="relative z-10 w-[320px] h-[260px]" viewBox="0 0 320 260">
        {/* Baseline */}
        <line x1="30" y1="230" x2="300" y2="230" stroke="#7366fe" strokeWidth="1" opacity="0.2" />
        
        {/* Bars */}
        {bars.map((h, i) => (
          <g key={i}>
            <rect
              x={38 + i * 38}
              y={230 - h * 2}
              width="22"
              height={h * 2}
              rx="4"
              fill={i === 3 ? "#7366fe" : "#7366fe"}
              opacity={i === 3 ? 0.85 : 0.15 + i * 0.08}
            >
              <animate
                attributeName="height"
                from="0"
                to={`${h * 2}`}
                dur={`${0.5 + i * 0.15}s`}
                fill="freeze"
              />
              <animate
                attributeName="y"
                from="230"
                to={`${230 - h * 2}`}
                dur={`${0.5 + i * 0.15}s`}
                fill="freeze"
              />
            </rect>
          </g>
        ))}

        {/* Trend line */}
        <path
          d="M 49 165 Q 90 130 130 140 T 200 90 T 270 70"
          fill="none"
          stroke="#7366fe"
          strokeWidth="2.5"
          opacity="0.6"
          strokeLinecap="round"
          strokeDasharray="200"
          strokeDashoffset="200"
        >
          <animate attributeName="stroke-dashoffset" from="200" to="0" dur="2s" fill="freeze" />
        </path>

        {/* Peak indicator */}
        <circle cx="270" cy="70" r="6" fill="#7366fe" opacity="0.9">
          <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="270" cy="70" r="12" fill="none" stroke="#7366fe" strokeWidth="1" opacity="0.3">
          <animate attributeName="r" values="12;18;12" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}

export function MarketTimeMachineVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#f5eef5] to-[#ece0ec]">
      {/* Ambient glow */}
      <div className="absolute w-[260px] h-[260px] rounded-full bg-[#8f4d75]/15 blur-[70px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      
      {/* Timeline visualization */}
      <svg className="relative z-10 w-[340px] h-[260px]" viewBox="0 0 340 260">
        {/* Timeline axis */}
        <line x1="30" y1="200" x2="310" y2="200" stroke="#8f4d75" strokeWidth="2" opacity="0.25" />
        
        {/* Timeline markers */}
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <g key={i}>
            <line x1={50 + i * 40} y1="195" x2={50 + i * 40} y2="205" stroke="#8f4d75" strokeWidth="1.5" opacity="0.3" />
            <circle
              cx={50 + i * 40}
              cy="200"
              r={i === 3 ? 6 : 3}
              fill={i === 3 ? "#8f4d75" : "#8f4d75"}
              opacity={i === 3 ? 0.9 : 0.25}
            />
          </g>
        ))}

        {/* Opportunity wave */}
        <path
          d="M 40 160 Q 80 100 120 130 T 170 60 T 220 80 T 290 40"
          fill="none"
          stroke="#8f4d75"
          strokeWidth="2.5"
          opacity="0.5"
          strokeLinecap="round"
        />
        
        {/* Filled area beneath wave */}
        <path
          d="M 40 160 Q 80 100 120 130 T 170 60 T 220 80 T 290 40 L 290 200 L 40 200 Z"
          fill="#8f4d75"
          opacity="0.06"
        />

        {/* Current moment marker */}
        <line x1="170" y1="40" x2="170" y2="200" stroke="#8f4d75" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4" />
        <rect x="148" y="25" width="44" height="22" rx="6" fill="#8f4d75" opacity="0.85" />
        <text x="170" y="40" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">NOW</text>

        {/* Past / Future labels */}
        <text x="80" y="230" textAnchor="middle" fontSize="10" fill="#8f4d75" opacity="0.35" fontWeight="500">Past</text>
        <text x="260" y="230" textAnchor="middle" fontSize="10" fill="#8f4d75" opacity="0.35" fontWeight="500">Future</text>
        
        {/* Arrow on timeline */}
        <polygon points="310,200 302,195 302,205" fill="#8f4d75" opacity="0.25" />
      </svg>
    </div>
  );
}

export function DistributorCopilotVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#f3eef8] to-[#e8dff3]">
      {/* Ambient glow */}
      <div className="absolute w-[250px] h-[250px] rounded-full bg-[#7b4096]/15 blur-[70px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      
      {/* Network graph — nodes connected by lines */}
      <svg className="relative z-10 w-[320px] h-[300px]" viewBox="0 0 320 300">
        {/* Connection lines */}
        <line x1="160" y1="80" x2="80" y2="160" stroke="#7b4096" strokeWidth="1.5" opacity="0.2" />
        <line x1="160" y1="80" x2="240" y2="140" stroke="#7b4096" strokeWidth="1.5" opacity="0.2" />
        <line x1="160" y1="80" x2="160" y2="180" stroke="#7b4096" strokeWidth="1.5" opacity="0.2" />
        <line x1="80" y1="160" x2="110" y2="240" stroke="#7b4096" strokeWidth="1" opacity="0.12" />
        <line x1="240" y1="140" x2="250" y2="220" stroke="#7b4096" strokeWidth="1" opacity="0.12" />
        <line x1="160" y1="180" x2="110" y2="240" stroke="#7b4096" strokeWidth="1" opacity="0.12" />
        <line x1="160" y1="180" x2="200" y2="250" stroke="#7b4096" strokeWidth="1" opacity="0.12" />
        <line x1="160" y1="180" x2="250" y2="220" stroke="#7b4096" strokeWidth="1" opacity="0.12" />

        {/* Central node (brand) */}
        <circle cx="160" cy="80" r="20" fill="#7b4096" opacity="0.9" />
        <text x="160" y="85" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">B</text>
        
        {/* Level-1 distributors */}
        <circle cx="80" cy="160" r="14" fill="#7b4096" opacity="0.55" />
        <circle cx="240" cy="140" r="14" fill="#7b4096" opacity="0.55" />
        <circle cx="160" cy="180" r="14" fill="#7b4096" opacity="0.55" />

        {/* Level-2 sub-distributors */}
        <circle cx="110" cy="240" r="8" fill="#7b4096" opacity="0.25" />
        <circle cx="200" cy="250" r="8" fill="#7b4096" opacity="0.25" />
        <circle cx="250" cy="220" r="8" fill="#7b4096" opacity="0.25" />

        {/* Pulse rings on central node */}
        <circle cx="160" cy="80" r="20" fill="none" stroke="#7b4096" strokeWidth="1.5" opacity="0.3">
          <animate attributeName="r" values="20;35;20" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0;0.3" dur="3s" repeatCount="indefinite" />
        </circle>

        {/* Match score labels */}
        <rect x="90" y="100" width="30" height="16" rx="4" fill="#7b4096" opacity="0.75" />
        <text x="105" y="112" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">94%</text>
        
        <rect x="195" y="92" width="30" height="16" rx="4" fill="#7b4096" opacity="0.55" />
        <text x="210" y="104" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">87%</text>
        
        <rect x="152" y="120" width="30" height="16" rx="4" fill="#7b4096" opacity="0.45" />
        <text x="167" y="132" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">82%</text>
      </svg>
    </div>
  );
}

export function IntelligenceThreadsVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#f0ecf8] to-[#e0d8f0]">
      {/* Ambient glow */}
      <div className="absolute w-[280px] h-[280px] rounded-full bg-[#55269c]/15 blur-[80px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      
      {/* Converging threads */}
      <svg className="relative z-10 w-[340px] h-[280px]" viewBox="0 0 340 280">
        {/* Thread lines converging to center */}
        <path d="M 20 40 Q 100 80 170 140" fill="none" stroke="#55269c" strokeWidth="2" opacity="0.25" strokeLinecap="round">
          <animate attributeName="stroke-dasharray" values="0 300;300 0" dur="3s" fill="freeze" />
        </path>
        <path d="M 320 30 Q 250 70 170 140" fill="none" stroke="#55269c" strokeWidth="2" opacity="0.25" strokeLinecap="round">
          <animate attributeName="stroke-dasharray" values="0 300;300 0" dur="3.2s" fill="freeze" />
        </path>
        <path d="M 30 260 Q 90 200 170 140" fill="none" stroke="#55269c" strokeWidth="2" opacity="0.25" strokeLinecap="round">
          <animate attributeName="stroke-dasharray" values="0 300;300 0" dur="2.8s" fill="freeze" />
        </path>
        <path d="M 310 250 Q 240 190 170 140" fill="none" stroke="#55269c" strokeWidth="2" opacity="0.25" strokeLinecap="round">
          <animate attributeName="stroke-dasharray" values="0 300;300 0" dur="3.5s" fill="freeze" />
        </path>
        <path d="M 10 150 Q 80 145 170 140" fill="none" stroke="#55269c" strokeWidth="2" opacity="0.25" strokeLinecap="round">
          <animate attributeName="stroke-dasharray" values="0 300;300 0" dur="2.5s" fill="freeze" />
        </path>
        <path d="M 330 140 Q 250 140 170 140" fill="none" stroke="#55269c" strokeWidth="2" opacity="0.25" strokeLinecap="round">
          <animate attributeName="stroke-dasharray" values="0 300;300 0" dur="3s" fill="freeze" />
        </path>

        {/* Source nodes */}
        {[
          { x: 20, y: 40 }, { x: 320, y: 30 },
          { x: 30, y: 260 }, { x: 310, y: 250 },
          { x: 10, y: 150 }, { x: 330, y: 140 },
        ].map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="5" fill="#55269c" opacity={0.3 + i * 0.05} />
        ))}

        {/* Central convergence point */}
        <circle cx="170" cy="140" r="18" fill="#55269c" opacity="0.85" />
        <circle cx="170" cy="140" r="7" fill="white" opacity="0.9" />

        {/* Emanating insight ring */}
        <circle cx="170" cy="140" r="18" fill="none" stroke="#55269c" strokeWidth="2" opacity="0.4">
          <animate attributeName="r" values="18;40;18" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0;0.4" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="170" cy="140" r="18" fill="none" stroke="#55269c" strokeWidth="1" opacity="0.2">
          <animate attributeName="r" values="25;55;25" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.2;0;0.2" dur="3s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}
