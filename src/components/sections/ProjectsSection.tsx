"use client";

import { useRef, useState, useCallback, type MouseEvent as ReactMouseEvent } from "react";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/lib/constants";
import { cn } from "@/lib/utils";

// ─────────────────────────────────────────────
// Custom GitHub icon
// ─────────────────────────────────────────────
function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

// ─────────────────────────────────────────────
// Spotlight HUD Card
// ─────────────────────────────────────────────
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
        "group relative overflow-hidden rounded-xl border border-white/5 bg-black/45 backdrop-blur-xl transition-all duration-500",
        "hover:border-blue-500/20 hover:shadow-[0_20px_60px_-12px_rgba(59,130,246,0.1)]",
        className
      )}
    >
      {/* Blueprint elements inside card */}
      <div className="pointer-events-none absolute inset-0 dot-matrix opacity-[0.1] group-hover:opacity-[0.2] transition-opacity" />

      {/* CAD Crosshairs */}
      <div className="hud-crosshair hud-crosshair-tl opacity-40 group-hover:opacity-100 transition-opacity" />
      <div className="hud-crosshair hud-crosshair-tr opacity-40 group-hover:opacity-100 transition-opacity" />
      <div className="hud-crosshair hud-crosshair-bl opacity-40 group-hover:opacity-100 transition-opacity" />
      <div className="hud-crosshair hud-crosshair-br opacity-40 group-hover:opacity-100 transition-opacity" />

      {/* Spotlight overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: isHovered
            ? `radial-gradient(400px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(59,130,246,0.06), transparent 60%)`
            : "none",
        }}
      />

      {children}
    </div>
  );
}

// ─────────────────────────────────────────────
// Tech Chips (Monospace style)
// ─────────────────────────────────────────────
function TechChips({ tech }: { tech: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tech.map((t) => (
        <span
          key={t}
          className="inline-flex items-center rounded bg-white/5 border border-white/5 px-2 py-0.5 text-[10px] font-mono text-muted-foreground/90 tracking-wide select-none"
        >
          {t.toLowerCase().replace(/\s/g, "_")}
        </span>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────
// CAD Specification List
// ─────────────────────────────────────────────
function CADSpecifications({ project, index }: { project: Project; index: number }) {
  const isMusic = project.id === "your-music-space";
  const isLeads = project.id === "leadsark";
  
  return (
    <div className="border border-white/5 bg-white/[0.01] rounded-lg p-4 font-mono text-[9px] tracking-wider text-muted-foreground/70 space-y-2 select-none">
      <div className="flex justify-between border-b border-white/5 pb-1 text-blue-400/80">
        <span>SPECIFICATION_TRACE // 0{index + 1}</span>
        <span>STATUS: LIVE</span>
      </div>
      <div className="grid grid-cols-2 gap-y-1 gap-x-4">
        <div className="flex justify-between">
          <span className="text-muted-foreground/40">MODULE_ID //:</span>
          <span className="text-foreground/90">{project.id.toUpperCase()}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground/40">ARCHITECTURE //:</span>
          <span className="text-foreground/90">{isMusic ? "CLIENT_SERVER" : "EDGE_RAG"}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground/40">COMPILATION //:</span>
          <span className="text-emerald-400">STABLE</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground/40">EST_LAT //:</span>
          <span className="text-foreground/90">{isLeads ? "42ms" : "85ms"}</span>
        </div>
        <div className="flex justify-between col-span-2 border-t border-white/5 pt-1.5">
          <span className="text-muted-foreground/40">CORE_ENGINE //:</span>
          <span className="text-foreground/90">{project.tech.slice(0, 3).join(" // ")}</span>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// CAD Vector Wireframe Preview Component
// ─────────────────────────────────────────────
function CADWireframePreview({ gradient, title }: { gradient: string; title: string }) {
  return (
    <div className={cn("relative overflow-hidden rounded-lg w-full h-full bg-gradient-to-br min-h-[220px] sm:min-h-[280px]", gradient)}>
      {/* Blueprint elements */}
      <div className="absolute inset-0 blueprint-grid opacity-[0.25] mix-blend-overlay" />
      <div className="absolute inset-0 dot-matrix opacity-[0.2] mix-blend-overlay" />

      {/* Floating blueprint graphics */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[80%] h-[75%] border border-white/10 rounded flex flex-col justify-between p-3 select-none">
          {/* Internal blueprint layout lines */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-white/5" />
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5" />
          
          <div className="flex justify-between font-mono text-[8px] text-white/40">
            <span>[X_COORD: 412]</span>
            <span>[Y_COORD: 890]</span>
          </div>

          <div className="text-center">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white font-bold bg-black/40 px-3 py-1 rounded border border-white/10 backdrop-blur-sm shadow-xl">
              {title}
            </span>
          </div>

          <div className="flex justify-between font-mono text-[8px] text-white/40">
            <span>SCALE: 1:1.0</span>
            <span>SYS_OK</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Primary Action Buttons
// ─────────────────────────────────────────────
function ActionButtons({ links }: { links: Project["links"] }) {
  if (!links.length) return null;

  return (
    <div className="flex flex-wrap gap-2.5">
      {links.map((link) => {
        const isGitHub = link.label.toLowerCase() === "github" || link.href.includes("github.com");
        const Icon = isGitHub ? GithubIcon : ExternalLink;

        return (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-2 rounded px-4 py-2 font-mono text-xs tracking-wider",
              "transition-all duration-300 active:scale-[0.98]",
              isGitHub
                ? "border border-white/10 bg-black/40 text-muted-foreground/90 hover:border-white/20 hover:text-white"
                : "bg-white text-black hover:bg-white/90"
            )}
          >
            <Icon className="h-3.5 w-3.5" />
            <span>{isGitHub ? "SRC_CODE" : "LIVE_PREV"}</span>
            {!isGitHub && <ArrowUpRight className="h-3 w-3" />}
          </a>
        );
      })}
    </div>
  );
}

