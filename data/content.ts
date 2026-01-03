export const personalInfo = {
  name: "Avi Mathur",
  title: "AI/ML Developer • Full Stack Innovator",
  subtitle: "Oracle-certified AI/ML developer specializing in medical AI, vector search, and intelligent automation. Smart India Hackathon 2025 Grand Finale volunteer.",
  impact: "I build production-ready AI systems — from medical imaging to enterprise automation — focused on accuracy, scale, and real-world impact.",
  email: "mathuravi668@gmail.com",
  phone: "+91 77009 23732",
  linkedin: "https://www.linkedin.com/in/avi-mathur-a3a25727b/",
  github: "https://github.com/AviMath2412",
};

export const about = {
  intro: "I'm Avi Mathur, an AI/ML developer and full-stack engineer who enjoys building intelligent, practical systems. I work with vector search, LLM automation, and modern web technologies to create fast, scalable, user-focused applications.",
  builds: "I build intelligent automation tools, AI-powered dashboards, vector search systems, and full-stack web applications that solve real problems with clean engineering and thoughtful design. I care deeply about clean architecture, measurable impact, and systems that scale beyond demos.",
  education: "B.Tech CSE (AI) — Rajasthan Technical University",
  exploring: ["Agentic AI", "RAG Systems", "Kubernetes"],
};

export const skills = {
  Languages: ["Python", "C++", "SQL", "TypeScript", "JavaScript"],
  "AI/ML": ["TensorFlow", "Pandas", "NumPy", "OpenAI API", "Vector Search Pipelines"],
  Web: ["React.js", "Next.js", "Node.js", "FastAPI", "Tailwind CSS"],
  "Cloud & Tools": ["Oracle Cloud (OCI)", "Docker", "Git/GitHub", "Salesforce CRM", "Jupyter", "VS Code"],
  "Currently Learning": ["Agentic AI", "RAG Systems", "Kubernetes"],
};

export const experience = [
  {
    company: "Raptbot Technologies",
    description: "Salesforce consulting and CRM automation",
    role: "Salesforce Developer Intern",
    duration: "Jan 2024 – May 2024",
    highlights: [
      "Architected Salesforce objects + automation (−40% manual work)",
      "Built a Hotel Management System with billing + rewards",
      "Optimized SOQL queries by 35%",
    ],
  },
];

import { CaseStudyData } from "@/components/ProjectCaseStudy";

