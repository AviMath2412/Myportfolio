"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { about, achievements } from "@/data/content";

function CountUp({ target, inView }: { target: number; inView: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <>{count}</>;
}

const STATS = [
  { value: 15, suffix: "+", label: "Projects Built" },
  { value: 20, suffix: "+", label: "Technologies" },
  { value: 4, suffix: "", label: "Certifications" },
  { value: 2, suffix: " Yrs", label: "Experience" },
];

const TIMELINE = [
  { year: "2023", event: "Started B.Tech CSE (AI) at RTU" },
  { year: "2024", event: "Salesforce Developer Intern at Raptbot Technologies" },
  { year: "2025", event: "Oracle AI Vector Search Certified Professional" },
  { year: "2025", event: "Oracle OCI Generative AI Professional" },
  { year: "2025", event: "Built NeuroScan AI — 95%+ accuracy MRI detection" },
  { year: "2026", event: "Full Stack Developer at Hibiscustech GR Pvt. Ltd." },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="section-padding relative">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <span className="text-caption text-zinc-500 mb-3 block">About Me</span>
          <h2 className="text-heading-1 mb-4 text-white">
            Building the future with{" "}
            <span className="accent-gradient">intelligent systems</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_380px] gap-12 xl:gap-20">
          {/* Left — bio + timeline */}
          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-body-large text-zinc-400 leading-relaxed"
            >
              I&apos;m Avi Mathur, an AI/ML developer and full-stack engineer who enjoys
              building intelligent, practical systems. I work with vector search, LLM
              automation, and modern web technologies to create fast, scalable,
              user-focused applications.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-body text-zinc-500 leading-relaxed"
            >
              I care deeply about clean architecture, measurable impact, and systems
              that scale beyond demos. Currently pursuing B.Tech CSE (AI) at
              Rajasthan Technical University.
            </motion.p>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h3 className="text-caption text-zinc-500 mb-6">Journey</h3>
              <div className="relative">
                <div
                  className="absolute left-[7px] top-2 bottom-2 w-px"
                  style={{ background: "linear-gradient(to bottom, #d4d4d8, rgba(212,212,212,0.1))" }}
                />
                <div className="space-y-5">
                  {TIMELINE.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -16 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + i * 0.08, duration: 0.45 }}
                      className="flex items-start gap-5 pl-6 relative"
                    >
                      <div
                        className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-zinc-500 flex-shrink-0"
                        style={{ background: "#000000" }}
                      />
                      <span className="text-xs text-zinc-500 font-mono font-semibold w-10 flex-shrink-0 mt-0.5">
                        {item.year}
                      </span>
                      <span className="text-sm text-zinc-400">{item.event}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right — stats */}
          <div className="space-y-4">
            <h3 className="text-caption text-zinc-500 mb-6">By The Numbers</h3>
            <div className="grid grid-cols-2 gap-3">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className="glass-card rounded-xl p-5"
                >
                  <p
                    className="text-3xl font-bold mb-1 accent-gradient"
                  >
                    <CountUp target={stat.value} inView={isInView} />
                    {stat.suffix}
                  </p>
                  <p className="text-xs text-zinc-500">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Education card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="glass-card rounded-xl p-5 mt-4"
            >
              <p className="text-caption text-zinc-500 mb-2">Education</p>
              <p className="text-sm font-semibold text-white">B.Tech CSE (AI)</p>
              <p className="text-xs text-zinc-500 mt-0.5">Rajasthan Technical University</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
