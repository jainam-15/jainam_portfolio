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
// Icon map — matches the `icon` field in constants
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
// Skill Pill — animated badge
// ─────────────────────────────────────────────
function SkillPill({ name }: { name: string }) {
  return (
    <motion.span
      variants={fadeInUp}
      whileHover={{ scale: 1.08 }}
      className={cn(
        "inline-flex cursor-default select-none items-center rounded-full px-3 py-1 text-xs font-medium",
        "bg-muted/60 text-muted-foreground",
        "ring-1 ring-border/50",
        "transition-all duration-300",
        "hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10",
        "hover:text-foreground",
        "hover:ring-blue-500/30 hover:shadow-sm hover:shadow-blue-500/10",
      )}
    >
      {name}
    </motion.span>
  );
}

// ─────────────────────────────────────────────
// Category Card — glass card with spotlight
// ─────────────────────────────────────────────
interface CategoryCardProps {
  category: string;
  icon: string;
  items: readonly string[];
}

function CategoryCard({ category, icon, items }: CategoryCardProps) {
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
        "group relative overflow-hidden rounded-2xl border border-border/50 p-6",
        "bg-card/50 backdrop-blur-xl",
        "transition-shadow duration-500 ease-out",
        "hover:border-blue-500/30",
        "hover:shadow-xl hover:shadow-blue-500/5",
      )}
    >
      {/* Spotlight effect */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: isHovered
            ? `radial-gradient(280px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(59,130,246,0.07), transparent 60%)`
            : "none",
        }}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 ring-1 ring-blue-500/20 transition-all duration-300 group-hover:ring-blue-500/40 group-hover:shadow-md group-hover:shadow-blue-500/10">
            <Icon className="h-5 w-5 text-blue-400 transition-colors duration-300 group-hover:text-blue-300" />
          </div>
          <h3 className="text-base font-semibold tracking-tight text-foreground">
            {category}
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
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// SkillsSection — main export
// ─────────────────────────────────────────────
export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative w-full overflow-hidden py-24 md:py-32"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute right-0 top-1/3 -z-10 h-[500px] w-[700px] -translate-y-1/2 opacity-20 blur-[120px]">
        <div className="h-full w-full rounded-full bg-gradient-to-bl from-purple-600/25 via-blue-600/15 to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Skills &amp; Expertise
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            A comprehensive toolkit spanning front-end craft, back-end architecture, AI integration, and design — refined through real-world product development.
          </p>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((skill) => (
            <CategoryCard
              key={skill.category}
              category={skill.category}
              icon={skill.icon}
              items={skill.items}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
