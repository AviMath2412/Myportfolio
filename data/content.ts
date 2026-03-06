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
  title: "AI/ML Developer • Full Stack Innovator",
  subtitle: "B.Tech in Computer Science & Engineering (Artificial Intelligence) from Rajasthan Technical University. Specialize in medical AI, vector search, and intelligent automation.",
  impact: "I build production-ready AI systems — from medical imaging to enterprise automation — focused on accuracy, scale, and real-world impact.",
  email: "mathuravi668@gmail.com",
  linkedin: "https://www.linkedin.com/in/avi-mathur-a3a25727b/",
  github: "https://github.com/AviMath2412",
};

export const about = {
  intro: "I'm Avi Mathur, an AI/ML developer and full-stack engineer who enjoys building intelligent, practical systems. I work with vector search, LLM automation, and modern web technologies to create fast, scalable, user-focused applications.",
  builds: "I build intelligent automation tools, AI-powered dashboards, vector search systems, and full-stack web applications that solve real problems with clean engineering and thoughtful design. I care deeply about clean architecture, measurable impact, and systems that scale beyond demos.",
  education: "B.Tech CSE (AI) — Rajasthan Technical University (Aug 2023 – July 2027)",
  exploring: ["Agentic AI", "RAG Systems", "Kubernetes"],
};

export const skills: Record<string, string[]> = {
  "Languages": ["Python", "C++", "SQL"],
  "AI/ML": ["Generative AI", "Machine learning models", "TensorFlow", "Pandas", "NumPy", "Matplotlib", "OpenAI API", "Vector Search Pipelines"],
  "Web": ["Next.js", "Flask", "FastAPI", "Tailwind CSS"],
  "Cloud & Tools": ["Google Cloud Platform (GCP)", "Oracle Cloud Infrastructure (OCI)", "Docker", "Git/GitHub", "Salesforce CRM", "Jupyter", "VS Code"],
  "Core CS": ["Data Structures & Algorithms", "Software Architecture", "UML Design"],
  "Currently Learning": ["Agentic AI", "RAG Systems", "Kubernetes"],
};

