# Portfolio Master Fix — Complete Overhaul
> Paste each section into Kiro one at a time. Do NOT skip steps.

---

## PRIORITY 0 — globals.css (Fix First — Everything Depends On This)

Replace `app/globals.css` entirely:

```css
@import "tailwindcss";

@theme {
  --bg-primary: #08090e;
  --bg-surface: #0d0f18;
  --bg-surface-elevated: #13151f;
  --text-primary: #f1f5f9;
  --text-secondary: #94a3b8;
  --text-muted: #64748b;
  --accent: #6366f1;
  --accent-hover: #4f46e5;
  --color-border: #1e2030;
  --color-border-hover: #2d3050;
  
  --font-family-heading: "Inter", system-ui, sans-serif;
  --font-family-body: "Inter", system-ui, sans-serif;
}

@layer base {
  * {
    border-color: var(--color-border);
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: var(--bg-primary);
    color: var(--text-primary);
    font-feature-settings: "rlig" 1, "calt" 1;
    overflow-x: hidden;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}

@layer utilities {
  /* Layout */
  .container-custom {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .section-padding {
    padding: 6rem 0;
  }

  /* Glass cards */
  .glass-card {
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.06);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .glass-card:hover {
    background: rgba(255, 255, 255, 0.04);
    border-color: rgba(99, 102, 241, 0.2);
  }

  /* Gradient text */
  .accent-gradient {
    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #22d3ee 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* Buttons */
  .premium-button {
    background: #6366f1;
    color: white;
    font-weight: 600;
    font-size: 0.875rem;
    padding: 0.625rem 1.25rem;
    border-radius: 0.625rem;
    border: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.2s ease;
    box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
    text-decoration: none;
    white-space: nowrap;
  }

  .premium-button:hover {
    background: #4f46e5;
    transform: translateY(-1px);
    box-shadow: 0 8px 25px rgba(99, 102, 241, 0.5);
  }

  .secondary-button {
    background: rgba(255, 255, 255, 0.04);
    color: #94a3b8;
    font-weight: 500;
    font-size: 0.875rem;
    padding: 0.625rem 1.25rem;
    border-radius: 0.625rem;
    border: 1px solid rgba(255, 255, 255, 0.08);
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.2s ease;
    text-decoration: none;
    white-space: nowrap;
  }

  .secondary-button:hover {
    background: rgba(255, 255, 255, 0.08);
    color: white;
    border-color: rgba(99, 102, 241, 0.4);
    transform: translateY(-1px);
  }

  /* Typography scale */
  .text-display {
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    font-weight: 800;
    line-height: 1.05;
    letter-spacing: -0.02em;
  }

  .text-heading-1 {
    font-size: clamp(1.75rem, 4vw, 2.75rem);
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.01em;
  }

  .text-heading-2 {
    font-size: clamp(1.25rem, 2.5vw, 1.75rem);
    font-weight: 600;
    line-height: 1.3;
  }

  .text-heading-3 {
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 1.4;
  }

  .text-body-large {
    font-size: 1.125rem;
    line-height: 1.7;
  }

  .text-body {
    font-size: 0.9375rem;
    line-height: 1.65;
  }

  .text-body-small {
    font-size: 0.8125rem;
    line-height: 1.5;
  }

  .text-caption {
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  /* Holographic border */
  .holographic-border {
    border: 1px solid transparent;
    background: linear-gradient(#08090e, #08090e) padding-box,
                linear-gradient(135deg, #6366f1, #8b5cf6, #22d3ee) border-box;
  }

  /* Subtle grid */
  .cyber-grid {
    background-image:
      linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px);
    background-size: 60px 60px;
  }
}

/* Spotlight animation */
@keyframes spotlight {
  0%   { opacity: 0; transform: translate(-72%, -62%) scale(0.5); }
  100% { opacity: 1; transform: translate(-50%, -40%) scale(1); }
}

.animate-spotlight {
  animation: spotlight 2s ease 0.75s 1 forwards;
}

/* Typewriter cursor blink */
@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}
```

---

## PRIORITY 1 — app/layout.tsx (Fix the DottedSurface)

