"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/data/content";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="py-40 mt-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-16 text-white relative inline-block">
            Experience
            <span className="absolute -bottom-2 left-0 w-20 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"></span>
          </h2>

          <div className="max-w-4xl space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className="minimal-card rounded-lg p-8 border border-transparent bg-gradient-to-br from-zinc-900/50 to-zinc-800/50 hover:border-indigo-500/30 hover:bg-white/5 transition-all"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-heading font-bold text-white">
                    {exp.company}
                  </h3>
                  <span className="text-xs text-text/50 whitespace-nowrap ml-4">
                    {exp.duration}
                  </span>
                </div>
                <p className="text-xs text-text/50 mb-2">{exp.description}</p>
                <p className="text-sm text-accent mb-6">{exp.role}</p>
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-text/70 text-sm"
                    >
                      <span className="text-white mt-1 text-xs">—</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
