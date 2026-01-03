"use client";

import { motion, AnimatePresence } from "framer-motion";

export interface CaseStudyData {
  problem: string;
  myRole: string;
  solutionArchitecture: string[];
  keyChallenges: string[];
  results: {
    label: string;
    value: string;
    isEstimate?: boolean;
  }[];
  improvements: string[];
  whyThisApproach: string;
}

interface ProjectCaseStudyProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  tech: string[];
  caseStudy: CaseStudyData;
}

export default function ProjectCaseStudy({
  isOpen,
  onClose,
  title,
  tech,
  caseStudy,
}: ProjectCaseStudyProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-4xl md:max-h-[90vh] z-50 overflow-hidden"
          >
            <div className="glass-card rounded-2xl h-full md:h-auto md:max-h-[90vh] flex flex-col overflow-hidden">
              {/* Header */}
              <div className="flex items-start justify-between p-6 border-b border-white/10">
                <div className="flex-1">
                  <h2 className="text-heading-2 text-white mb-2">{title}</h2>
                  <div className="flex flex-wrap gap-2">
                    {tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 bg-indigo-500/20 text-indigo-300 rounded text-body-small text-xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="ml-4 p-2 rounded-lg hover:bg-white/10 transition-colors"
                  aria-label="Close"
                >
                  <svg
                    className="w-6 h-6 text-zinc-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Content - Scrollable */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* Problem */}
                <section>
                  <h3 className="text-heading-3 text-white mb-3 flex items-center gap-2">
                    <span className="w-1 h-6 bg-indigo-500 rounded-full" />
                    Problem
                  </h3>
                  <p className="text-body text-zinc-300 leading-relaxed">
                    {caseStudy.problem}
                  </p>
                </section>

                {/* My Role */}
                <section>
                  <h3 className="text-heading-3 text-white mb-3 flex items-center gap-2">
                    <span className="w-1 h-6 bg-indigo-500 rounded-full" />
                    My Role
                  </h3>
                  <p className="text-body text-zinc-300 leading-relaxed">
                    {caseStudy.myRole}
                  </p>
                </section>

                {/* Solution Architecture */}
                <section>
                  <h3 className="text-heading-3 text-white mb-3 flex items-center gap-2">
                    <span className="w-1 h-6 bg-indigo-500 rounded-full" />
                    Solution Architecture
                  </h3>
                  <ul className="space-y-2">
                    {caseStudy.solutionArchitecture.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-body text-zinc-300"
                      >
                        <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Key Challenges */}
                <section>
                  <h3 className="text-heading-3 text-white mb-3 flex items-center gap-2">
                    <span className="w-1 h-6 bg-indigo-500 rounded-full" />
                    Key Challenges
                  </h3>
                  <ul className="space-y-2">
                    {caseStudy.keyChallenges.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-body text-zinc-300"
                      >
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Why This Approach */}
                <section>
                  <h3 className="text-heading-3 text-white mb-3 flex items-center gap-2">
                    <span className="w-1 h-6 bg-indigo-500 rounded-full" />
                    Why This Approach?
                  </h3>
                  <p className="text-body text-zinc-300 leading-relaxed">
                    {caseStudy.whyThisApproach}
                  </p>
                </section>

                {/* Results */}
                <section>
                  <h3 className="text-heading-3 text-white mb-3 flex items-center gap-2">
                    <span className="w-1 h-6 bg-indigo-500 rounded-full" />
                    Results
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {caseStudy.results.map((result, i) => (
                      <div
                        key={i}
                        className="glass-card rounded-lg p-4 border border-white/5"
                      >
                        <div className="flex items-baseline gap-2 mb-1">
                          <span className="text-heading-3 text-white">
                            {result.value}
                          </span>
                          {result.isEstimate && (
                            <span className="text-caption text-zinc-500">
                              (estimate)
                            </span>
                          )}
                        </div>
                        <p className="text-body-small text-zinc-400">
                          {result.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* What I'd Improve Next */}
                <section>
                  <h3 className="text-heading-3 text-white mb-3 flex items-center gap-2">
                    <span className="w-1 h-6 bg-indigo-500 rounded-full" />
                    What I'd Improve Next
                  </h3>
                  <ul className="space-y-2">
                    {caseStudy.improvements.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-body text-zinc-300"
                      >
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

