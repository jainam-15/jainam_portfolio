"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Github } from "@/components/icons";
import { useRef } from "react";

const featuredProjects = [
  {
    name: "LeadsArk",
    tagline: "AI-powered lead management",
    description: "An intelligent system that automates communication workflows for businesses, analyzing lead intent (hot/warm/cold) and ensuring zero dropped leads.",
    problem: "Small and medium businesses lose significant revenue due to delayed lead follow-ups and manual pipeline management.",
    solution: "Engineered an autonomous workflow capable of instant replies, CRM integration, and NLP-based intent classification.",
    tech: ["Next.js", "Node.js", "Supabase", "LLMs"],
    live: "https://leadsark.vercel.app",
    github: "https://github.com/jainam-15/leadsark",
  },
  {
    name: "Your Music Space",
    tagline: "Cross-platform audio streaming",
    description: "A premium, ad-free music streaming experience synced seamlessly across Android, iOS, and Web environments.",
    features: "No ads, unlimited skips, high quality streaming, gamified leveling system.",
    metrics: "15+ active daily users in closed beta",
    tech: ["Flutter", "Firebase", "Next.js", "Node.js"],
    live: "https://yourmusicspaceweb.vercel.app",
    github: "",
  },
  {
    name: "Intent AI",
    tagline: "Vibe-coding generative platform",
    description: "A generative AI platform that synthesizes full-stack websites and applications directly from natural language prompts.",
    tech: ["Next.js", "TypeScript", "Node.js", "GenAI APIs"],
    live: "",
    github: "",
  }
];

const otherProjects = [
  {
    name: "TradeX",
    description: "A crypto trading Android app with live charts.",
    tech: ["Kotlin", "Firebase", "APIs"],
  },
  {
    name: "The Data Dude",
    description: "Freelance landing page with Google Maps & WhatsApp integrations.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://thedatadude.vercel.app",
  },
  {
    name: "Prish Capitals",
    description: "Mobile-first multi-page website for a tax firm.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://prishcapitals.vercel.app",
  }
];

export function Projects() {
  const containerRef = useRef(null);
  
  return (
    <section id="projects" className="relative py-32 bg-background border-t border-border/50" ref={containerRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-32 md:mb-48 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-6 block">Case Studies</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight">
              Products <span className="text-muted-foreground">Built for</span> Impact.
            </h2>
          </motion.div>
        </div>

        {/* Featured Case Studies */}
        <div className="space-y-40 md:space-y-64 mb-40">
          {featuredProjects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={idx} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-24 items-center`}>
                
                {/* Visual Side */}
                <div className="w-full lg:w-1/2 relative">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="aspect-[4/3] w-full rounded-3xl overflow-hidden liquid-glass relative group"
                  >
                    {/* Abstract placeholder visual */}
                    <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent z-10" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/20 p-8 text-center">
                      <div className="w-24 h-24 mb-6 rounded-2xl border border-border/50 bg-background/50 backdrop-blur-md flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-700 ease-out">
                         <span className="text-3xl font-bold text-foreground opacity-50">{project.name.charAt(0)}</span>
                      </div>
                      <h4 className="text-2xl font-bold text-foreground/80 tracking-tight">{project.name}</h4>
                      <p className="text-muted-foreground mt-2">{project.tagline}</p>
                    </div>
                  </motion.div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground">{project.name}</h3>
                    </div>
                    
                    <p className="text-xl text-muted-foreground mb-10 leading-relaxed font-medium">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                      {(project.problem || project.features) && (
                        <div>
                          <h4 className="text-xs uppercase tracking-widest text-foreground font-semibold mb-3 border-b border-border pb-2">
                            {project.problem ? "The Challenge" : "Key Features"}
                          </h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {project.problem || project.features}
                          </p>
                        </div>
                      )}

                      {(project.solution || project.metrics) && (
                        <div>
                          <h4 className="text-xs uppercase tracking-widest text-foreground font-semibold mb-3 border-b border-border pb-2">
                            {project.solution ? "The Architecture" : "Impact"}
                          </h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {project.solution || project.metrics}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-10">
                      {project.tech.map((tech, tIdx) => (
                        <span key={tIdx} className="px-3 py-1 text-xs font-mono rounded-md border border-border/50 bg-background/50 text-muted-foreground">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-6">
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-foreground hover-target group">
                          View Live Product 
                          <span className="p-1 rounded-full bg-foreground text-background group-hover:scale-110 transition-transform">
                            <ArrowUpRight className="w-3 h-3" />
                          </span>
                        </a>
                      )}
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground hover-target transition-colors">
                          <Github className="w-4 h-4" /> Repository
                        </a>
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Other Projects - Minimalist List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-8 tracking-tight">Other Explorations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-border/50 bg-background/30 hover:bg-foreground/5 transition-colors group">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-semibold">{project.name}</h4>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground group-hover:text-foreground transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-6 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-wider text-muted-foreground/70 font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
