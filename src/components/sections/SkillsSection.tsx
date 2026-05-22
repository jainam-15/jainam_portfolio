"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function SkillsSection() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const pillars = [
    {
      title: "System Architecture",
      subtitle: "Relentless Backends & Orchestration",
      description: "Engineering scalable foundations designed for maximum throughput, persistent state, and sub-millisecond response latency. We prioritize architectural integrity over quick hacks.",
      skills: ["Next.js & App Router", "Node.js (Express & APIs)", "Supabase & Postgres", "GraphQL & REST APIs", "Prisma & SQL Systems", "Realtime WebSockets"],
    },
    {
      title: "Interfaces",
      subtitle: "Visual Luxury & Kinetic Feel",
      description: "Crafting fluid, high-fidelity user experiences that respond to human intent. Heavily inspired by Apple's restraint, Stripe's layouts, and Framer's interactive precision.",
      skills: ["React & Next.js Ecosystem", "TypeScript & Clean Logic", "TailwindCSS & Fluid Layouts", "Framer Motion & GSAP", "Flutter & Native Android (Kotlin)", "Figma UI/UX & Design Systems"],
    },
    {
      title: "Intelligence",
      subtitle: "Cognitive Automations & Agents",
      description: "Integrating intelligent language models directly into the pipeline. Designing autonomous agent systems and semantic workflows that run ahead of human operations.",
      skills: ["OpenAI & LLM Integrations", "AI Agents & Tool Calling", "Retrieval-Augmented Generation (RAG)", "Prompt Engineering & Evaluation", "Vector Databases & Embeddings", "Intelligent Workflows"],
    },
  ];

  return (
    <section
      id="skills"
      ref={containerRef}
      className="relative w-full overflow-hidden bg-background border-t border-border py-32 md:py-48 select-none"
    >
      {/* Light atmospheric glow */}
      <div className="pointer-events-none absolute left-1/3 top-1/2 -z-10 h-[500px] w-[500px] -translate-y-1/2 opacity-[0.02] blur-[120px]">
        <div className="h-full w-full rounded-full bg-blue-500" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        
        {/* Section Header */}
        <div className="mb-24 md:mb-32">
          <span className="text-[10px] tracking-[0.2em] text-muted-foreground/40 font-bold uppercase block mb-3">
            Capabilities
          </span>
          <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold tracking-[-0.05em] leading-[0.9] text-foreground uppercase">
            The Competencies.
          </h2>
        </div>

        {/* Editorial Pillars Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 lg:gap-16">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.5, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-6 text-left"
            >
              {/* Pillar Title */}
              <div className="flex flex-col gap-1.5">
                <span className="text-[9px] font-mono tracking-[0.3em] text-muted-foreground/30 uppercase">
                  {"// Pillar 0"}{index + 1}
                </span>
                <h3 className="text-xl font-bold tracking-tight text-foreground uppercase">
                  {pillar.title}
                </h3>
                <span className="text-xs text-muted-foreground/50 font-medium">
                  {pillar.subtitle}
                </span>
              </div>

              {/* Editorial Description */}
              <p className="text-sm leading-relaxed text-muted-foreground/70 font-normal">
                {pillar.description}
              </p>

              {/* Vertical Divider */}
              <div className="w-full h-px bg-white/[0.04]" />

              {/* Technology Stack List */}
              <ul className="flex flex-col gap-3 font-mono text-xs text-muted-foreground/60">
                {pillar.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 group transition-colors duration-300 hover:text-foreground">
                    <span className="w-1 h-1 rounded-full bg-white/20 transition-all duration-300 group-hover:bg-foreground group-hover:scale-125" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
