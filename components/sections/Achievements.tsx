"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const achievementsData = [
  {
    title: "Apple Swift Student Challenge 2026 — Winner",
    type: "achievement",
    validity: "2026 · Selected globally among top student developers",
  },
  {
    title: "Meta × PyTorch OpenEnv Hackathon — Grand Finalist",
    type: "hackathon",
    validity: "2026 · Top teams out of 52,000+ registered developers",
  },
  {
    title: "AWS Academy Graduate — Cloud Foundations",
    type: "certification",
    validity: "Apr 2026 · Issued by Amazon Web Services",
  },
  {
    title: "Oracle OCI 2025 Generative AI Professional",
    type: "certification",
    validity: "Oct 2025 · Valid through 2027",
  },
  {
    title: "Oracle AI Vector Search Certified Professional",
    type: "certification",
    validity: "Oct 2025 · Valid through 2027",
  },
  {
    title: "Led technical teams at EY Techathon 5.0 & SBI Life Hack-AI-Thon",
    type: "hackathon",
    validity: "National AI-focused hackathons",
  },
];

const filterTypes = [
  { label: "Certifications", value: "certification" },
  { label: "Achievements", value: "achievement" },
  { label: "Hackathons", value: "hackathon" },
];

const typeLabel: Record<string, string> = {
  certification: "Certification",
  hackathon: "Hackathon",
  achievement: "Achievement",
};

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("certification");
  const prefersReduced = useReducedMotion();

  const filteredAchievements = achievementsData.filter(
    (achievement) =>
      activeFilter === "all" || achievement.type === activeFilter
  );

  return (
    <section
      id="achievements"
      ref={ref}
      className="section-padding relative scroll-mt-[100px]"
    >
      <div className="container-custom">
        <ScrollReveal>
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: prefersReduced ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Section header */}
            <div className="mb-14">
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-[11px] uppercase tracking-[0.2em] text-zinc-500 mb-3"
              >
                Recognition & Impact
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="text-2xl font-semibold text-white tracking-tight"
              >
                Achievements
              </motion.h2>
            </div>

            {/* Filter tabs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.25 }}
              className="flex flex-wrap gap-1 mb-12"
            >
              {filterTypes.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  className={`relative px-4 py-1.5 rounded-md text-xs font-medium transition-all duration-200 ${
                    activeFilter === filter.value
                      ? "bg-white/10 text-white"
                      : "text-zinc-500 hover:text-zinc-300 hover:bg-white/5"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </motion.div>

            {/* Achievements list */}
            <motion.div layout className="flex flex-col divide-y divide-white/[0.06]">
              {filteredAchievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.35 }}
                  className="group flex items-start justify-between gap-6 py-5 hover:bg-white/[0.02] transition-colors duration-200 px-2 -mx-2 rounded-lg cursor-default"
                >
                  {/* Left: title + description */}
                  <div className="flex items-start gap-4 min-w-0">
                    {/* Dot indicator */}
                    <div
                      className={`mt-[7px] flex-shrink-0 w-1.5 h-1.5 rounded-full ${
                        achievement.type === "certification"
                          ? "bg-sky-400"
                          : achievement.type === "hackathon"
                          ? "bg-amber-400"
                          : "bg-indigo-400"
                      }`}
                    />
                    <div className="min-w-0">
                      <p className="text-[14px] font-medium text-zinc-100 leading-snug mb-1 group-hover:text-white transition-colors">
                        {achievement.title}
                      </p>
                      {achievement.validity && (
                        <p className="text-[12px] text-zinc-500 leading-relaxed">
                          {achievement.validity}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Right: type label */}
                  <span className="flex-shrink-0 text-[11px] uppercase tracking-[0.12em] text-zinc-600 group-hover:text-zinc-500 transition-colors pt-0.5">
                    {typeLabel[achievement.type] ?? achievement.type}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-16 pt-8 border-t border-white/[0.06] flex items-center justify-between"
            >
              <p className="text-[13px] text-zinc-500">
                Continuously seeking opportunities to contribute to innovative research
              </p>
                <a
                    href="#projects"

                className="text-[13px] text-zinc-300 hover:text-white transition-colors flex items-center gap-2 group"
              >
                View Projects
                <svg
                  className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}