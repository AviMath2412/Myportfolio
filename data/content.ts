import { CaseStudyData } from "@/components/ProjectCaseStudy";

export interface Project {
  id: string;
  title: string;
  github: string;
  tech: string[];
  highlights: string[];
  color: string;
  hasCaseStudy: boolean;
  caseStudy?: CaseStudyData;
  live?: string;
  tag?: string;
}

export const personalInfo = {
  name: "Avi Mathur",
  title: "AI/ML Research Engineer • RL, LLM Evaluation, Systems",
  subtitle:
    "Third-year B.Tech CSE (AI) student at Poornima Institute of Engineering and Technology, Jaipur, focused on reinforcement learning environments, deployed neural systems, and generative AI tools.",
  impact:
    "I design and deploy research-oriented AI systems with emphasis on sparse-reward RL, reproducible pipelines, and practical social impact.",
  email: "mathuravi668@gmail.com",
  linkedin: "https://www.linkedin.com/in/avi-mathur-a3a25727b/",
  github: "https://github.com/AviMath2412",
};

export const about = {
  intro:
    "I am a third-year B.Tech CSE (AI) student with a strong interest in AI/ML research driven by building and deploying practical systems such as RL environments, neural models, and generative AI tooling.",
  builds:
    "I approach research by building, measuring, and iterating. My current focus is to strengthen theoretical depth and research rigor while contributing to meaningful AI/ML work under mentorship.",
  education:
    "B.Tech Computer Science and Engineering (Artificial Intelligence), Poornima Institute of Engineering and Technology, Jaipur (Aug 2023 – Jul 2027), CGPA: 8.01/10",
  exploring: [
    "Reinforcement Learning for Sparse Rewards",
    "LLM Evaluation",
    "Generative AI Systems",
  ],
};

export const skills: Record<string, string[]> = {
  "Languages": ["Python", "C++", "SQL"],
  "AI/ML": [
    "Reinforcement Learning",
    "TensorFlow",
    "RAG Pipelines",
    "LangChain",
    "Generative AI",
    "Pandas",
    "NumPy",
    "Scikit-learn",
  ],
  "Web": ["Next.js", "FastAPI", "Flask", "Tailwind CSS", "Streamlit"],
  "Cloud & Tools": [
    "Docker",
    "Hugging Face Spaces",
    "PostgreSQL",
    "Chroma",
    "Google Cloud Platform",
    "Git/GitHub",
  ],
  "Core CS": ["Data Structures & Algorithms", "Software Architecture", "UML Design"],
  "Research Interests": ["Sparse-Reward RL", "Agentic Tasks", "LLM Evaluation", "AI for Social Good"],
};

