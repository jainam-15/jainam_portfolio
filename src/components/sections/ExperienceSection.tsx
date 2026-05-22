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
        <div className="mb-20">
          <span className="text-[10px] tracking-[0.25em] text-zinc-600 font-bold uppercase block mb-3">
            {"06 // Chronology"}
          </span>
          <h2 className="text-[clamp(3.5rem,8vw,6.5rem)] font-black tracking-[-0.05em] leading-[0.9] text-white uppercase">
            The Journey.
          </h2>
        </div>

        {/* Milestone Chronology (Borderless Negative Space Credits) */}
        <div className="flex flex-col divide-y divide-white/[0.04] border-t border-b border-white/[0.04] mb-32">
          {experience.map((entry, index) => (
            <motion.div
              key={entry.company + entry.role}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="py-6 flex flex-col md:flex-row md:items-center justify-between text-left font-mono text-xs md:text-sm tracking-wider md:tracking-widest uppercase gap-2 text-zinc-400"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                <span className="text-white font-extrabold tracking-widest">
                  {entry.company}
                </span>
                <span className="hidden md:inline text-zinc-800">·</span>
                <span className="text-zinc-500 font-light">
                  {entry.role}
                </span>
              </div>
              <span className="text-zinc-600 md:text-right">
                {entry.period}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Typographic Methodology Row (Process Section Replacement) */}
        <div className="pt-24 border-t border-white/[0.04] text-left">
          <span className="text-[10px] tracking-[0.25em] text-zinc-600 font-bold uppercase block mb-16 select-none">
            {"07 // Methodology"}
          </span>
          <div className="flex flex-col gap-4 md:gap-6">
            {methodology.map((step, index) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-baseline gap-6 md:gap-10 group"
              >
                <span className="text-[clamp(1.8rem,5vw,4.5rem)] font-extrabold tracking-tighter text-zinc-800 font-mono leading-none select-none transition-colors duration-500 group-hover:text-zinc-500">
                  {step.num}
                </span>
                <span className="text-[clamp(2.5rem,8vw,7.5rem)] font-black tracking-[-0.04em] text-zinc-700 uppercase leading-none transition-colors duration-500 group-hover:text-white">
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

