"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CredibilityStrip() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const credibilityItems = [
    {
      type: "metric",
      title: "Automation Impact",
      highlight: "−40% manual work reduction",
      icon: "⚡"
    },
    {
      type: "metric",
      title: "User Scale",
      highlight: "500+ users",
      icon: "👥"
    },
    {
      type: "metric",
      title: "Efficiency Gain",
      highlight: "45% approval time reduction",
      icon: "⏱️"
    }
  ];

  return (
    <section ref={ref} className="section-padding relative bg-gradient-to-b from-transparent via-zinc-900/30 to-transparent">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Section header */}
          <div className="mb-10 text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-caption text-indigo-400 mb-4 block"
            >
              Trust Signals
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-heading-1 mb-6"
            >
              Proven <span className="accent-gradient">Impact</span>
            </motion.h2>
          </div>

          {/* Credibility items */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {credibilityItems.map((item, index) => (
              <motion.div
                key={`${item.type}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                className="glass-card rounded-xl p-6 group hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl flex-shrink-0 ${
                    "bg-indigo-500/20"
                  }`}>
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-heading-3 text-white mb-2 group-hover:text-indigo-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-body-small text-zinc-400 leading-relaxed">
                      {item.highlight}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