// ─────────────────────────────────────────────
// ProjectsSection Component
// ─────────────────────────────────────────────
export default function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative overflow-hidden py-12 md:py-24 border-t border-white/5">
      {/* Blueprint Grid layout backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 blueprint-grid opacity-10" />

      {/* Background ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/[0.02] blur-[130px]" />
        <div className="absolute right-1/4 bottom-1/4 h-[600px] w-[600px] translate-x-1/2 rounded-full bg-purple-500/[0.02] blur-[130px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-24 text-left border-l-2 border-blue-500/80 pl-6">
          <div className="font-mono text-xs tracking-[0.3em] text-blue-500/80 font-bold mb-2">
            {"// PORTFOLIO_PRODUCTION // DEPLOYMENTS"}
          </div>
          <h2 className="text-4xl font-extrabold tracking-tighter text-foreground sm:text-5xl lg:text-6xl uppercase">
            Product Archive
          </h2>
        </div>

        {/* Viewport-owning Showcase List (Spacious Snap layout) */}
        <div className="flex flex-col gap-32">
          {featuredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="min-h-[85vh] flex items-center justify-center py-12 border-b border-white/5 last:border-0"
            >
              <div className="w-full">
                {/* Telemetry panel indicators */}
                <div className="flex justify-between items-center mb-3 font-mono text-[9px] tracking-widest text-muted-foreground/35 select-none">
                  <span>SHOWCASE // ARCHIVE_INDEX // 0{idx + 1}</span>
                  <span>VIEWPORT_SNAP // ACTIVE</span>
                </div>
                
                <SpotlightCard className="w-full">
                  <div className="relative z-20 grid gap-8 p-6 sm:p-8 lg:grid-cols-12 lg:gap-12">
                    
                    {/* CAD Vector Preview column */}
                    <div className="lg:col-span-7 flex items-center justify-center">
                      <CADWireframePreview gradient={project.gradient} title={project.title} />
                    </div>

                    {/* Specifications & Content column */}
                    <div className="lg:col-span-5 flex flex-col justify-center gap-6">
                      <div>
                        <span className="font-mono text-[8px] tracking-[0.25em] text-blue-500 block mb-1">
                          FEATURED_DEPLOYMENT
                        </span>
                        <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                          {project.title}
                        </h3>
                        {project.metrics && (
                          <div className="mt-2.5">
                            <span className="inline-flex items-center gap-1.5 rounded border border-blue-500/20 bg-blue-500/5 px-2.5 py-0.5 text-[10px] font-mono text-blue-400">
                              <span className="h-1 w-1 rounded-full bg-blue-400 animate-pulse" />
                              {project.metrics}
                            </span>
                          </div>
                        )}
                      </div>

                      <p className="text-sm leading-relaxed text-muted-foreground/80">
                        {project.longDescription}
                      </p>

                      {/* CAD specifications details */}
                      <CADSpecifications project={project} index={idx} />

                      {/* Tech Chips */}
                      <TechChips tech={project.tech} />

                      {/* Action buttons */}
                      <ActionButtons links={project.links} />

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
            <div className="mb-10 text-left border-l-2 border-muted-foreground/20 pl-4 font-mono select-none">
              <span className="text-[10px] tracking-widest text-muted-foreground/45 uppercase">
                ADDITIONAL_TRACE_LOGS // MODULES
              </span>
            </div>

            <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
              {otherProjects.map((project, idx) => (
                <div key={project.id}>
                  <div className="flex justify-between items-center mb-1.5 font-mono text-[8px] tracking-widest text-muted-foreground/25 select-none">
                    <span>SYS_INDEX: 0{idx + 4}</span>
                    <span>TYPE: MINOR_DEP</span>
                  </div>
                  <SpotlightCard className="h-full">
                    <div className="relative z-20 flex h-full flex-col p-6 gap-5">
                      
                      <CADWireframePreview gradient={project.gradient} title={project.title} />

                      <div className="flex flex-col gap-4 flex-1 justify-between">
                        <div>
                          <h4 className="text-lg font-mono tracking-wider uppercase text-foreground">
                            {project.title}
                          </h4>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground/80">
                            {project.longDescription}
                          </p>
                        </div>

                        <div className="space-y-4">
                          <TechChips tech={project.tech} />
                          {project.links.length > 0 && (
                            <div className="pt-2 border-t border-white/5">
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
