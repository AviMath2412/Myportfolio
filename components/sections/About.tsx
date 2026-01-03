"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { about, achievements } from "@/data/content";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Section header */}
          <div className="mb-5">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-caption text-indigo-400 mb-4 block"
            >
              About Me
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-heading-1 mb-6"
            >
              Building the future with{" "}
              <span className="accent-gradient">intelligent systems</span>
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="space-y-6"
              >
                <p className="text-body-large text-zinc-300 leading-relaxed">
                  {about.intro}
                </p>

                <p className="text-body text-zinc-400 leading-relaxed">
                  {about.builds}
                </p>
              </motion.div>

              {/* Education */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="glass-card rounded-xl p-6"
              >
                <h3 className="text-caption text-indigo-400 mb-3">Education</h3>
                <p className="text-body text-zinc-300">{about.education}</p>
              </motion.div>

              {/* Currently exploring */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <h3 className="text-caption text-indigo-400 mb-4">Currently Exploring</h3>
                <div className="flex flex-wrap gap-3">
                  {about.exploring.map((item, index) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                      className="px-4 py-2 glass-card rounded-full text-body-small text-zinc-300 hover:text-white transition-colors"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Certifications sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <h3 className="text-caption text-indigo-400 mb-6">Achievements & Certifications</h3>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                      className="glass-card rounded-lg p-4 group hover:scale-[1.02] transition-transform"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">{achievement.icon}</span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="text-body-small font-medium text-white group-hover:text-indigo-300 transition-colors">
                              {achievement.title}
                            </h4>
                            <span className={`px-2 py-0.5 rounded-full text-xs ${
                              achievement.type === 'certification' ? 'bg-blue-500/20 text-blue-300' :
                              achievement.type === 'hackathon' ? 'bg-purple-500/20 text-purple-300' :
                              'bg-green-500/20 text-green-300'
                            }`}>
                              {achievement.type}
                            </span>
                          </div>
                          <p className="text-caption text-zinc-500">{achievement.validity}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
