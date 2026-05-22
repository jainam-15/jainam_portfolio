"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects, type Project } from "@/lib/constants";
import { cn } from "@/lib/utils";

// Custom SVG Icons to avoid import issues or library dependencies
function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function ProjectCanvas({ gradient, title }: { gradient: string; title: string }) {
  return (
    <div className="relative group w-full aspect-[4/3] rounded-2xl border border-white/[0.04] bg-zinc-950/20 backdrop-blur-2xl overflow-hidden flex items-center justify-center p-6 md:p-12">
      {/* Lighting Drift Overlay */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className={cn("absolute -inset-[50%] opacity-20 blur-[120px] transition-transform duration-1000 group-hover:scale-110 bg-gradient-to-tr", gradient)} />
      </div>

      {/* Abstract App Window */}
      <div className="relative z-10 w-full h-full rounded-lg border border-white/[0.06] bg-zinc-950/60 backdrop-blur-md shadow-2xl flex flex-col overflow-hidden transition-all duration-700 ease-out group-hover:translate-y-[-4px] group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)]">
        {/* Window Chrome */}
        <div className="h-10 border-b border-white/[0.04] px-4 flex items-center justify-between bg-zinc-950/80">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-white/[0.06] border border-white/[0.02]" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/[0.06] border border-white/[0.02]" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/[0.06] border border-white/[0.02]" />
          </div>
          <span className="text-[10px] tracking-[0.2em] font-mono text-muted-foreground/30 uppercase select-none">
            secure_instance.env
          </span>
        </div>
        
        {/* Window Content */}
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
          
          <span className="text-[clamp(1rem,2.5vw,1.5rem)] font-extrabold tracking-[0.25em] text-white uppercase select-none font-sans drop-shadow-lg">
            {title}
          </span>
          <span className="mt-2 text-[9px] tracking-[0.3em] text-muted-foreground/40 uppercase font-mono">
            deployment verified
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative w-full overflow-hidden bg-background border-t border-border py-32 md:py-48">
      {/* Soft atmospheric gradient */}
      <div className="pointer-events-none absolute right-0 top-1/4 -z-10 h-[600px] w-[600px] opacity-[0.02] blur-[150px]">
        <div className="h-full w-full rounded-full bg-blue-500" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mb-24 md:mb-32">
          <span className="text-[10px] tracking-[0.2em] text-muted-foreground/40 font-bold uppercase block mb-3">
            Selected Works
          </span>
          <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold tracking-[-0.05em] leading-[0.9] text-foreground uppercase select-none">
            The Monoliths.
          </h2>
        </div>

        {/* Fullscreen Campaign Project Sections */}
        <div className="space-y-48 md:space-y-64">
          {featuredProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <ProjectBlock key={project.id} project={project} isEven={isEven} index={index} />
            );
          })}
        </div>

        {/* Understated Typographic Catalog (Additional Deployments) */}
        {otherProjects.length > 0 && (
          <div className="mt-48 md:mt-64 pt-24 border-t border-white/[0.04]">
            <div className="mb-12">
              <span className="text-[10px] tracking-[0.25em] text-muted-foreground/30 font-bold uppercase block mb-2">
                Archives
              </span>
              <h3 className="text-xl font-bold tracking-tight text-foreground uppercase">
                Additional Shipments
              </h3>
            </div>

            <div className="divide-y divide-white/[0.03]">
              {otherProjects.map((project) => (
                <div
                  key={project.id}
                  className="py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 group transition-colors duration-300"
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-base font-semibold text-foreground group-hover:text-white transition-colors duration-300">
                      {project.title}
                    </span>
                    <span className="text-xs text-muted-foreground/50">
                      {project.description}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground/40 font-mono">
                    {project.tech.map((t, i) => (
                      <span key={t}>
                        {t}
                        {i < project.tech.length - 1 && <span className="ml-3 text-muted-foreground/15 select-none">·</span>}
                      </span>
                    ))}
                  </div>

                  {project.links.length > 0 ? (
                    <div className="flex items-center gap-4">
                      {project.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-muted-foreground/60 hover:text-white transition-colors duration-300"
                        >
                          <span className="font-semibold">{link.label}</span>
                          <ArrowRightIcon className="w-3 h-3 rotate-[-45deg]" />
                        </a>
                      ))}
                    </div>
                  ) : (
                    <span className="text-xs text-muted-foreground/20 italic select-none">
                      Internal Instance
                    </span>
                  )}
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
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <div
      ref={ref}
      className={cn(
        "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center",
        isEven ? "" : "lg:direction-rtl" // visual direction alternation
      )}
    >
      {/* Visual Canvas Column */}
      <div className={cn("lg:col-span-6 w-full", isEven ? "lg:order-1" : "lg:order-2")}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <ProjectCanvas gradient={project.gradient} title={project.title} />
        </motion.div>
      </div>

      {/* Info Column */}
      <div className={cn("lg:col-span-6 flex flex-col justify-center gap-8", isEven ? "lg:order-2" : "lg:order-1")}>
        <motion.div
          initial={{ opacity: 0, x: isEven ? 20 : -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-6"
        >
          {/* Tagline / Index */}
          <div className="flex items-center gap-3 select-none">
            <span className="text-[10px] tracking-[0.25em] text-muted-foreground/30 font-bold uppercase">
              {"Project // 0"}{index + 1}
            </span>
            {project.metrics && (
              <>
                <span className="text-muted-foreground/15 text-xs select-none">|</span>
                <span className="text-[10px] tracking-[0.15em] font-semibold text-blue-400 uppercase">
                  {project.metrics}
                </span>
              </>
            )}
          </div>

          {/* Title */}
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground uppercase leading-[1.05]">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-base sm:text-lg leading-relaxed text-muted-foreground/70 font-normal max-w-xl">
            {project.longDescription}
          </p>

          {/* Typographic Tech Row */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-muted-foreground/50 font-mono py-2 border-y border-white/[0.03]">
            {project.tech.map((t, i) => (
              <span key={t} className="flex items-center">
                {t}
                {i < project.tech.length - 1 && <span className="ml-3 text-muted-foreground/15 select-none">·</span>}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-6 pt-2">
            {project.links.map((link) => {
              const isSource = link.label.toLowerCase() === "github";
              const Icon = isSource ? GithubIcon : ArrowRightIcon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "group/link inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase transition-colors duration-300",
                    isSource 
                      ? "text-muted-foreground/60 hover:text-white" 
                      : "text-foreground hover:text-white"
                  )}
                >
                  <Icon className={cn("w-3.5 h-3.5 transition-transform duration-300", isSource ? "group-hover/link:scale-110" : "group-hover/link:translate-x-0.5 group-hover/link:translate-y-[-0.5px] rotate-[-45deg]")} />
                  <span>{link.label === "Live" ? "Launch Platform" : "Source Vault"}</span>
                </a>
              );
            })}
            {project.links.length === 0 && (
              <span className="text-xs text-muted-foreground/30 font-mono italic select-none">
                {"// Internal deployment. Source protected."}
              </span>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
