"use client";

import { motion } from "framer-motion";
import { Calendar, Sparkles } from "lucide-react";

const updates = [
  {
    month: "June 2025",
    title: "Pincode Viability Score 2.0",
    items: [
      "Expanded coverage to 15,000+ pincodes across India",
      "Added competitive intensity layer using new retailer data partnerships",
      "Introduced seasonal adjustment factors for category seasonality",
    ],
  },
  {
    month: "May 2025",
    title: "Scheme Simulator Launch",
    items: [
      "New AI model trained on 3 years of distributor scheme performance data",
      "Real-time margin impact calculations",
      "Integration with distributor co-pilot for end-to-end workflow",
    ],
  },
  {
    month: "April 2025",
    title: "Revenue Leakage Detection Engine",
    items: [
      "New capability to identify channel conflict patterns",
      "Automated detection of coverage gaps in existing market portfolio",
      "Integration with board-ready playbook generator for action planning",
    ],
  },
  {
    month: "March 2025",
    title: "Distributor Appointment Co-pilot",
    items: [
      "Launched with 2,500+ verified distributor profiles",
      "Performance scoring based on historical category data",
      "Financial structure recommendations using benchmark database",
    ],
  },
  {
    month: "February 2025",
    title: "Platform Beta Launch",
    items: [
      "Online-to-Offline Recognition Multiplier Calculator",
      "Initial Pincode Viability Scoring",
      "Board-ready playbook generation",
    ],
  },
];

export default function Changelog() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="changelog" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FDFBF7]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
            What's New
          </h2>
          <p className="text-lg text-[#0F172A]/60 max-w-2xl mx-auto">
            Recent product updates and feature releases
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {updates.map((update, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative pl-8 md:pl-0 md:grid md:grid-cols-12 md:gap-8 items-start"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:col-span-1 md:relative md:flex md:justify-center">
                <div className="absolute left-0 md:relative w-4 h-4 bg-[#E85D04] rounded-full border-4 border-[#FDFBF7] mt-2 md:mt-4" />
                {index !== updates.length - 1 && (
                  <div className="absolute left-[7px] md:left-1/2 md:-ml-0.5 top-4 md:top-8 w-0.5 h-20 md:h-32 bg-[#F8F5F0]" />
                )}
              </div>

              {/* Content */}
              <motion.div
                className="md:col-span-11 bg-white rounded-xl p-6 border border-[#F8F5F0] hover:shadow-lg transition-shadow"
                whileHover={{ y: -3 }}
              >
                {/* Month & Title */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-[#E85D04]" />
                      <span className="text-sm font-semibold text-[#E85D04] uppercase tracking-wide">
                        {update.month}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#0F172A]">
                      {update.title}
                    </h3>
                  </div>
                  <Sparkles className="w-5 h-5 text-[#E85D04] flex-shrink-0" />
                </div>

                {/* Items */}
                <ul className="space-y-2">
                  {update.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[#E85D04] font-bold mt-1">•</span>
                      <span className="text-base text-[#0F172A]/70">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Link */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 text-[#E85D04] font-semibold hover:gap-3 transition-all"
            whileHover={{ x: 5 }}
          >
            View All Updates
            <span>→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
