"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { skills } from "@/data/content";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const categories = Object.keys(skills);
  const [active, setActive] = useState(categories[0]);

  return (
    <section id="skills" ref={ref} className="section-padding relative">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-caption text-zinc-500 mb-3 block">Technical Arsenal</span>
          <h2 className="text-heading-1 mb-4 text-white">
            Skills &amp; <span className="accent-gradient">Technologies</span>
          </h2>
          <p className="text-body text-zinc-500 max-w-lg mx-auto">
            A curated stack built for AI engineering, modern web development, and cloud infrastructure.
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-250 ${active === cat
                ? "text-black dark:text-black"
                : "text-zinc-500 hover:text-zinc-300"
                }`}
            >
              {active === cat && (
                <motion.div
                  layoutId="skills-tab"
                  className="absolute inset-0 rounded-full -z-10 bg-white"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto min-h-[140px]"
          >
            {(skills[active] ?? []).map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.04, duration: 0.25 }}
                whileHover={{ scale: 1.06, y: -2 }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card cursor-default"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 flex-shrink-0" />
                <span className="text-sm font-medium text-zinc-300">
                  {skill}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}