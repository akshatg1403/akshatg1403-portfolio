// ============================================================
// PORTFOLIO CONFIGURATION FILE
// Edit this file to customize your portfolio content
// ============================================================

export const siteConfig = {
  name: "Akshat Goyal",
  title: "Software Developer & AI Enthusiast",
  tagline: "Building intelligent systems, one line at a time.",
  email: "akshatgoyal1403@gmail.com",
  phone: "+91 XXXXXXXXXX",
  location: "Bangalore, Karnataka, India",
  resumePath: "/resume.pdf", // Place your resume.pdf in public/
  profileImage: "/profile.jpg", // Place your photo in public/
  avatarInitials: "AG",
};

export const socialLinks = {
  github: "https://github.com/akshatg1403",
  linkedin: "https://www.linkedin.com/in/akshatg1403/",
  email: "mailto:akshatgoyal1403@gmail.com",
};

export const aboutConfig = {
  // Keep this short — 2 lines reads better than 4 paragraphs
  bio: [
    "Software developer from RGIPT who turns ideas into full-stack products and AI-powered tools.",
    "Curious about how things work, obsessed with shipping things that do.",
  ],
  // Shown in the About stats (only a few projects are listed in projectsConfig)
  projectsCount: 20,
  skills: [
    "Python", "JavaScript", "React", "Node.js",
    "Machine Learning", "Deep Learning", "TensorFlow",
    "SQL", "MongoDB", "Git", "Docker", "FastAPI",
    "C++", "Java", "TypeScript",
  ],
};

