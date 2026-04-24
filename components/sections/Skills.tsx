"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Official brand SVG icons as inline components
const TensorFlowIcon = () => (
  <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
    <path d="M16 2L4 9v9l12 7 12-7V9L16 2z" fill="#FF6F00" opacity="0.3"/>
    <path d="M16 2v28" stroke="#FF6F00" strokeWidth="1.5"/>
    <path d="M4 9l12 7 12-7" stroke="#FF6F00" strokeWidth="1.5" fill="none"/>
    <path d="M4 18l12 7 12-7" stroke="#FF6F00" strokeWidth="1" fill="none" opacity="0.5"/>
    <path d="M10 12.5v7l6 3.5 6-3.5v-7" stroke="#FF8F00" strokeWidth="1.2" fill="none"/>
  </svg>
);

const PyTorchIcon = () => (
  <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
    {/* Flame/drop shape at top */}
    <path d="M20 4 L20 4 C20 4 24 8 24 12 C24 14.5 22.5 16 21 16.5" stroke="#EE4C2C" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
    {/* Main circle - open at top right */}
    <path d="M21 9 C21 9 27 12 27 18 C27 23.5 22.5 28 16 28 C9.5 28 5 23.5 5 18 C5 12.5 9.5 8 16 8 C17.5 8 19 8.3 20.3 9" stroke="#EE4C2C" strokeWidth="2" strokeLinecap="round" fill="none"/>
    {/* Dot */}
    <circle cx="21" cy="9" r="1.8" fill="#EE4C2C"/>
  </svg>
);

const PythonIcon = () => (
  <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
    <path d="M15.9 4C11.5 4 9 6 9 9v3h7v1H7C4.5 13 3 15 3 18s1.5 5 4 5h2v-3.5c0-2.5 2-4 4.5-4h5c2.5 0 4-1.5 4-4V9c0-2.5-2-5-6.6-5z" fill="#3776AB" opacity="0.8"/>
    <path d="M16.1 28c4.4 0 6.9-2 6.9-5v-3h-7v-1h9c2.5 0 4-2 4-5s-1.5-5-4-5h-2v3.5c0 2.5-2 4-4.5 4h-5c-2.5 0-4 1.5-4 4V23c0 2.5 2 5 6.6 5z" fill="#FFD43B" opacity="0.9"/>
    <circle cx="13" cy="8" r="1.2" fill="white"/>
    <circle cx="19" cy="24" r="1.2" fill="white"/>
  </svg>
);

const DockerIcon = () => (
  <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
    <path d="M4 16c0 5.523 4.477 10 10 10h4c5.523 0 10-4.477 10-10" stroke="#2496ED" strokeWidth="1.5" fill="none"/>
    <rect x="7" y="10" width="4" height="3" rx="0.5" fill="#2496ED"/>
    <rect x="12" y="10" width="4" height="3" rx="0.5" fill="#2496ED"/>
    <rect x="17" y="10" width="4" height="3" rx="0.5" fill="#2496ED"/>
    <rect x="12" y="6" width="4" height="3" rx="0.5" fill="#2496ED"/>
    <rect x="17" y="6" width="4" height="3" rx="0.5" fill="#2496ED"/>
    <path d="M26 13c-1-1-3-1-4 0" stroke="#2496ED" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="26" cy="12" r="1" fill="#2496ED"/>
  </svg>
);

const FastAPIIcon = () => (
  <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
    <circle cx="16" cy="16" r="12" fill="#009688" opacity="0.15"/>
    <circle cx="16" cy="16" r="12" stroke="#009688" strokeWidth="1.5" fill="none"/>
    <path d="M17 8l-6 9h6l-1 7 6-9h-6l1-7z" fill="#009688"/>
  </svg>
);

const PostgreSQLIcon = () => (
  <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
    <ellipse cx="16" cy="10" rx="9" ry="5" stroke="#336791" strokeWidth="1.5" fill="#336791" fillOpacity="0.15"/>
    <path d="M7 10v8c0 2.761 4.03 5 9 5s9-2.239 9-5V10" stroke="#336791" strokeWidth="1.5" fill="none"/>
    <path d="M7 14c0 2.761 4.03 5 9 5s9-2.239 9-5" stroke="#336791" strokeWidth="1" fill="none" strokeDasharray="2 2"/>
    <path d="M22 8c2 0 4 1 4 4v6" stroke="#336791" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 32 32" className="w-7 h-7" fill="currentColor">
    <path d="M16 3C8.832 3 3 8.832 3 16c0 5.755 3.738 10.622 8.92 12.348.652.12.89-.283.89-.63 0-.31-.011-1.13-.017-2.22-3.626.788-4.394-1.748-4.394-1.748-.593-1.508-1.448-1.909-1.448-1.909-1.184-.809.09-.793.09-.793 1.308.092 1.997 1.344 1.997 1.344 1.163 1.993 3.051 1.417 3.794 1.083.118-.842.455-1.417.828-1.743-2.895-.33-5.94-1.448-5.94-6.444 0-1.423.508-2.587 1.343-3.499-.135-.33-.582-1.656.127-3.452 0 0 1.095-.35 3.588 1.338A12.49 12.49 0 0116 8.87c1.11.005 2.228.15 3.272.44 2.49-1.688 3.583-1.338 3.583-1.338.711 1.796.264 3.122.129 3.452.837.912 1.342 2.076 1.342 3.499 0 5.008-3.05 6.11-5.953 6.433.468.403.885 1.198.885 2.414 0 1.743-.016 3.148-.016 3.576 0 .35.235.756.897.628C25.265 26.618 29 21.753 29 16c0-7.168-5.832-13-13-13z"/>
  </svg>
);

