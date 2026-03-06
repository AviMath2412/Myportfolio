"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { achievements } from "@/data/content";

const filterTypes = [
  { label: "All", value: "all" },
  { label: "Certifications", value: "certification" },
  { label: "Achievements", value: "achievement" },
  { label: "Hackathons", value: "hackathon" },
];

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("all");
  const prefersReduced = useReducedMotion();

  const filteredAchievements = achievements.filter(
    (achievement: any) => activeFilter === "all" || achievement.type === activeFilter
  );

  return (
    <section id="achievements" ref={ref} className="section-padding relative">
      <div className="container-custom">
        <ScrollReveal>
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: prefersReduced ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Section header */}
            <div className="mb-12 text-center">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-caption text-zinc-500 mb-4 block"
              >
                Recognition & Impact
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-heading-1 mb-6 text-white"
              >
                Notable <span className="accent-gradient">Achievements</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-body text-zinc-500 max-w-2xl mx-auto"
              >
                Recognition for contributions to AI innovation, hackathons, and professional certifications
              </motion.p>
            </div>

            {/* Filter tabs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-3 justify-center mb-10"
            >
              {filterTypes.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === filter.value
                    ? "text-black dark:text-black"
                    : "text-zinc-500 hover:text-white"
                    }`}
                >
                  {activeFilter === filter.value && (
                    <motion.div
                      layoutId="activeFilterTab"
                      className="absolute inset-0 rounded-full bg-white"
                    />
                  )}
                  <span className="relative z-10">{filter.label}</span>
                </button>
              ))}
            </motion.div>

            {/* Achievements grid */}
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
            >
              {filteredAchievements.map((achievement: any, index: number) => (
                <motion.div
                  key={achievement.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="relative glass-card rounded-2xl p-6 overflow-hidden group"
                >
                  {/* Minimal Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-1.5 h-6 bg-zinc-700 group-hover:bg-white transition-colors" />
                    <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
                      {achievement.type}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-white mb-3 leading-snug group-hover:text-zinc-300 transition-colors">
                    {achievement.title}
                  </h3>

                  <p className="text-[10px] text-zinc-500 font-mono tracking-tighter">
                    {achievement.validity}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-center mt-16"
            >
              <p className="text-body text-zinc-500 mb-6">
                Continuously seeking opportunities to contribute to innovative projects and technological advancement
              </p>
              <a
                href="#projects"
                className="premium-button inline-flex items-center gap-2"
              >
                View My Projects
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}