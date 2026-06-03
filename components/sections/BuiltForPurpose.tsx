"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function BuiltForPurpose() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const benefits = [
    "Need to move faster than their competition",
    "Can't afford the $200K+ McKinsey engagement",
    "Know that online data alone misses 60% of the retail story",
    "Want to identify revenue leakage before it drains their runway",
    "Need board-ready confidence for their next funding round",
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left Content */}
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6 leading-tight">
              Built for Purpose:{" "}
              <span className="text-[#E85D04]">
                From "Help Me Find Data" to "Make the Decision for Me"
              </span>
            </h2>

            <p className="text-lg text-[#0F172A]/70 mb-6 leading-relaxed">
              The world of retail intelligence has changed. D2C founders no
              longer have time to wade through dashboards, export CSVs, and
              guess their way to market expansion.
            </p>

            <div className="space-y-4 mb-8">
              <p className="text-base text-[#0F172A]/60 font-semibold">
                While <span className="text-[#E85D04]">other platforms</span>{" "}
                show you charts, we{" "}
                <span className="text-[#0F172A] font-bold">
                  prescribe actions.
                </span>
              </p>
              <p className="text-base text-[#0F172A]/60 font-semibold">
                While <span className="text-[#E85D04]">competitors</span> give
                you data, we give you{" "}
                <span className="text-[#0F172A] font-bold">decisions.</span>
              </p>
              <p className="text-base text-[#0F172A]/60 font-semibold">
                While <span className="text-[#E85D04]">the market</span> tells
                you what happened, we tell you{" "}
                <span className="text-[#0F172A] font-bold">
                  what to do next.
                </span>
              </p>
            </div>

            <h3 className="text-2xl font-bold text-[#0F172A] mb-4">
              We built this for founders who:
            </h3>
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CheckCircle2 className="w-6 h-6 text-[#E85D04] flex-shrink-0 mt-1" />
                  <span className="text-base text-[#0F172A]/70">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Philosophy */}
          <motion.div
            variants={itemVariants}
            className="bg-[#FCF5ED] rounded-2xl p-8"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-[#0F172A] mb-4">
                The Strategic Playbook Philosophy
              </h3>
              <p className="text-base text-[#0F172A]/70 leading-relaxed mb-4">
                Your product is unique. Your market is specific. Your GTM
                strategy should be built for your context—not a generic
                template.
              </p>
              <p className="text-base text-[#0F172A]/70 leading-relaxed mb-4">
                Our AI fuses{" "}
                <span className="font-semibold text-[#E85D04]">
                  proprietary offline retail intelligence
                </span>{" "}
                (the kind only Nestlé used to have) with{" "}
                <span className="font-semibold">online signals</span> to build
                you a{" "}
                <span className="font-semibold">custom expansion roadmap</span>{" "}
                that's prescriptive, not descriptive.
              </p>
              <p className="text-lg font-semibold text-[#0F172A]">
                The result? A{" "}
                <span className="text-[#E85D04]">
                  90-day execution playbook
                </span>{" "}
                that your board will love and your team can actually implement.
              </p>
            </div>

            {/* Stats Box */}
            <div className="bg-white rounded-lg p-6 border border-[#F8F5F0]">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#E85D04] mb-2">
                  3.2x
                </div>
                <p className="text-sm text-[#0F172A]/60">
                  Higher conversion rates in new markets for brands with strong
                  online-to-offline recognition
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
