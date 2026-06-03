// Pulse GTM Operating System - Advanced Product Dashboards
// Professional, data-rich visualizations of Pulse features

export const LaunchSequencerScreen = () => (
  <svg viewBox="0 0 768 420" className="w-full h-full">
    <defs>
      <linearGradient id="headerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#7366fe", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#5b4ed1", stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="cardGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#7366fe", stopOpacity: 0.08 }} />
        <stop
          offset="100%"
          style={{ stopColor: "#7366fe", stopOpacity: 0.02 }}
        />
      </linearGradient>
    </defs>

    {/* Header with gradient */}
    <rect width="768" height="70" fill="url(#headerGrad)" />
    <text
      x="32"
      y="45"
      fontSize="24"
      fontWeight="bold"
      fill="white"
      fontFamily="'Segoe UI', Arial"
    >
      Launch Sequencer™
    </text>

    {/* Background */}
    <rect y="70" width="768" height="350" fill="#FDFBF7" />

    {/* Market priority cards with enhanced styling */}
    <g id="market-1">
      <rect
        x="32"
        y="95"
        width="220"
        height="110"
        rx="14"
        fill="white"
        stroke="#7366fe"
        strokeWidth="2"
        opacity="0.98"
      />
      <rect
        x="32"
        y="95"
        width="220"
        height="110"
        rx="14"
        fill="url(#cardGrad1)"
      />

      <g>
        <circle cx="50" cy="110" r="3" fill="#7366fe" />
        <text
          x="60"
          y="115"
          fontSize="13"
          fontWeight="bold"
          fill="#333"
          fontFamily="'Segoe UI', Arial"
        >
          Mumbai (North)
        </text>
      </g>

      <text
        x="50"
        y="138"
        fontSize="11"
        fill="#666"
        fontFamily="'Segoe UI', Arial"
      >
        Viability Score
      </text>
      <rect x="50" y="145" width="180" height="6" rx="3" fill="#e0ddf5" />
      <rect x="50" y="145" width="169.2" height="6" rx="3" fill="#7366fe" />
      <text
        x="240"
        y="151"
        fontSize="11"
        fontWeight="bold"
        fill="#7366fe"
        fontFamily="'Segoe UI', Arial"
      >
        94%
      </text>

      <text
        x="50"
        y="170"
        fontSize="10"
        fill="#666"
        fontFamily="'Segoe UI', Arial"
      >
        Priority: #1 | Status: Ready
      </text>
      <rect x="50" y="180" width="42" height="22" rx="4" fill="#7366fe" />
      <text
        x="62"
        y="194"
        fontSize="10"
        fontWeight="bold"
        fill="white"
        fontFamily="'Segoe UI', Arial"
      >
        Launch
      </text>
    </g>

    <g id="market-2">
      <rect
        x="274"
        y="95"
        width="220"
        height="110"
        rx="14"
        fill="white"
        stroke="#e0ddf5"
        strokeWidth="1.5"
        opacity="0.98"
      />
      <rect
        x="274"
        y="95"
        width="220"
        height="110"
        rx="14"
        fill="url(#cardGrad1)"
      />

      <circle cx="292" cy="110" r="3" fill="#f5a623" />
      <text
        x="302"
        y="115"
        fontSize="13"
        fontWeight="bold"
        fill="#333"
        fontFamily="'Segoe UI', Arial"
      >
        Bangalore (East)
      </text>

      <text
        x="292"
        y="138"
        fontSize="11"
        fill="#666"
        fontFamily="'Segoe UI', Arial"
      >
        Viability Score
      </text>
      <rect x="292" y="145" width="180" height="6" rx="3" fill="#e0ddf5" />
      <rect x="292" y="145" width="156.6" height="6" rx="3" fill="#f5a623" />
      <text
        x="482"
        y="151"
        fontSize="11"
        fontWeight="bold"
        fill="#f5a623"
        fontFamily="'Segoe UI', Arial"
      >
        87%
      </text>

      <text
        x="292"
        y="170"
        fontSize="10"
        fill="#666"
        fontFamily="'Segoe UI', Arial"
      >
        Priority: #2 | Status: Queued
      </text>
      <rect x="292" y="180" width="42" height="22" rx="4" fill="#e0ddf5" />
      <text
        x="304"
        y="194"
        fontSize="10"
        fontWeight="bold"
        fill="#666"
        fontFamily="'Segoe UI', Arial"
      >
        Queue
      </text>
    </g>

    <g id="market-3">
      <rect
        x="516"
        y="95"
        width="220"
        height="110"
        rx="14"
        fill="white"
        stroke="#e0ddf5"
        strokeWidth="1.5"
        opacity="0.98"
      />
      <rect
        x="516"
        y="95"
        width="220"
        height="110"
        rx="14"
        fill="url(#cardGrad1)"
      />

      <circle cx="534" cy="110" r="3" fill="#d1495b" />
      <text
        x="544"
        y="115"
        fontSize="13"
        fontWeight="bold"
        fill="#333"
        fontFamily="'Segoe UI', Arial"
      >
        Delhi (Central)
      </text>

      <text
        x="534"
        y="138"
        fontSize="11"
        fill="#666"
        fontFamily="'Segoe UI', Arial"
      >
        Viability Score
      </text>
      <rect x="534" y="145" width="180" height="6" rx="3" fill="#e0ddf5" />
      <rect x="534" y="145" width="144" height="6" rx="3" fill="#d1495b" />
      <text
        x="724"
        y="151"
        fontSize="11"
        fontWeight="bold"
        fill="#d1495b"
        fontFamily="'Segoe UI', Arial"
      >
        76%
      </text>

      <text
        x="534"
        y="170"
        fontSize="10"
        fill="#666"
        fontFamily="'Segoe UI', Arial"
      >
        Priority: #3 | Status: Planned
      </text>
      <rect x="534" y="180" width="42" height="22" rx="4" fill="#e0ddf5" />
      <text
        x="546"
        y="194"
        fontSize="10"
        fontWeight="bold"
        fill="#666"
        fontFamily="'Segoe UI', Arial"
      >
        Plan
      </text>
    </g>

    {/* Footer stats bar */}
    <rect
      x="32"
      y="230"
      width="704"
      height="65"
      rx="12"
      fill="white"
      stroke="#e0ddf5"
      strokeWidth="1.5"
      opacity="0.95"
    />

    <text
      x="50"
      y="255"
      fontSize="12"
      fontWeight="bold"
      fill="#333"
      fontFamily="'Segoe UI', Arial"
    >
      48-Hour Market Entry Playbook Ready
    </text>

    <g id="stat-boxes">
      <g>
        <text
          x="50"
          y="280"
          fontSize="10"
          fill="#666"
          fontFamily="'Segoe UI', Arial"
        >
          Markets Analyzed
        </text>
        <text
          x="50"
          y="300"
          fontSize="18"
          fontWeight="bold"
          fill="#7366fe"
          fontFamily="'Segoe UI', Arial"
        >
          15
        </text>
      </g>

      <g>
        <text
          x="200"
          y="280"
          fontSize="10"
          fill="#666"
          fontFamily="'Segoe UI', Arial"
        >
          Total Opportunity
        </text>
        <text
          x="200"
          y="300"
          fontSize="18"
          fontWeight="bold"
          fill="#7366fe"
          fontFamily="'Segoe UI', Arial"
        >
          $2.4M
        </text>
      </g>

      <g>
        <text
          x="400"
          y="280"
          fontSize="10"
          fill="#666"
          fontFamily="'Segoe UI', Arial"
        >
          Avg Viability
        </text>
        <text
          x="400"
          y="300"
          fontSize="18"
          fontWeight="bold"
          fill="#7366fe"
          fontFamily="'Segoe UI', Arial"
        >
          85%
        </text>
      </g>

      <g>
        <text
          x="550"
          y="280"
          fontSize="10"
          fill="#666"
          fontFamily="'Segoe UI', Arial"
        >
          Launch Ready
        </text>
        <text
          x="550"
          y="300"
          fontSize="18"
          fontWeight="bold"
          fill="#2ecc71"
          fontFamily="'Segoe UI', Arial"
        >
          ✓ Yes
        </text>
      </g>
    </g>

    {/* Decorative bottom bar */}
    <rect y="415" width="768" height="5" fill="#e0ddf5" />
  </svg>
);

