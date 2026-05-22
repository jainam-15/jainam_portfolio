"use client";

import { useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue, useMotionTemplate } from "framer-motion";
import { socialLinks } from "@/lib/constants";
import Image from "next/image";

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
  const spotlightBg = useMotionTemplate`radial-gradient(800px circle at ${spotlightX}px ${spotlightY}px, rgba(120, 119, 198, 0.015), transparent 80%)`;

  const { scrollY } = useScroll();
  const contentOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const contentScale = useTransform(scrollY, [0, 300], [1, 0.98]);

  const imageParallaxX = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);
  const imageParallaxY = useTransform(mouseY, [-0.5, 0.5], [-15, 15]);

  const githubUrl = socialLinks.find((s) => s.label === "GitHub")?.href || "https://github.com/jainam-15/";

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden py-24 md:py-32 bg-background text-foreground"
    >
      {/* Background Drifting Ambient Orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute -left-[10%] -top-[10%] h-[800px] w-[800px] rounded-full blur-[200px] opacity-[0.1] dark:opacity-[0.18]"
          style={{
            background: "radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)",
            animation: "meshDrift1 28s ease-in-out infinite alternate",
          }}
        />
        <div
          className="absolute -right-[10%] -bottom-[10%] h-[700px] w-[700px] rounded-full blur-[200px] opacity-[0.06] dark:opacity-[0.12]"
          style={{
            background: "radial-gradient(circle, rgba(139,92,246,0.03) 0%, transparent 70%)",
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
        className="relative z-10 mx-auto w-full max-w-6xl px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Left Column: Hero Text */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/10 bg-emerald-500/[0.02] px-4 py-1.5 text-[9px] font-semibold tracking-[0.18em] uppercase text-emerald-400/90 mb-8"
            >
              <span className="h-1 w-1 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for select projects</span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-[clamp(2.5rem,7.5vw,6rem)] font-extrabold tracking-[-0.04em] leading-[0.88] text-foreground select-none uppercase flex flex-col gap-1.5 md:gap-3">
              <span className="overflow-hidden block">
                <motion.span
                  initial={{ opacity: 0, y: "100%" }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  AI-Powered
                </motion.span>
              </span>
              <span className="overflow-hidden block">
                <motion.span
                  initial={{ opacity: 0, y: "100%" }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-foreground/95"
                >
                  Full-Stack
                </motion.span>
              </span>
              <span className="overflow-hidden block">
                <motion.span
                  initial={{ opacity: 0, y: "100%" }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.54, ease: [0.16, 1, 0.3, 1] }}
                  className="block bg-gradient-to-r from-foreground/80 via-foreground/50 to-foreground/20 bg-clip-text text-transparent"
                >
                  Engineer.
                </motion.span>
              </span>
            </h1>

            {/* Subtitle Statement */}
            <div className="mt-8 md:mt-10 overflow-hidden">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-base md:text-lg leading-relaxed text-muted-foreground/70 font-normal max-w-xl"
              >
                Designing and deploying bespoke AI integrations, high-integrity architecture, and cinematic digital products with absolute technical rigor.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 md:mt-12 flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <motion.a
                href="#projects"
                whileHover={{ y: -1, transition: { duration: 0.2 } }}
                className="rounded-full px-8 py-3.5 bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity shadow-lg active:scale-[0.98] text-center"
              >
                Explore Work
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ y: -1, transition: { duration: 0.2 } }}
                className="rounded-full px-8 py-3.5 border border-white/[0.08] bg-white/[0.01] text-foreground hover:border-foreground/20 hover:bg-white/[0.02] text-sm font-medium transition-all active:scale-[0.98] text-center"
              >
                Book a Call
              </motion.a>

              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                whileHover={{ y: -1, transition: { duration: 0.2 } }}
                className="w-12 h-12 rounded-full border border-white/[0.08] bg-white/[0.01] flex items-center justify-center text-foreground/60 hover:border-foreground/20 hover:text-foreground transition-all active:scale-[0.98]"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </motion.a>
            </motion.div>

          </div>

          {/* Right Column: Visual Signature Moment */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative group w-64 h-64 sm:w-[26rem] sm:h-[26rem] md:w-[28rem] md:h-[28rem] flex items-center justify-center"
            >
              {/* Soft underlying ambient spotlight */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/5 to-purple-500/5 blur-[80px] opacity-60 group-hover:opacity-80 transition-opacity duration-1000" />
              
              {/* Drifting image wrapper */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ x: imageParallaxX, y: imageParallaxY }}
                className="relative w-full h-full rounded-2xl overflow-hidden border border-white/[0.04] bg-white/[0.01] backdrop-blur-3xl shadow-[0_30px_100px_-15px_rgba(0,0,0,0.8)] transition-all duration-500 hover:border-white/[0.08]"
              >
                {/* Visual signature image */}
                <Image
                  src="/hero_signature.png"
                  alt="Intelligent 3D Glass Sculpture Signature"
                  width={448}
                  height={448}
                  priority
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 select-none pointer-events-none"
                />
              </motion.div>
            </motion.div>
          </div>

        </div>
      </motion.div>

      {/* Downward Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center select-none pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ delay: 1.4, duration: 0.8 }}
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
