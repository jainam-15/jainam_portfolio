"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Subtle radial gradient — static, no animation */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(120,120,120,0.08),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(255,255,255,0.05),transparent)] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Label */}
          <p className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-10">
            Jainam Shah
          </p>

          {/* Main heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.92] mb-8">
            I build products
            <br />
            <span className="text-foreground/40">that think.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed mb-12">
            Full-stack engineer and product builder at the intersection of AI
            and design. I take ideas from zero to shipped.
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-6">
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-foreground text-background text-sm font-semibold rounded-full hover:opacity-90 transition-opacity"
            >
              See my work
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
            >
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase text-muted-foreground/60">
          Scroll
        </span>
        <ArrowDown className="w-3.5 h-3.5 text-muted-foreground/40" />
      </motion.div>
    </section>
  );
}
