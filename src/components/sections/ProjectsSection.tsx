"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects, type Project } from "@/lib/constants";
import { cn } from "@/lib/utils";

// Editorial stories to override standard descriptions for a luxury feel
const editorialStories: Record<string, string> = {
  leadsark: "Autonomous pipeline orchestration. Intelligent qualification, nurturing, and closures.",
  "intent-ai": "The speed of thought. Converting developer intent into production architecture in real-time.",
};

function ProjectCanvas({ gradient, title, id }: { gradient: string; title: string; id: string }) {
  return (
    <div className="relative group w-full aspect-video rounded-lg border border-white/[0.04] bg-zinc-950/40 backdrop-blur-3xl overflow-hidden flex items-center justify-center p-6 md:p-12">
      {/* Lighting Drift Overlay */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className={cn("absolute -inset-[50%] opacity-10 blur-[120px] transition-transform duration-1000 group-hover:scale-110 bg-gradient-to-tr", gradient)} />
      </div>

      {/* Abstract App Window */}
      <div className="relative z-10 w-full h-full rounded-md border border-white/[0.06] bg-black/80 backdrop-blur-md shadow-2xl flex flex-col overflow-hidden transition-all duration-700 ease-out group-hover:translate-y-[-4px]">
        {/* Window Chrome */}
        <div className="h-8 border-b border-white/[0.04] px-4 flex items-center justify-between bg-zinc-950/50">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-white/[0.06] border border-white/[0.02]" />
            <span className="w-2 h-2 rounded-full bg-white/[0.06] border border-white/[0.02]" />
            <span className="w-2 h-2 rounded-full bg-white/[0.06] border border-white/[0.02]" />
          </div>
          <span className="text-[8px] tracking-[0.2em] font-mono text-zinc-600 uppercase select-none">
            {id}.manifest
          </span>
        </div>
        
        {/* Window Content */}
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
          
          <span className="text-[clamp(1.5rem,4vw,2.5rem)] font-black tracking-[0.2em] text-white uppercase select-none font-sans opacity-95">
            {title}
          </span>
          <span className="mt-2 text-[9px] tracking-[0.3em] text-zinc-600 uppercase font-mono">
            Secure Deployment Verified
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const featuredIds = ["leadsark", "intent-ai"];
  const featuredProjects = projects.filter((p) => featuredIds.includes(p.id));
  const otherProjects = projects.filter((p) => !featuredIds.includes(p.id));

  return (
    <section id="projects" className="relative w-full bg-black py-20 select-none">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header - Massive display title */}
        <div className="mb-12 pt-20">
          <span className="text-[10px] tracking-[0.25em] text-zinc-600 font-bold uppercase block mb-3">
            {"03 // Selected Works"}
          </span>
          <h2 className="text-[clamp(3.5rem,8vw,6.5rem)] font-black tracking-[-0.05em] leading-[0.9] text-white uppercase">
            The Monoliths.
          </h2>
        </div>

        {/* Fullscreen Campaign Project Sections */}
        <div className="flex flex-col">
          {featuredProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <ProjectBlock key={project.id} project={project} isEven={isEven} index={index} />
            );
          })}
        </div>

        {/* Understated Typographic Catalog (Additional Deployments) */}
        {otherProjects.length > 0 && (
          <div className="mt-24 pt-24 border-t border-white/[0.04]">
            <div className="mb-12">
              <span className="text-[10px] tracking-[0.25em] text-zinc-600 font-bold uppercase block mb-2">
                {"04 // Archives"}
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-white uppercase">
                Additional Shipments
              </h3>
            </div>

            <div className="divide-y divide-white/[0.04]">
              {otherProjects.map((project) => (
                <div
                  key={project.id}
                  className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 group transition-colors duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 flex-1">
                    <span className="text-base font-bold text-white group-hover:text-zinc-300 transition-colors duration-300 w-44 shrink-0">
                      {project.title}
                    </span>
                    <span className="text-sm text-zinc-500 leading-relaxed font-light">
                      {project.description}
                    </span>
                  </div>

                  <div className="flex items-center gap-6">
                    {project.links.length > 0 ? (
                      project.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-400 hover:text-white transition-colors duration-300"
                        >
                          <span>{link.label === "Live" || link.label === "Web" || link.label === "iOS" ? "LAUNCH PLATFORM →" : "SOURCE CODE →"}</span>
                        </a>
                      ))
                    ) : (
                      <span className="text-xs text-zinc-700 font-mono uppercase tracking-wider select-none">
                        {"// Protected"}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectBlock({ project, isEven, index }: { project: Project; isEven: boolean; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  return (
    <div
      ref={ref}
      className="min-h-screen w-full flex flex-col justify-center py-16 relative bg-black"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Info Column */}
        <div className={cn("lg:col-span-6 flex flex-col justify-center gap-8", isEven ? "lg:order-1" : "lg:order-2")}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6"
          >
            {/* Index Tracker */}
            <div className="flex items-center gap-3 select-none">
              <span className="text-[10px] tracking-[0.25em] text-zinc-600 font-bold uppercase">
                {"// Campaign / 0"}{index + 1}
              </span>
            </div>

            {/* Giant Title */}
            <h3 className="text-[clamp(3rem,8vw,7.5rem)] font-extrabold tracking-[-0.05em] text-white uppercase leading-[0.8]">
              {project.title}
            </h3>

            {/* Editorial Story */}
            <p className="text-xl md:text-2xl leading-relaxed text-zinc-400 font-light max-w-xl">
              {editorialStories[project.id] || project.longDescription}
            </p>

            {/* Action Links */}
            <div className="flex items-center gap-8 pt-4">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold tracking-widest text-zinc-300 hover:text-white uppercase transition-colors duration-300"
                >
                  {link.label === "Live" || link.label === "Web" || link.label === "iOS" ? "LAUNCH PLATFORM →" : "SOURCE CODE →"}
                </a>
              ))}
              {project.links.length === 0 && (
                <span className="text-xs text-zinc-600 font-mono tracking-widest uppercase select-none">
                  {"// Internal deployment. Source protected."}
                </span>
              )}
            </div>
          </motion.div>
        </div>

        {/* Visual Canvas Column */}
        <div className={cn("lg:col-span-6 w-full", isEven ? "lg:order-2" : "lg:order-1")}>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          >
            <ProjectCanvas gradient={project.gradient} title={project.title} id={project.id} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

