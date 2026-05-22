"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ManifestoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[80vh] sm:min-h-screen items-center justify-center bg-background py-32 border-t border-border overflow-hidden select-none"
    >
      {/* Dynamic ambient pulse */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-blue-500/[0.015] blur-[100px] animate-pulse" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-6 md:gap-8 items-center"
        >
          {/* Subtle label */}
          <span className="text-[10px] tracking-[0.35em] text-muted-foreground/30 uppercase font-semibold">
            Manifesto // 01
          </span>

          {/* Main Statement */}
          <p className="text-[clamp(1.6rem,4.5vw,3.8rem)] font-light tracking-tight text-foreground leading-[1.25] max-w-4xl font-sans">
            &ldquo;Obsession with detail is not a personal trait. <br className="hidden md:inline" />
            <span className="text-muted-foreground/40 font-medium">It is a non-negotiable baseline.&rdquo;</span>
          </p>

          <div className="w-12 h-px bg-border/40 mt-8" />
        </motion.div>
      </div>
    </section>
  );
}
