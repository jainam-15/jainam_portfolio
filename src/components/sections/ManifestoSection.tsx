"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ManifestoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      className="relative flex h-screen items-center justify-center bg-black overflow-hidden select-none"
    >
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-8 items-center"
        >
          {/* Subtle label */}
          <span className="text-[10px] tracking-[0.35em] text-muted-foreground/30 uppercase font-mono">
            01 // Thesis
          </span>

          {/* Main Statement */}
          <p className="text-[clamp(1.8rem,5.5vw,4.5rem)] font-extrabold tracking-[-0.04em] text-white leading-[1.1] max-w-4xl font-sans uppercase">
            &ldquo;Digital experiences <br className="hidden md:inline" />
            <span className="text-muted-foreground/30">should feel expensive.&rdquo;</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
