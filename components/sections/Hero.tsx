"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { personalInfo } from "@/data/content";
import { PulseBeams } from "@/components/ui/pulse-beams";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
  loading: () => null,
});

const ROLES = [
  "AI/ML Engineer",
  "Full Stack Developer",
  "LLM Automation Builder",
];

const BEAMS = [
  {
    path: "M269 220.5H16.5C10.9772 220.5 6.5 224.977 6.5 230.5V398.5",
    gradientConfig: {
      initial: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" },
      animate: {
        x1: ["0%", "0%", "200%"],
        x2: ["0%", "0%", "180%"],
        y1: ["80%", "0%", "0%"],
        y2: ["100%", "20%", "20%"],
      },
      transition: { duration: 2, repeat: Infinity, repeatType: "loop" as const, ease: "linear", repeatDelay: 2, delay: Math.random() * 2 },
    },
    connectionPoints: [{ cx: 6.5, cy: 398.5, r: 6 }, { cx: 269, cy: 220.5, r: 6 }]
  },
  {
    path: "M568 200H841C846.523 200 851 195.523 851 190V40",
    gradientConfig: {
      initial: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" },
      animate: {
        x1: ["20%", "100%", "100%"],
        x2: ["0%", "90%", "90%"],
        y1: ["80%", "80%", "-20%"],
        y2: ["100%", "100%", "0%"],
      },
      transition: { duration: 2, repeat: Infinity, repeatType: "loop" as const, ease: "linear", repeatDelay: 2, delay: Math.random() * 2 },
    },
    connectionPoints: [{ cx: 851, cy: 34, r: 6.5 }, { cx: 568, cy: 200, r: 6 }]
  },
  {
    path: "M425.5 274V333C425.5 338.523 421.023 343 415.5 343H152C146.477 343 142 347.477 142 353V426.5",
    gradientConfig: {
      initial: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" },
      animate: {
        x1: ["0%", "0%", "200%"],
        x2: ["0%", "0%", "180%"],
        y1: ["80%", "0%", "0%"],
        y2: ["100%", "20%", "20%"],
      },
      transition: { duration: 2, repeat: Infinity, repeatType: "loop" as const, ease: "linear", repeatDelay: 2, delay: Math.random() * 2 },
    },
    connectionPoints: [{ cx: 142, cy: 427, r: 6.5 }, { cx: 425.5, cy: 274, r: 6 }]
  }
];

function TypingRole() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 55);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
    } else {
      setDeleting(false);
      setIndex((p) => (p + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, index]);

  return (
    <div className="flex items-center gap-1.5 h-8 mb-5">
      <span className="text-lg font-mono font-medium text-zinc-400">
        {displayed}
      </span>
      <span
        className="inline-block w-0.5 h-5 rounded-full bg-zinc-500"
        style={{
          animation: "blink 1s ease-in-out infinite",
        }}
      />
    </div>
  );
}

const STATS = [
  { value: "95%+", label: "Model Accuracy" },
  // { value: "500+", label: "Users Served" },
  { value: "2×", label: "Oracle Certified" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-transparent"
    >
      {/* Background Effect: PulseBeams */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <PulseBeams
          beams={BEAMS}
          width={1000}
          height={600}
          baseColor="#27272a"
          accentColor="#52525b"
          gradientColors={{ start: "#ffffff", middle: "#71717a", end: "#27272a" }}
        />
      </div>

      {/* 3D sphere — right side ONLY on lg+, hidden on mobile */}
      <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none hidden lg:block" style={{ zIndex: 2 }}>
        <HeroScene />
      </div>

      {/* Subtler gradient fade: left semi-transparent, right transparent so sphere peeks through */}
      <div
        className="absolute inset-0 pointer-events-none hidden lg:block"
        style={{
          background: "linear-gradient(90deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)",
          zIndex: 3,
        }}
      />


      {/* ─── Main Content ─── */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity, zIndex: 10 }}
        className="relative w-full"
      >
        <div className="container-custom">
          <div className="max-w-2xl py-32">

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full mb-7 text-xs text-zinc-500 font-medium tracking-wide"
              style={{
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 flex-shrink-0" style={{ boxShadow: "0 0 10px rgba(16,185,129,0.5)", animation: "pulse 2.5s infinite" }} />
              Available for opportunities
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="text-display text-white mb-2"
            >
              Avi{" "}
              <span className="accent-gradient">
                Mathur
              </span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
              <TypingRole />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48, duration: 0.65 }}
              className="text-body-large text-zinc-400 max-w-lg mb-9 leading-relaxed"
            >
              AI Engineer building production-grade ML systems, vector search pipelines, and intelligent automation tools.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.55 }}
              className="flex items-center gap-3 flex-wrap mb-14"
            >
              <a href="#projects" className="premium-button">
                View My Work
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="/Mathur_Avi_resume.pdf" download="Mathur_Avi_resume.pdf" className="secondary-button">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download CV
              </a>
              <a href="#contact" className="secondary-button">Get in Touch</a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-start gap-10 pt-8"
              style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
            >
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.85 + i * 0.1 }}
                >
                  <p className="text-2xl font-bold leading-none mb-1 accent-gradient">
                    {stat.value}
                  </p>
                  <p className="text-xs text-zinc-500">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        style={{ zIndex: 10 }}
      >
        <span className="text-[10px] tracking-[0.25em] uppercase text-zinc-700">Scroll</span>
        <div className="w-px h-8" style={{ background: "linear-gradient(to bottom, #ffffff, transparent)" }} />
      </motion.div>
    </section>
  );
}