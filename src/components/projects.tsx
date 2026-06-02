"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Github } from "@/components/icons";

const caseStudies = [
  {
    name: "LeadsArk",
    tagline: "Autonomous Lead Intelligence",
    problem: "SMBs lose revenue to delayed follow-ups. Warm leads go cold while sales teams manage pipelines manually.",
    solution: "An orchestration layer between lead forms and CRMs — capturing webhooks in real time to trigger context-aware automated replies within 2 seconds.",
    decisions: "Next.js Edge Functions over standard lambdas kept cold-start latency under 50ms. Supabase real-time subscriptions push instant state updates without polling.",
    outcome: "Lead response time dropped from hours to under 2 seconds. Client lead retention up 40%.",
    tech: ["Next.js", "Edge Functions", "Supabase", "LLMs", "TypeScript"],
    live: "https://leadsark.vercel.app",
    github: "https://github.com/jainam-15/leadsark",
    image: "/images/leadsark_ui.png",
  },
  {
    name: "Your Music Space",
    tagline: "Premium Cross-Platform Audio",
    problem: "High-quality, ad-free streaming is locked behind expensive subscriptions and fragmented ecosystems.",
    solution: "A unified audio engine with seamless playback, gamified progression, and synchronized state across Web, iOS, and Android.",
    decisions: "Unified Flutter codebase for mobile guaranteed 60fps animations. Firebase real-time database handles sub-100ms state sync across active devices.",
    outcome: "15+ DAUs in closed beta. Zero reported buffering issues.",
    tech: ["Flutter", "Firebase", "Next.js", "Node.js", "Dart"],
    live: "https://yourmusicspaceweb.vercel.app",
    github: "",
    image: "/images/music_space_ui.png",
  },
  {
    name: "Intent AI",
    tagline: "Generative Vibe-Coding Platform",
    problem: "Translating product ideas into full-stack code requires significant engineering bandwidth and boilerplate setup.",
    solution: "A generative AI platform that synthesizes full-stack applications from natural language prompts and deploys them instantly in an embedded sandbox.",
    decisions: "Strict prompt orchestration guarantees syntactically valid React components. Automated deployment pipelines eliminate manual environment setup.",
    outcome: "Non-technical founders can spin up working MVPs in seconds. Boilerplate setup time reduced by 99%.",
    tech: ["Next.js", "TypeScript", "Node.js", "GenAI APIs"],
    live: "",
    github: "",
    image: "/images/intent_ai_ui.png",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-8 max-w-5xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-20"
        >
          <p className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-6">
            Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
            Case studies<span className="text-foreground/40">.</span>
          </h2>
        </motion.div>

        <div className="space-y-28">
          {caseStudies.map((project, idx) => (
            <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

              {/* Left: Narrative */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-80px" }}
                className="lg:col-span-5 flex flex-col"
              >
                <div className="mb-8">
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground mb-2">
                    {project.name}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium">
                    {project.tagline}
                  </p>
                </div>

                <div className="space-y-6 mb-8">
                  <div>
                    <p className="text-[11px] font-mono tracking-widest uppercase text-muted-foreground/60 mb-2">
                      Problem
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] font-mono tracking-widest uppercase text-muted-foreground/60 mb-2">
                      Solution
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] font-mono tracking-widest uppercase text-muted-foreground/60 mb-2">
                      Key Decisions
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.decisions}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-[11px] font-mono tracking-widest uppercase text-muted-foreground/60 mb-2">
                      Outcome
                    </p>
                    <p className="text-sm font-semibold text-foreground leading-relaxed">
                      {project.outcome}
                    </p>
                  </div>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 text-xs font-mono rounded-full border border-border text-muted-foreground bg-card"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-6">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-foreground bg-foreground/5 hover:bg-foreground/10 border border-border px-4 py-2 rounded-full transition-colors"
                    >
                      View live
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Source
                    </a>
                  )}
                </div>
              </motion.div>

              {/* Right: Screenshot */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                viewport={{ once: true, margin: "-80px" }}
                className="lg:col-span-7 lg:sticky lg:top-28"
              >
                <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden border border-border bg-card relative">
                  <Image
                    src={project.image}
                    alt={`${project.name} screenshot`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                </div>
              </motion.div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
