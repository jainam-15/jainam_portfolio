"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import {
  Layout,
  Server,
  Brain,
  Smartphone,
  Database,
  Palette,
} from "lucide-react";
import { skills } from "@/lib/constants";
import {
  staggerContainer,
  fadeInUp,
  staggerFast,
} from "@/lib/animations";
import { cn } from "@/lib/utils";

// ─────────────────────────────────────────────
// Icon map
// ─────────────────────────────────────────────
const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  layout: Layout,
  server: Server,
  brain: Brain,
  smartphone: Smartphone,
  database: Database,
  palette: Palette,
};

// ─────────────────────────────────────────────
// Skill Pill — monospaced parameter tag
// ─────────────────────────────────────────────
function SkillPill({ name }: { name: string }) {
  return (
    <motion.span
      variants={fadeInUp}
      whileHover={{ scale: 1.05 }}
      className={cn(
        "inline-flex cursor-default select-none items-center rounded px-2.5 py-1 text-xs font-mono tracking-wider",
        "bg-white/5 text-muted-foreground/90 border border-white/5",
        "transition-all duration-300",
        "hover:bg-blue-500/10 hover:text-blue-400 hover:border-blue-500/20",
        "hover:shadow-sm"
      )}
    >
      &lt;{name.toLowerCase().replace(/\s/g, "_")}&gt;
    </motion.span>
  );
}

// ─────────────────────────────────────────────
// Category Card — HUD System Panel
// ─────────────────────────────────────────────
interface CategoryCardProps {
  category: string;
  icon: string;
  items: readonly string[];
  index: number;
}

function CategoryCard({ category, icon, items, index }: CategoryCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const Icon = iconMap[icon] ?? Layout;

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
      whileHover={{ y: -4, transition: { duration: 0.3, ease: "easeOut" } }}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-white/5 p-6",
        "bg-black/35 backdrop-blur-xl",
        "transition-all duration-500 ease-out",
        "hover:border-blue-500/20 hover:shadow-xl hover:shadow-blue-500/5"
      )}
    >
      {/* Blueprint grid underlay */}
      <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-[0.1] group-hover:opacity-[0.2] transition-opacity" />
      <div className="pointer-events-none absolute inset-0 dot-matrix opacity-[0.1] group-hover:opacity-[0.15] transition-opacity" />

      {/* CAD Crosshairs */}
      <div className="hud-crosshair hud-crosshair-tl opacity-40 group-hover:opacity-100 transition-opacity" />
      <div className="hud-crosshair hud-crosshair-br opacity-40 group-hover:opacity-100 transition-opacity" />

      {/* Spotlight effect */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: isHovered
            ? `radial-gradient(280px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(59,130,246,0.06), transparent 60%)`
            : "none",
        }}
      />

      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          {/* Telemetry Header */}
          <div className="flex justify-between items-center mb-5 font-mono text-[8px] tracking-widest text-muted-foreground/45 group-hover:text-muted-foreground/60 transition-colors select-none">
            <span>MOD_LOAD // 0{index + 1}</span>
            <span className="flex items-center gap-1">
              <span className="h-1 w-1 rounded-full bg-emerald-400 animate-pulse" />
              STABLE
            </span>
          </div>

          {/* Module Title */}
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/5 bg-white/5 ring-1 ring-white/5 transition-all duration-300 group-hover:border-blue-500/30 group-hover:ring-blue-500/10">
              <Icon className="h-5 w-5 text-blue-400/80 transition-colors duration-300 group-hover:text-blue-400" />
            </div>
            <h3 className="text-base font-mono tracking-wider uppercase text-foreground">
              {category.split(" ")[0]}_SYS
            </h3>
          </div>

          {/* Skill pills */}
          <motion.div
            variants={staggerFast}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-wrap gap-2"
          >
            {items.map((skill) => (
              <SkillPill key={skill} name={skill} />
            ))}
          </motion.div>
        </div>

        {/* Bottom Panel Telemetry Details */}
        <div className="mt-8 pt-3 border-t border-white/5 flex justify-between font-mono text-[7px] tracking-widest text-muted-foreground/30 select-none">
          <span>PORT: 808{index}</span>
          <span>SYS_LATENCY: 0.0{index + 2}ms</span>
        </div>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// SkillsSection Component
// ─────────────────────────────────────────────
export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative w-full overflow-hidden py-32 md:py-40 border-t border-white/5"
    >
      {/* Blueprint grid layout underlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 blueprint-grid opacity-15" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute right-0 top-1/2 -z-10 h-[600px] w-[800px] -translate-y-1/2 opacity-15 blur-[130px]">
        <div className="h-full w-full rounded-full bg-gradient-to-bl from-purple-600/15 via-blue-600/10 to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 text-left border-l-2 border-blue-500/80 pl-6"
        >
          <div className="font-mono text-xs tracking-[0.3em] text-blue-500/80 font-bold mb-2">
            {"// TELEMETRY_CAPABILITY // LIBRARY"}
          </div>
          <h2 className="text-4xl font-extrabold tracking-tighter text-foreground sm:text-5xl lg:text-6xl uppercase">
            System Modules
          </h2>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((skill, idx) => (
            <CategoryCard
              key={skill.category}
              category={skill.category}
              icon={skill.icon}
              items={skill.items}
              index={idx}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
