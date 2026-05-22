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

  // Scroll-driven line animation
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 70%", "end 60%"],
  });

  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-36 sm:py-44 border-t border-white/5"
    >
      {/* Blueprint grid backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 blueprint-grid opacity-10" />

      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/3 left-1/4 h-96 w-96 rounded-full bg-blue-500/5 blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 h-96 w-96 rounded-full bg-purple-500/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        
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
            {"// EXECUTION_LOGS // STACK_TRACE"}
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-extrabold tracking-tighter text-foreground sm:text-5xl lg:text-6xl uppercase"
          >
            Trace Timeline
          </motion.h2>
        </motion.div>

        {/* Timeline trace logs */}
        <div className="relative">
          {/* Vertical active trace line */}
          <div className="absolute top-0 left-[11px] sm:left-[15px] h-full w-px origin-top">
            {/* Background track */}
            <div className="absolute inset-0 bg-white/5" />
            {/* Animated laser line */}
            <motion.div
              style={{ scaleY: lineScaleY }}
              className="absolute inset-0 origin-top bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500"
            />
          </div>

          {/* Timeline Entries */}
          <div className="space-y-12 sm:space-y-16">
            {experience.map((entry, idx) => (
              <TimelineEntry key={entry.company + entry.role} entry={entry} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Timeline Entry Sub-component (Terminal log design)
// ─────────────────────────────────────────────
interface TimelineEntryProps {
  entry: (typeof experience)[number];
  index: number;
}

function TimelineEntry({ entry, index }: TimelineEntryProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <div ref={ref} className="relative flex gap-6 sm:gap-8 pl-0">
      
      {/* Timeline Dot Connector */}
      <motion.div
        custom={index}
        variants={dotVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 mt-6 flex size-[22px] sm:size-[30px] shrink-0 items-center justify-center"
      >
        <span className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 opacity-30 blur-[6px]" />
        <span className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-500" />
        <span className="relative size-2 sm:size-2.5 rounded-full bg-black" />
      </motion.div>

      {/* Terminal log panel card */}
      <motion.div
        custom={index}
        variants={cardVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="group flex-1 rounded-lg border border-white/5 bg-black/40 p-5 sm:p-6 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/20 hover:shadow-lg hover:shadow-blue-500/5"
      >
        {/* Terminal Header */}
        <div className="flex justify-between items-center border-b border-white/5 pb-2 mb-4 font-mono text-[8px] tracking-widest text-muted-foreground/35 select-none">
          <span>LOG_TRACE // STEP_0{index + 1}</span>
          <span className="text-emerald-400 font-bold">OP_SUCCESS // RUNNING</span>
        </div>

        {/* CAD Corner crosshairs */}
        <div className="hud-crosshair hud-crosshair-tl opacity-40 group-hover:opacity-100 transition-opacity" />
        <div className="hud-crosshair hud-crosshair-br opacity-40 group-hover:opacity-100 transition-opacity" />

        {/* Role, Company, Period block */}
        <div className="mb-4">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-lg font-bold tracking-tight sm:text-xl font-mono uppercase">
              {entry.role.replace(/\s/g, "_")}
            </h3>
            <span className="inline-flex items-center rounded border border-blue-500/20 bg-blue-500/5 px-2 py-0.5 text-[10px] font-mono text-blue-400">
              {entry.duration}
            </span>
          </div>
          
          <div className="mt-1.5 flex flex-wrap items-center gap-2 text-xs font-mono text-muted-foreground">
            <span className="text-foreground/80">ORG: {entry.company}</span>
            <span className="text-white/10">|</span>
            <span>PERIOD: {entry.period}</span>
          </div>
        </div>

        {/* Details Paragraph */}
        <p className="mb-6 text-sm leading-relaxed text-muted-foreground/80 font-sans">
          {entry.description}
        </p>

        {/* Tech readouts tags */}
        <div className="flex flex-wrap gap-1.5 border-t border-white/5 pt-4">
          {entry.tech.map((tech) => (
            <span
              key={tech}
              className="rounded bg-white/5 px-2 py-0.5 text-[9px] font-mono text-muted-foreground/75 tracking-wider select-none"
            >
              #{tech.toLowerCase()}
            </span>
          ))}
        </div>
      </motion.div>

    </div>
  );
}
