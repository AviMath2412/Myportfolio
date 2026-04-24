"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="section-eyebrow mb-4 inline-block">About Me</span>
          <h2 className="section-title mb-10">
            Research-focused engineer building practical AI systems
          </h2>
          <p className="mx-auto max-w-4xl text-[1.35rem] font-light leading-relaxed text-zinc-400">
            I am a B.Tech CSE (AI) student focused on building reliable and
            research-driven ML systems. My work centers on reinforcement
            learning environments, model evaluation, and deployment pipelines
            that translate ideas into measurable outcomes.
          </p>
          <p className="mx-auto mt-7 max-w-4xl text-base leading-relaxed text-zinc-400">
            Research interests: Reinforcement Learning (sparse-reward systems,
            agentic tasks), LLM Evaluation, Generative AI Systems, AI for Social
            Good, and Scalable ML Systems.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
