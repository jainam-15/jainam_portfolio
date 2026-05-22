"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { User, Sparkles, Brain, Rocket, Gem } from "lucide-react";
import { aboutCards } from "@/lib/constants";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  user: User,
  sparkles: Sparkles,
  brain: Brain,
  rocket: Rocket,
  gem: Gem,
};

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
        "group relative overflow-hidden rounded-2xl border border-white/[0.04] p-8 sm:p-10",
        "bg-black/[0.15] dark:bg-white/[0.01] backdrop-blur-md",
        "transition-all duration-500 ease-out",
        "hover:border-foreground/[0.08] hover:shadow-xl hover:shadow-black/[0.02] dark:hover:shadow-white/[0.01]",
        span
      )}
    >
      {/* Spotlight radial glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: isHovered
            ? `radial-gradient(280px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(120,119,198,0.03), transparent 60%)`
            : "none",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card/40 transition-colors duration-300 group-hover:border-foreground/15">
            <Icon className="h-5 w-5 text-foreground/80" />
          </div>

          <h3 className="mb-3 text-lg font-bold tracking-tight text-foreground">
            {title}
          </h3>

          <p className="text-sm md:text-base leading-relaxed text-muted-foreground/75 font-sans font-normal">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full overflow-hidden py-32 md:py-48 bg-background"
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 opacity-15 blur-[120px]">
        <div className="h-full w-full rounded-full bg-gradient-to-br from-blue-600/10 via-purple-600/3 to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        
        {/* Section Title Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center"
        >
          <div className="text-[10px] tracking-[0.2em] text-muted-foreground/50 font-bold uppercase mb-3">
            Identity
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl uppercase">
            System Philosophy
          </h2>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid auto-rows-auto grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {aboutCards.map((card) => (
            <SpotlightCard
              key={card.title}
              title={card.title}
              description={card.description}
              icon={card.icon}
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
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto mt-28 max-w-3xl px-8 text-center"
        >
          <p className="text-xl sm:text-2xl font-light tracking-wide leading-relaxed text-foreground italic">
            &ldquo;I do not settle for average — whether in design, logic, performance, or user experience. Every detail must feel exceptionally crafted.&rdquo;
          </p>
          <cite className="mt-4 block text-xs tracking-[0.15em] text-muted-foreground/60 font-semibold uppercase">
            — Jainam Shah
          </cite>
        </motion.blockquote>
      </div>
    </section>
  );
}
