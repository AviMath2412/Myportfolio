"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/data/content";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = Object.entries(skills);

  return (
    <section id="skills" ref={ref} className="py-40 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-16 text-white relative inline-block">
            Skills
            <span className="absolute -bottom-2 left-0 w-20 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"></span>
          </h2>

          <div className="max-w-4xl space-y-12">
            {categories.map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="minimal-card rounded-lg p-6 border border-transparent bg-gradient-to-br from-zinc-900/50 to-zinc-800/50 hover:border-indigo-500/30 hover:bg-white/5 transition-all"
              >
                <h3 className="text-sm font-medium mb-4 text-accent uppercase tracking-wider">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className={`px-4 py-2 rounded text-sm transition-all ${
                        category === "Currently Learning"
                          ? "bg-white/5 border border-white/10 text-text/60 text-xs"
                          : "bg-white/5 text-text/80 hover:bg-white/10"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
