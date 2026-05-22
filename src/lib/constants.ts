// ─────────────────────────────────────────────
// Portfolio Data Constants
// ─────────────────────────────────────────────

export const siteConfig = {
  name: "Jainam Shah",
  title: "Jainam Shah — AI-Powered Full-Stack Engineer",
  description:
    "Engineering premium AI-powered products with exceptional design, performance, and user experience.",
  url: "https://jainamshah.dev",
  ogImage: "/og.png",
  phone: "+91 9426180574",
  email: "jainam@example.com",
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/jainam-15/",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jainam-shah15/",
    icon: "linkedin",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/jainam15_",
    icon: "instagram",
  },
] as const;

export const metrics = [
  { value: 7, suffix: "+", label: "Projects" },
  { value: 3, suffix: "", label: "Freelance Clients" },
  { value: 2, suffix: "", label: "SaaS Products" },
  { value: 5, suffix: "", label: "Month Internship" },
  { value: 0, suffix: "", label: "Cross-platform Apps", displayValue: "✓" },
  { value: 0, suffix: "", label: "AI Systems Built", displayValue: "✓" },
] as const;

export const skills = [
  {
    category: "Frontend Engineering",
    icon: "layout",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
      "GSAP",
      "HTML/CSS",
      "Shadcn/ui",
    ],
  },
  {
    category: "Backend Systems",
    icon: "server",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "Prisma",
      "Socket.io",
    ],
  },
  {
    category: "AI Integrations",
    icon: "brain",
    items: [
      "OpenAI API",
      "LangChain",
      "AI Agents",
      "Prompt Engineering",
      "RAG Systems",
      "Embeddings",
    ],
  },
  {
    category: "Mobile Development",
    icon: "smartphone",
    items: ["Flutter", "Kotlin", "React Native", "Android SDK", "Dart"],
  },
  {
    category: "Databases & APIs",
    icon: "database",
    items: [
      "Supabase",
      "Firebase",
      "PostgreSQL",
      "MongoDB",
      "Firestore",
      "Redis",
    ],
  },
  {
    category: "UI/UX & Design",
    icon: "palette",
    items: [
      "Figma",
      "Responsive Design",
      "Design Systems",
      "Micro-animations",
      "Prototyping",
    ],
  },
] as const;

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  metrics?: string;
  links: { label: string; href: string }[];
  gradient: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "leadsark",
    title: "LeadsArk",
    description: "AI-powered lead automation system for modern businesses.",
    longDescription:
      "Automates replies, lead qualification (hot/warm/cold), follow-ups, and dashboard management. Built for modern businesses to streamline their sales pipeline with intelligent AI automation.",
    tech: ["Next.js", "Node.js", "TypeScript", "TailwindCSS", "Supabase", "APIs"],
    links: [
      { label: "Live", href: "https://leadsark.vercel.app" },
      { label: "GitHub", href: "https://github.com/jainam-15/leadsark" },
    ],
    gradient: "from-blue-600 via-violet-600 to-purple-600",
    featured: true,
  },
  {
    id: "intent-ai",
    title: "Intent AI",
    description: "AI-powered vibe coding platform for building scalable applications.",
    longDescription:
      "Build scalable applications from prompts using AI-powered vibe coding. Intent AI understands developer intent and generates production-ready code with modern architecture patterns.",
    tech: ["Next.js", "Node.js", "TypeScript", "APIs", "Database Systems"],
    links: [],
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    featured: true,
  },
  {
    id: "your-music-space",
    title: "Your Music Space",
    description: "Ad-free cross-platform music streaming with gamified experience.",
    longDescription:
      "Ad-free cross-platform music streaming app with gamified listening experience and synced user data across Android, iOS, and Web. Features real-time sync, personalized playlists, and achievement system.",
    tech: ["Flutter", "Firebase", "Firestore", "Next.js", "APIs"],
    metrics: "15+ active users",
    links: [
      { label: "Web", href: "https://yourmusicspaceweb.vercel.app" },
      { label: "iOS", href: "https://music-space-fe322.web.app" },
    ],
    gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
    featured: true,
  },
  {
    id: "tradex",
    title: "TradeX",
    description: "Crypto trading Android application with live charts.",
    longDescription:
      "Real-time crypto trading Android application featuring live interactive charts, market data streaming, portfolio tracking, and seamless trading experience.",
    tech: ["Kotlin", "XML", "Firebase", "APIs"],
    links: [],
    gradient: "from-amber-500 via-orange-500 to-red-500",
    featured: false,
  },
  {
    id: "freelance-websites",
    title: "Freelance Client Websites",
    description: "Premium websites for diverse business clients.",
    longDescription:
      "Designed and developed premium websites for The Data Dude, Prish Capitals, and La Vista Cafe — each tailored to the client's brand identity with modern design and optimal performance.",
    tech: ["Next.js", "React", "TailwindCSS", "Responsive Design"],
    links: [],
    gradient: "from-sky-500 via-blue-500 to-indigo-500",
    featured: false,
  },
];

