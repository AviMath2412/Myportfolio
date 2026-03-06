"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import { projects, personalInfo } from "@/data/content";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";
import ScrollReveal from "@/components/ScrollReveal";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const ProjectIcon = ({ projectId }: { projectId: string }) => {
  return (
    <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
      <svg className="w-6 h-6 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a2 2 0 01-2 2H3a2 2 0 01-2-2V4a2 2 0 012-2h9zM7 15l3 3m0 0l3-3m-3 3V10" />
      </svg>
    </div>
  );
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openCaseStudy, setOpenCaseStudy] = useState<string | null>(null);
  const prefersReduced = useReducedMotion();

  return (
    <section id="projects" ref={ref} className="section-padding relative scroll-mt-[100px]">
      <div className="container-custom">
        <ScrollReveal>
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: prefersReduced ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Section header */}
            <div className="mb-12 text-center">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-caption text-zinc-500 mb-4 block"
              >
                Featured Work
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-heading-1 mb-6 text-white"
              >
                Selected <span className="accent-gradient">Projects</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-body text-zinc-500 max-w-2xl mx-auto"
              >
                A showcase of innovative solutions combining AI/ML capabilities with modern web technologies
              </motion.p>
            </div>

            {/* Projects grid */}
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
              {projects.map((project, index) => (
                <div key={project.id} className="relative rounded-2xl border border-white/5 p-0.5 h-full">
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={80}
                    inactiveZone={0.01}
                    borderWidth={1}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 + index * 0.12, duration: 0.6 }}
                    whileHover={{
                      scale: 1.02,
                      y: -5,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                    className="relative group glass-card rounded-[calc(1rem-2px)] p-8 overflow-hidden cursor-pointer h-full flex flex-col hover:shadow-2xl hover:shadow-white/5 transition-all"
                  >
                    {/* Minimal top-border accent */}
                    <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${project.color} opacity-40`} />

                    {/* Subtile Glow on hover */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br ${project.color} transition-opacity duration-500 rounded-2xl pointer-events-none`} />

                    {/* Minimal tag */}
                    {project.tag && (
                      <span className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-white/5 text-zinc-300 border border-white/10">
                        {project.tag}
                      </span>
                    )}

                    <ProjectIcon projectId={project.id} />

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zinc-200 transition-all">
                      {project.title}
                    </h3>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-6">
                      {project.highlights.slice(0, 3).map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-zinc-500">
                          <span className="text-white/40 mt-1">▸</span>
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded bg-white/5 text-zinc-400 border border-white/5 hover:border-zinc-500/30 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-5 mt-auto">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        GitHub
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Live
                        </a>
                      )}
                      {project.hasCaseStudy && (
                        <button
                          onClick={() => setOpenCaseStudy(project.id)}
                          className="ml-auto text-xs uppercase tracking-tighter font-semibold text-zinc-500 hover:text-white transition-colors flex items-center gap-1.5"
                        >
                          Case Study
                          <div className="w-1 h-3 bg-zinc-700 group-hover:bg-white transition-colors" />
                        </button>
                      )}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* More projects CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-center"
            >
              <div className="glass-card rounded-xl p-8 max-w-md mx-auto">
                <h3 className="text-heading-3 text-white mb-4">More Projects</h3>
                <p className="text-body text-zinc-400 mb-6">
                  Explore additional projects and contributions on GitHub
                </p>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary-button inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  View GitHub Profile
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
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
