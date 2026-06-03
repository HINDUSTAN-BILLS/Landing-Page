"use client";

import { motion } from "framer-motion";
import { Lightbulb, TrendingUp, Rocket, ShoppingCart } from "lucide-react";

const useCases = [
  {
    id: 1,
    title: "First-Time D2C Founders",
    icon: Lightbulb,
    challenge:
      "You've built a great product. You've proven online traction. Now you need to crack offline distribution—but you don't know where to start, and you can't afford expensive consultants.",
    benefits: [
      "Replace 6-month consulting engagements with 48-hour AI analysis",
      "Get the confidence of data-backed recommendations for your first market expansion",
      "Build credibility with investors through board-ready strategic documents",
      "Avoid costly mistakes in distributor selection and scheme design",
    ],
    keyBenefit:
      "Enterprise-grade GTM strategy at startup-friendly speed and cost.",
    color: "#E85D04",
  },
  {
    id: 2,
    title: "Growth-Stage D2C Brands",
    icon: TrendingUp,
    challenge:
      "You're in 5-10 markets and seeing momentum. But expansion is getting harder—you're not sure which markets to prioritize, and your current channel mix may be cannibalizing itself.",
    benefits: [
      "Identify revenue leakage across your existing market portfolio",
      "Pinpoint the highest-ROI markets for your next phase of expansion",
      "Optimize distributor schemes in existing markets to improve margins",
      "Develop a systematic expansion sequence that balances growth and risk",
    ],
    keyBenefit:
      "Accelerate your path to profitability with precision expansion planning.",
    color: "#0F172A",
  },
  {
    id: 3,
    title: "Investor-Backed D2C Scale-ups",
    icon: Rocket,
    challenge:
      "Your board wants a clear path to Series B/C metrics. You need to show disciplined, data-driven market expansion—but your internal team lacks the retail intelligence infrastructure.",
    benefits: [
      "Deliver board-ready strategic playbooks that satisfy investor due diligence",
      "Provide defensible market prioritization based on proprietary data",
      "Enable rapid expansion without proportionally scaling your strategy team",
      "Create systematic documentation of GTM decisions for future fundraising",
    ],
    keyBenefit:
      "Scale your market presence with the strategic rigor of a much larger company.",
    color: "#E85D04",
  },
  {
    id: 4,
    title: "Omnichannel Transition",
    icon: ShoppingCart,
    challenge:
      "You're primarily online and want to build meaningful offline presence—but you're worried about channel conflict and don't know which offline markets will respond to your brand.",
    benefits: [
      "Calculate your online-to-offline recognition multiplier by market",
      "Identify markets where your digital brand awareness will accelerate offline adoption",
      "Design channel-specific pricing and positioning to minimize conflict",
      "Sequence your offline entry to capture the highest-conversion opportunities first",
    ],
    keyBenefit:
      "Build offline revenue streams that complement (not cannibalize) your online business.",
    color: "#0F172A",
  },
];

export default function UseCases() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="usecases" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
            Who We're Built For
          </h2>
          <p className="text-lg text-[#0F172A]/60 max-w-2xl mx-auto">
            Four founder archetypes. Four different challenges. One platform
            that solves them all.
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {useCases.map((useCase) => {
            const IconComponent = useCase.icon;
            const isOrange = useCase.color === "#E85D04";

            return (
              <motion.div
                key={useCase.id}
                variants={itemVariants}
                className={`rounded-2xl p-8 border border-[#F8F5F0] transition-all hover:shadow-lg ${
                  isOrange
                    ? "bg-gradient-to-br from-[#E85D04]/5 to-[#E85D04]/0"
                    : "bg-[#FCF5ED]"
                }`}
                whileHover={{ y: -5 }}
              >
                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-4">
                  <motion.div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: useCase.color + "15" }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <IconComponent
                      className="w-6 h-6"
                      style={{ color: useCase.color }}
                    />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-[#0F172A] mt-2">
                    {useCase.title}
                  </h3>
                </div>

                {/* Challenge */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-[#E85D04] uppercase tracking-wide mb-2">
                    The Challenge
                  </h4>
                  <p className="text-base text-[#0F172A]/70 leading-relaxed">
                    {useCase.challenge}
                  </p>
                </div>

                {/* How We Help */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-[#0F172A] uppercase tracking-wide mb-3">
                    How We Help
                  </h4>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-[#E85D04] font-bold flex-shrink-0">
                          ✓
                        </span>
                        <span className="text-sm text-[#0F172A]/70">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Benefit */}
                <div className="pt-4 border-t border-[#F8F5F0]">
                  <p className="text-base font-semibold text-[#0F172A]">
                    <span className="text-[#E85D04]">Key Benefit:</span>{" "}
                    {useCase.keyBenefit}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