export const experience = [
  {
    role: "Full-Stack Developer Intern",
    company: "9 Dot Technology",
    duration: "5 Months",
    period: "2024",
    description:
      "Worked on real-world production applications, building scalable full-stack solutions. Gained hands-on experience with modern tech stacks, agile workflows, and enterprise-level code quality standards.",
    tech: ["React", "Node.js", "TypeScript", "APIs"],
  },
  {
    role: "Freelance Developer",
    company: "Independent",
    duration: "Ongoing",
    period: "2024 — Present",
    description:
      "Delivered premium websites and web applications for clients including The Data Dude, Prish Capitals, and La Vista Cafe. Focused on exceptional design quality and business impact.",
    tech: ["Next.js", "TailwindCSS", "Supabase", "Vercel"],
  },
  {
    role: "SaaS Builder",
    company: "Self-initiated",
    duration: "Ongoing",
    period: "2024 — Present",
    description:
      "Built and launched 2 SaaS products — LeadsArk and Intent AI. End-to-end product development from ideation to deployment, with focus on AI-powered automation and developer tools.",
    tech: ["Next.js", "Node.js", "Supabase", "OpenAI", "Stripe"],
  },
  {
    role: "Indie Product Developer",
    company: "Self-initiated",
    duration: "Ongoing",
    period: "2023 — Present",
    description:
      "Shipped cross-platform apps and experiments including Your Music Space and TradeX. Passionate about building products that solve real problems with polished user experiences.",
    tech: ["Flutter", "Kotlin", "Firebase", "Next.js"],
  },
];

export const processSteps = [
  {
    step: 1,
    title: "Strategy",
    description:
      "Deep-dive into requirements, market research, and technical architecture planning. Every great product starts with a clear vision.",
    icon: "compass",
  },
  {
    step: 2,
    title: "Design",
    description:
      "Craft pixel-perfect UI/UX with premium aesthetics. From wireframes to polished prototypes — design is never an afterthought.",
    icon: "pen-tool",
  },
  {
    step: 3,
    title: "Development",
    description:
      "Build with modern tech stacks, clean architecture, and AI-powered tooling. Performance and code quality are non-negotiable.",
    icon: "code",
  },
  {
    step: 4,
    title: "Deployment",
    description:
      "Ship to production with CI/CD, monitoring, and iterative improvement. Launch day is just the beginning.",
    icon: "rocket",
  },
];

export const aboutCards = [
  {
    title: "Who I Am",
    description:
      "An AI-powered full-stack engineer obsessed with building premium digital products. I blend design thinking with technical depth to create experiences that feel effortless.",
    icon: "user",
    span: "col-span-2",
  },
  {
    title: "Quality Obsession",
    description:
      "Every pixel, every interaction, every line of code matters. I don't ship anything I wouldn't proudly put my name on.",
    icon: "sparkles",
    span: "col-span-1",
  },
  {
    title: "AI-Native Workflow",
    description:
      "I leverage AI at every stage — from ideation and code generation to testing and deployment. AI isn't a feature, it's my development philosophy.",
    icon: "brain",
    span: "col-span-1",
  },
  {
    title: "Startup Mindset",
    description:
      "Move fast, ship often, iterate relentlessly. I think like a founder — every technical decision is a business decision.",
    icon: "rocket",
    span: "col-span-1",
  },
  {
    title: "Premium Product Thinking",
    description:
      "Inspired by Apple, Linear, and Vercel — I build products that feel luxurious. The gap between good and exceptional is where I operate.",
    icon: "gem",
    span: "col-span-1",
  },
];
