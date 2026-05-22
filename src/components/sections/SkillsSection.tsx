"use client";

import { useRef } from "react";
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
import { staggerContainer, fadeInUp, staggerFast } from "@/lib/animations";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  layout: Layout,
  server: Server,
  brain: Brain,
  smartphone: Smartphone,
  database: Database,
  palette: Palette,
};

function SkillPill({ name }: { name: string }) {
  return (
    <motion.span
      variants={fadeInUp}
      whileHover={{ y: -1 }}
      className={cn(
        "inline-flex cursor-default select-none items-center rounded-full px-4 py-1.5 text-xs font-medium",
        "bg-white/[0.04] dark:bg-white/[0.02] text-foreground/80 border border-border/60",
        "transition-colors duration-200 hover:bg-foreground/[0.04] hover:text-foreground"
      )}
    >
      {name}
    </motion.span>
  );
}

interface CategoryCardProps {
  category: string;
  icon: string;
  items: readonly string[];
}

function CategoryCard({ category, icon, items }: CategoryCardProps) {
  const Icon = iconMap[icon] ?? Layout;

  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -2, transition: { duration: 0.2 } }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/[0.04] p-8",
        "bg-black/[0.15] dark:bg-white/[0.01] backdrop-blur-md",
        "transition-all duration-300 ease-out"
      )}
    >
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          {/* Module Title */}
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-card/40 transition-colors duration-300">
              <Icon className="h-5 w-5 text-foreground/80" />
            </div>
            <h3 className="text-base font-bold tracking-tight text-foreground">
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
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative w-full overflow-hidden py-32 md:py-48 border-t border-border bg-background"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute right-0 top-1/2 -z-10 h-[500px] w-[700px] -translate-y-1/2 opacity-15 blur-[120px]">
        <div className="h-full w-full rounded-full bg-gradient-to-bl from-purple-600/10 via-blue-600/5 to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center"
        >
          <div className="text-[10px] tracking-[0.2em] text-muted-foreground/50 font-bold uppercase mb-3">
            Capabilities
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl uppercase">
            Technical Stack
          </h2>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
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
