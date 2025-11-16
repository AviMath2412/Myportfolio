"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projects, personalInfo } from "@/data/content";
import Image from "next/image";

const ProjectThumbnail = ({ projectId }: { projectId: string }) => {
  const thumbnails: Record<string, string> = {
    "ai-resume-analyzer": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200'%3E%3Crect fill='%231a1a1a' width='400' height='200'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='system-ui' font-size='48' fill='%23ffffff'%3E📄%3C/text%3E%3C/svg%3E",
    "ai-webscraper": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200'%3E%3Crect fill='%231a1a1a' width='400' height='200'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='system-ui' font-size='48' fill='%23ffffff'%3E🌐%3C/text%3E%3C/svg%3E",
    "expenseflow-quest": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200'%3E%3Crect fill='%231a1a1a' width='400' height='200'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='system-ui' font-size='48' fill='%23ffffff'%3E💰%3C/text%3E%3C/svg%3E",
    "insuredash": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200'%3E%3Crect fill='%231a1a1a' width='400' height='200'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='system-ui' font-size='48' fill='%23ffffff'%3E🛡️%3C/text%3E%3C/svg%3E",
  };

  return (
    <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden bg-white/5">
      <Image
        src={thumbnails[projectId] || thumbnails["ai-resume-analyzer"]}
        alt="Project thumbnail"
        fill
        className="object-cover"
        loading="lazy"
      />
    </div>
  );
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="py-40 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-16 text-white relative inline-block">
            Projects
            <span className="absolute -bottom-2 left-0 w-20 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"></span>
          </h2>

          <div className="max-w-4xl space-y-8 mb-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="minimal-card rounded-lg overflow-hidden border border-transparent bg-gradient-to-br from-zinc-900 to-zinc-800 hover:border-purple-500/50 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] transition-all duration-300"
              >
                <ProjectThumbnail projectId={project.id} />
                
                <div className="p-8">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-heading font-bold text-white">
                      {project.title}
                    </h3>
                    {project.tag && (
                      <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white">
                        {project.tag}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={tech} className="text-xs text-text/60">
                        {tech}
                        {i < project.tech.length - 1 && (
                          <span className="mx-2 text-text/30">•</span>
                        )}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-text/70"
                      >
                        <span className="text-white mt-1 text-xs">—</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 minimal-card rounded text-sm hover:bg-white/5 hover:scale-105 transition-all"
                    >
                      GitHub →
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-white text-bg rounded text-sm hover:bg-accent hover:scale-105 transition-all"
                      >
                        Live Demo →
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* More Projects Link - Outside and centered */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="flex justify-center"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 minimal-card rounded-lg hover:bg-white/5 hover:scale-105 transition-all group"
            >
              <p className="text-text/70 text-sm">
                More projects available on{" "}
                <span className="text-white group-hover:underline">
                  GitHub →
                </span>
              </p>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
