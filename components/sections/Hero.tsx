"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { personalInfo } from "@/data/content";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-6xl"
        >
          <div>
            <p className="mb-4 text-sm text-zinc-500 dark:text-zinc-500">Hi, I am</p>
            <h1 className="hero-dot-title mb-5">
              AVI MATHUR
              <br />
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-zinc-400">
              {personalInfo.subtitle}
            </p>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
              Jaipur, India
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="/Mathur_Avi_resume.pdf"
                download="Avi_Mathur_Research_Resume.pdf"
                className="primary-pill"
              >
                Resume
              </a>
              <a href="#contact" className="secondary-pill">
                Contact Me
              </a>
            </div>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}