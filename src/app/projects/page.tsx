import * as React from "react"
import { Metadata } from "next"
import { ProjectsClient, Project } from "./projects-client"

export const metadata: Metadata = {
  title: "Projects | Jainam Shah",
  description: "A deep dive into the projects and products built by Jainam Shah.",
}

const allProjects: Project[] = [
  {
    title: "LeadsArk",
    description: "AI-powered lead management platform.",
    problem: "Businesses struggle with slow response times, unqualified leads, and disorganized pipelines, leading to lost revenue.",
    solution: "A centralized dashboard with automated AI replies, real-time lead qualification, and intelligent follow-ups.",
    features: [
      "AI-driven lead scoring",
      "Automated follow-up sequences",
      "Multi-channel integration",
      "Real-time analytics dashboard"
    ],
    tech: ["Next.js", "Node.js", "TypeScript", "Tailwind CSS", "Supabase"],
    process: "Started with deep user research to understand the bottlenecks in sales pipelines. Architected a robust backend using Node.js and Supabase for real-time updates. The frontend was built with Next.js for SEO and performance, utilizing Tailwind CSS for a clean, intuitive UI.",
    learnings: "Mastered real-time database synchronization and building complex AI prompt chains for accurate lead qualification.",
    image: "/leadsark.png",
    liveUrl: "https://leadsark.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "Your Music Space",
    description: "Ad-free music platform across Android, iOS, and Web.",
    problem: "Most music streaming apps are cluttered with ads and lack a seamless cross-platform experience without expensive subscriptions.",
    solution: "A completely ad-free, synchronized music streaming experience that feels premium and is accessible everywhere.",
    features: [
      "Unlimited listening without interruptions",
      "Cross-platform real-time synchronization",
      "Gamified user experience with badges and stats",
      "Offline playback support"
    ],
    tech: ["Flutter", "Firebase", "Firestore", "Next.js"],
    process: "Designed a mobile-first experience using Flutter for native performance on both iOS and Android. Built the backend and real-time sync engine using Firebase and Firestore. A companion web app was developed using Next.js.",
    learnings: "Deepened knowledge in state management in Flutter and optimizing read/write operations in Firestore to handle concurrent users efficiently.",
    image: "/yourmusicspace.png",
    liveUrl: "https://yourmusicspaceweb.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "Intent AI",
    description: "AI-powered vibe coding platform to generate applications.",
    problem: "Rapid prototyping takes too long for non-technical founders or developers wanting to test ideas quickly.",
    solution: "An intelligent platform where users can describe their ideas, and AI agents write, test, and deploy the code.",
    features: [
      "Natural language to code generation",
      "Interactive code editor with live preview",
      "One-click deployment",
      "Version control and history tracking"
    ],
    tech: ["Next.js", "Node.js", "TypeScript", "PostgreSQL", "OpenAI APIs"],
    process: "Architected a scalable microservices backend to handle AI processing securely. Developed a complex frontend with a web-based code editor and live preview environment.",
    learnings: "Learned how to securely execute generated code in sandboxed environments and handle long-running AI API requests gracefully.",
    image: "/intent-ai.png",
    githubUrl: "#",
  },
  {
    title: "ChatX",
    description: "Private real-time chat application.",
    problem: "Many messaging apps compromise user privacy or have bloated, slow interfaces.",
    solution: "A lightning-fast, secure, and minimal chat application focused on pure communication.",
    features: [
      "End-to-end encryption",
      "Real-time message delivery and typing indicators",
      "Media sharing",
      "Group chats and channels"
    ],
    tech: ["Flutter", "Firebase", "Firestore"],
    process: "Built with Flutter for a smooth 60fps experience. Utilized Firestore's real-time capabilities for instant message delivery.",
    learnings: "Optimized complex nested streams in Flutter to prevent memory leaks and ensure smooth scrolling in long chat histories.",
    image: "/chatx.png",
    liveUrl: "https://chatxweb.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "TradeX",
    description: "Advanced trading analysis and portfolio tracker.",
    problem: "Traders struggle to track their performance across multiple exchanges and identify winning patterns.",
    solution: "A unified dashboard that aggregates trading data and provides AI-driven insights.",
    features: ["Multi-exchange integration", "Performance analytics", "AI trade journaling"],
    tech: ["React", "Node.js", "MongoDB", "Express.js"],
    process: "Focused on data visualization and secure API integrations with major exchanges.",
    learnings: "Handling rate limits, websocket connections for live price updates, and complex data aggregations.",
    image: "/tradex.png",
    githubUrl: "#",
  },
  {
    title: "The Data Dude",
    description: "Data analytics and visualization tool.",
    problem: "Small businesses find enterprise BI tools too complex and expensive.",
    solution: "A simplified, plug-and-play analytics platform that turns raw data into actionable insights.",
    features: ["Drag-and-drop report builder", "Automated email reports", "Custom dashboards"],
    tech: ["Next.js", "Python", "FastAPI", "PostgreSQL"],
    process: "Developed a Python backend to handle heavy data processing and a Next.js frontend for responsive visualization.",
    learnings: "Bridging the gap between a Python data science backend and a Next.js frontend efficiently.",
    image: "/thedatadude.png",
    liveUrl: "https://thedatadude.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "Prish Capitals",
    description: "Corporate website and client portal.",
    problem: "The firm needed a modern digital presence and a secure way for clients to view their portfolios.",
    solution: "A premium corporate website with a secure, authenticated client portal.",
    features: ["Secure authentication", "Document sharing", "Portfolio overview"],
    tech: ["Next.js", "Tailwind CSS", "Supabase"],
    process: "Prioritized security and a premium design aesthetic to build trust with high-net-worth clients.",
    learnings: "Implementing enterprise-grade security rules and Role-Based Access Control (RBAC) in Supabase.",
    image: "/prishcapitals.png",
    liveUrl: "https://prishcapitals.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "La Vista Cafe",
    description: "Restaurant management and ordering system.",
    problem: "Manual order taking led to errors and slow service during peak hours.",
    solution: "A digital menu and QR-based ordering system integrated with a kitchen display.",
    features: ["QR code ordering", "Kitchen display system (KDS)", "Inventory tracking"],
    tech: ["React", "Firebase", "Node.js"],
    process: "Designed for extreme ease of use for both customers (mobile web) and kitchen staff (tablets).",
    learnings: "Designing UI for high-stress environments (kitchens) where clarity and speed are paramount.",
    image: "/lavistacafe.png",
    liveUrl: "https://lavistacafe.vercel.app/",
    githubUrl: "#",
  }
]

export default function ProjectsPage() {
  return <ProjectsClient projects={allProjects} />
}