export const RevenueRadarScreen = () => (
  <svg viewBox="0 0 768 420" className="w-full h-full">
    <defs>
      <linearGradient id="radarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#7366fe", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#5b4ed1", stopOpacity: 1 }} />
      </linearGradient>
      <radialGradient id="leakageGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" style={{ stopColor: "#d1495b", stopOpacity: 0.3 }} />
        <stop offset="100%" style={{ stopColor: "#d1495b", stopOpacity: 0 }} />
      </radialGradient>
    </defs>

    {/* Header */}
    <rect width="768" height="70" fill="url(#radarGrad)" />
    <text
      x="32"
      y="45"
      fontSize="24"
      fontWeight="bold"
      fill="white"
      fontFamily="'Segoe UI', Arial"
    >
      Revenue Radar™
    </text>

    {/* Background */}
    <rect y="70" width="768" height="350" fill="#FDFBF7" />

    {/* Radar visualization with concentric circles */}
    <circle
      cx="200"
      cy="180"
      r="90"
      fill="none"
      stroke="#e0ddf5"
      strokeWidth="1.5"
      opacity="0.6"
    />
    <circle
      cx="200"
      cy="180"
      r="60"
      fill="none"
      stroke="#e0ddf5"
      strokeWidth="1.5"
      opacity="0.4"
    />
    <circle
      cx="200"
      cy="180"
      r="30"
      fill="none"
      stroke="#e0ddf5"
      strokeWidth="1.5"
      opacity="0.2"
    />
    <circle cx="200" cy="180" r="10" fill="#7366fe" opacity="0.3" />

    {/* Leakage points with circles */}
    <circle cx="270" cy="120" r="25" fill="url(#leakageGrad)" />
    <circle cx="270" cy="120" r="12" fill="#d1495b" opacity="0.8" />
    <text
      x="210"
      y="100"
      fontSize="10"
      fontWeight="bold"
      fill="#d1495b"
      fontFamily="'Segoe UI', Arial"
    >
      Pricing Gap
    </text>
    <text
      x="210"
      y="115"
      fontSize="11"
      fontWeight="bold"
      fill="#d1495b"
      fontFamily="'Segoe UI', Arial"
    >
      60% | ₹11.1Cr
    </text>

    <circle cx="280" cy="210" r="20" fill="#f5a623" opacity="0.15" />
    <circle cx="280" cy="210" r="8" fill="#f5a623" opacity="0.8" />
    <text
      x="210"
      y="230"
      fontSize="10"
      fontWeight="bold"
      fill="#f5a623"
      fontFamily="'Segoe UI', Arial"
    >
      Coverage Gap
    </text>
    <text
      x="210"
      y="245"
      fontSize="11"
      fontWeight="bold"
      fill="#f5a623"
      fontFamily="'Segoe UI', Arial"
    >
      30% | ₹5.5Cr
    </text>

    <circle cx="150" cy="260" r="15" fill="#7366fe" opacity="0.2" />
    <circle cx="150" cy="260" r="6" fill="#7366fe" opacity="0.8" />
    <text
      x="210"
      y="270"
      fontSize="10"
      fontWeight="bold"
      fill="#7366fe"
      fontFamily="'Segoe UI', Arial"
    >
      Other
    </text>
    <text
      x="210"
      y="285"
      fontSize="11"
      fontWeight="bold"
      fill="#7366fe"
      fontFamily="'Segoe UI', Arial"
    >
      10% | ₹1.9Cr
    </text>

    {/* Leakage breakdown table */}
    <rect
      x="420"
      y="100"
      width="320"
      height="250"
      rx="12"
      fill="white"
      stroke="#e0ddf5"
      strokeWidth="1.5"
      opacity="0.95"
    />

    <text
      x="440"
      y="130"
      fontSize="13"
      fontWeight="bold"
      fill="#333"
      fontFamily="'Segoe UI', Arial"
    >
      Revenue Leakage Analysis
    </text>
    <text
      x="440"
      y="150"
      fontSize="11"
      fill="#666"
      fontFamily="'Segoe UI', Arial"
    >
      Total Detected: ₹18.5 Cr/year
    </text>

    {/* Breakdown bars */}
    <g id="leak-viz">
      <text
        x="440"
        y="180"
        fontSize="10"
        fill="#333"
        fontFamily="'Segoe UI', Arial"
      >
        Pricing Gap
      </text>
      <rect x="440" y="190" width="280" height="8" rx="4" fill="#e0ddf5" />
      <rect x="440" y="190" width="168" height="8" rx="4" fill="#d1495b" />
      <text
        x="715"
        y="196"
        fontSize="9"
        fontWeight="bold"
        fill="#d1495b"
        fontFamily="'Segoe UI', Arial"
      >
        60%
      </text>

      <text
        x="440"
        y="225"
        fontSize="10"
        fill="#333"
        fontFamily="'Segoe UI', Arial"
      >
        Coverage Gap
      </text>
      <rect x="440" y="235" width="280" height="8" rx="4" fill="#e0ddf5" />
      <rect x="440" y="235" width="84" height="8" rx="4" fill="#f5a623" />
      <text
        x="715"
        y="241"
        fontSize="9"
        fontWeight="bold"
        fill="#f5a623"
        fontFamily="'Segoe UI', Arial"
      >
        30%
      </text>

      <text
        x="440"
        y="270"
        fontSize="10"
        fill="#333"
        fontFamily="'Segoe UI', Arial"
      >
        Other
      </text>
      <rect x="440" y="280" width="280" height="8" rx="4" fill="#e0ddf5" />
      <rect x="440" y="280" width="28" height="8" rx="4" fill="#7366fe" />
      <text
        x="715"
        y="286"
        fontSize="9"
        fontWeight="bold"
        fill="#7366fe"
        fontFamily="'Segoe UI', Arial"
      >
        10%
      </text>
    </g>

    {/* Decorative bottom bar */}
    <rect y="415" width="768" height="5" fill="#e0ddf5" />
  </svg>
);

