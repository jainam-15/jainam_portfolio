"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { User, Sparkles, Brain, Rocket, Gem } from "lucide-react";
import { aboutCards } from "@/lib/constants";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

// ─────────────────────────────────────────────
// Icon map
// ─────────────────────────────────────────────
const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  user: User,
  sparkles: Sparkles,
  brain: Brain,
  rocket: Rocket,
  gem: Gem,
};

// ─────────────────────────────────────────────
// HUD Bento Card component
// ─────────────────────────────────────────────
interface SpotlightCardProps {
  title: string;
  description: string;
  icon: string;
  span: string;
  index: number;
}

function SpotlightCard({ title, description, icon, span, index }: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const Icon = iconMap[icon] ?? User;

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setSpotlightPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  return (
    <motion.div
      ref={cardRef}
      variants={fadeInUp}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-white/5 p-6 md:p-8",
        "bg-black/30 backdrop-blur-xl",
        "transition-all duration-500 ease-out",
        "hover:border-blue-500/20 hover:shadow-lg hover:shadow-blue-500/5",
        span
      )}
    >
      {/* Blueprint background lines inside card */}
      <div className="pointer-events-none absolute inset-0 dot-matrix opacity-[0.15] group-hover:opacity-[0.25] transition-opacity" />

      {/* CAD Crosshairs */}
      <div className="hud-crosshair hud-crosshair-tl opacity-40 group-hover:opacity-100 transition-opacity" />
      <div className="hud-crosshair hud-crosshair-tr opacity-40 group-hover:opacity-100 transition-opacity" />
      <div className="hud-crosshair hud-crosshair-bl opacity-40 group-hover:opacity-100 transition-opacity" />
      <div className="hud-crosshair hud-crosshair-br opacity-40 group-hover:opacity-100 transition-opacity" />

      {/* Top telemetry annotation */}
      <div className="absolute top-3 left-10 right-10 flex justify-between font-mono text-[8px] tracking-widest text-muted-foreground/40 group-hover:text-muted-foreground/60 transition-colors select-none">
        <span>{"UNIT // 0"}{index + 1}</span>
        <span>{"LOC // 0xBF8"}{index}</span>
      </div>

      {/* Spotlight radial glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: isHovered
            ? `radial-gradient(280px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(59,130,246,0.06), transparent 60%)`
            : "none",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mt-2">
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-white/5 bg-white/5 ring-1 ring-white/5 transition-all duration-300 group-hover:border-blue-500/30 group-hover:ring-blue-500/10">
          <Icon className="h-5 w-5 text-blue-400/80 transition-colors duration-300 group-hover:text-blue-400" />
        </div>

        <h3 className="mb-2 text-base font-mono tracking-wider uppercase text-foreground">
          {title}
        </h3>

        <p className="text-sm leading-relaxed text-muted-foreground/80 font-sans">
          {description}
        </p>
      </div>

      {/* Bottom telemetry annotation */}
      <div className="absolute bottom-3 left-10 right-10 flex justify-between font-mono text-[7px] tracking-widest text-muted-foreground/30 select-none">
        <span>TYPE: CORE_STRATEGY</span>
        <span>STABLE: 99.98%</span>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// AboutSection Component
// ─────────────────────────────────────────────
export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full overflow-hidden py-44 md:py-52"
    >
      {/* Subtle blueprint grid overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 blueprint-grid opacity-20" />

      {/* Ambient background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[700px] w-[1000px] -translate-x-1/2 -translate-y-1/2 opacity-20 blur-[130px]">
        <div className="h-full w-full rounded-full bg-gradient-to-br from-blue-600/15 via-purple-600/5 to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        
        {/* Section Title Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 text-left border-l-2 border-blue-500/80 pl-6"
        >
          <div className="font-mono text-xs tracking-[0.3em] text-blue-500/80 font-bold mb-2">
            {"// METADATA_READOUT // PROFILE"}
          </div>
          <h2 className="text-4xl font-extrabold tracking-tighter text-foreground sm:text-5xl lg:text-6xl uppercase">
            System Identity
          </h2>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid auto-rows-auto grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {aboutCards.map((card, idx) => (
            <SpotlightCard
              key={card.title}
              title={card.title}
              description={card.description}
              icon={card.icon}
              index={idx}
              span={
                card.span === "col-span-2"
                  ? "sm:col-span-2"
                  : "col-span-1"
              }
            />
          ))}
        </motion.div>

        {/* Cinematic Monospaced Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative mx-auto mt-24 max-w-3xl rounded-lg border border-white/5 bg-black/40 px-8 py-6 backdrop-blur-md"
        >
          {/* HUD Corner markers */}
          <div className="hud-crosshair hud-crosshair-tl opacity-60" />
          <div className="hud-crosshair hud-crosshair-br opacity-60" />

          <p className="text-center font-mono text-xs sm:text-sm tracking-wider leading-relaxed text-muted-foreground/80">
            <span className="text-blue-400/80">{"CRITICAL_PATH_LOG // "}</span>
            {"\"I don't settle for average — whether it's design, logic, performance, or user experience. Every detail must feel engineered.\""}
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
