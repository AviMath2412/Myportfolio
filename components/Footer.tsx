"use client";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-white/10 border-[0.5px] bg-zinc-950 py-12">
      <div className="container-custom flex flex-col gap-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-zinc-200">
              Avi Mathur
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-400">
              AI/ML research portfolio focused on reinforcement learning,
              evaluation, and practical system deployment.
            </p>
            <p className="mt-4 font-mono text-xs text-emerald-400">● Available for work</p>
          </div>
          <div className="space-y-2 text-sm text-zinc-300">
            <a href="#about" className="block hover:text-white">About</a>
            <a href="#projects" className="block hover:text-white">Projects</a>
            <a href="#education" className="block hover:text-white">Education</a>
            <a href="#experience" className="block hover:text-white">Experience</a>
          </div>
        </div>
        <div className="border-t border-zinc-800 pt-6 text-xs text-zinc-500">
          © {new Date().getFullYear()} Avi Mathur. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
