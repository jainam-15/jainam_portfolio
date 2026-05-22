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
// Spotlight Card — individual bento card
// ─────────────────────────────────────────────
interface SpotlightCardProps {
  title: string;
  description: string;
  icon: string;
  span: string;
}

function SpotlightCard({ title, description, icon, span }: SpotlightCardProps) {
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
        "group relative overflow-hidden rounded-2xl border border-border/50 p-6 md:p-8",
        "bg-card/50 backdrop-blur-xl",
        "transition-all duration-500 ease-out",
        "hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5",
        span,
      )}
    >
      {/* Spotlight radial glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: isHovered
            ? `radial-gradient(320px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(59,130,246,0.08), transparent 60%)`
            : "none",
        }}
      />

      {/* Hover border glow overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: isHovered
            ? `radial-gradient(400px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(139,92,246,0.06), transparent 60%)`
            : "none",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 ring-1 ring-blue-500/20 transition-all duration-300 group-hover:ring-blue-500/40 group-hover:shadow-md group-hover:shadow-blue-500/10">
          <Icon className="h-5 w-5 text-blue-400 transition-colors duration-300 group-hover:text-blue-300" />
        </div>

        <h3 className="mb-2 text-lg font-semibold tracking-tight text-foreground">
          {title}
        </h3>

        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// AboutSection — main export
// ─────────────────────────────────────────────
export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full overflow-hidden py-24 md:py-32"
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[600px] w-[900px] -translate-x-1/2 opacity-30 blur-[120px]">
        <div className="h-full w-full rounded-full bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-transparent" />
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
            About
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid auto-rows-auto grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {aboutCards.map((card) => (
            <SpotlightCard
              key={card.title}
              title={card.title}
              description={card.description}
              icon={card.icon}
              span={
                // Map span classes to responsive variants
                card.span === "col-span-2"
                  ? "sm:col-span-2"
                  : "col-span-1"
              }
            />
          ))}
        </motion.div>

        {/* Pull quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative mx-auto mt-16 max-w-3xl rounded-xl border border-border/40 bg-card/30 px-8 py-6 backdrop-blur-lg md:mt-20"
        >
          {/* Gradient left accent */}
          <div className="absolute left-0 top-0 h-full w-1 rounded-l-xl bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500" />

          <p className="text-center text-base italic leading-relaxed text-muted-foreground md:text-lg">
            &ldquo;I don&apos;t settle for average — whether it&apos;s design, logic, performance, or user experience.&rdquo;
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
