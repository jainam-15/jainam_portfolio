"use client";

import { useRef, useState, useCallback, type MouseEvent as ReactMouseEvent } from "react";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/lib/constants";
import { cn } from "@/lib/utils";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
}

function SpotlightCard({ children, className }: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: ReactMouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setSpotlightPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/[0.04] bg-black/[0.15] dark:bg-white/[0.01] backdrop-blur-md transition-all duration-500",
        "hover:border-foreground/[0.08] hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_20px_50px_-12px_rgba(255,255,255,0.01)]",
        className
      )}
    >
      {/* Spotlight overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: isHovered
            ? `radial-gradient(400px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(120,119,198,0.03), transparent 60%)`
            : "none",
        }}
      />

      {children}
    </div>
  );
}

function TechChips({ tech }: { tech: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tech.map((t) => (
        <span
          key={t}
          className="inline-flex items-center rounded-full bg-white/[0.04] dark:bg-white/[0.02] border border-border/60 px-3 py-1 text-xs text-muted-foreground/80 font-medium select-none"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

function ProjectVisualPreview({ gradient, title }: { gradient: string; title: string }) {
  return (
    <div className={cn("relative overflow-hidden rounded-xl w-full h-full bg-gradient-to-br min-h-[240px] sm:min-h-[300px] flex items-center justify-center p-6", gradient)}>
      {/* Subtle overlay shading for atmospheric premium quality */}
      <div className="absolute inset-0 bg-black/5 dark:bg-black/10 mix-blend-overlay" />
      
      {/* Pristine typographic branding center stage */}
      <div className="relative group-hover:scale-[1.03] transition-transform duration-500 ease-out">
        <span className="font-sans text-lg sm:text-xl md:text-2xl uppercase tracking-[0.25em] text-white font-extrabold bg-black/40 px-6 py-2.5 rounded-xl border border-white/10 backdrop-blur-md shadow-2xl">
          {title}
        </span>
      </div>
    </div>
  );
}

function ActionButtons({ links }: { links: Project["links"] }) {
  if (!links.length) return null;

  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link) => {
        const isGitHub = link.label.toLowerCase() === "github" || link.href.includes("github.com");
        const Icon = isGitHub ? GithubIcon : ExternalLink;
        const displayLabel = isGitHub ? "Source Code" : "Live Preview";

        return (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold tracking-wide",
              "transition-all duration-300 active:scale-[0.98]",
              isGitHub
                ? "border border-border bg-card/45 text-foreground hover:bg-foreground/5 hover:border-foreground/15"
                : "bg-foreground text-background hover:opacity-90"
            )}
          >
            <Icon className="h-3.5 w-3.5" />
            <span>{displayLabel}</span>
            {!isGitHub && <ArrowUpRight className="h-3 w-3" />}
          </a>
        );
      })}
    </div>
  );
}

export default function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative overflow-hidden py-32 md:py-48 border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-24 text-center">
          <div className="text-[10px] tracking-[0.2em] text-muted-foreground/50 font-bold uppercase mb-3">
            Deployments
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl uppercase">
            Featured Products
          </h2>
        </div>

        {/* Viewport-owning Showcase List (Spacious editorial snapshots) */}
        <div className="flex flex-col gap-28 md:gap-36">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="flex items-center justify-center py-4 border-b border-border/20 last:border-0"
            >
              <div className="w-full">
                <SpotlightCard className="w-full">
                  <div className="relative z-20 grid gap-8 p-6 sm:p-8 md:p-10 lg:grid-cols-12 lg:gap-12">
                    
                    {/* Visual Preview column */}
                    <div className="lg:col-span-7 flex items-center justify-center">
                      <ProjectVisualPreview gradient={project.gradient} title={project.title} />
                    </div>

                    {/* Content column */}
                    <div className="lg:col-span-5 flex flex-col justify-center gap-6">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
                          {project.title}
                        </h3>
                        {project.metrics && (
                          <div className="mt-2.5">
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 px-3 py-1 text-[10px] font-semibold text-blue-400">
                              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                              {project.metrics}
                            </span>
                          </div>
                        )}
                      </div>

                      <p className="text-sm md:text-base leading-relaxed text-muted-foreground/75 font-normal">
                        {project.longDescription}
                      </p>

                      {/* Tech Chips */}
                      <TechChips tech={project.tech} />

                      {/* Action buttons */}
                      <div className="pt-4 border-t border-border/20">
                        <ActionButtons links={project.links} />
                      </div>

                    </div>
                  </div>
                </SpotlightCard>
              </div>
            </div>
          ))}
        </div>

        {/* Non-Featured Grid Showcase */}
        {otherProjects.length > 0 && (
          <div className="mt-40">
            <div className="mb-12 text-center">
              <span className="text-[10px] tracking-[0.2em] text-muted-foreground/50 font-bold uppercase">
                Additional Deployments
              </span>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {otherProjects.map((project) => (
                <div key={project.id}>
                  <SpotlightCard className="h-full">
                    <div className="relative z-20 flex h-full flex-col p-6 sm:p-8 gap-6">
                      
                      <ProjectVisualPreview gradient={project.gradient} title={project.title} />

                      <div className="flex flex-col gap-6 flex-1 justify-between">
                        <div>
                          <h4 className="text-xl font-bold tracking-tight text-foreground">
                            {project.title}
                          </h4>
                          <p className="mt-3 text-sm md:text-base leading-relaxed text-muted-foreground/75 font-normal">
                            {project.longDescription}
                          </p>
                        </div>

                        <div className="space-y-6">
                          <TechChips tech={project.tech} />
                          {project.links.length > 0 && (
                            <div className="pt-4 border-t border-border/20">
                              <ActionButtons links={project.links} />
                            </div>
                          )}
                        </div>
                      </div>

                    </div>
                  </SpotlightCard>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