const LangChainIcon = () => (
  <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
    <circle cx="10" cy="16" r="4" stroke="#1C3C3C" strokeWidth="1.5" fill="#1C3C3C" fillOpacity="0.2"/>
    <circle cx="22" cy="16" r="4" stroke="#1C3C3C" strokeWidth="1.5" fill="#1C3C3C" fillOpacity="0.2"/>
    <path d="M14 16h4" stroke="#1C3C3C" strokeWidth="2" strokeLinecap="round"/>
    <path d="M6 10c0-2 1.5-4 4-4s4 2 4 4" stroke="#1C3C3C" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    <path d="M18 22c0 2 1.5 4 4 4s4-2 4-4" stroke="#1C3C3C" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
  </svg>
);

const HuggingFaceIcon = () => (
  <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
    <circle cx="16" cy="16" r="12" fill="#FFD21E" opacity="0.2"/>
    <circle cx="16" cy="16" r="12" stroke="#FFD21E" strokeWidth="1.5" fill="none"/>
    <circle cx="12" cy="14" r="1.5" fill="#FFD21E"/>
    <circle cx="20" cy="14" r="1.5" fill="#FFD21E"/>
    <path d="M11 19c1 2 3 3 5 3s4-1 5-3" stroke="#FFD21E" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <path d="M10 11c0-1 1-2 2-2" stroke="#FFD21E" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M22 11c0-1-1-2-2-2" stroke="#FFD21E" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

const ChromaIcon = () => (
  <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
    <circle cx="16" cy="16" r="11" stroke="#F97316" strokeWidth="1.5" fill="#F97316" fillOpacity="0.1"/>
    <circle cx="16" cy="16" r="6" stroke="#F97316" strokeWidth="1.5" fill="#F97316" fillOpacity="0.2"/>
    <circle cx="16" cy="16" r="2" fill="#F97316"/>
    <path d="M16 5v4M16 23v4M5 16h4M23 16h4" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const GCPIcon = () => (
  <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
    <path d="M19.5 8h-7L8 14l4 7h8l4-7-4.5-6z" fill="#4285F4" opacity="0.2"/>
    <path d="M12.5 8h7l4.5 6-4 7h-8L8 14l4.5-6z" stroke="#4285F4" strokeWidth="1.5" fill="none"/>
    <circle cx="16" cy="16" r="3" fill="#EA4335" opacity="0.8"/>
    <path d="M16 8v2M16 22v2M8 16h2M22 16h2" stroke="#FBBC04" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const RAGIcon = () => (
  <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
    <rect x="4" y="6" width="10" height="8" rx="1.5" stroke="#8B5CF6" strokeWidth="1.5" fill="#8B5CF6" fillOpacity="0.15"/>
    <rect x="18" y="6" width="10" height="8" rx="1.5" stroke="#8B5CF6" strokeWidth="1.5" fill="#8B5CF6" fillOpacity="0.15"/>
    <rect x="11" y="18" width="10" height="8" rx="1.5" stroke="#8B5CF6" strokeWidth="1.5" fill="#8B5CF6" fillOpacity="0.15"/>
    <path d="M9 14l7 4 7-4" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
  </svg>
);
const skills = [
  { label: "Python",        icon: <PythonIcon />,      color: "#3776AB" },
  { label: "PyTorch",       icon: <PyTorchIcon />,     color: "#EE4C2C" },
  { label: "TensorFlow",    icon: <TensorFlowIcon />,  color: "#FF6F00" },
  { label: "LangChain",     icon: <LangChainIcon />,   color: "#1C3C3C" },
  { label: "RAG Pipelines", icon: <RAGIcon />,         color: "#8B5CF6" },
  { label: "Docker",        icon: <DockerIcon />,      color: "#2496ED" },
  { label: "FastAPI",       icon: <FastAPIIcon />,     color: "#009688" },
  { label: "PostgreSQL",    icon: <PostgreSQLIcon />,  color: "#336791" },
  { label: "Hugging Face",  icon: <HuggingFaceIcon />, color: "#FFD21E" },
  { label: "Chroma",        icon: <ChromaIcon />,      color: "#F97316" },
  { label: "GCP",           icon: <GCPIcon />,         color: "#4285F4" },
  { label: "GitHub",        icon: <GitHubIcon />,      color: "#ffffff" },
];

const repeated = [...skills, ...skills, ...skills];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} className="relative py-10 md:py-14 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          animate={{ x: ["0%", "-33.3333%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          className="flex w-max items-center gap-5"
        >
          {repeated.map((item, index) => (
            <div
              key={`${item.label}-${index}`}
              className="flex items-center gap-3 px-6 py-4 cursor-default"
              style={{ minWidth: "160px" }}
            >
              <div className="flex-shrink-0 opacity-40">{item.icon}</div>
              <span className="text-[15px] font-medium tracking-wide whitespace-nowrap text-zinc-500">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}