export const experience = [
  {
    company: "Walmart USA (Forage)",
    description:
      "Advanced software engineering virtual internship focused on data structures, architecture, and relational systems.",
    role: "Advanced Software Engineering Virtual Intern",
    duration: "Dec 2025 – Jan 2026",
    highlights: [
      "Worked on novel heap data structure for multi-package routing logistics.",
      "Completed challenges across data structures, software architecture, and database design.",
      "Built stronger systems-level engineering intuition through structured tasks.",
    ],
  },
  {
    company: "Raptbot Technologies, Jaipur",
    description:
      "Salesforce CRM internship building workflow-driven enterprise systems.",
    role: "Salesforce CRM Intern",
    duration: "Jul 2024 – Aug 2024",
    highlights: [
      "Built Hotel and Bank Management Systems using Salesforce CRM.",
      "Worked on workflow automation and database modeling.",
      "Delivered business-focused CRM customizations in collaborative setup.",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "email-triage-rl-environment",
    title: "Email Triage RL Environment",
    tag: "Primary Node",
    github: "https://github.com/AviMath2412/email-triage-env",
    live: "https://huggingface.co/spaces/AviMath/email-triage-env",
    tech: ["Python", "OpenEnv", "FastAPI", "Docker", "Hugging Face Spaces"],
    highlights: [
      "Framed email triage as a multi-tier RL benchmark (easy/medium/hard).",
      "Designed step-wise reward with correctness, efficiency, and routing signals.",
      "Containerized and deployed with docs and client SDK support.",
      "Meta x PyTorch OpenEnv Hackathon Grand Finalist submission.",
    ],
    color: "from-emerald-300 to-emerald-600",
    hasCaseStudy: true,
    caseStudy: {
      problem:
        "Knowledge-work agent tasks often suffer from sparse terminal rewards, making policy learning unstable and slow.",
      myRole:
        "Designed and implemented the environment, reward strategy, deployment stack, and interface for reproducible testing.",
      solutionArchitecture: [
        "OpenEnv-compatible environment design for tiered RL scenarios",
        "FastAPI endpoints and SDK-oriented integration surface",
        "Dense reward decomposition for correctness/efficiency/routing",
        "Dockerized runtime and Hugging Face Spaces deployment",
      ],
      keyChallenges: [
        "Reducing sparse reward bottlenecks in realistic triage workflows",
        "Balancing reward shaping with policy robustness and generalization",
        "Designing reproducible benchmark tiers with meaningful difficulty",
      ],
      results: [
        { label: "Benchmark Design", value: "3 Difficulty Tiers", isEstimate: false },
        { label: "Deployment", value: "HF Spaces + Docker", isEstimate: false },
        { label: "Outcome", value: "Meta x PyTorch Finalist", isEstimate: false },
      ],
      improvements: [
        "Extend to longer-horizon multi-agent triage workflows",
        "Add controlled perturbation suites for robustness analysis",
        "Publish standardized evaluation cards for reproducibility",
      ],
      whyThisApproach:
        "A dense reward decomposition and OpenEnv compatibility provide practical training feedback while preserving benchmark usefulness for research-oriented agent development.",
    } as CaseStudyData,
  },
  {
    id: "neuroscan-ai",
    title: "Neuro Scan - Medical Image Diagnosis",
    github: "https://github.com/AviMath2412/NeuroScan-AI",
    tag: "Primary Node",
    tech: ["Python", "TensorFlow", "CNN", "Docker"],
    highlights: [
      "Built CNN pipelines for medical image classification on imbalanced datasets.",
      "Analyzed architecture tradeoffs: depth, skip connections, and pooling.",
      "Containerized deployment for reproducible inference workflow.",
      "Designed interface usable in non-technical healthcare contexts.",
    ],
    color: "from-blue-300 to-blue-600",
    hasCaseStudy: true,
    caseStudy: {
      problem:
        "Clinical image classification on imbalanced datasets requires robust modeling and reproducible deployment for practical adoption.",
      myRole:
        "Built end-to-end model experimentation, preprocessing, and deployment pipeline.",
      solutionArchitecture: [
        "TensorFlow CNN models tuned for medical image domain",
        "Data preprocessing and balancing-aware experimentation",
        "Dockerized setup for reproducibility across systems",
        "Inference interface for easier practitioner interaction",
      ],
      keyChallenges: [
        "Managing class imbalance without overfitting",
        "Testing architecture depth vs. generalization tradeoffs",
        "Keeping deployment lightweight while retaining model quality",
      ],
      results: [
        { label: "Model Direction", value: "CNN for Clinical Images", isEstimate: false },
        { label: "Deployment", value: "Dockerized", isEstimate: false },
        { label: "Focus", value: "AI for Social Good", isEstimate: false },
      ],
      improvements: [
        "Expand dataset diversity across modalities and demographics",
        "Integrate uncertainty estimation for risk-aware inference",
        "Add explainability overlays for clinician trust",
      ],
      whyThisApproach:
        "An iterative CNN experimentation approach with reproducible deployment is practical for research-to-application translation in constrained healthcare settings.",
    } as CaseStudyData,
  },
  {
    id: "local-rag-chatbot",
    title: "Local RAG Chatbot",
    github: "https://github.com/AviMath2412/rag",
    tech: ["Streamlit", "LangChain", "Ollama", "Chroma", "Python"],
    highlights: [
      "Built a local-first RAG chatbot for PDF documents.",
      "Implemented grounded retrieval with source-aware responses and citations.",
      "Used persistent Chroma indexing with operational health checks.",
    ],
    color: "from-purple-300 to-purple-600",
    hasCaseStudy: false,
  },
  {
    id: "ai-content-modernization-dashboard",
    title: "AI Content Modernization Dashboard",
    github: "https://github.com/AviMath2412/content_mordernization",
    tech: ["Next.js", "Flask", "Perspective API", "Gemini", "PostgreSQL"],
    highlights: [
      "Combined moderation scoring with AI-powered explanation and rephrasing.",
      "Built a dual-AI workflow with modernized alternative generation.",
      "Implemented full-stack architecture with persistent moderation logs.",
    ],
    color: "from-zinc-300 to-zinc-500",
    hasCaseStudy: false,
  },
];

export const achievements = [
  {
    title: "Apple Swift Student Challenge 2026 — Winner",
    validity: "2026 · Selected globally among top student developers",
    type: "achievement",
    iconType: "trophy",
  },
  {
    title: "Meta × PyTorch OpenEnv Hackathon — Grand Finalist",
    validity: "2026 · Top teams out of 52,000+ registered developers",
    type: "hackathon",
    iconType: "code",
  },
  {
    title: "Oracle OCI 2025 Generative AI Professional",
    validity: "Oct 2025 · Valid through 2027",
    type: "certification",
    iconType: "certificate",
  },
  {
    title: "Oracle AI Vector Search Certified Professional",
    validity: "Oct 2025 · Valid through 2027",
    type: "certification",
    iconType: "certificate",
  },
  {
    title: "Smart India Hackathon 2025 — Grand Finale Volunteer",
    validity: "Dec 2025 · Ministry of Education, Government of India",
    type: "achievement",
    iconType: "star",
  },
  {
    title: "SBI Life Hack-AI-Thon — Technical Lead",
    validity: "2024 · National AI-focused hackathon",
    type: "hackathon",
    iconType: "code",
  },
  {
    title: "EY Techathon 5.0 — Technical Lead",
    validity: "2024–2025 · National hackathon",
    type: "hackathon",
    iconType: "code",
  },
];