export const SchemeSimulatorScreen = () => (
  <svg viewBox="0 0 768 420" className="w-full h-full">
    <defs>
      <linearGradient id="simGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#7366fe", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#5b4ed1", stopOpacity: 1 }} />
      </linearGradient>
    </defs>

    {/* Header */}
    <rect width="768" height="70" fill="url(#simGrad)" />
    <text
      x="32"
      y="45"
      fontSize="24"
      fontWeight="bold"
      fill="white"
      fontFamily="'Segoe UI', Arial"
    >
      Scheme Simulator™
    </text>

    {/* Background */}
    <rect y="70" width="768" height="350" fill="#FDFBF7" />

    {/* Scenario input box */}
    <rect
      x="32"
      y="95"
      width="704"
      height="70"
      rx="12"
      fill="white"
      stroke="#7366fe"
      strokeWidth="2"
      opacity="0.95"
    />

    <text
      x="50"
      y="120"
      fontSize="12"
      fontWeight="bold"
      fill="#333"
      fontFamily="'Segoe UI', Arial"
    >
      Scenario: 8% Discount + ₹5Cr Volume Commitment
    </text>
    <text
      x="50"
      y="140"
      fontSize="11"
      fill="#666"
      fontFamily="'Segoe UI', Arial"
    >
      Distributor: Madhya Pradesh | Category: Snacking | Margin Structure:
      Tiered Performance
    </text>
    <text
      x="50"
      y="155"
      fontSize="10"
      fill="#7366fe"
      fontFamily="'Segoe UI', Arial"
    >
      ✓ Data confidence: 94% | Analysis date: Real-time
    </text>

    {/* Results KPI boxes */}
    <g id="roi-box">
      <rect
        x="32"
        y="185"
        width="330"
        height="120"
        rx="12"
        fill="white"
        stroke="#7366fe"
        strokeWidth="2.5"
        opacity="0.98"
      />
      <text
        x="50"
        y="215"
        fontSize="11"
        fill="#666"
        fontFamily="'Segoe UI', Arial"
      >
        Projected ROI
      </text>
      <text
        x="50"
        y="245"
        fontSize="48"
        fontWeight="bold"
        fill="#7366fe"
        fontFamily="'Segoe UI', Arial"
      >
        24%
      </text>
      <text
        x="50"
        y="275"
        fontSize="10"
        fill="#999"
        fontFamily="'Segoe UI', Arial"
      >
        Year 1 | Break-even by Month 6.8
      </text>
    </g>

    <g id="payback-box">
      <rect
        x="406"
        y="185"
        width="330"
        height="120"
        rx="12"
        fill="white"
        stroke="#7366fe"
        strokeWidth="2.5"
        opacity="0.98"
      />
      <text
        x="424"
        y="215"
        fontSize="11"
        fill="#666"
        fontFamily="'Segoe UI', Arial"
      >
        Payback Period
      </text>
      <text
        x="424"
        y="245"
        fontSize="48"
        fontWeight="bold"
        fill="#7366fe"
        fontFamily="'Segoe UI', Arial"
      >
        6.8mo
      </text>
      <text
        x="424"
        y="275"
        fontSize="10"
        fill="#999"
        fontFamily="'Segoe UI', Arial"
      >
        Expected return to profitability
      </text>
    </g>

    {/* Financial breakdown */}
    <rect
      x="32"
      y="325"
      width="704"
      height="75"
      rx="12"
      fill="white"
      stroke="#e0ddf5"
      strokeWidth="1.5"
      opacity="0.95"
    />

    <text
      x="50"
      y="350"
      fontSize="12"
      fontWeight="bold"
      fill="#333"
      fontFamily="'Segoe UI', Arial"
    >
      Financial Impact Analysis
    </text>

    <g id="financials">
      <g>
        <text
          x="50"
          y="372"
          fontSize="10"
          fill="#666"
          fontFamily="'Segoe UI', Arial"
        >
          Revenue Opportunity
        </text>
        <text
          x="200"
          y="372"
          fontSize="11"
          fontWeight="bold"
          fill="#7366fe"
          fontFamily="'Segoe UI', Arial"
        >
          ₹18.7 Cr
        </text>
      </g>

      <g>
        <text
          x="380"
          y="372"
          fontSize="10"
          fill="#666"
          fontFamily="'Segoe UI', Arial"
        >
          Margin Sacrifice
        </text>
        <text
          x="530"
          y="372"
          fontSize="11"
          fontWeight="bold"
          fill="#d1495b"
          fontFamily="'Segoe UI', Arial"
        >
          -₹4.2 Cr
        </text>
      </g>

      <g>
        <text
          x="50"
          y="395"
          fontSize="10"
          fill="#666"
          fontFamily="'Segoe UI', Arial"
        >
          Net Benefit
        </text>
        <text
          x="200"
          y="395"
          fontSize="11"
          fontWeight="bold"
          fill="#2ecc71"
          fontFamily="'Segoe UI', Arial"
        >
          ₹14.5 Cr ✓
        </text>
      </g>

      <g>
        <text
          x="380"
          y="395"
          fontSize="10"
          fill="#666"
          fontFamily="'Segoe UI', Arial"
        >
          Risk Assessment
        </text>
        <text
          x="530"
          y="395"
          fontSize="11"
          fontWeight="bold"
          fill="#2ecc71"
          fontFamily="'Segoe UI', Arial"
        >
          LOW • Recommended
        </text>
      </g>
    </g>

    {/* Decorative bottom bar */}
    <rect y="415" width="768" height="5" fill="#e0ddf5" />
  </svg>
);

