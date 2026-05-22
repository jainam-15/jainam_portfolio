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
      className="relative w-full overflow-hidden bg-black py-32 md:py-48 select-none"
    >
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Section Header */}
        <div className="mb-24 md:mb-32">
          <span className="text-[10px] tracking-[0.25em] text-zinc-600 font-bold uppercase block mb-3">
            Milestones
          </span>
          <h2 className="text-[clamp(3rem,8vw,6.5rem)] font-black tracking-[-0.05em] leading-[0.9] text-white uppercase">
            The Journey.
          </h2>
        </div>

        {/* Milestone Chronology (Borderless Negative Space) */}
        <div className="flex flex-col gap-24 md:gap-32">
          {experience.map((entry, index) => (
            <motion.div
              key={entry.company + entry.role}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start"
            >
              {/* Left Column: Period & Company */}
              <div className="lg:col-span-4 flex flex-col gap-1 text-left">
                <span className="text-sm font-mono tracking-tight text-zinc-600 font-medium">
                  {entry.period}
                </span>
                <span className="text-2xl font-black tracking-tight text-white uppercase">
                  {entry.company}
                </span>
                <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider">
                  {entry.duration}
                </span>
              </div>

              {/* Right Column: Role Title, Description & Technologies */}
              <div className="lg:col-span-8 flex flex-col gap-6 text-left">
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-mono tracking-[0.25em] text-zinc-600 uppercase">
                    {"// Role"}
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-zinc-300 uppercase">
                    {entry.role}
                  </h3>
                </div>

                <p className="text-base leading-relaxed text-zinc-400 font-light max-w-2xl">
                  {entry.description}
                </p>

                {/* Typographic Tech Row */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-zinc-600 font-mono pt-4 border-t border-white/[0.04] uppercase">
                  {entry.tech.map((t) => (
                    <span key={t}>
                      {"// "}{t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Typographic Methodology Row (Process Section Replacement) */}
        <div className="mt-48 md:mt-64 pt-24 border-t border-white/[0.04] text-left">
          <span className="text-[10px] tracking-[0.25em] text-zinc-600 font-bold uppercase block mb-16 select-none">
            Methodology
          </span>
          <div className="flex flex-col gap-6 md:gap-8">
            {methodology.map((step, index) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1.5, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-baseline gap-6 md:gap-10 group"
              >
                <span className="text-[clamp(2.5rem,7vw,6rem)] font-light tracking-tight text-zinc-800 font-mono leading-none select-none transition-colors duration-500 group-hover:text-zinc-500">
                  {step.num}
                </span>
                <span className="text-[clamp(2rem,6vw,5rem)] font-black tracking-tight text-zinc-600 uppercase leading-none transition-colors duration-500 group-hover:text-white">
                  {step.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

