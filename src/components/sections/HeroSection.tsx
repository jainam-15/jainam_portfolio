"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, type Variants } from "framer-motion";
import {
  fadeInUp,
  fadeInRight,
  staggerContainer,
  staggerFast,
  blurIn,
} from "@/lib/animations";
import { siteConfig } from "@/lib/constants";

// ─────────────────────────────────────────────
// Animation Variants
// ─────────────────────────────────────────────

const heroContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const lineReveal: Variants = {
  hidden: { opacity: 0, y: 60, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const pillFloat: Variants = {
  hidden: { opacity: 0, scale: 0.5, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const buttonReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// ─────────────────────────────────────────────
// Floating Particles
// ─────────────────────────────────────────────

interface Particle {
  id: number;
  size: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
  opacity: number;
}

function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);
  useEffect(() => {
    const generated = Array.from({ length: 22 }, (_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 15 + 20,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.4 + 0.1,
    }));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setParticles(generated);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-blue-400/40 dark:bg-blue-400/30"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            opacity: p.opacity,
            animation: `heroFloat${p.id % 4} ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes heroFloat0 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(30px, -40px) scale(1.2); }
          50% { transform: translate(-20px, -80px) scale(0.8); }
          75% { transform: translate(40px, -20px) scale(1.1); }
        }
        @keyframes heroFloat1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-40px, -50px) scale(1.3); }
          66% { transform: translate(30px, -30px) scale(0.9); }
        }
        @keyframes heroFloat2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(50px, -20px) scale(0.7); }
          50% { transform: translate(-30px, -60px) scale(1.2); }
          75% { transform: translate(20px, -90px) scale(1); }
        }
        @keyframes heroFloat3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-50px, -70px) scale(1.4); }
        }
      `}</style>
    </div>
  );
}

// ─────────────────────────────────────────────
// Mouse Spotlight
// ─────────────────────────────────────────────

function MouseSpotlight() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 30 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(59,130,246,0.06), transparent 60%)`,
      }}
    >
      <motion.div
        className="absolute h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          x: springX,
          y: springY,
          background:
            "radial-gradient(circle, rgba(59,130,246,0.08) 0%, rgba(139,92,246,0.04) 40%, transparent 70%)",
        }}
      />
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// Animated Gradient Border Card
// ─────────────────────────────────────────────

const codeLines = [
  { indent: 0, text: "const jainam = {", color: "text-blue-400" },
  {
    indent: 1,
    text: 'role: "Full-Stack Engineer",',
    color: "text-emerald-400",
  },
  {
    indent: 1,
    text: 'focus: ["AI", "SaaS", "Premium UX"],',
    color: "text-amber-400",
  },
  { indent: 1, text: "available: true,", color: "text-purple-400" },
  { indent: 0, text: "};", color: "text-blue-400" },
];

function TypingCodeCard() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (visibleLines >= codeLines.length) return;

    const currentLine = codeLines[visibleLines];
    const totalChars = currentLine.text.length;

    if (currentChar < totalChars) {
      const timer = setTimeout(
        () => setCurrentChar((c) => c + 1),
        25 + Math.random() * 35
      );
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setVisibleLines((l) => l + 1);
        setCurrentChar(0);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [visibleLines, currentChar]);

  // Blinking cursor
  useEffect(() => {
    const timer = setInterval(() => setShowCursor((c) => !c), 530);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      variants={fadeInRight}
      className="relative"
    >
      {/* Animated gradient border */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-60 blur-[1px] dark:opacity-80" 
           style={{ backgroundSize: "200% 100%", animation: "gradientShift 4s ease infinite" }} />
      
      {/* Card body */}
      <div className="relative rounded-2xl border border-white/10 bg-white/80 p-6 shadow-2xl backdrop-blur-xl dark:bg-zinc-900/90">
        {/* Terminal header */}
        <div className="mb-4 flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-400/80" />
          <div className="h-3 w-3 rounded-full bg-amber-400/80" />
          <div className="h-3 w-3 rounded-full bg-green-400/80" />
          <span className="ml-3 text-xs text-muted-foreground font-mono">
            developer.ts
          </span>
        </div>

        {/* Code block */}
        <div className="font-mono text-sm leading-relaxed lg:text-base">
          {codeLines.map((line, i) => {
            if (i > visibleLines) return null;

            const isCurrentLine = i === visibleLines;
            const displayText = isCurrentLine
              ? line.text.slice(0, currentChar)
              : line.text;

            return (
              <div key={i} className="flex">
                <span className="mr-4 w-5 text-right text-xs text-muted-foreground/50 select-none">
                  {i + 1}
                </span>
                <span style={{ paddingLeft: `${line.indent * 1.5}rem` }}>
                  <span className={line.color}>{displayText}</span>
                  {isCurrentLine && showCursor && (
                    <span className="inline-block h-[1.1em] w-[2px] -mb-[2px] bg-blue-400 align-middle" />
                  )}
                </span>
              </div>
            );
          })}
          {visibleLines >= codeLines.length && showCursor && (
            <div className="flex">
              <span className="mr-4 w-5 text-right text-xs text-muted-foreground/50 select-none">
                {codeLines.length + 1}
              </span>
              <span className="inline-block h-[1.1em] w-[2px] bg-blue-400" />
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// Tech Stack Pills
// ─────────────────────────────────────────────

const techPills = [
  "React",
  "Next.js",
  "TypeScript",
  "AI",
  "Node.js",
  "Flutter",
  "Supabase",
  "TailwindCSS",
];

const pillPositions = [
  "top-0 -right-2 lg:-right-6",
  "top-14 -right-8 lg:-right-14",
  "-bottom-2 -right-4 lg:-right-10",
  "-bottom-10 right-8 lg:right-4",
  "-top-6 left-6 lg:left-2",
  "top-10 -left-6 lg:-left-12",
  "bottom-10 -left-4 lg:-left-10",
  "-bottom-8 left-10 lg:left-8",
];

function TechPills() {
  return (
    <motion.div
      variants={staggerFast}
      initial="hidden"
      animate="visible"
      className="pointer-events-none absolute inset-0"
    >
      {techPills.map((pill, i) => (
        <motion.span
          key={pill}
          variants={pillFloat}
          className={`absolute hidden lg:inline-flex items-center rounded-full border border-white/10 bg-white/60 px-3 py-1 text-xs font-medium text-foreground/80 shadow-lg backdrop-blur-md dark:bg-white/5 dark:text-foreground/70 ${pillPositions[i] || ""}`}
          style={{
            animation: `pillBob ${3 + (i % 3)}s ease-in-out ${i * 0.4}s infinite alternate`,
          }}
        >
          {pill}
        </motion.span>
      ))}
      <style jsx>{`
        @keyframes pillBob {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-12px); }
        }
      `}</style>
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// Availability Badge
// ─────────────────────────────────────────────

function AvailabilityBadge() {
  return (
    <motion.div variants={blurIn} className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 text-sm backdrop-blur-sm dark:border-emerald-500/15 dark:bg-emerald-500/10">
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
      </span>
      <span className="text-emerald-700 dark:text-emerald-400 font-medium">
        Available for work
      </span>
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// Hero Section
// ─────────────────────────────────────────────

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-svh items-center overflow-hidden"
    >
      {/* ── Animated Mesh Gradient Background ── */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Primary gradient blobs */}
        <div
          className="absolute -left-1/4 -top-1/4 h-[800px] w-[800px] rounded-full opacity-20 dark:opacity-30"
          style={{
            background:
              "radial-gradient(circle, #3B82F6 0%, transparent 70%)",
            animation: "meshMove1 20s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -right-1/4 top-1/4 h-[600px] w-[600px] rounded-full opacity-15 dark:opacity-25"
          style={{
            background:
              "radial-gradient(circle, #8B5CF6 0%, transparent 70%)",
            animation: "meshMove2 25s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-0 left-1/3 h-[700px] w-[700px] rounded-full opacity-10 dark:opacity-20"
          style={{
            background:
              "radial-gradient(circle, #6366F1 0%, transparent 70%)",
            animation: "meshMove3 22s ease-in-out infinite",
          }}
        />
        {/* Noise grain overlay */}
        <div className="absolute inset-0 bg-background/60 dark:bg-background/40" />
      </div>

      {/* ── Mouse Spotlight ── */}
      <MouseSpotlight />

      {/* ── Floating Particles ── */}
      <FloatingParticles />

      {/* ── Mesh animation keyframes ── */}
      <style jsx>{`
        @keyframes meshMove1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(80px, 60px) scale(1.1); }
          66% { transform: translate(-40px, 30px) scale(0.95); }
        }
        @keyframes meshMove2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-60px, -40px) scale(1.05); }
          66% { transform: translate(50px, -20px) scale(1.1); }
        }
        @keyframes meshMove3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(40px, -60px) scale(1.08); }
          66% { transform: translate(-30px, 40px) scale(0.92); }
        }
      `}</style>

      {/* ── Main Content ── */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ── Left Side ── */}
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            {/* Availability Badge */}
            <AvailabilityBadge />

            {/* Heading */}
            <div className="mt-8 space-y-2">
              <motion.h1
                variants={lineReveal}
                className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
              >
                <span className="inline-block bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500 bg-clip-text text-transparent">
                  AI-Powered
                </span>
              </motion.h1>
              <motion.h1
                variants={lineReveal}
                className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
              >
                Full-Stack Engineer
              </motion.h1>
            </div>

            {/* Subheading */}
            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground lg:text-xl"
            >
              {siteConfig.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={staggerContainer}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              {/* View Projects */}
              <motion.a
                variants={buttonReveal}
                href="#projects"
                className="group relative inline-flex h-11 items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-6 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:brightness-110 active:scale-[0.98]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </motion.a>

              {/* Book a Call */}
              <motion.a
                variants={buttonReveal}
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-background/50 px-6 text-sm font-semibold text-foreground backdrop-blur-sm transition-all duration-300 hover:border-foreground/20 hover:bg-accent active:scale-[0.98]"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Book a Call
              </motion.a>

              {/* WhatsApp */}
              <motion.a
                variants={buttonReveal}
                href="https://wa.me/919426180574"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl px-6 text-sm font-semibold text-emerald-600 transition-all duration-300 hover:bg-emerald-500/10 active:scale-[0.98] dark:text-emerald-400"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Me
              </motion.a>
            </motion.div>
          </motion.div>

          {/* ── Right Side: Code Card ── */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { delayChildren: 0.8, staggerChildren: 0.15 },
              },
            }}
            className="relative flex items-center justify-center"
          >
            {/* Ambient glow behind card */}
            <div className="absolute h-72 w-72 rounded-full bg-blue-500/10 blur-[100px] dark:bg-blue-500/20" />
            <div className="absolute h-52 w-52 translate-x-20 translate-y-10 rounded-full bg-purple-500/10 blur-[80px] dark:bg-purple-500/15" />

            <div className="relative w-full max-w-md">
              <TechPills />
              <TypingCodeCard />
            </div>
          </motion.div>
        </div>

        {/* ── Scroll Indicator ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs tracking-widest text-muted-foreground/60 uppercase">
              Scroll
            </span>
            <div className="flex h-8 w-5 items-start justify-center rounded-full border border-muted-foreground/20 p-1">
              <motion.div
                className="h-1.5 w-1.5 rounded-full bg-muted-foreground/50"
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
