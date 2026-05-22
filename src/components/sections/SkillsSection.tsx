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
      className="relative w-full overflow-hidden bg-black py-32 md:py-48 select-none"
    >
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Section Header - Architectural Styling */}
        <div className="mb-24 md:mb-32">
          <span className="text-[10px] tracking-[0.25em] text-zinc-600 font-bold uppercase block mb-3">
            Capabilities
          </span>
          <h2 className="text-[clamp(3rem,8vw,6.5rem)] font-black tracking-[-0.05em] leading-[0.9] text-white uppercase">
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
              className="flex flex-col gap-8 text-left"
            >
              {/* Pillar Title */}
              <div className="flex flex-col gap-2">
                <span className="text-[9px] font-mono tracking-[0.3em] text-zinc-600 uppercase">
                  {"// Pillar 0"}{index + 1}
                </span>
                <h3 className="text-2xl font-extrabold tracking-tight text-white uppercase leading-none">
                  {pillar.title}
                </h3>
                <span className="text-xs text-zinc-500 font-medium tracking-wider uppercase">
                  {pillar.subtitle}
                </span>
              </div>

              {/* Editorial Description */}
              <p className="text-sm leading-relaxed text-zinc-400 font-light">
                {pillar.description}
              </p>

              {/* Structural Line */}
              <div className="w-full h-px bg-white/[0.04]" />

              {/* Technology Stack List */}
              <ul className="flex flex-col gap-3 font-mono text-xs text-zinc-500">
                {pillar.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 transition-colors duration-300 hover:text-white">
                    <span className="text-zinc-800 text-[10px] font-mono select-none">/</span>
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

