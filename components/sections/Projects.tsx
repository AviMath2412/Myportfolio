"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { projects } from "@/data/content";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";
import ScrollReveal from "@/components/ScrollReveal";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openCaseStudy, setOpenCaseStudy] = useState<string | null>(null);
  const [activeProject, setActiveProject] = useState(projects[0]?.id ?? "");
  const prefersReduced = useReducedMotion();
  const selected = projects.find((project) => project.id === activeProject) ?? projects[0];

  const previewImages: Record<string, string> = {
    "email-triage-rl-environment": "/works/rl-env-preview.png",
    "neuroscan-ai": "/works/neuroscan-preview.png",
    "local-rag-chatbot": "/works/rag-chatbot-preview.png",
    "ai-content-modernization-dashboard": "/works/content-modernization-preview.png",
  };

  return (
    <section id="projects" ref={ref} className="section-padding relative scroll-mt-[100px]">
      <div className="container-custom">
        <ScrollReveal>
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: prefersReduced ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-12 text-center">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="section-eyebrow mb-4 block"
              >
                Works
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="section-title mb-6"
              >
                Selected Research Nodes
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-body text-zinc-400 max-w-2xl mx-auto"
              >
                Primary focus: Email Triage RL Environment and Neuro Scan - Medical
                Image Diagnosis.
              </motion.p>
            </div>

            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="space-y-3">
                {projects.map((project, index) => {
                  const isPrimary =
                    project.id === "email-triage-rl-environment" ||
                    project.id === "neuroscan-ai";
                  const isActive = project.id === selected.id;
                  return (
                    <motion.button
                      key={project.id}
                      type="button"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.18 + index * 0.08, duration: 0.5 }}
                      onMouseEnter={() => setActiveProject(project.id)}
                      onClick={() => setActiveProject(project.id)}
                      className={`w-full rounded-2xl border-[0.5px] border-zinc-200 px-5 py-4 text-left transition dark:border-white/10 ${
                        isActive
                          ? "bg-zinc-100 dark:bg-white/5"
                          : "bg-transparent hover:bg-zinc-50 dark:hover:bg-white/[0.02]"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-xl font-medium text-zinc-900 dark:text-white">
                          {project.title}
                        </h3>
                        {isPrimary && (
                        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                            focal
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                        {project.id === "email-triage-rl-environment"
                          ? "Autonomous Navigation (RL)"
                          : project.id === "neuroscan-ai"
                            ? "Neuro Scan"
                            : project.id === "local-rag-chatbot"
                              ? "RAG Systems"
                            : "Independent Study"}
                      </p>
                    </motion.button>
                  );
                })}
              </div>

              {selected && (
                <motion.article
                  key={selected.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                className="overflow-hidden rounded-2xl border-[0.5px] border-zinc-200 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-white/[0.02]"
                >
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src={previewImages[selected.id] ?? previewImages["email-triage-rl-environment"]}
                      alt={selected.title}
                      fill
                      className="object-cover opacity-85"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6">
                    <p className="font-mono text-xs uppercase tracking-[0.16em] text-zinc-500">
                      {selected.tech.join(" · ")}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {selected.highlights.slice(0, 3).map((item) => (
                        <li key={item} className="text-sm text-zinc-600 dark:text-zinc-400">
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex items-center gap-4">
                      <a
                        href={selected.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="secondary-button"
                      >
                        Repository
                      </a>
                      <button
                        type="button"
                        onClick={() => setOpenCaseStudy(selected.id)}
                        disabled={!selected.hasCaseStudy}
                        className="secondary-button"
                      >
                        Case Study
                      </button>
                      {selected.live && (
                        <a
                          href={selected.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="secondary-button"
                        >
                          Hugging Face
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              )}
            </div>
          </motion.div>
        </ScrollReveal>
      </div>

      {/* Case Study Modals */}
      {projects.map((project) => {
        if (!project.hasCaseStudy || !project.caseStudy) return null;
        return (
          <ProjectCaseStudy
            key={project.id}
            isOpen={openCaseStudy === project.id}
            onClose={() => setOpenCaseStudy(null)}
            title={project.title}
            tech={project.tech}
            caseStudy={project.caseStudy}
          />
        );
      })}
    </section>
  );
}
