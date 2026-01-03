"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/data/content";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = Object.entries(skills);

  // Define category colors and icons
  const categoryStyles: Record<string, { color: string; icon: string }> = {
    "Languages": { color: "from-blue-500/20 to-cyan-500/20", icon: "💻" },
    "AI/ML": { color: "from-purple-500/20 to-pink-500/20", icon: "🤖" },
    "Web": { color: "from-green-500/20 to-emerald-500/20", icon: "🌐" },
    "Cloud & Tools": { color: "from-orange-500/20 to-red-500/20", icon: "☁️" },
    "Currently Learning": { color: "from-yellow-500/20 to-amber-500/20", icon: "📚" },
  };

  return (
    <section id="skills" ref={ref} className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Section header */}
          <div className="mb-5 text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-caption text-indigo-400 mb-4 block"
            >
              Technical Expertise
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-heading-1 mb-6"
            >
              Skills & <span className="accent-gradient">Technologies</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-body text-zinc-400 max-w-2xl mx-auto"
            >
              A comprehensive toolkit for building modern, scalable applications and AI-powered solutions
            </motion.p>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {categories.map(([category, items], index) => {
              const style = categoryStyles[category] || categoryStyles["Languages"];
              
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  className={`glass-card rounded-xl p-6 group hover:scale-[1.02] transition-all duration-300 ${
                    category === "Currently Learning" ? "lg:col-span-3" : ""
                  }`}
                >
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${style.color} flex items-center justify-center text-xl group-hover:scale-110 transition-transform`}>
                      {style.icon}
                    </div>
                    <div>
                      <h3 className="text-heading-3 text-white group-hover:text-indigo-300 transition-colors">
                        {category}
                      </h3>
                      <p className="text-caption text-zinc-500">
                        {items.length} {items.length === 1 ? 'skill' : 'skills'}
                      </p>
                    </div>
                  </div>

                  {/* Skills list */}
                  <div className={`flex flex-wrap gap-2 ${
                    category === "Currently Learning" ? "justify-center" : ""
                  }`}>
                    {items.map((skill, skillIndex) => {
                      // Add context labels for specific skills
                      const skillContext: Record<string, string> = {
                        "TensorFlow": "Medical imaging (NeuroScan AI)",
                        "Vector Search Pipelines": "Oracle AI certification",
                        "FastAPI": "Backend APIs (projects)"
                      };
                      const context = skillContext[skill];
                      
                      return (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ 
                            delay: 0.6 + index * 0.1 + skillIndex * 0.05, 
                            duration: 0.4 
                          }}
                          className="flex flex-col gap-1"
                        >
                          <span className={`px-3 py-1.5 rounded-lg text-body-small transition-all ${
                            category === "Currently Learning"
                              ? "bg-yellow-500/10 text-yellow-300 border border-yellow-500/20 hover:bg-yellow-500/20"
                              : "bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-white"
                          }`}>
                            {skill}
                          </span>
                          {context && (
                            <span className="text-caption text-zinc-500 px-3">
                              {context}
                            </span>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center mt-16"
          >
            <p className="text-body text-zinc-400 mb-6">
              Always learning and exploring new technologies to stay at the forefront of innovation
            </p>
            <a
              href="#projects"
              className="secondary-button inline-flex items-center gap-2"
            >
              See Skills in Action
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
