"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experience } from "@/lib/constants";

export default function ExperienceSection() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const methodology = [
    { num: "01", label: "Strategy" },
    { num: "02", label: "Design" },
    { num: "03", label: "Development" },
    { num: "04", label: "Scale" },
  ];

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative w-full overflow-hidden bg-background border-t border-border py-32 md:py-48 select-none"
    >
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute left-1/4 top-1/3 -z-10 h-[500px] w-[500px] opacity-[0.02] blur-[120px]">
        <div className="h-full w-full rounded-full bg-purple-500" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        
        {/* Section Header */}
        <div className="mb-24 md:mb-32">
          <span className="text-[10px] tracking-[0.2em] text-muted-foreground/40 font-bold uppercase block mb-3">
            Milestones
          </span>
          <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold tracking-[-0.05em] leading-[0.9] text-foreground uppercase">
            The Journey.
          </h2>
        </div>

        {/* Milestone Chronology */}
        <div className="flex flex-col gap-16 md:gap-24">
          {experience.map((entry, index) => (
            <motion.div
              key={entry.company + entry.role}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 pt-12 border-t border-white/[0.04]"
            >
              {/* Left Column: Period & Company */}
              <div className="lg:col-span-4 flex flex-col gap-1 text-left">
                <span className="text-sm font-mono tracking-tight text-muted-foreground/40 font-medium">
                  {entry.period}
                </span>
                <span className="text-lg font-bold text-foreground">
                  {entry.company}
                </span>
                <span className="text-xs text-muted-foreground/60">
                  {entry.duration}
                </span>
              </div>

              {/* Right Column: Role Title, Description & Technologies */}
              <div className="lg:col-span-8 flex flex-col gap-6 text-left">
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-mono tracking-[0.25em] text-muted-foreground/30 uppercase">
                    {"// Role"}
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-foreground uppercase">
                    {entry.role}
                  </h3>
                </div>

                <p className="text-base leading-relaxed text-muted-foreground/70 font-normal">
                  {entry.description}
                </p>

                {/* Typographic Tech Row */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-muted-foreground/40 font-mono pt-4 border-t border-white/[0.03]">
                  {entry.tech.map((t, i) => (
                    <span key={t} className="flex items-center">
                      {t}
                      {i < entry.tech.length - 1 && <span className="ml-3 text-muted-foreground/15 select-none">·</span>}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Typographic Methodology Row (Process Section Replacement) */}
        <div className="mt-48 md:mt-64 pt-24 border-t border-white/[0.04] text-center">
          <span className="text-[10px] tracking-[0.25em] text-muted-foreground/30 font-bold uppercase block mb-12 select-none">
            Methodology
          </span>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-16">
            {methodology.map((step, index) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.2, delay: 0.5 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-4 group"
              >
                <span className="text-2xl sm:text-3xl font-light tracking-tight text-muted-foreground/20 font-mono transition-colors duration-300 group-hover:text-white/40">
                  {step.num}
                </span>
                <span className="text-sm tracking-[0.2em] font-extrabold text-muted-foreground/40 uppercase transition-colors duration-300 group-hover:text-foreground">
                  {step.label}
                </span>
                {index < methodology.length - 1 && (
                  <span className="hidden sm:inline text-muted-foreground/10 text-xl font-light ml-8 select-none">
                    ·
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
