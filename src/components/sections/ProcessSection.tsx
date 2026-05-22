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
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.0,
      delay: i * 0.18,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export default function ProcessSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { once: true, margin: "-80px" });

  return (
    <section id="process" className="relative py-36 sm:py-44 border-t border-white/5">
      {/* Blueprint grid underlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 blueprint-grid opacity-10" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-gradient-to-br from-blue-500/5 via-violet-500/5 to-purple-500/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mb-24 text-left border-l-2 border-blue-500/80 pl-6"
        >
          <motion.div
            variants={fadeInUp}
            className="font-mono text-xs tracking-[0.3em] text-blue-500/80 font-bold mb-2"
          >
            {"// STRATEGIC_WORKFLOW // COMPILATION"}
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-extrabold tracking-tighter text-foreground sm:text-5xl lg:text-6xl uppercase"
          >
            Execution Phase
          </motion.h2>
        </motion.div>

        {/* Process grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4"
        >
          {processSteps.map((step, i) => {
            const Icon = iconMap[step.icon] ?? Compass;
            const isLast = i === processSteps.length - 1;

            return (
              <div key={step.step} className="relative flex flex-col items-center">
                
                {/* Horizontal Laser Line Divider (desktop) */}
                {!isLast && (
                  <div className="pointer-events-none absolute top-12 left-[calc(50%+40px)] hidden h-[1px] w-[calc(100%-80px)] lg:block z-20">
                    <div className="laser-line-h" />
                  </div>
                )}

                {/* Vertical Laser Line Divider (mobile) */}
                {!isLast && (
                  <div className="pointer-events-none absolute -bottom-4 left-1/2 block h-8 w-[1px] -translate-x-1/2 lg:hidden z-20">
                    <div className="laser-line-v" />
                  </div>
                )}

                {/* HUD Process Card */}
                <motion.div
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="group relative w-full rounded-lg border border-white/5 bg-black/40 p-6 text-center backdrop-blur-xl transition-all duration-300 hover:border-blue-500/20 hover:shadow-lg hover:shadow-blue-500/5"
                >
                  {/* Grid overlay within card */}
                  <div className="pointer-events-none absolute inset-0 dot-matrix opacity-[0.1] group-hover:opacity-[0.2] transition-opacity" />

                  {/* CAD Crosshairs */}
                  <div className="hud-crosshair hud-crosshair-tl opacity-40 group-hover:opacity-100 transition-opacity" />
                  <div className="hud-crosshair hud-crosshair-br opacity-40 group-hover:opacity-100 transition-opacity" />

                  {/* Telemetry Annotation Header */}
                  <div className="flex justify-between items-center mb-5 font-mono text-[8px] tracking-widest text-muted-foreground/35 select-none">
                    <span>PHASE // 0{step.step}</span>
                    <span>READY</span>
                  </div>

                  {/* Step Icon */}
                  <div className="relative mx-auto mb-5 flex size-12 items-center justify-center rounded-lg border border-white/5 bg-white/5">
                    <Icon className="size-5 text-blue-400 group-hover:scale-110 transition-transform" />
                  </div>

                  {/* Title */}
                  <h3 className="relative mb-2 text-base font-mono tracking-wider uppercase text-foreground">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="relative text-sm leading-relaxed text-muted-foreground/80 font-sans">
                    {step.description}
                  </p>

                  {/* Bottom Telemetry */}
                  <div className="mt-8 pt-3 border-t border-white/5 flex justify-between font-mono text-[7px] tracking-widest text-muted-foreground/30 select-none">
                    <span>CALL_FUNC: EXEC_{step.title.toUpperCase()}</span>
                    <span>OP: OK</span>
                  </div>
                </motion.div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
