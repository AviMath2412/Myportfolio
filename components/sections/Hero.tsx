"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/content";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-gradient-to-b from-black to-[#1a1a1a]">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-heading text-5xl md:text-7xl font-bold mb-6 text-white"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 font-heading bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
          >
            {personalInfo.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-base md:text-lg text-text/70 mb-4 max-w-2xl leading-relaxed"
          >
            {personalInfo.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-sm md:text-base text-text/50 mb-12 max-w-2xl leading-relaxed"
          >
            {personalInfo.impact}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-white text-bg rounded font-medium hover:bg-accent hover:scale-105 transition-all text-sm shadow-lg"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              className="px-6 py-4 minimal-card rounded font-medium hover:bg-white/5 hover:scale-105 transition-all text-sm"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-4 minimal-card rounded font-medium hover:bg-white/5 hover:scale-105 transition-all text-sm"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Minimal Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-px h-16 bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>
    </section>
  );
}