The purple galaxy look comes from DottedSurface. Replace `app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import SpotlightEffect from "@/components/SpotlightEffect";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://avimathur.tech"),
  title: "Avi Mathur — AI/ML Developer & Full Stack Engineer",
  description:
    "Portfolio of Avi Mathur — AI/ML Developer specializing in vector search, LLM automation, and full-stack engineering.",
  keywords: ["AI Developer", "ML Engineer", "Vector Search", "Full Stack Developer", "React", "Next.js", "Python"],
  authors: [{ name: "Avi Mathur" }],
  openGraph: {
    type: "website",
    url: "https://avimathur.tech",
    title: "Avi Mathur — AI/ML Developer & Full Stack Engineer",
    description: "AI/ML Developer specializing in vector search, intelligent automation, and full-stack engineering.",
    siteName: "Avi Mathur Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avi Mathur — AI/ML Developer & Full Stack Engineer",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Avi Mathur",
    url: "https://avimathur.tech",
    jobTitle: "AI/ML Developer & Full Stack Engineer",
    email: "mathuravi668@gmail.com",
    sameAs: ["https://linkedin.com/in/avi-mathur", "https://github.com/AviMath2412"],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* Subtle static noise texture overlay */}
        <div
          className="fixed inset-0 pointer-events-none z-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "200px",
          }}
        />
        <SpotlightEffect />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
```

> This REMOVES DottedSurface from global layout. It was causing the purple galaxy background.

---

## PRIORITY 2 — Navigation.tsx (Fix the pill blob)

Replace `components/Navigation.tsx` entirely:

```tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const NAV_ITEMS = [
  { name: "Home",     href: "#hero" },
  { name: "About",    href: "#about" },
  { name: "Skills",   href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact",  href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map(i => i.href.replace("#", ""));
    const observers = sectionIds.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(NAV_ITEMS.find(i => i.href === `#${id}`)?.name ?? "Home"); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`max-w-fit mx-auto transition-all duration-500 ${
          scrolled
            ? "bg-[#08090e]/90 backdrop-blur-2xl border border-white/[0.06] shadow-xl shadow-black/30 rounded-2xl px-2 py-1.5"
            : "px-4 py-2"
        }`}
      >
        <div className="flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.name;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setActive(item.name)}
                className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-200 ${
                  isActive ? "text-white" : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-xl -z-10"
                    style={{ background: "rgba(99,102,241,0.12)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
                {/* Tubelight glow on active */}
                {isActive && (
                  <motion.div
                    layoutId="nav-glow"
                    className="absolute -top-1 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full"
                    style={{ background: "#6366f1", boxShadow: "0 0 12px 3px rgba(99,102,241,0.6)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
```

---

## PRIORITY 3 — Hero.tsx (Fix all layout issues)

Replace `components/sections/Hero.tsx` entirely:

```tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import { personalInfo } from "@/data/content";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
  loading: () => null,
});

const ROLES = [
  "AI/ML Engineer",
  "Full Stack Developer",
  "Vector Search Specialist",
  "LLM Automation Builder",
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
      <span className="text-lg font-mono font-medium" style={{ color: "#22d3ee" }}>
        {displayed}
      </span>
      <span
        className="inline-block w-0.5 h-5 rounded-full"
        style={{
          background: "#22d3ee",
          animation: "blink 1s ease-in-out infinite",
        }}
      />
    </div>
  );
}

const STATS = [
  { value: "95%+", label: "Model Accuracy" },
  { value: "500+", label: "Users Served" },
  { value: "2×",   label: "Oracle Certified" },
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
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#08090e" }}
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 cyber-grid pointer-events-none" />

      {/* 3D sphere — right side ONLY on lg+, hidden on mobile */}
      <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none hidden lg:block" style={{ zIndex: 1 }}>
        <HeroScene />
      </div>

      {/* Gradient fade: left solid, right transparent so sphere peeks through */}
      <div
        className="absolute inset-0 pointer-events-none hidden lg:block"
        style={{
          background: "linear-gradient(90deg, #08090e 42%, rgba(8,9,14,0.75) 62%, rgba(8,9,14,0.1) 100%)",
          zIndex: 2,
        }}
      />

      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-36 pointer-events-none"
        style={{ background: "linear-gradient(to top, #08090e, transparent)", zIndex: 3 }}
      />

      {/* Ambient glow blobs */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "20%", left: "5%",
          width: 500, height: 500,
          background: "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)",
          zIndex: 1,
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "15%", left: "20%",
          width: 300, height: 300,
          background: "radial-gradient(circle, rgba(34,211,238,0.05) 0%, transparent 70%)",
          zIndex: 1,
        }}
      />

      {/* ─── Main Content ─── */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative w-full"
        style={{ zIndex: 4 } as React.CSSProperties}
      >
        <div className="container-custom">
          <div className="max-w-2xl py-32">

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-7 text-sm text-zinc-400"
              style={{
                border: "1px solid transparent",
                background:
                  "linear-gradient(#08090e, #08090e) padding-box, linear-gradient(135deg, rgba(99,102,241,0.6), rgba(139,92,246,0.6), rgba(34,211,238,0.6)) border-box",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" style={{ boxShadow: "0 0 6px rgba(52,211,153,0.8)", animation: "pulse 2s infinite" }} />
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
              <span
                style={{
                  background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 55%, #22d3ee 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
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
              Building intelligent systems at the intersection of AI and full-stack
              engineering. Specialized in vector search, LLM automation, and
              production-grade AI applications.
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
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="secondary-button">
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
                  <p
                    className="text-2xl font-bold leading-none mb-1"
                    style={{
                      background: "linear-gradient(135deg, #6366f1, #22d3ee)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs text-zinc-500">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex items-center gap-5 mt-8"
            >
              {[
                { label: "GitHub", href: personalInfo.github },
                { label: "LinkedIn", href: personalInfo.linkedin },
                { label: "Email", href: `mailto:${personalInfo.email}` },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-xs text-zinc-600 hover:text-zinc-300 transition-colors"
                >
                  {label}
                </a>
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
        style={{ zIndex: 5 }}
      >
        <span className="text-[10px] tracking-[0.25em] uppercase text-zinc-700">Scroll</span>
        <div className="w-px h-8" style={{ background: "linear-gradient(to bottom, #6366f1, transparent)" }} />
      </motion.div>
    </section>
  );
}
```