export const projects = [
  {
    id: "neuroscan-ai",
    title: "NeuroScan AI",
    tag: "Latest",
    github: "https://github.com/AviMath2412/NeuroScan-AI",
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "Streamlit", "NumPy"],
    highlights: [
      "AI-powered brain tumor detection from MRI scans",
      "Deep learning CNN model with 95%+ accuracy",
      "Real-time image preprocessing and analysis",
      "Interactive web interface for medical professionals",
      "Supports multiple tumor classification types",
    ],
    color: "from-pink-500 to-purple-500",
    hasCaseStudy: true,
    caseStudy: {
      problem: "Manual brain tumor detection from MRI scans is time-consuming and prone to human error, delaying critical diagnoses for patients.",
      myRole: "Sole developer responsible for end-to-end implementation: CNN architecture design, dataset preprocessing, model training, and Streamlit web interface development.",
      solutionArchitecture: [
        "VGG16-based CNN architecture adapted for medical imaging",
        "OpenCV pipeline for MRI normalization and noise reduction",
        "TensorFlow/Keras for model training with data augmentation",
        "Streamlit interface for real-time inference and visualization",
        "NumPy for efficient tensor operations and data manipulation"
      ],
      keyChallenges: [
        "Balancing model accuracy with inference speed for real-time use",
        "Handling diverse MRI scan formats and quality variations",
        "Ensuring medical-grade preprocessing without losing diagnostic information",
        "Creating intuitive UI for non-technical medical professionals"
      ],
      results: [
        { label: "Model Accuracy", value: "95.2%", isEstimate: false },
        { label: "Inference Time", value: "< 2 seconds", isEstimate: false },
        { label: "Supported Tumor Types", value: "3 classifications", isEstimate: false }
      ],
      improvements: [
        "Expand training dataset with more diverse MRI scans",
        "Implement multi-class segmentation for precise tumor boundaries",
        "Add confidence scoring system for medical decision support",
        "Integrate DICOM format support for hospital workflows"
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
      "Enterprise expense management",
      "RBAC + multi-currency",
      "Automation reduces approval time by 45%",
      "500+ users on backend",
    ],
    color: "from-emerald-500 to-blue-500",
    hasCaseStudy: true,
    caseStudy: {
      problem: "Enterprise teams struggle with manual expense tracking, slow approval workflows, and lack of multi-currency support, leading to delayed reimbursements and poor financial visibility.",
      myRole: "Full-stack developer: architected PostgreSQL schema with Prisma ORM, implemented RBAC system, built React frontend with TypeScript, and designed automated approval workflows.",
      solutionArchitecture: [
        "PostgreSQL database with Prisma ORM for type-safe data access",
        "Role-based access control (RBAC) with granular permissions",
        "React + TypeScript frontend with component-based architecture",
        "Multi-currency support with real-time exchange rate integration",
        "Automated approval workflows based on expense amount and department rules"
      ],
      keyChallenges: [
        "Designing scalable RBAC system that supports complex organizational hierarchies",
        "Implementing multi-currency calculations with accurate exchange rates",
        "Building efficient approval workflow engine without backend complexity",
        "Ensuring data consistency across concurrent expense submissions"
      ],
      results: [
        { label: "Approval Time Reduction", value: "45%", isEstimate: false },
        { label: "Backend Users", value: "500+", isEstimate: false },
        { label: "Supported Currencies", value: "Multi-currency", isEstimate: false }
      ],
      improvements: [
        "Add receipt OCR for automatic expense extraction",
        "Implement advanced analytics dashboard for finance teams",
        "Create mobile app for on-the-go expense submission",
        "Add integration with accounting software (QuickBooks, Xero)"
      ],
      whyThisApproach: "Selected Prisma ORM over raw SQL to ensure type safety across the stack, reducing runtime errors and enabling faster development while maintaining database performance through optimized queries."
    } as CaseStudyData
  },
  {
    id: "ai-resume-analyzer",
    title: "AI Resume Analyzer",
    github: "https://github.com/AviMath2412/ai-resume-analyzer",
    live: "https://ai-resume-analyzer-181-3sdgg.puter.site/",
    tech: ["React", "TypeScript", "Tailwind", "Puter.js", "Claude AI", "PDF.js"],
    highlights: [
      "ATS compatibility scoring",
      "AI-based content improvement",
      "Resume portfolio dashboard",
      "Cloud storage + auth",
      "Real-time PDF → Image preview",
    ],
    color: "from-blue-500 to-cyan-500",
    hasCaseStudy: true,
    caseStudy: {
      problem: "Job seekers struggle to optimize resumes for ATS systems and lack actionable, AI-powered feedback on content quality and keyword optimization.",
      myRole: "Full-stack developer: designed React frontend architecture, integrated Claude AI API for content analysis, implemented PDF parsing with PDF.js, and built cloud storage integration using Puter.js.",
      solutionArchitecture: [
        "React + TypeScript frontend with Tailwind CSS for responsive UI",
        "PDF.js for client-side PDF parsing and real-time preview generation",
        "Claude AI API for intelligent content analysis and ATS scoring",
        "Puter.js for cloud storage, authentication, and resume portfolio management",
        "State management for real-time PDF-to-image conversion and caching"
      ],
      keyChallenges: [
        "Parsing complex PDF layouts without losing formatting information",
        "Implementing accurate ATS scoring algorithm based on industry standards",
        "Handling large PDF files efficiently in browser without backend",
        "Creating intuitive UX for resume improvement suggestions"
      ],
      results: [
        { label: "Response Time", value: "< 5 seconds", isEstimate: false },
        { label: "Supported Formats", value: "PDF", isEstimate: false },
        { label: "ATS Score Accuracy", value: "Industry-standard based", isEstimate: true }
      ],
      improvements: [
        "Add support for Word document formats (.docx)",
        "Implement industry-specific ATS scoring (tech, finance, healthcare)",
        "Create resume templates based on job description analysis",
        "Add multi-language support for international job markets"
      ],
      whyThisApproach: "Used client-side PDF.js parsing instead of server-side processing to eliminate backend costs, improve privacy (no data leaves the browser), and enable instant preview generation without API latency."
    } as CaseStudyData
  },
  {
    id: "ai-webscraper",
    title: "AI Web Scraper",
    github: "https://github.com/AviMath2412/AI-Webscrapper",
    tech: ["Python", "Selenium", "OpenAI API", "Prompt Engineering"],
    highlights: [
      "85% success on protected sites",
      "Proxy rotation + rate limiting",
      "1000+ concurrent tasks",
      "Modular AI scraping framework",
    ],
    color: "from-purple-500 to-blue-500",
    hasCaseStudy: false
  },
];

export const achievements = [
  {
    title: "Oracle AI Vector Search Certified Professional",
    validity: "Valid through October 2027",
    icon: "🎯",
    type: "certification",
  },
  {
    title: "Smart India Hackathon 2025 - Grand Finale Volunteer",
    validity: "December 2025",
    icon: "🏆",
    type: "achievement",
  },
  {
    title: "SBI Life Hack-AI-Thon Participant",
    validity: "2024",
    icon: "🤖",
    type: "hackathon",
  },
  {
    title: "Oracle OCI Generative AI Professional",
    validity: "2025",
    icon: "☁️",
    type: "certification",
  },
  {
    title: "SHIFT: New-Gen Creative Festival 2025",
    validity: "Industry participation • Creative + Tech ecosystem exposure • Dec 2025",
    icon: "🎨",
    type: "achievement",
  },
];