export const MarketTimeMachineScreen = () => (
  <svg viewBox="0 0 768 420" className="w-full h-full">
    <defs>
      <linearGradient id="timeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#7366fe", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#5b4ed1", stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="curveGrad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: "#7366fe", stopOpacity: 0.3 }} />
        <stop offset="100%" style={{ stopColor: "#7366fe", stopOpacity: 0 }} />
      </linearGradient>
    </defs>

    {/* Header */}
    <rect width="768" height="70" fill="url(#timeGrad)" />
    <text
      x="32"
      y="45"
      fontSize="24"
      fontWeight="bold"
      fill="white"
      fontFamily="'Segoe UI', Arial"
    >
      Market Time-Machine™
    </text>

    {/* Background */}
    <rect y="70" width="768" height="350" fill="#FDFBF7" />

    {/* Category info bar */}
    <rect
      x="32"
      y="95"
      width="704"
      height="35"
      rx="8"
      fill="white"
      stroke="#e0ddf5"
      strokeWidth="1"
      opacity="0.95"
    />
    <text
      x="50"
      y="120"
      fontSize="11"
      fill="#666"
      fontFamily="'Segoe UI', Arial"
    >
      Category: Snacking | Forecast Period: 24 Months | Last Updated: 2h ago |
      Confidence: 89%
    </text>

    {/* Chart area with grid */}
    <defs>
      <pattern id="grid" width="30" height="20" patternUnits="userSpaceOnUse">
        <path
          d="M 30 0 L 0 0 0 20"
          fill="none"
          stroke="#e0ddf5"
          strokeWidth="0.5"
          opacity="0.5"
        />
      </pattern>
    </defs>

    <rect x="70" y="150" width="580" height="160" fill="url(#grid)" />

    {/* Axes */}
    <line x1="70" y1="310" x2="650" y2="310" stroke="#333" strokeWidth="2" />
    <line x1="70" y1="150" x2="70" y2="310" stroke="#333" strokeWidth="2" />

    {/* Axis labels */}
    <text
      x="35"
      y="160"
      fontSize="9"
      fill="#666"
      fontFamily="'Segoe UI', Arial"
    >
      100%
    </text>
    <text
      x="35"
      y="235"
      fontSize="9"
      fill="#666"
      fontFamily="'Segoe UI', Arial"
    >
      50%
    </text>
    <text
      x="35"
      y="315"
      fontSize="9"
      fill="#666"
      fontFamily="'Segoe UI', Arial"
    >
      0%
    </text>

    <text
      x="270"
      y="335"
      fontSize="9"
      fill="#666"
      fontFamily="'Segoe UI', Arial"
    >
      Months →
    </text>

    {/* Time markers */}
    <text
      x="75"
      y="330"
      fontSize="8"
      fill="#999"
      fontFamily="'Segoe UI', Arial"
    >
      0
    </text>
    <text
      x="215"
      y="330"
      fontSize="8"
      fill="#999"
      fontFamily="'Segoe UI', Arial"
    >
      6
    </text>
    <text
      x="355"
      y="330"
      fontSize="8"
      fill="#999"
      fontFamily="'Segoe UI', Arial"
    >
      12
    </text>
    <text
      x="500"
      y="330"
      fontSize="8"
      fill="#999"
      fontFamily="'Segoe UI', Arial"
    >
      18
    </text>
    <text
      x="635"
      y="330"
      fontSize="8"
      fill="#999"
      fontFamily="'Segoe UI', Arial"
    >
      24
    </text>

    {/* Growth trajectory curve */}
    <path
      d="M 80 280 Q 200 220 320 160 T 630 130"
      stroke="#7366fe"
      strokeWidth="4"
      fill="none"
      strokeLinecap="round"
    />

    {/* Curve fill */}
    <path
      d="M 80 280 Q 200 220 320 160 T 630 130 L 630 310 L 80 310 Z"
      fill="url(#curveGrad)"
    />

    {/* Entry point marker */}
    <circle
      cx="160"
      cy="255"
      r="8"
      fill="#2ecc71"
      stroke="#fff"
      strokeWidth="2"
    />
    <text
      x="130"
      y="285"
      fontSize="10"
      fontWeight="bold"
      fill="#2ecc71"
      fontFamily="'Segoe UI', Arial"
    >
      Optimal Entry: Mo 4
    </text>

    {/* Peak market zone */}
    <circle cx="580" cy="150" r="35" fill="#f5a623" opacity="0.15" />
    <circle
      cx="580"
      cy="150"
      r="25"
      fill="none"
      stroke="#f5a623"
      strokeWidth="2"
      strokeDasharray="4"
    />
    <text
      x="530"
      y="155"
      fontSize="10"
      fontWeight="bold"
      fill="#f5a623"
      fontFamily="'Segoe UI', Arial"
    >
      Peak Market
    </text>

    {/* Legend box */}
    <rect
      x="32"
      y="335"
      width="704"
      height="55"
      rx="8"
      fill="white"
      stroke="#e0ddf5"
      strokeWidth="1"
      opacity="0.95"
    />

    <text
      x="50"
      y="358"
      fontSize="10"
      fontWeight="bold"
      fill="#333"
      fontFamily="'Segoe UI', Arial"
    >
      Entry Window: Month 4-6 | Revenue Peak: Month 16 | Market Saturation:
      Month 22
    </text>
    <text
      x="50"
      y="378"
      fontSize="9"
      fill="#666"
      fontFamily="'Segoe UI', Arial"
    >
      Recommended action: Begin marketing 2 months before optimal entry |
      Expected first sale: Month 3
    </text>

    {/* Decorative bottom bar */}
    <rect y="415" width="768" height="5" fill="#e0ddf5" />
  </svg>
);

