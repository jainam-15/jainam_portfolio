"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const essays = [
    {
      title: "Obsession Over Compromise",
      body: "Average software is an active choice. We choose to build with relentless detail — from sub-millisecond API response latency to the pixel-perfect curve of a button border. If it&apos;s not exceptional, it doesn&apos;t get deployed.",
    },
    {
      title: "Velocity as a Habit",
      body: "We build with startup urgency. Launching fast is not about cutting corners — it is about high-integrity engineering executing at elite speed. Speed is our primary competitive advantage.",
    },
    {
      title: "AI-Native Workflow",
      body: "AI is not a tool; it is a development philosophy. We leverage intelligent models at every stage — from technical architecture planning to automated deployment. We run ahead of the future.",
    },
    {
      title: "Product Sovereignty",
      body: "Inspired by Apple, Linear, and Vercel — we design and build products that feel luxurious. The gap between good and exceptional is where we operate. Every technical decision is a design and business decision.",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full overflow-hidden py-32 md:py-48 bg-black select-none"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Asymmetrical Title */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-3 text-left"
            >
              <span className="text-[10px] tracking-[0.25em] text-muted-foreground/30 font-mono uppercase">
                02 // Philosophy
              </span>
              <h2 className="text-[clamp(3rem,8vw,5.5rem)] font-extrabold tracking-[-0.05em] leading-[0.82] text-white uppercase">
                The Mindset.
              </h2>
            </motion.div>
          </div>

          {/* Right Column: Floating Essays */}
          <div className="lg:col-span-7">
            <div className="space-y-24 text-left">
              {essays.map((essay, index) => (
                <motion.div
                  key={essay.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 1.5, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col gap-4"
                >
                  <h3 className="text-lg font-bold tracking-tight text-white uppercase font-sans">
                    {essay.title}
                  </h3>
                  <p className="text-base sm:text-lg leading-relaxed text-muted-foreground/60 font-normal">
                    {essay.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* Cinematic Quote (Floating in negative space, no border line) */}
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto mt-40 md:mt-56 max-w-3xl px-6 text-center"
        >
          <p className="text-xl sm:text-3xl font-light tracking-tight leading-relaxed text-white/90 italic">
            &ldquo;I do not settle for average — whether in design, logic, performance, or user experience. Every detail must feel exceptionally crafted.&rdquo;
          </p>
          <cite className="mt-8 block text-[9px] tracking-[0.3em] text-muted-foreground/30 font-mono uppercase">
            — Jainam Shah
          </cite>
        </motion.blockquote>
      </div>
    </section>
  );
}
