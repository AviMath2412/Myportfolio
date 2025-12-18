"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const achievements = [
  {
    title: "Smart India Hackathon 2025",
    role: "Grand Finale Volunteer",
    description: "Selected as a volunteer for India's largest hackathon organized by the Ministry of Education, Government of India",
    icon: "🏆",
    color: "from-yellow-500/20 to-orange-500/20",
    highlights: [
      "Ministry of Education, Government of India initiative",
      "Grand Finale volunteer selection",
      "Supporting innovation and technology development",
      "Facilitating collaboration among top innovators",
    ],
  },
  {
    title: "Oracle AI Vector Search",
    role: "Certified Professional",
    description: "Oracle-certified professional in AI Vector Search technology, valid through October 2027",
    icon: "🎯",
    color: "from-red-500/20 to-orange-500/20",
    highlights: [
      "Advanced vector database expertise",
      "AI-powered search implementations",
      "Production-grade vector solutions",
      "Valid through October 2027",
    ],
  },
  {
    title: "SBI Life Hack-AI-Thon",
    role: "Participant",
    description: "Participated in SBI Life's AI-focused hackathon, contributing to innovative financial technology solutions",
    icon: "🤖",
    color: "from-purple-500/20 to-pink-500/20",
    highlights: [
      "AI solutions for financial services",
      "Innovative fintech development",
      "Collaborative problem-solving",
      "Industry-focused innovation",
    ],
  },
];

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" ref={ref} className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Section header */}
          <div className="mb-20 text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-caption text-indigo-400 mb-4 block"
            >
              Recognition & Impact
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-heading-1 mb-6"
            >
              Notable <span className="accent-gradient">Achievements</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-body text-zinc-400 max-w-2xl mx-auto"
            >
              Recognition for contributions to AI innovation, hackathons, and professional certifications
            </motion.p>
          </div>

          {/* Achievements grid */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                className="glass-card rounded-2xl p-8 group hover:scale-[1.02] transition-all duration-500"
              >
                {/* Achievement header */}
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}>
                    {achievement.icon}
                  </div>
                  <h3 className="text-heading-3 text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-body text-indigo-400 font-medium mb-3">
                    {achievement.role}
                  </p>
                  <p className="text-body-small text-zinc-400 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>

                {/* Highlights */}
                <div className="space-y-3">
                  {achievement.highlights.map((highlight, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 text-body-small text-zinc-300"
                    >
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2 flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center mt-16"
          >
            <p className="text-body text-zinc-400 mb-6">
              Continuously seeking opportunities to contribute to innovative projects and technological advancement
            </p>
            <a
              href="#projects"
              className="secondary-button inline-flex items-center gap-2"
            >
              View My Projects
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}