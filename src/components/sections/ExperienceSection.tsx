"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
import { experience } from "@/lib/constants";
import { fadeInUp, staggerContainer, defaultViewport } from "@/lib/animations";

/* ─── Card animation variants ──────────────────────── */
const cardVariants = {
  hidden: { opacity: 0, x: -30, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      delay: i * 0.15,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

const dotVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 260,
      damping: 20,
      delay: i * 0.15 + 0.1,
    },
  }),
};

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  /* ─── Scroll-driven line animation ────────────────── */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 60%"],
  });

  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-24 sm:py-32 lg:py-40"
    >
      {/* ── Ambient background glow ─────────────────── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-blue-500/5 blur-[120px] dark:bg-blue-500/10" />
        <div className="absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-purple-500/5 blur-[120px] dark:bg-purple-500/10" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        {/* ── Section heading ───────────────────────── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mb-16 lg:mb-20"
        >
          <motion.p
            variants={fadeInUp}
            className="mb-3 text-sm font-medium tracking-widest text-blue-500 uppercase"
          >
            Career
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Experience
          </motion.h2>
        </motion.div>

        {/* ── Timeline ──────────────────────────────── */}
        <div className="relative">
          {/* Animated connector line */}
          <div
            ref={lineRef}
            className="absolute top-0 left-[11px] sm:left-[15px] h-full w-px origin-top"
          >
            {/* Static track */}
            <div className="absolute inset-0 bg-border/40 dark:bg-white/5" />
            {/* Animated fill */}
            <motion.div
              style={{ scaleY: lineScaleY }}
              className="absolute inset-0 origin-top bg-gradient-to-b from-blue-500 via-violet-500 to-purple-500"
            />
          </div>

          {/* ── Entries ─────────────────────────────── */}
          <div className="space-y-10 sm:space-y-14">
            {experience.map((entry, i) => (
              <TimelineEntry key={entry.company + entry.role} entry={entry} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Timeline entry sub-component ───────────────────── */
interface TimelineEntryProps {
  entry: (typeof experience)[number];
  index: number;
}

function TimelineEntry({ entry, index }: TimelineEntryProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="relative flex gap-6 sm:gap-8 pl-0">
      {/* ── Timeline dot ─────────────────────────── */}
      <motion.div
        custom={index}
        variants={dotVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 mt-6 flex size-[22px] sm:size-[30px] shrink-0 items-center justify-center"
      >
        {/* Glow ring */}
        <span className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 opacity-25 blur-[6px]" />
        {/* Outer circle */}
        <span className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-500" />
        {/* Inner dot */}
        <span className="relative size-2 sm:size-2.5 rounded-full bg-white dark:bg-background" />
      </motion.div>

      {/* ── Card ──────────────────────────────────── */}
      <motion.div
        custom={index}
        variants={cardVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="group flex-1 rounded-2xl border border-border/50 bg-card/50 p-5 sm:p-6 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/20 hover:shadow-lg hover:shadow-blue-500/5 dark:bg-white/[0.03] dark:hover:bg-white/[0.05]"
      >
        {/* Top row */}
        <div className="mb-3 flex flex-wrap items-center gap-3">
          <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
            {entry.role}
          </h3>
          <span className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-3 py-0.5 text-xs font-medium text-blue-600 ring-1 ring-blue-500/20 dark:text-blue-400">
            {entry.duration}
          </span>
        </div>

        {/* Company & period */}
        <div className="mb-3 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <span className="font-medium text-foreground/80">{entry.company}</span>
          <span className="hidden sm:inline text-border">·</span>
          <span>{entry.period}</span>
        </div>

        {/* Description */}
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground/90">
          {entry.description}
        </p>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-1.5">
          {entry.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-secondary/70 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors group-hover:bg-secondary group-hover:text-foreground dark:bg-white/5 dark:group-hover:bg-white/10"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
