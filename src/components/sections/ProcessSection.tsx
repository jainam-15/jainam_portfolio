"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Compass, PenTool, Code, Rocket, type LucideIcon } from "lucide-react";
import { processSteps } from "@/lib/constants";
import { fadeInUp, staggerContainer, defaultViewport } from "@/lib/animations";

/* ─── Icon map ──────────────────────────────────────── */
const iconMap: Record<string, LucideIcon> = {
  compass: Compass,
  "pen-tool": PenTool,
  code: Code,
  rocket: Rocket,
};

/* ─── Card animation variants ──────────────────────── */
const cardVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      delay: i * 0.12,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

const connectorVariants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: (i: number) => ({
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.12 + 0.3,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

const connectorVerticalVariants = {
  hidden: { scaleY: 0, opacity: 0 },
  visible: (i: number) => ({
    scaleY: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.12 + 0.3,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

export default function ProcessSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { once: true, margin: "-80px" });

  return (
    <section id="process" className="relative py-24 sm:py-32 lg:py-40">
      {/* ── Ambient glow ────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-blue-500/5 via-violet-500/5 to-purple-500/5 blur-[100px] dark:from-blue-500/8 dark:via-violet-500/8 dark:to-purple-500/8" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* ── Section heading ───────────────────────── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mb-16 text-center lg:mb-20"
        >
          <motion.p
            variants={fadeInUp}
            className="mb-3 text-sm font-medium tracking-widest text-blue-500 uppercase"
          >
            Workflow
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            My Process
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-4 max-w-xl text-muted-foreground"
          >
            From concept to launch — a proven workflow that delivers exceptional
            results every time.
          </motion.p>
        </motion.div>

        {/* ── Process grid ──────────────────────────── */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0"
        >
          {processSteps.map((step, i) => {
            const Icon = iconMap[step.icon] ?? Compass;
            const isLast = i === processSteps.length - 1;

            return (
              <div key={step.step} className="relative flex flex-col items-center">
                {/* ── Horizontal connector (desktop) ─── */}
                {!isLast && (
                  <motion.div
                    custom={i}
                    variants={connectorVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="pointer-events-none absolute top-[52px] left-[calc(50%+40px)] hidden h-px w-[calc(100%-80px)] origin-left lg:block"
                  >
                    <div className="h-full w-full border-t-2 border-dashed border-blue-500/20 dark:border-blue-400/15" />
                    {/* Arrow tip */}
                    <div className="absolute -right-1 -top-[5px] size-2.5 rotate-45 border-r-2 border-t-2 border-blue-500/30 dark:border-blue-400/25" />
                  </motion.div>
                )}

                {/* ── Vertical connector (mobile / tablet) ── */}
                {!isLast && (
                  <motion.div
                    custom={i}
                    variants={connectorVerticalVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="pointer-events-none absolute -bottom-3 left-1/2 block h-6 w-px origin-top -translate-x-1/2 lg:hidden"
                  >
                    <div className="h-full w-full border-l-2 border-dashed border-blue-500/20 dark:border-blue-400/15" />
                  </motion.div>
                )}

                {/* ── Card ──────────────────────────── */}
                <motion.div
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="group relative w-full rounded-2xl border border-border/50 bg-card/50 p-6 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/20 hover:shadow-xl hover:shadow-blue-500/5 dark:bg-white/[0.03] dark:hover:bg-white/[0.05] lg:mx-2"
                >
                  {/* Hover glow */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-blue-500/5 via-transparent to-purple-500/5" />
                  </div>

                  {/* Step number circle */}
                  <div className="relative mx-auto mb-5 flex size-[72px] items-center justify-center">
                    {/* Gradient ring */}
                    <span className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 opacity-15 blur-sm transition-opacity group-hover:opacity-30" />
                    <span className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 p-[2px]">
                      <span className="flex size-full items-center justify-center rounded-full bg-card dark:bg-background">
                        <Icon className="size-6 text-blue-500 transition-transform duration-300 group-hover:scale-110" />
                      </span>
                    </span>
                    {/* Step badge */}
                    <span className="absolute -top-1 -right-1 flex size-6 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-[10px] font-bold text-white shadow-lg shadow-blue-500/30">
                      {step.step}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="relative mb-2 text-lg font-semibold tracking-tight">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="relative text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