export const experience = [
  {
    company: "Hibiscustech GR Private Limited",
    description: "Contributing to development of scalable full-stack applications using modular architecture and production-grade engineering practices.",
    role: "Full Stack Intern",
    duration: "Feb 2026 – Present",
    highlights: [
      "Contributing to development of scalable full-stack applications using modular architecture",
      "Strengthening frontend engineering expertise with emphasis on performance optimization",
      "Implementing maintainable components and clean data flow design",
    ],
  },
  {
    company: "Walmart USA (Forage)",
    description: "Advanced Software Engineering Virtual Experience focused on complex technical challenges and data structures.",
    role: "Advanced Software Engineering Virtual Intern",
    duration: "Dec 2025 – Jan 2026",
    highlights: [
      "Engineered a novel heap data structure improving package routing efficiency",
      "Solved complex technical challenges spanning data structures and system architecture",
      "Designed relational database schemas for large-scale logistics scenarios",
    ],
  },
  {
    company: "Raptbot Technologies",
    description: "Salesforce consulting and CRM automation.",
    role: "Salesforce Intern",
    duration: "July 2024 – August 2024",
    highlights: [
      "Developed Hotel Management System and Bank Management System",
      "Learned CRM architecture concepts",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "ai-content-modernization",
    title: "AI Content Modernization Platform",
    tag: "Latest",
    github: "https://github.com/AviMath2412/content_mordernization", // Placeholder if not in resume
    tech: ["Next.js", "Flask", "PostgreSQL", "Google Cloud", "Perspective API"],
    highlights: [
      "Integrated Google Perspective API via GCP for automated content assessment",
      "Enables intelligent rephrasing and content evaluation",
      "Designed responsive frontend architecture using scalable components",
      "Currently extending functionality and performance optimization",
    ],
    color: "from-zinc-200 to-zinc-500",
    hasCaseStudy: true,
    caseStudy: {
      problem: "Traditional content moderation and modernization processes are often manual, slow, and fail to catch subtle toxic nuances or maintain consistent brand voice.",
      myRole: "Full-stack developer responsible for the end-to-end integration: setting up GCP infrastructure for Perspective API, building the Flask backend for text processing, and designing the Next.js frontend.",
      solutionArchitecture: [
        "Next.js frontend for high-performance user interaction",
        "Flask-based REST API for efficient text analysis and processing",
        "Google Cloud Platform (GCP) integration using Perspective API for toxic content assessment",
        "PostgreSQL for persistence and structured data management",
        "Tailwind CSS for a responsive and intuitive design system"
      ],
      keyChallenges: [
        "Asynchronous processing of large text blocks without blocking the UI",
        "Optimizing API calls to minimize latency during real-time content assessment",
        "Designing a robust error handling system for potential network or API failures"
      ],
      results: [
        { label: "Content Assessment Time", value: "< 1 second", isEstimate: false },
        { label: "Infrastructure", value: "Google Cloud Ecosystem", isEstimate: false },
        { label: "Frontend Speed", value: "Optimized LCP", isEstimate: true }
      ],
      improvements: [
        "Include multi-language support leveraging advanced LLM capabilities",
        "Implement a 'Brand Voice' fine-tuning feature using custom datasets",
        "Integrate real-time collaborative editing features"
      ],
      whyThisApproach: "Next.js was chosen for the frontend to ensure modern performance standards (SSR/ISR) while providing a highly interactive user experience. Flask provides a lightweight, flexible backend for Python-based AI integrations, and the Google Perspective API provides production-grade content analysis."
    } as CaseStudyData
  },
  {
    id: "neuroscan-ai",
    title: "NeuroScan AI",
    github: "https://github.com/AviMath2412/NeuroScan-AI",
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "Streamlit", "Docker"],
    highlights: [
      "AI-powered brain tumor detection from MRI scans achieves high accuracy",
      "Containerized application using Docker for reproducible deployment",
      "Implemented lightweight interface for image upload and real-time predictions",
      "Deep learning CNN model with 95%+ accuracy",
    ],
    color: "from-zinc-100 to-zinc-400",
    hasCaseStudy: true,
    caseStudy: {
      problem: "Manual brain tumor detection from MRI scans is time-consuming and prone to human error, delaying critical diagnoses for patients.",
      myRole: "Sole developer responsible for end-to-end implementation: CNN architecture design, dataset preprocessing, model training, and Streamlit web interface development.",
      solutionArchitecture: [
        "VGG16-based CNN architecture adapted for medical imaging",
        "OpenCV pipeline for MRI normalization and noise reduction",
        "TensorFlow/Keras for model training with data augmentation",
        "Streamlit interface for real-time inference and visualization",
        "Containerized deployment using Docker for scalability"
      ],
      keyChallenges: [
        "Balancing model accuracy with inference speed for real-time use",
        "Handling diverse MRI scan formats and quality variations",
        "Ensuring medical-grade preprocessing without losing diagnostic information"
      ],
      results: [
        { label: "Model Accuracy", value: "95.2%", isEstimate: false },
        { label: "Inference Time", value: "< 2 seconds", isEstimate: false },
        { label: "Scale", value: "Docker Containerized", isEstimate: false }
      ],
      improvements: [
        "Expand training dataset with more diverse MRI scans",
        "Implement multi-class segmentation for precise tumor boundaries",
        "Add confidence scoring system for medical decision support"
      ],
      whyThisApproach: "Chose VGG16-based architecture over custom CNNs because it provides proven transfer learning capabilities for medical imaging while maintaining inference speed suitable for real-time clinical use."
    } as CaseStudyData
  },
  {
    id: "expenseflow-quest",
    title: "ExpenseFlow Quest",
    github: "https://github.com/AviMath2412/expense-flow-quest",
    tech: ["React", "TypeScript", "PostgreSQL", "Prisma"],
    highlights: [
      "Enterprise expense management with RBAC + multi-currency",
      "Automation reduces approval time by 45%",
      "Serves 500+ users on backend with scaled database design",
    ],
    color: "from-zinc-300 to-zinc-600",
    hasCaseStudy: true,
    caseStudy: {
      problem: "Enterprise teams struggle with manual expense tracking, slow approval workflows, and lack of multi-currency support.",
      myRole: "Full-stack developer: architected PostgreSQL schema with Prisma ORM, implemented RBAC system, and built React frontend.",
      solutionArchitecture: [
        "PostgreSQL database with Prisma ORM",
        "Role-based access control (RBAC)",
        "React + TypeScript frontend",
        "Multi-currency support with real-time exchange rates"
      ],
      keyChallenges: [
        "Designing scalable RBAC system for complex hierarchies",
        "Implementing multi-currency calculations with accurate exchange rates"
      ],
      results: [
        { label: "Approval Time Reduction", value: "45%", isEstimate: false },
        { label: "Backend Users", value: "500+", isEstimate: false }
      ],
      improvements: [
        "Add receipt OCR for automatic expense extraction",
        "Implement advanced analytics dashboard"
      ],
      whyThisApproach: "Selected Prisma ORM for type safety and faster development while maintaining performance."
    } as CaseStudyData
  },
];

export const achievements = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    validity: "Oct 2025",
    icon: null,
    type: "certification",
  },
  {
    title: "Oracle AI Vector Search Certified Professional",
    validity: "Oct 2025",
    icon: null,
    type: "certification",
  },
  {
    title: "Walmart USA Advanced Software Engineering Virtual Experience",
    validity: "Jan 2026",
    icon: null,
    type: "certification",
  },
  {
    title: "Smart India Hackathon 2025 - Grand Finale Volunteer",
    validity: "Dec 2025",
    icon: null,
    type: "achievement",
  },
  {
    title: "Led technical teams in national hackathons (SBI Life, EY Techathon)",
    validity: "2024-2025",
    icon: null,
    type: "hackathon",
  },
];
