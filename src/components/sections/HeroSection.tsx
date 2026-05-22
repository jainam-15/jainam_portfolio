"use client";

import { useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue, useMotionTemplate } from "framer-motion";
import { socialLinks } from "@/lib/constants";

export default function HeroSection() {
  // Layer 2 & 4: Mouse tracking for Spotlight & Glass Parallax
  const mouseX = useMotionValue(0); // Normalized from -0.5 to 0.5
  const mouseY = useMotionValue(0);
  const spotlightX = useMotionValue(0); // Raw clientX
  const spotlightY = useMotionValue(0); // Raw clientY

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
  const spotlightBg = useMotionTemplate`radial-gradient(800px circle at ${spotlightX}px ${spotlightY}px, rgba(120, 119, 198, 0.03), transparent 80%)`;

  // Layer 4: Parallax translations for individual cards
  const xA = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);
  const yA = useTransform(mouseY, [-0.5, 0.5], [-10, 10]);

  const xB = useTransform(mouseX, [-0.5, 0.5], [-18, 18]);
  const yB = useTransform(mouseY, [-0.5, 0.5], [-18, 18]);

  const xC = useTransform(mouseX, [-0.5, 0.5], [-6, 6]);
  const yC = useTransform(mouseY, [-0.5, 0.5], [-6, 6]);

  // Layer 5: Fade scroll cue out on scroll
  const { scrollY } = useScroll();
  const scrollCueOpacity = useTransform(scrollY, [0, 100], [1, 0]);

  // Social Links mapping
  const githubUrl = socialLinks.find((s) => s.label === "GitHub")?.href || "https://github.com/jainam-15/";

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden py-24 sm:py-32 bg-background text-foreground"
    >
      {/* Layer 1 — Atmospheric Void */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Blue orb */}
        <div
          className="absolute -left-[10%] -top-[10%] h-[700px] w-[700px] rounded-full blur-[200px] opacity-[0.15] dark:opacity-[0.4]"
          style={{
            background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)",
            animation: "meshDrift1 28s ease-in-out infinite alternate",
          }}
        />
        {/* Purple orb */}
        <div
          className="absolute -right-[10%] -bottom-[10%] h-[600px] w-[600px] rounded-full blur-[200px] opacity-[0.1] dark:opacity-[0.3]"
          style={{
            background: "radial-gradient(circle, rgba(139,92,246,0.04) 0%, transparent 70%)",
            animation: "meshDrift2 32s ease-in-out infinite alternate",
          }}
        />
      </div>

      {/* Layer 2 — Mouse Spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        style={{ background: spotlightBg }}
      />

      {/* Core Layout */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-8">
          
          {/* Layer 3 — Core Typography & Content (Left, 7 columns) */}
          <div className="flex flex-col items-start text-left lg:col-span-7">
            
            {/* 1. Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 border border-emerald-500/15 bg-emerald-500/5 rounded-full px-4 py-1.5 text-[11px] font-medium tracking-wide uppercase text-emerald-600 dark:text-emerald-400"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>Available for projects</span>
            </motion.div>

            {/* 2. Main Heading */}
            <div className="mt-8 space-y-2 select-none">
              <h1 className="overflow-hidden">
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-[clamp(2.8rem,7.5vw,6.5rem)] font-extrabold tracking-[-0.04em] leading-[0.9] text-foreground"
                >
                  AI-Powered
                </motion.span>
              </h1>
              <h1 className="overflow-hidden">
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.62, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-[clamp(2.8rem,7.5vw,6.5rem)] font-extrabold tracking-[-0.04em] leading-[0.9] text-foreground"
                >
                  Full-Stack
                </motion.span>
              </h1>
              <h1 className="overflow-hidden">
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.74, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-[clamp(2.8rem,7.5vw,6.5rem)] font-extrabold tracking-[-0.04em] leading-[0.9] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400"
                >
                  Engineer.
                </motion.span>
              </h1>
            </div>

            {/* 3. Supporting Statement */}
            <motion.p
              initial={{ opacity: 0, filter: "blur(6px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-[480px] text-lg leading-relaxed text-muted-foreground/60 font-sans"
            >
              Engineering premium AI-powered products, scalable systems, and digital experiences that refuse to feel average.
            </motion.p>

            {/* 4. CTA Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-wrap items-center gap-3 w-full"
            >
              <motion.a
                href="#projects"
                whileHover={{ y: -1, transition: { duration: 0.2 } }}
                className="rounded-full px-7 py-3 bg-white text-black text-sm font-medium hover:bg-neutral-100 transition-colors shadow-lg active:scale-[0.98]"
              >
                Explore Work
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ y: -1, transition: { duration: 0.2 } }}
                className="rounded-full px-6 py-3 border border-white/12 text-foreground/70 text-sm font-medium hover:border-white/25 hover:text-foreground transition-colors active:scale-[0.98]"
              >
                Book a Call
              </motion.a>

              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                whileHover={{ y: -1, transition: { duration: 0.2 } }}
                className="w-11 h-11 rounded-full border border-white/8 flex items-center justify-center text-foreground/60 hover:border-white/20 hover:text-foreground transition-colors active:scale-[0.98]"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </motion.a>
            </motion.div>

            {/* 5. Credential Line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.0, delay: 1.8 }}
              className="mt-8 text-[11px] tracking-wider text-muted-foreground/25 font-sans font-semibold uppercase"
            >
              Next.js &middot; TypeScript &middot; AI Systems &middot; 2 SaaS Products &middot; 7+ Projects
            </motion.div>

          </div>

          {/* Layer 4 — Right-Side Glass Composition (Desktop Only, 5 columns) */}
          <div className="relative lg:col-span-5 hidden lg:flex items-center justify-center min-h-[450px]">
            {/* Soft background glow specifically behind the glass cards */}
            <div className="absolute h-80 w-80 rounded-full bg-blue-500/5 blur-[120px] dark:bg-blue-500/10 pointer-events-none" />
            <div className="absolute h-80 w-80 rounded-full bg-purple-500/5 blur-[120px] dark:bg-purple-500/10 pointer-events-none translate-x-12 translate-y-12" />

            <div className="relative w-full max-w-[420px] h-[400px]">
              
              {/* Card A — Code Philosophy (largest, primary z-layer) */}
              <motion.div
                style={{ x: xA, y: yA }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                initial={{ opacity: 0, scale: 0.95, rotate: 1.5 }}
                animate={{ opacity: 1, scale: 1, rotate: 1.5 }}
                transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute z-10 left-10 top-12 w-[320px] bg-white/[0.03] dark:bg-white/[0.03] backdrop-blur-2xl border border-white/[0.06] rounded-2xl shadow-2xl p-5 cursor-default select-none"
              >
                {/* Clean header row */}
                <div className="flex justify-between items-center border-b border-white/[0.05] pb-3 mb-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/60" />
                    <div className="w-2 h-2 rounded-full bg-amber-500/60" />
                    <div className="w-2 h-2 rounded-full bg-green-500/60" />
                  </div>
                  <span className="font-mono text-[10px] text-muted-foreground/45 tracking-wide">vision.ts</span>
                </div>
                
                {/* Monospace Code content */}
                <pre className="font-mono text-[11px] leading-relaxed text-muted-foreground/80 overflow-x-auto select-none">
                  <code>
                    <span className="text-blue-400/80">async function</span> <span className="text-indigo-300">buildProduct</span>(<span className="text-orange-300/80">vision</span>) &#123;{"\n"}
                    {"  "}<span className="text-blue-400/80">const</span> design = <span className="text-blue-400/80">await</span> <span className="text-indigo-300">craft</span>(vision, &#123;{"\n"}
                    {"    "}quality: <span className="text-emerald-400/80">&quot;obsessive&quot;</span>,{"\n"}
                    {"    "}stack: [<span className="text-emerald-400/80">&quot;next&quot;</span>, <span className="text-emerald-400/80">&quot;typescript&quot;</span>, <span className="text-emerald-400/80">&quot;ai&quot;</span>]{"\n"}
                    {"  "}&#125;);{"\n"}
                    {"  "}{"\n"}
                    {"  "}<span className="text-blue-400/80">return</span> <span className="text-indigo-300">ship</span>(design); <span className="text-muted-foreground/30">{"// never average"}</span>{"\n"}
                    &#125;
                  </code>
                </pre>
              </motion.div>

              {/* Card B — Capabilities (medium, overlapping Card A bottom-left) */}
              <motion.div
                style={{ x: xB, y: yB }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                initial={{ opacity: 0, x: -30, rotate: -1 }}
                animate={{ opacity: 1, x: 0, rotate: -1 }}
                transition={{ duration: 1.2, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="absolute z-20 left-[-20px] bottom-8 w-[240px] bg-white/[0.03] dark:bg-white/[0.03] backdrop-blur-2xl border border-white/[0.06] rounded-xl shadow-2xl p-4 cursor-default select-none"
              >
                <div className="flex flex-col gap-3">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground/30 font-medium font-sans">Capabilities</div>
                  <ul className="space-y-2.5">
                    {[
                      "AI-Powered Products",
                      "Scalable SaaS Systems",
                      "Premium User Experiences",
                      "Cross-Platform Apps"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-[12px] text-muted-foreground/70 font-sans font-medium">
                        <span className="text-emerald-400/80 font-bold select-none">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Card C — Status (smallest, top-right overlap) */}
              <motion.div
                style={{ x: xC, y: yC }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                initial={{ opacity: 0, y: -20, rotate: 2 }}
                animate={{ opacity: 1, y: 0, rotate: 2 }}
                transition={{ duration: 1.2, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
                className="absolute z-0 right-[-10px] top-4 w-[180px] bg-white/[0.03] dark:bg-white/[0.03] backdrop-blur-2xl border border-white/[0.06] rounded-xl shadow-2xl p-4 cursor-default select-none"
              >
                <div className="space-y-2.5">
                  <div className="flex justify-between items-center text-[11px] font-sans">
                    <span className="text-muted-foreground/40 font-medium font-sans">Projects</span>
                    <span className="font-mono text-foreground/80 font-bold">7+</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px] font-sans">
                    <span className="text-muted-foreground/40 font-medium font-sans">SaaS Products</span>
                    <span className="font-mono text-foreground/80 font-bold">2</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px] font-sans">
                    <span className="text-muted-foreground/40 font-medium font-sans">Status</span>
                    <span className="flex items-center gap-1.5 font-sans font-semibold text-emerald-500/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Active
                    </span>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>

      {/* Layer 5 — Scroll Cue */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center select-none pointer-events-none"
        style={{ opacity: scrollCueOpacity }}
      >
        <div
          className="w-[1px] h-6 bg-foreground/30 origin-top"
          style={{
            animation: "scrollPulse 2s cubic-bezier(0.16, 1, 0.3, 1) infinite",
          }}
        />
      </motion.div>
    </section>
  );
}
