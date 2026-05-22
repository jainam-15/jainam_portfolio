"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Compass, PenTool, Code, Rocket, type LucideIcon } from "lucide-react";
import { processSteps } from "@/lib/constants";
import { fadeInUp, staggerContainer, defaultViewport } from "@/lib/animations";

const iconMap: Record<string, LucideIcon> = {
  compass: Compass,
  "pen-tool": PenTool,
  code: Code,
  rocket: Rocket,
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.12,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export default function ProcessSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { once: true, margin: "-80px" });

  return (
    <section id="process" className="relative py-32 md:py-48 border-t border-border bg-background">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-blue-500/[0.02] to-purple-500/[0.02] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        
        {/* Section Heading */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mb-24 text-center"
        >
          <motion.div
            variants={fadeInUp}
            className="text-[10px] tracking-[0.2em] text-muted-foreground/50 font-bold uppercase mb-3"
          >
            Methodology
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl uppercase"
          >
            Execution Path
          </motion.h2>
        </motion.div>

        {/* Process grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {processSteps.map((step, i) => {
            const Icon = iconMap[step.icon] ?? Compass;

            return (
              <motion.div
                key={step.step}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.04] bg-white/[0.01] p-8 transition-all duration-300 hover:border-foreground/[0.08]"
              >
                <div>
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-4xl font-extralight tracking-tighter text-muted-foreground/20 select-none">
                      0{step.step}
                    </span>
                    <div className="flex size-10 items-center justify-center rounded-lg border border-white/[0.05] bg-white/[0.02] text-muted-foreground/80 group-hover:text-foreground group-hover:border-foreground/[0.1] transition-colors">
                      <Icon className="size-4" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-lg font-bold tracking-tight text-foreground">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-muted-foreground/70 font-normal">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
