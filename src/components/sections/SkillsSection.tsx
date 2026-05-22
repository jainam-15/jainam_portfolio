"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function SkillsSection() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={containerRef}
      className="relative w-full min-h-[90vh] md:min-h-screen flex items-center justify-center bg-black overflow-hidden select-none"
    >
      <div className="mx-auto max-w-6xl w-full px-6 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-6 items-center"
        >
          <span className="text-[10px] tracking-[0.3em] text-zinc-700 font-mono uppercase">
            {"05 // Creed"}
          </span>
          <h2 className="text-[clamp(2rem,6.5vw,6rem)] font-black tracking-[-0.04em] leading-[0.95] text-white uppercase max-w-5xl">
            Built for people <br className="hidden md:inline" /> who think bigger.
          </h2>
        </motion.div>
      </div>
    </section>
  );
}