---

## PRIORITY 4 — About.tsx (Fix stats boxes + timeline)

Replace `components/sections/About.tsx`:

```tsx
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
  { value: 4,  suffix: "",  label: "Certifications" },
  { value: 2,  suffix: " Yrs", label: "Experience" },
];

const TIMELINE = [
  { year: "2021", event: "Started B.Tech CSE (AI) at RTU" },
  { year: "2024", event: "Salesforce Developer Intern at Raptbot Technologies" },
  { year: "2024", event: "Oracle AI Vector Search Certified Professional" },
  { year: "2025", event: "Oracle OCI Generative AI Professional" },
  { year: "2025", event: "Built NeuroScan AI — 95%+ accuracy MRI detection" },
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
          <span className="text-caption text-indigo-400 mb-3 block">About Me</span>
          <h2 className="text-heading-1 mb-4">
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
                  style={{ background: "linear-gradient(to bottom, #6366f1, rgba(99,102,241,0.1))" }}
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
                        className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-indigo-500 flex-shrink-0"
                        style={{ background: "#08090e" }}
                      />
                      <span className="text-xs text-indigo-400 font-mono font-semibold w-10 flex-shrink-0 mt-0.5">
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
                    className="text-3xl font-bold mb-1"
                    style={{
                      background: "linear-gradient(135deg, #6366f1, #22d3ee)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
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
```

---

## PRIORITY 5 — Skills.tsx (Fix pills + tabs)

Replace `components/sections/Skills.tsx`:

```tsx
"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { skills } from "@/data/content";

const SKILL_ICONS: Record<string, string> = {
  "Python": "🐍", "TensorFlow": "🧠", "Next.js": "▲", "React.js": "⚛️",
  "PostgreSQL": "🐘", "Docker": "🐳", "Node.js": "🟢", "TypeScript": "🔷",
  "FastAPI": "⚡", "Oracle Cloud (OCI)": "☁️", "OpenAI API": "🤖",
  "Pandas": "🐼", "NumPy": "🔢", "Tailwind CSS": "🎨", "Git/GitHub": "🐙",
  "Salesforce CRM": "🔵", "Jupyter": "📓", "VS Code": "💻",
  "Agentic AI": "🕸️", "RAG Systems": "🔗", "Kubernetes": "☸️",
  "Vector Search Pipelines": "🔍", "Keras": "🧬", "Selenium": "🔬",
  "C++": "⚙️", "SQL": "🗄️", "JavaScript": "🟡",
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const categories = Object.keys(skills);
  const [active, setActive] = useState(categories[0]);

  return (
    <section id="skills" ref={ref} className="section-padding relative">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-caption text-indigo-400 mb-3 block">Technical Arsenal</span>
          <h2 className="text-heading-1 mb-4">
            Skills &amp; <span className="accent-gradient">Technologies</span>
          </h2>
          <p className="text-body text-zinc-500 max-w-lg mx-auto">
            A curated stack built for AI engineering, modern web development, and cloud infrastructure.
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-250 ${
                active === cat
                  ? "text-white"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              {active === cat && (
                <motion.div
                  layoutId="skills-tab"
                  className="absolute inset-0 rounded-full -z-10"
                  style={{ background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.3)" }}
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto min-h-[140px]"
          >
            {(skills[active] ?? []).map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.04, duration: 0.25 }}
                whileHover={{ scale: 1.06, y: -2 }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card cursor-default"
              >
                <span className="text-base leading-none">
                  {SKILL_ICONS[skill] ?? "⚙️"}
                </span>
                <span className="text-sm font-medium text-zinc-300">
                  {skill}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
```

