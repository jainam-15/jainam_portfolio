"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Code2, LineChart } from "lucide-react";
import { Github } from "@/components/icons";

const caseStudies = [
  {
    name: "LeadsArk",
    tagline: "Autonomous Lead Intelligence",
    problem: "SMBs lose millions in revenue due to delayed follow-ups and manual pipeline management, allowing warm leads to go cold.",
    approach: "Designed an orchestration layer sitting between lead generation forms and CRMs, capturing Webhooks in real-time to trigger immediate, context-aware automated replies.",
    technicalDecisions: "Opted for Next.js Edge Functions over standard Node.js lambdas to reduce cold-start latency to <50ms. Integrated Supabase real-time subscriptions to push instant state updates to the client dashboard without polling.",
    outcome: "Reduced average lead response time from hours to under 2 seconds, increasing client lead retention by 40%.",
    tech: ["Next.js", "Edge Functions", "Supabase", "LLMs", "TypeScript"],
    live: "https://leadsark.vercel.app",
    github: "https://github.com/jainam-15/leadsark",
  },
  {
    name: "Your Music Space",
    tagline: "Premium Cross-Platform Audio",
    problem: "Existing streaming platforms gatekey high-quality, ad-free experiences behind expensive subscriptions and fragmented, clunky ecosystems.",
    approach: "Built a unified, premium audio engine from scratch, providing seamless playback, gamified progression, and synchronized state across Web, iOS, and Android platforms.",
    technicalDecisions: "Leveraged a unified Flutter codebase for mobile to guarantee 60fps animations. For the backend, implemented Firebase real-time database to handle sub-100ms state synchronization for 'currently playing' tracks across multiple active devices.",
    outcome: "Achieved 15+ daily active users in closed beta with zero reported buffering issues and high engagement in the leveling system.",
    tech: ["Flutter", "Firebase", "Next.js", "Node.js", "Dart"],
    live: "https://yourmusicspaceweb.vercel.app",
    github: "",
  }
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32 bg-background border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        
        <div className="mb-32 md:mb-48 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-6 block border-b border-border/50 pb-4 inline-block">The Products</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight">
              Case <span className="text-muted-foreground">Studies.</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Deep architectural breakdowns. Why they exist, how they were built, and the impact they created.
            </p>
          </motion.div>
        </div>

        <div className="space-y-40 md:space-y-64">
          {caseStudies.map((project, idx) => {
            return (
              <div key={idx} className="relative group">
                {/* Background ambient glow for each project */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-foreground/5 blur-[120px] pointer-events-none rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start relative z-10">
                  
                  {/* Left: Narrative & Architecture */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="lg:col-span-5 flex flex-col justify-center"
                  >
                    <div className="mb-8">
                      <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground mb-4">{project.name}</h3>
                      <p className="text-xl text-muted-foreground font-medium">{project.tagline}</p>
                    </div>
                    
                    <div className="space-y-10">
                      <div>
                        <h4 className="text-xs font-mono tracking-widest uppercase text-foreground mb-3 flex items-center gap-2 border-b border-border/50 pb-2"><CheckCircle2 className="w-4 h-4" /> The Problem</h4>
                        <p className="text-muted-foreground leading-relaxed text-lg">{project.problem}</p>
                      </div>

                      <div>
                        <h4 className="text-xs font-mono tracking-widest uppercase text-foreground mb-3 flex items-center gap-2 border-b border-border/50 pb-2"><ArrowUpRight className="w-4 h-4" /> The Approach</h4>
                        <p className="text-muted-foreground leading-relaxed text-lg">{project.approach}</p>
                      </div>

                      <div>
                        <h4 className="text-xs font-mono tracking-widest uppercase text-foreground mb-3 flex items-center gap-2 border-b border-border/50 pb-2"><Code2 className="w-4 h-4" /> Technical Decisions</h4>
                        <p className="text-muted-foreground leading-relaxed text-lg">{project.technicalDecisions}</p>
                      </div>
                      
                      <div className="bg-foreground/5 p-6 rounded-2xl border border-border/50">
                        <h4 className="text-xs font-mono tracking-widest uppercase text-foreground mb-3 flex items-center gap-2"><LineChart className="w-4 h-4" /> Outcome</h4>
                        <p className="text-foreground font-semibold leading-relaxed">{project.outcome}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-10">
                      {project.tech.map((tech, tIdx) => (
                        <span key={tIdx} className="px-4 py-2 text-xs font-mono rounded-full border border-border/50 bg-background/50 text-muted-foreground shadow-sm">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-6 mt-12 pt-8 border-t border-border/50">
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm font-bold text-background bg-foreground px-6 py-3 rounded-full hover:scale-105 active:scale-95 transition-all shadow-xl group/btn">
                          Launch Product 
                          <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        </a>
                      )}
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">
                          <Github className="w-5 h-5" /> View Source
                        </a>
                      )}
                    </div>
                  </motion.div>

                  {/* Right: Visual Experience */}
                  <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="lg:col-span-7 flex flex-col gap-8 sticky top-32"
                  >
                    {/* Main UI Presentation Placeholder */}
                    <div className="aspect-[16/10] w-full rounded-[2rem] overflow-hidden liquid-glass border border-border/50 relative group/img shadow-2xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent z-10 pointer-events-none" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/20 p-8 text-center">
                        <div className="w-24 h-24 mb-6 rounded-2xl border border-border/50 bg-background/50 backdrop-blur-md flex items-center justify-center shadow-2xl group-hover/img:scale-110 transition-transform duration-700 ease-out">
                          <span className="text-3xl font-bold text-foreground opacity-50">{project.name.charAt(0)}</span>
                        </div>
                        <span className="text-xs font-mono tracking-widest uppercase text-foreground/30 mt-6 block">Product UI Rendering Placeholder</span>
                      </div>
                    </div>

                    {/* Architecture/Workflow Preview Placeholder */}
                    <div className="aspect-[21/9] w-full rounded-[2rem] overflow-hidden bg-foreground/5 border border-border/50 relative group/arch flex items-center justify-center">
                       <span className="text-xs font-mono tracking-widest uppercase text-foreground/40 block text-center px-4">Architecture / Workflow Preview Placeholder</span>
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
