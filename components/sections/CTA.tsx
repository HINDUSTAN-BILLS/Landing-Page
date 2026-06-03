"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    category: "",
    goals: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Main CTA */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Ready to Launch with{" "}
            <span className="text-[#E85D04]">Precision Intelligence?</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-white/70 mb-8 max-w-2xl mx-auto"
          >
            Join D2C founders who are replacing months of guesswork with 48
            hours of AI-powered clarity. Your board-ready playbook is waiting.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-4"
          >
            <motion.button
              className="px-8 py-4 bg-[#E85D04] text-white rounded-lg font-semibold text-lg hover:bg-[#d84c00] transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Your Free Market Assessment
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Demo
            </motion.button>
          </motion.div>

          <motion.p variants={itemVariants} className="text-sm text-white/50">
            No credit card required. Get your first pincode viability analysis
            in 10 minutes.
          </motion.p>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-white/10 my-16" />

        {/* Contact Sales Section */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left - Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold mb-4">
              Need a Custom Enterprise Solution?
            </h3>
            <p className="text-white/70 mb-6">
              For brands with complex expansion needs, multi-category
              portfolios, or custom data integration requirements, our team
              builds tailored solutions.
            </p>

            {/* Contact Options */}
            <div className="space-y-4">
              <motion.button
                className="w-full px-6 py-3 bg-[#E85D04] text-white rounded-lg font-semibold hover:bg-[#d84c00] transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Sales
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <div className="pt-4 space-y-3 border-t border-white/10">
                <div>
                  <p className="text-sm text-white/50 uppercase tracking-wide mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:hello@yourcompany.com"
                    className="text-white hover:text-[#E85D04] transition-colors font-medium"
                  >
                    hello@yourcompany.com
                  </a>
                </div>
                <div>
                  <p className="text-sm text-white/50 uppercase tracking-wide mb-1">
                    Phone
                  </p>
                  <p className="text-white font-medium">+91 (Coming soon)</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            variants={itemVariants}
            className="bg-white/5 rounded-2xl p-8 border border-white/10"
          >
            <h4 className="text-xl font-bold mb-6">Send us a message</h4>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#E85D04] transition-colors"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Company"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#E85D04] transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#E85D04] transition-colors"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#E85D04] transition-colors"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Category / Industry"
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#E85D04] transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder="Expansion Goals"
                  value={formData.goals}
                  onChange={(e) =>
                    setFormData({ ...formData, goals: e.target.value })
                  }
                  rows={3}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#E85D04] transition-colors resize-none"
                />
              </div>

              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-[#E85D04] text-white rounded-lg font-semibold hover:bg-[#d84c00] transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Submit
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16 p-8 bg-gradient-to-r from-[#E85D04]/10 to-transparent rounded-2xl border border-[#E85D04]/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-2">
            The Future of GTM Strategy is{" "}
            <span className="text-[#E85D04]">
              Prescriptive, Not Descriptive
            </span>
          </h3>
          <p className="text-white/70 mb-6">
            Stop paying for data you have to interpret. Start getting decisions
            you can execute.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="px-8 py-3 bg-[#E85D04] text-white rounded-lg font-semibold hover:bg-[#d84c00] transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Free Assessment
            </motion.button>
            <motion.button
              className="px-8 py-3 border-2 border-white/50 text-white rounded-lg font-semibold hover:border-white transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Pricing
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
