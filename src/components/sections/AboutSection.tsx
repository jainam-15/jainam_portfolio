"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, fadeInUp, defaultViewport } from "@/lib/animations";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full overflow-hidden py-32 md:py-48 bg-background border-t border-border"
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 opacity-[0.03] blur-[150px]">
        <div className="h-full w-full rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Sticky Title */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-3"
            >
              <span className="text-[10px] tracking-[0.2em] text-muted-foreground/40 font-bold uppercase">
                Philosophy
              </span>
              <h2 className="text-[clamp(2.8rem,7vw,5.5rem)] font-extrabold tracking-[-0.05em] leading-[0.85] text-foreground select-none uppercase flex flex-col">
                <span>The</span>
                <span className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground/40 bg-clip-text text-transparent">Mindset.</span>
              </h2>
            </motion.div>
          </div>

          {/* Right Column: Editorial Essays */}
          <div className="lg:col-span-7">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              viewport={defaultViewport}
              className="space-y-16 sm:space-y-20 text-left"
            >
              {/* Obsession over compromise */}
              <motion.div variants={fadeInUp} className="group">
                <h3 className="text-xl font-bold tracking-tight text-foreground mb-4">
                  Obsession Over Compromise
                </h3>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground/70 font-normal">
                  Average software is an active choice. We choose to build with relentless detail — from sub-millisecond API response latency to the pixel-perfect curve of a button border. If it&apos;s not exceptional, it doesn&apos;t get deployed.
                </p>
              </motion.div>

              {/* Velocity as a habit */}
              <motion.div variants={fadeInUp} className="group">
                <h3 className="text-xl font-bold tracking-tight text-foreground mb-4">
                  Velocity as a Habit
                </h3>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground/70 font-normal">
                  We build with startup urgency. Launching fast is not about cutting corners — it is about high-integrity engineering executing at elite speed. Speed is our primary competitive advantage.
                </p>
              </motion.div>

              {/* AI-Native Workflow */}
              <motion.div variants={fadeInUp} className="group">
                <h3 className="text-xl font-bold tracking-tight text-foreground mb-4">
                  AI-Native Workflow
                </h3>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground/70 font-normal">
                  AI is not a tool; it is a development philosophy. We leverage intelligent models at every stage — from technical architecture planning to automated deployment. We run ahead of the future.
                </p>
              </motion.div>

              {/* Product Sovereignty */}
              <motion.div variants={fadeInUp} className="group">
                <h3 className="text-xl font-bold tracking-tight text-foreground mb-4">
                  Product Sovereignty
                </h3>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground/70 font-normal">
                  Inspired by Apple, Linear, and Vercel — we design and build products that feel luxurious. The gap between good and exceptional is where we operate. Every technical decision is a design and business decision.
                </p>
              </motion.div>
            </motion.div>
          </div>

        </div>

        {/* Cinematic Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto mt-32 md:mt-44 max-w-3xl px-6 text-center border-t border-white/[0.04] pt-16"
        >
          <p className="text-xl sm:text-2xl font-light tracking-wide leading-relaxed text-foreground/90 italic">
            &ldquo;I do not settle for average — whether in design, logic, performance, or user experience. Every detail must feel exceptionally crafted.&rdquo;
          </p>
          <cite className="mt-6 block text-[10px] tracking-[0.25em] text-muted-foreground/50 font-bold uppercase select-none">
            — Jainam Shah
          </cite>
        </motion.blockquote>
      </div>
    </section>
  );
}