---

## PRIORITY 6 — data/content.ts (Add missing skills categories)

The current `skills` object in `data/content.ts` likely uses `"AI/ML"` and `"Web"` but the Skills component now expects consistent category names. Verify the skills object in `data/content.ts` has exactly these keys (update if needed):

```ts
export const skills: Record<string, string[]> = {
  "Languages": ["Python", "TypeScript", "JavaScript", "C++", "SQL"],
  "AI/ML": ["TensorFlow", "Keras", "Pandas", "NumPy", "OpenAI API", "Vector Search Pipelines"],
  "Web": ["React.js", "Next.js", "Node.js", "FastAPI", "Tailwind CSS"],
  "Cloud & Tools": ["Oracle Cloud (OCI)", "Docker", "Git/GitHub", "Salesforce CRM", "Jupyter", "VS Code"],
  "Currently Learning": ["Agentic AI", "RAG Systems", "Kubernetes"],
};
```

---

## PRIORITY 7 — SpotlightEffect.tsx (Keep but lighten)

Update `components/SpotlightEffect.tsx` to be very subtle (not the galaxy cursor):

```tsx
"use client";

import { useEffect } from "react";

// Keep existing SpotlightEffect but just make it a no-op if DottedSurface was handling it
// OR replace with this minimal cursor glow:

export default function SpotlightEffect() {
  useEffect(() => {
    const el = document.createElement("div");
    el.style.cssText = `
      position: fixed;
      width: 600px;
      height: 600px;
      border-radius: 50%;
      pointer-events: none;
      z-index: 0;
      transform: translate(-50%, -50%);
      background: radial-gradient(circle, rgba(99,102,241,0.04) 0%, transparent 70%);
      transition: opacity 0.3s ease;
      opacity: 0;
    `;
    document.body.appendChild(el);

    const move = (e: MouseEvent) => {
      el.style.left = e.clientX + "px";
      el.style.top = e.clientY + "px";
      el.style.opacity = "1";
    };
    const hide = () => { el.style.opacity = "0"; };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", hide);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", hide);
      document.body.removeChild(el);
    };
  }, []);

  return null;
}
```

---

## WHAT EACH FIX DOES

| File | Problem | Fix |
|---|---|---|
| `globals.css` | Missing/broken class definitions causing layout chaos | Full rewrite with correct typography scale, buttons, glass cards |
| `layout.tsx` | DottedSurface causing purple galaxy background | Removed DottedSurface, added subtle noise texture |
| `Navigation.tsx` | Ugly blue pill blob at top | Clean pill navbar with tubelight glow on active item |
| `Hero.tsx` | Sphere top-left, buttons huge, stats merged, SCROLL floating | Left-aligned layout, sphere right-side only on lg+, proper button sizing |
| `About.tsx` | Stats as ugly bordered boxes, raw timeline text | Animated CountUp cards, clean vertical timeline |
| `Skills.tsx` | Pills cramped/overlapping, tabs broken | AnimatePresence tab switching, proper wrapping flex grid |
| `data/content.ts` | Category names might mismatch | Standardize skills object keys |
| `SpotlightEffect.tsx` | Was the cursor causing galaxy effect | Replaced with subtle radial glow |

---

## AFTER APPLYING ALL FIXES

Run in Kiro:
```
Run npm run dev and check for TypeScript errors. Fix any import errors — 
particularly make sure @/data/content exports `about`, `skills`, `achievements`, 
`projects`, `experience`, and `personalInfo`. 
Also verify components/three/HeroScene.tsx still exists and exports a default component.
```
