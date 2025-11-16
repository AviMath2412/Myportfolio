"use client";

import { personalInfo } from "@/data/content";

export default function Footer() {
  return (
    <footer className="py-20 border-t border-neutral-800/40 mt-20 pt-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="text-text/50 text-sm">
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>

            <div className="flex items-center gap-8">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text/50 hover:text-white hover:scale-110 transition-all text-sm"
                aria-label="GitHub"
              >
                GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text/50 hover:text-white hover:scale-110 transition-all text-sm"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-text/50 hover:text-white hover:scale-110 transition-all text-sm"
                aria-label="Email"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