export const DistributorCopilotScreen = () => (
  <svg viewBox="0 0 768 420" className="w-full h-full">
    <defs>
      <linearGradient id="distGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#7366fe", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#5b4ed1", stopOpacity: 1 }} />
      </linearGradient>
    </defs>

    {/* Header */}
    <rect width="768" height="70" fill="url(#distGrad)" />
    <text
      x="32"
      y="45"
      fontSize="24"
      fontWeight="bold"
      fill="white"
      fontFamily="'Segoe UI', Arial"
    >
      Distributor Copilot™
    </text>

    {/* Background */}
    <rect y="70" width="768" height="350" fill="#FDFBF7" />

    {/* Distributor card */}
    <rect
      x="32"
      y="95"
      width="332"
      height="120"
      rx="12"
      fill="white"
      stroke="#7366fe"
      strokeWidth="2.5"
      opacity="0.98"
    />

    <g>
      <circle cx="50" cy="112" r="3" fill="#7366fe" />
      <text
        x="60"
        y="118"
        fontSize="13"
        fontWeight="bold"
        fill="#333"
        fontFamily="'Segoe UI', Arial"
      >
        Hari Distributors Pvt Ltd
      </text>
    </g>

    <text
      x="50"
      y="142"
      fontSize="10"
      fill="#666"
      fontFamily="'Segoe UI', Arial"
    >
      Location: Indore | Coverage: 847 outlets
    </text>
    <text
      x="50"
      y="158"
      fontSize="10"
      fill="#666"
      fontFamily="'Segoe UI', Arial"
    >
      Track Record: 8+ years | Last Order: 2 days ago
    </text>

    <text
      x="50"
      y="180"
      fontSize="10"
      fill="#666"
      fontFamily="'Segoe UI', Arial"
    >
      Performance Score:
    </text>
    <text
      x="200"
      y="180"
      fontSize="12"
      fontWeight="bold"
      fill="#2ecc71"
      fontFamily="'Segoe UI', Arial"
    >
      8.7/10 ✓ Recommended
    </text>

    {/* Recommended deal structure */}
    <rect
      x="404"
      y="95"
      width="332"
      height="240"
      rx="12"
      fill="white"
      stroke="#7366fe"
      strokeWidth="2"
      opacity="0.98"
    />

    <text
      x="422"
      y="125"
      fontSize="12"
      fontWeight="bold"
      fill="#333"
      fontFamily="'Segoe UI', Arial"
    >
      AI-Recommended Deal Structure
    </text>

    <rect x="422" y="140" width="296" height="1" fill="#e0ddf5" />

    <g id="structure">
      <g>
        <text
          x="422"
          y="165"
          fontSize="10"
          fill="#666"
          fontFamily="'Segoe UI', Arial"
        >
          Base Discount
        </text>
        <text
          x="660"
          y="165"
          fontSize="11"
          fontWeight="bold"
          fill="#7366fe"
          fontFamily="'Segoe UI', Arial"
        >
          6.5%
        </text>
      </g>

      <g>
        <text
          x="422"
          y="185"
          fontSize="10"
          fill="#666"
          fontFamily="'Segoe UI', Arial"
        >
          Volume Commitment
        </text>
        <text
          x="660"
          y="185"
          fontSize="11"
          fontWeight="bold"
          fill="#7366fe"
          fontFamily="'Segoe UI', Arial"
        >
          ₹3.2 Cr
        </text>
      </g>

      <g>
        <text
          x="422"
          y="205"
          fontSize="10"
          fill="#666"
          fontFamily="'Segoe UI', Arial"
        >
          Performance Incentive
        </text>
        <text
          x="660"
          y="205"
          fontSize="11"
          fontWeight="bold"
          fill="#7366fe"
          fontFamily="'Segoe UI', Arial"
        >
          1.5% @ 120%
        </text>
      </g>

      <g>
        <text
          x="422"
          y="225"
          fontSize="10"
          fill="#666"
          fontFamily="'Segoe UI', Arial"
        >
          New SKU Bonus
        </text>
        <text
          x="660"
          y="225"
          fontSize="11"
          fontWeight="bold"
          fill="#7366fe"
          fontFamily="'Segoe UI', Arial"
        >
          2% (3+ launches)
        </text>
      </g>

      <rect x="422" y="240" width="296" height="1" fill="#e0ddf5" />

      <g>
        <text
          x="422"
          y="265"
          fontSize="10"
          fill="#666"
          fontFamily="'Segoe UI', Arial"
        >
          Expected Margin
        </text>
        <text
          x="660"
          y="265"
          fontSize="11"
          fontWeight="bold"
          fill="#2ecc71"
          fontFamily="'Segoe UI', Arial"
        >
          14.2%
        </text>
      </g>

      <g>
        <text
          x="422"
          y="285"
          fontSize="10"
          fill="#666"
          fontFamily="'Segoe UI', Arial"
        >
          ROI Payback
        </text>
        <text
          x="660"
          y="285"
          fontSize="11"
          fontWeight="bold"
          fill="#2ecc71"
          fontFamily="'Segoe UI', Arial"
        >
          5.6 mo
        </text>
      </g>
    </g>

    {/* Action buttons */}
    <rect x="32" y="330" width="148" height="45" rx="8" fill="#7366fe" />
    <text
      x="60"
      y="360"
      fontSize="11"
      fontWeight="bold"
      fill="white"
      fontFamily="'Segoe UI', Arial"
    >
      Generate Brief
    </text>

    <rect
      x="194"
      y="330"
      width="148"
      height="45"
      rx="8"
      fill="white"
      stroke="#7366fe"
      strokeWidth="2"
    />
    <text
      x="215"
      y="360"
      fontSize="11"
      fontWeight="bold"
      fill="#7366fe"
      fontFamily="'Segoe UI', Arial"
    >
      View Comparables
    </text>

    <rect
      x="356"
      y="330"
      width="148"
      height="45"
      rx="8"
      fill="white"
      stroke="#7366fe"
      strokeWidth="2"
    />
    <text
      x="375"
      y="360"
      fontSize="11"
      fontWeight="bold"
      fill="#7366fe"
      fontFamily="'Segoe UI', Arial"
    >
      Export to CRM
    </text>

    <rect
      x="518"
      y="330"
      width="148"
      height="45"
      rx="8"
      fill="#2ecc71"
      opacity="0.1"
    />
    <text
      x="540"
      y="360"
      fontSize="11"
      fontWeight="bold"
      fill="#2ecc71"
      fontFamily="'Segoe UI', Arial"
    >
      ✓ Trusted Partner
    </text>

    {/* Decorative bottom bar */}
    <rect y="415" width="768" height="5" fill="#e0ddf5" />
  </svg>
);

