"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { about, certifications } from "@/data/content";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-40 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-16 text-white relative inline-block">
            About
            <span className="absolute -bottom-2 left-0 w-20 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"></span>
          </h2>

          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="mb-16"
            >
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                {about.intro}
              </p>

              <p className="text-base text-text/70 leading-relaxed mb-12">
                {about.builds}
              </p>

              <div className="mb-8">
                <h3 className="text-sm font-medium mb-3 text-accent uppercase tracking-wider">
                  Education
                </h3>
                <p className="text-base text-text/80 leading-relaxed">{about.education}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-4 text-accent uppercase tracking-wider">
                  Currently Exploring
                </h3>
                <div className="flex flex-wrap gap-2">
                  {about.exploring.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-text/70"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-sm font-medium mb-6 text-accent uppercase tracking-wider">
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="minimal-card rounded-lg p-6"
                  >
                    <h4 className="font-medium mb-1 text-white text-sm">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-text/50">{cert.validity}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