export const projectsConfig = [
  {
    id: 1,
    title: "ChefKart",
    description: "Full-stack chef marketplace built with Next.js 14 + Express REST API connecting users with personal chefs. Modeled 4 relational entities and 10+ endpoints — cutting booking flow to under 3 clicks. Secured via JWT auth, role-based access, and rate limiting (100 req/min).",
    tech: ["Next.js", "Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "JWT", "Cloudinary", "Vercel"],
    github: "https://github.com/akshatg1403/chefkart",
    demo: "https://frontend-mu-rosy-75.vercel.app",
    image: "/projects/chefkart.png",
    featured: true,
    category: "Full-Stack",
  },
  {
    id: 2,
    title: "OpenCollab — Interview Platform",
    description: "Production-ready platform for technical interviews and pair programming. Supports 16+ languages with live code execution, real-time sync via Firebase, role-based access (Interviewer/Candidate), JWT auth, candidate behavior analytics, and Slack integration.",
    tech: ["Node.js", "Express.js", "Firebase", "JWT", "ACE Editor", "Firepad", "Piston API", "Vercel"],
    github: "https://github.com/akshatg1403/interviewplat",
    demo: "https://interviewplat.vercel.app/",
    image: "/projects/interviewcollab.png",
    featured: true,
    category: "Full-Stack",
  },
  {
    id: 3,
    title: "Travel Website",
    description: "A responsive frontend travel website showcasing destinations, tour packages, and travel inspiration. Built with clean HTML, CSS, and JavaScript with smooth UI and modern design.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/akshatg1403/travelWebsite",
    demo: "https://travel-website-proj-6q9nvtym9-akshatg1403s-projects.vercel.app/",
    image: "/projects/travel.png",
    featured: true,
    category: "Frontend",
  },
  {
    id: 4,
    title: "Document Management System (RAG)",
    description: "RAG pipeline using LangChain and LlamaIndex for accurate Q&A over private documents. Uses FAISS for vector indexing and similarity search. Transforms unstructured text into vector embeddings using Transformers for efficient retrieval.",
    tech: ["LangChain", "LlamaIndex", "FAISS", "Transformers", "Streamlit"],
    github: "https://github.com/akshatg1403/RAG",
    demo: null,
    image: null,
    featured: false,
    category: "AI / ML",
  },
  {
    id: 5,
    title: "Auto Mail Sender",
    description: "Intelligent job application automation system that reads job postings, generates personalized cover letters using AI, and sends targeted emails automatically.",
    tech: ["Python", "OpenAI API", "SMTP", "Pandas"],
    github: "https://github.com/akshatg1403/auto-mail-sender",
    demo: null,
    image: null,
    featured: false,
    category: "AI / ML",
  },
  {
    id: 6,
    title: "Fake News Detection Network",
    description: "Blockchain-based distributed network for detecting and flagging fake news using NLP models and decentralized consensus mechanisms.",
    tech: ["Python", "Blockchain", "NLP", "BERT"],
    github: "https://github.com/akshatg1403/fake-news-detection",
    demo: null,
    image: null,
    featured: false,
    category: "AI / ML",
  },
];

// Education journey — listed in chronological order (first → latest)
export const educationConfig = [
  {
    id: 1,
    level: "Class X",
    institution: "Delhi Public School",
    short: "DPS",
    board: "CBSE",
    duration: "2018 – 2019",
  },
  {
    id: 2,
    level: "Class XII",
    institution: "K.M. Public School",
    short: "KM",
    board: "CBSE",
    duration: "2020 – 2021",
  },
  {
    id: 3,
    level: "B.Tech · Information Technology",
    institution: "Rajiv Gandhi Institute of Petroleum Technology",
    short: "RGIPT",
    badge: "Institute of National Importance",
    duration: "2022 – 2026",
    logo: "/logos/rgipt.png",
    image: "/education/rgipt-campus.jpg",
    featured: true,
  },
];

// Newest first. `points` are shown as bullets — keep each one short.
export const experienceConfig = [
  {
    id: 1,
    role: "Product Support Engineer Intern",
    company: "Exotel",
    duration: "May 2026 – Sep 2026",
    points: [
      "Built product monitoring dashboards with Python, SQL & REST APIs",
      "Debugged backend & API integration failures through log analysis and RCA",
      "Worked with engineering & product teams on API validation and incident tracking",
    ],
    tech: ["Python", "SQL", "REST APIs", "Linux", "Jira", "Salesforce"],
    type: "internship",
    logo: "/logos/exotel.svg",
    link: "https://exotel.com",
  },
  {
    id: 2,
    role: "SDE Intern",
    company: "Ocliq.ai",
    duration: "Dec 2025 – Apr 2026",
    points: [
      "Built the company website end to end — design, development & deployment",
      "Showcased Ocliq.ai's AI-powered video surveillance platform",
    ],
    type: "internship",
    logo: "/logos/ocliq.png",
    link: "https://ocliq.in",
  },
];

export const achievementsConfig = [
  {
    id: 1,
    title: "CreaTech 2024 Participant",
    description: "Competed in RGIPT's flagship technical hackathon, presenting an innovative AI-powered solution.",
    icon: "🏆",
    year: "2024",
  },
  {
    id: 2,
    title: "ACM Orientation Speaker",
    description: "Delivered a presentation on OWASP security principles and web security best practices to 100+ students.",
    icon: "🎤",
    year: "2023",
  },
  {
    id: 3,
    title: "SQL Certification",
    description: "Earned certification in SQL and database management, demonstrating proficiency in complex query optimization.",
    icon: "📜",
    year: "2023",
  },
  {
    id: 4,
    title: "MMVY Scholarship Recipient",
    description: "Awarded the Mukhyamantri Medhavi Vidyarthi Yojana scholarship for academic excellence.",
    icon: "🎓",
    year: "2022",
  },
  {
    id: 5,
    title: "JEE Mains Qualifier",
    description: "Qualified JEE Mains with a strong score, securing admission to RGIPT, an Institute of National Importance.",
    icon: "⭐",
    year: "2022",
  },
  {
    id: 6,
    title: "GFG Problem Setter",
    description: "Contributed problems and editorials to GeeksForGeeks coding platform.",
    icon: "💻",
    year: "2023",
  },
];

export const passionConfig = {
  title: "AI & Full-Stack",
  subtitle: "What drives me every day",
  description:
    "I'm deeply passionate about building end-to-end products — from crafting smooth, responsive frontends to designing scalable backends and intelligent AI systems. I love the intersection of software engineering and machine learning, where code meets intelligence.",
  interests: [
    {
      title: "Generative AI & LLMs",
      description: "Building apps powered by large language models — RAG pipelines, prompt engineering, and fine-tuning for domain-specific tasks.",
      icon: "🤖",
    },
    {
      title: "Full-Stack Development",
      description: "Designing and shipping complete web applications using React, Node.js, and modern cloud infrastructure from idea to production.",
      icon: "🧱",
    },
    {
      title: "Machine Learning",
      description: "Exploring deep learning architectures — CNNs, GANs, transformers — and applying them to real-world computer vision and NLP problems.",
      icon: "🧠",
    },
    {
      title: "Open Source & Dev Tools",
      description: "Contributing to open-source projects and building developer tools that make other engineers more productive.",
      icon: "⚙️",
    },
  ],
};

export const terminalConfig = {
  welcomeMessage: [
    "Welcome to Akshat's Portfolio Terminal v1.0.0",
    "Type 'help' to see available commands.",
    "",
  ],
  commands: {
    help: {
      description: "Show available commands",
      output: [
        "Available commands:",
        "",
        "  about          → Learn about Akshat",
        "  projects       → View all projects",
        "  skills         → List technical skills",
        "  education      → Education history",
        "  experience     → Work experience",
        "  achievements   → Awards & achievements",
        "  contact        → Contact information",
        "  download resume→ Download resume PDF",
        "  social         → Social media links",
        "  clear          → Clear terminal",
        "  help           → Show this help menu",
        "",
      ],
    },
    about: {
      description: "About Akshat",
      output: [
        "╔══════════════════════════════════════╗",
        "║         AKSHAT GOYAL                 ║",
        "║   Software Developer & AI Enthusiast ║",
        "╚══════════════════════════════════════╝",
        "",
        "B.Tech IT @ RGIPT, Jais (2022-2026)",
        "",
        "Passionate about:",
        "  → Full-stack development",
        "  → Machine learning & Generative AI",
        "  → Open-source contributions",
        "  → Building scalable full-stack systems",
        "",
        "Currently: Building intelligent systems,",
        "           one line at a time.",
        "",
      ],
    },
    projects: {
      description: "View projects",
      output: [
        "Projects:",
        "",
        "1. ChefKart          → Full-stack chef marketplace (Next.js + Express)",
        "2. OpenCollab        → Production interview & pair programming platform",
        "3. Travel Website    → Responsive travel frontend (HTML/CSS/JS)",
        "4. RAG System        → Document Q&A with LangChain + FAISS",
        "5. Auto Mail Sender  → AI-powered job application automation",
        "6. Fake News Network → Blockchain-based fake news detection",
        "",
        "Scroll to the Projects section for details.",
        "",
      ],
    },
    skills: {
      description: "Technical skills",
      output: [
        "Technical Skills:",
        "",
        "Languages:   Python, JavaScript, C++, Java, TypeScript",
        "Frontend:    React, HTML5, CSS3, Tailwind CSS",
        "Backend:     Node.js, FastAPI, Express.js",
        "AI/ML:       TensorFlow, PyTorch, LangChain, OpenAI",
        "Databases:   MongoDB, MySQL, PostgreSQL, FAISS",
        "DevOps:      Git, Docker, Linux, Vercel",
        "",
      ],
    },
    education: {
      description: "Education history",
      output: [
        "Education:",
        "",
        "🎓 B.Tech Information Technology",
        "   RGIPT, Jais | 2022 – 2026",
        "",
        "🏫 Class XII (PCM) – CBSE | 2022",
        "📚 Class X – CBSE          | 2020",
        "",
      ],
    },
    experience: {
      description: "Work experience",
      output: [
        "Experience:",
        "",
        "💼 Product Support Engineer Intern @ Exotel",
        "   May 2026 – Aug 2026 | Python, SQL, REST APIs, Linux, Jira",
        "",
        "💻 SDE Intern @ Ocliq.ai",
        "   Dec 2025 – Mar 2026 | Built ocliq.in end to end",
        "",
      ],
    },
    achievements: {
      description: "Awards & achievements",
      output: [
        "Achievements:",
        "",
        "🏆 CreaTech 2024 Hackathon Participant",
        "🎤 ACM Orientation Speaker",
        "📜 SQL Certification",
        "🎓 MMVY Scholarship Recipient",
        "⭐ JEE Mains Qualifier",
        "💻 GFG Problem Setter",
        "",
      ],
    },
    contact: {
      description: "Contact information",
      output: [
        "Contact:",
        "",
        "📧 Email:    akshatgoyal1403@gmail.com",
        "📍 Location: Bangalore, Karnataka, India",
        "🐙 GitHub:   github.com/akshatg1403",
        "💼 LinkedIn: linkedin.com/in/akshatg1403",
        "",
        "Feel free to reach out for collaborations!",
        "",
      ],
    },
    social: {
      description: "Social media links",
      output: [
        "Social Links:",
        "",
        "🐙 GitHub:   https://github.com/akshatg1403",
        "💼 LinkedIn: https://linkedin.com/in/akshatg1403",
        "",
      ],
    },
  },
};