export const IntelligenceThreadsScreen = () => (
  <svg viewBox="0 0 768 420" className="w-full h-full">
    <defs>
      <linearGradient id="threadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#7366fe", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#5b4ed1", stopOpacity: 1 }} />
      </linearGradient>
    </defs>

    {/* Header */}
    <rect width="768" height="70" fill="url(#threadGrad)" />
    <text
      x="32"
      y="45"
      fontSize="24"
      fontWeight="bold"
      fill="white"
      fontFamily="'Segoe UI', Arial"
    >
      Intelligence Threads™
    </text>

    {/* Background */}
    <rect y="70" width="768" height="350" fill="#FDFBF7" />

    {/* Market context */}
    <text
      x="32"
      y="105"
      fontSize="10"
      fontWeight="bold"
      fill="#666"
      fontFamily="'Segoe UI', Arial"
    >
      Unified Market Narrative: Snacking Category | Mumbai West | 24h update
      cycle
    </text>

    {/* Thread 1 - Retail Intelligence */}
    <rect
      x="32"
      y="125"
      width="220"
      height="80"
      rx="10"
      fill="white"
      stroke="#7366fe"
      strokeWidth="1.5"
      opacity="0.95"
    />
    <circle cx="50" cy="142" r="4" fill="#7366fe" />
    <text
      x="62"
      y="148"
      fontSize="11"
      fontWeight="bold"
      fill="#333"
      fontFamily="'Segoe UI', Arial"
    >
      Offline Retail
    </text>

    <text
      x="50"
      y="168"
      fontSize="9"
      fill="#666"
      fontFamily="'Segoe UI', Arial"
    >
      847 outlets monitored
    </text>
    <text
      x="50"
      y="183"
      fontSize="9"
      fill="#666"
      fontFamily="'Segoe UI', Arial"
    >
      Premium shelf: 34%
    </text>
    <text
      x="50"
      y="198"
      fontSize="9"
      fill="#666"
      fontFamily="'Segoe UI', Arial"
    >
      Stock-outs: 2.1% | Trend: ↑
    </text>

    {/* Thread 2 - Online Signals */}
    <rect
      x="274"
      y="125"
      width="220"
      height="80"
      rx="10"
      fill="white"
      stroke="#f5a623"
      strokeWidth="1.5"
      opacity="0.95"
    />
    <circle cx="292" cy="142" r="4" fill="#f5a623" />
    <text
      x="304"
      y="148"
      fontSize="11"
      fontWeight="bold"
      fill="#333"
      fontFamily="'Segoe UI', Arial"
    >
      Online Signals
    </text>

    <text
      x="292"
      y="168"
      fontSize="9"
      fill="#666"
      fontFamily="'Segoe UI', Arial"
    >
      Real-time e-commerce
    </text>
    <text
      x="292"
      y="183"
      fontSize="9"
      fill="#666"
      fontFamily="'Segoe UI', Arial"
    >
      Volume share: 18%
    </text>
    <text
      x="292"
      y="198"
      fontSize="9"
      fill="#666"
      fontFamily="'Segoe UI', Arial"
    >
      Reviews: 4.6/5 | Growth: ↑↑
    </text>

    {/* Thread 3 - Competitive Intelligence */}
    <rect
      x="516"
      y="125"
      width="220"
      height="80"
      rx="10"
      fill="white"
      stroke="#2ecc71"
      strokeWidth="1.5"
      opacity="0.95"
    />
    <circle cx="534" cy="142" r="4" fill="#2ecc71" />
    <text
      x="546"
      y="148"
      fontSize="11"
      fontWeight="bold"
      fill="#333"
      fontFamily="'Segoe UI', Arial"
    >
      Competitive Landscape
    </text>

    <text
      x="534"
      y="168"
      fontSize="9"
      fill="#666"
      fontFamily="'Segoe UI', Arial"
    >
      3 major competitors
    </text>
    <text
      x="534"
      y="183"
      fontSize="9"
      fill="#666"
      fontFamily="'Segoe UI', Arial"
    >
      Your share: 22%
    </text>
    <text
      x="534"
      y="198"
      fontSize="9"
      fill="#666"
      fontFamily="'Segoe UI', Arial"
    >
      Market gap identified: ₹2.3M
    </text>

    {/* Unified narrative box */}
    <rect
      x="32"
      y="225"
      width="704"
      height="95"
      rx="10"
      fill="white"
      stroke="#e0ddf5"
      strokeWidth="1.5"
      opacity="0.95"
    />

    <text
      x="50"
      y="250"
      fontSize="11"
      fontWeight="bold"
      fill="#333"
      fontFamily="'Segoe UI', Arial"
    >
      Unified Market Narrative
    </text>

    <text
      x="50"
      y="275"
      fontSize="9"
      fill="#666"
      fontFamily="'Segoe UI', Arial"
    >
      Snacking category shows strong growth momentum in Mumbai West with offline
      retail leadership
    </text>
    <text
      x="50"
      y="290"
      fontSize="9"
      fill="#666"
      fontFamily="'Segoe UI', Arial"
    >
      (847 SKUs, 34% premium shelf). Online presence expanding rapidly (18%
      share, ↑↑ growth). Your
    </text>
    <text
      x="50"
      y="305"
      fontSize="9"
      fill="#666"
      fontFamily="'Segoe UI', Arial"
    >
      market share stands at 22% with identified growth opportunity of ₹2.3M in
      untapped segments.
    </text>
    <text
      x="50"
      y="320"
      fontSize="9"
      fill="#666"
      fontFamily="'Segoe UI', Arial"
    >
      Recommendation: Aggressive e-commerce push while protecting retail
      leadership.
    </text>

    {/* Data freshness indicator */}
    <rect
      x="32"
      y="340"
      width="704"
      height="30"
      rx="6"
      fill="#f0f5ff"
      opacity="0.8"
    />
    <text
      x="50"
      y="362"
      fontSize="9"
      fill="#666"
      fontFamily="'Segoe UI', Arial"
    >
      Data Sources: 47 APIs | Update Frequency: Real-time | Last Sync: 12
      minutes ago | Confidence: 92%
    </text>

    {/* Decorative bottom bar */}
    <rect y="415" width="768" height="5" fill="#e0ddf5" />
  </svg>
);

export const PulseDashboardPreview = () => <div className='w-full h-full bg-slate-800 rounded-xl flex items-center justify-center'><span className='text-white'>Dashboard Preview</span></div>;
