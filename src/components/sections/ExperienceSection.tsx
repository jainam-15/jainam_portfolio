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
      className="relative py-32 md:py-48 border-t border-border bg-background"
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/3 left-1/4 h-96 w-96 rounded-full bg-blue-500/[0.03] blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 h-96 w-96 rounded-full bg-purple-500/[0.02] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6">
        
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
            History
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl uppercase"
          >
            Experience
          </motion.h2>
        </motion.div>

        {/* Timeline trace logs */}
        <div className="relative">
          {/* Vertical active trace line */}
          <div className="absolute top-0 left-[11px] sm:left-[15px] h-full w-px origin-top">
            {/* Background track */}
            <div className="absolute inset-0 bg-border/50" />
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

interface TimelineEntryProps {
  entry: (typeof experience)[number];
  index: number;
}

function TimelineEntry({ entry, index }: TimelineEntryProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const cardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.1,
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
        <span className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 opacity-20 blur-[4px]" />
        <span className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-500" />
        <span className="relative size-2 sm:size-2.5 rounded-full bg-black" />
      </motion.div>

      {/* Content card */}
      <motion.div
        custom={index}
        variants={cardVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="group flex-1 rounded-2xl border border-white/[0.04] bg-black/[0.15] dark:bg-white/[0.01] p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:border-foreground/[0.08]"
      >
        {/* Role, Company, Period block */}
        <div className="mb-5">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-xl font-bold tracking-tight text-foreground">
              {entry.role}
            </h3>
            <span className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/5 px-3 py-1 text-[10px] font-semibold text-blue-400">
              {entry.duration}
            </span>
          </div>
          
          <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-muted-foreground/80">
            <span className="font-semibold text-foreground/80">{entry.company}</span>
            <span className="text-border">|</span>
            <span className="font-medium">{entry.period}</span>
          </div>
        </div>

        {/* Details Paragraph */}
        <p className="mb-6 text-sm md:text-base leading-relaxed text-muted-foreground/75 font-normal">
          {entry.description}
        </p>

        {/* Tech readouts tags */}
        <div className="flex flex-wrap gap-1.5 border-t border-border/20 pt-5">
          {entry.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-white/[0.04] dark:bg-white/[0.02] border border-border/60 px-3 py-1 text-xs text-muted-foreground/80 font-medium select-none"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

    </div>
  );
}
