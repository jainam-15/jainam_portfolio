"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Github } from "@/components/icons";
import { useRef } from "react";

const projects = [
  {
    name: "LeadsArk",
    description: "An AI-powered lead management system that automates communication workflows for businesses.",
    problem: "Small and medium businesses often fail to reply to leads on time, reducing conversion rates.",
    solution: "Automates instant replies, lead analysis, hot/warm/cold intent classification, and follow-ups.",
    tech: ["Next.js", "Node.js", "TypeScript", "TailwindCSS", "Supabase", "APIs"],
    live: "https://leadsark.vercel.app",
    github: "https://github.com/jainam-15/leadsark",
  },
  {
    name: "Your Music Space",
    description: "An ad-free cross-platform music streaming experience.",
    features: "No ads, unlimited skips, high quality streaming, gamified leveling system, synced across Android, iOS, and web.",
    metrics: "15+ active users",
    tech: ["Flutter", "Firebase", "Firestore", "Next.js", "Node.js", "TypeScript"],
    live: "https://yourmusicspaceweb.vercel.app",
    github: "",
  },
  {
    name: "Intent AI",
    description: "A vibe-coding platform that generates websites and apps from prompts.",
    tech: ["Next.js", "Node.js", "TypeScript", "APIs", "Databases"],
    live: "",
    github: "",
  },
  {
    name: "TradeX",
    description: "A crypto trading Android app with live charts.",
    tech: ["XML", "Kotlin", "Firebase", "APIs"],
    live: "",
    github: "",
  },
  {
    name: "The Data Dude",
    description: "A freelance landing page project with Google Maps integration and WhatsApp CTA.",
    tech: ["HTML", "CSS", "JavaScript", "Google Maps"],
    live: "https://thedatadude.vercel.app",
    github: "https://github.com/jainam-15/The-Data-Dude",
  },
  {
    name: "Prish Capitals",
    description: "A mobile-first multi-page website for a tax firm.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://prishcapitals.vercel.app",
    github: "https://github.com/jainam-15/Prish-Capitals",
  }
];

export function Projects() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section id="projects" className="relative py-32 bg-foreground/5" ref={containerRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-24 md:mb-40">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
            Featured <br />
            <span className="text-gradient">Work.</span>
          </h2>
        </div>

        <div className="space-y-32 md:space-y-64">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={idx} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}>
                
                {/* Visual Side (Sticky-like effect with parallax) */}
                <div className="w-full lg:w-1/2 relative">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="aspect-[4/3] w-full rounded-3xl overflow-hidden glass-card relative group hover-target"
                  >
                    {/* Placeholder for project image since I don't have the assets yet */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-foreground/10 to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-0 flex items-center justify-center bg-background/50 pointer-events-none">
                      <span className="text-2xl font-bold text-foreground/30 group-hover:scale-110 transition-transform duration-500">
                        {project.name}
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <h3 className="text-4xl font-bold mb-6">{project.name}</h3>
                    <p className="text-xl text-muted-foreground mb-8">
                      {project.description}
                    </p>

                    {project.problem && (
                      <div className="mb-6">
                        <h4 className="text-sm uppercase tracking-wider text-primary font-bold mb-2">The Problem</h4>
                        <p className="text-foreground/80">{project.problem}</p>
                      </div>
                    )}

                    {project.solution && (
                      <div className="mb-8">
                        <h4 className="text-sm uppercase tracking-wider text-primary font-bold mb-2">The Solution</h4>
                        <p className="text-foreground/80">{project.solution}</p>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mb-10">
                      {project.tech.map((tech, tIdx) => (
                        <span key={tIdx} className="px-3 py-1 text-xs font-medium rounded-full border border-border bg-background">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-6">
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-semibold hover-target group">
                          View Live <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                      )}
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-semibold text-muted-foreground hover:text-foreground hover-target transition-colors">
                          <Github className="w-5 h-5" /> Code
                        </a>
                      )}
                    </div>
                  </motion.div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
