"use client";

import { useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue, useMotionTemplate } from "framer-motion";
import { socialLinks } from "@/lib/constants";

export default function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlightX = useMotionValue(0);
  const spotlightY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth) - 0.5);
      mouseY.set((e.clientY / window.innerHeight) - 0.5);
      spotlightX.set(e.clientX);
      spotlightY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, spotlightX, spotlightY]);

  // Spotlight background template
  const spotlightBg = useMotionTemplate`radial-gradient(800px circle at ${spotlightX}px ${spotlightY}px, rgba(120, 119, 198, 0.02), transparent 80%)`;

  const { scrollY } = useScroll();
  const contentOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const contentScale = useTransform(scrollY, [0, 300], [1, 0.98]);

  const githubUrl = socialLinks.find((s) => s.label === "GitHub")?.href || "https://github.com/jainam-15/";

  return (
    <section
      id="hero"
      className="relative flex min-h-[95vh] sm:min-h-screen items-center justify-center overflow-hidden py-32 bg-background text-foreground"
    >
      {/* Background Drifting Ambient Orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute -left-[10%] -top-[10%] h-[700px] w-[700px] rounded-full blur-[200px] opacity-[0.12] dark:opacity-[0.25]"
          style={{
            background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)",
            animation: "meshDrift1 28s ease-in-out infinite alternate",
          }}
        />
        <div
          className="absolute -right-[10%] -bottom-[10%] h-[600px] w-[600px] rounded-full blur-[200px] opacity-[0.08] dark:opacity-[0.2]"
          style={{
            background: "radial-gradient(circle, rgba(139,92,246,0.04) 0%, transparent 70%)",
            animation: "meshDrift2 32s ease-in-out infinite alternate",
          }}
        />
      </div>

      {/* Mouse Spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        style={{ background: spotlightBg }}
      />

      <motion.div
        style={{ opacity: contentOpacity, scale: contentScale }}
        className="relative z-10 mx-auto w-full max-w-5xl px-6 text-center"
      >
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-emerald-500/10 bg-emerald-500/[0.02] px-4 py-1.5 text-[10px] font-semibold tracking-[0.15em] uppercase text-emerald-600 dark:text-emerald-400/90"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span>Available for projects</span>
        </motion.div>

        {/* Main Heading */}
        <div className="mt-10 space-y-4 select-none">
          <h1 className="overflow-hidden leading-none">
            <motion.span
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="block text-[clamp(2.5rem,8.5vw,7.5rem)] font-extrabold tracking-[-0.04em] leading-[0.85] text-foreground"
            >
              AI-Powered
            </motion.span>
          </h1>
          <h1 className="overflow-hidden leading-none">
            <motion.span
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
              className="block text-[clamp(2.5rem,8.5vw,7.5rem)] font-extrabold tracking-[-0.04em] leading-[0.85] text-foreground"
            >
              Full-Stack Engineer.
            </motion.span>
          </h1>
        </div>

        {/* Subtitle Statement */}
        <div className="mt-10 max-w-2xl mx-auto overflow-hidden">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl leading-relaxed text-muted-foreground/70 font-normal"
          >
            Engineering premium AI-powered products, high-performance systems, and bespoke digital experiences crafted with relentless precision.
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ y: -1, transition: { duration: 0.2 } }}
            className="rounded-full px-8 py-3.5 bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity shadow-lg active:scale-[0.98]"
          >
            Explore Work
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ y: -1, transition: { duration: 0.2 } }}
            className="rounded-full px-8 py-3.5 border border-border bg-card/10 text-foreground/80 text-sm font-medium hover:border-foreground/20 hover:text-foreground transition-all active:scale-[0.98]"
          >
            Book a Call
          </motion.a>

          <motion.a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            whileHover={{ y: -1, transition: { duration: 0.2 } }}
            className="w-12 h-12 rounded-full border border-border bg-card/10 flex items-center justify-center text-foreground/60 hover:border-foreground/20 hover:text-foreground transition-all active:scale-[0.98]"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Downward Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center select-none pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div
          className="w-[1px] h-8 bg-foreground origin-top"
          style={{
            animation: "scrollPulse 2.2s cubic-bezier(0.16, 1, 0.3, 1) infinite",
          }}
        />
      </motion.div>
    </section>
  );
}
