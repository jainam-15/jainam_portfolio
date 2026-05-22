"use client";

import { useRef, useCallback, type MouseEvent as ReactMouseEvent } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  type Variants,
} from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/lib/constants";

/** Inline GitHub icon — lucide-react doesn't ship one in every version */
function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}
import { cn } from "@/lib/utils";
import {
  fadeInUp,
  staggerContainer,
  defaultViewport,
} from "@/lib/animations";

/* ─────────────────────────────────────────────
   Animation Variants
   ───────────────────────────────────────────── */

const sectionHeader: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: i * 0.15,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const chipContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.3 },
  },
};

const chipItem: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 8 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/* ─────────────────────────────────────────────
   Spotlight Card Wrapper
   ───────────────────────────────────────────── */

function SpotlightCard({
  children,
  className,
  custom,
}: {
  children: React.ReactNode;
  className?: string;
  custom?: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const handleMouseMove = useCallback(
    (e: ReactMouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const { left, top } = cardRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - left);
      mouseY.set(e.clientY - top);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(-1000);
    mouseY.set(-1000);
  }, [mouseX, mouseY]);

  // Radial spotlight that follows the cursor
  const spotlightBg = useMotionTemplate`radial-gradient(
    650px circle at ${mouseX}px ${mouseY}px,
    rgba(59,130,246,0.06),
    transparent 80%
  )`;

  // Animated border glow
  const borderGlow = useMotionTemplate`radial-gradient(
    400px circle at ${mouseX}px ${mouseY}px,
    rgba(139,92,246,0.35),
    rgba(59,130,246,0.15) 50%,
    transparent 80%
  )`;

  return (
    <motion.div
      ref={cardRef}
      custom={custom}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("group relative", className)}
    >
      {/* Animated gradient border layer */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: borderGlow }}
      />

      {/* Card background with glass effect */}
      <div
        className={cn(
          "relative h-full overflow-hidden rounded-2xl",
          "border border-border/50",
          "bg-card/60 dark:bg-card/40",
          "backdrop-blur-xl",
          "transition-all duration-500 ease-out",
          "group-hover:border-border/80",
          "group-hover:shadow-[0_20px_60px_-12px_rgba(59,130,246,0.12)]",
          "dark:group-hover:shadow-[0_20px_60px_-12px_rgba(59,130,246,0.15)]",
          "group-hover:-translate-y-1"
        )}
      >
        {/* Spotlight overlay */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: spotlightBg }}
        />

        {children}
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Tech Chips
   ───────────────────────────────────────────── */

function TechChips({ tech }: { tech: string[] }) {
  return (
    <motion.div
      variants={chipContainer}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      className="flex flex-wrap gap-2"
    >
      {tech.map((t) => (
        <motion.span
          key={t}
          variants={chipItem}
          className={cn(
            "inline-flex items-center rounded-full px-3 py-1",
            "text-xs font-medium tracking-wide",
            "bg-muted/80 dark:bg-white/[0.06]",
            "text-muted-foreground",
            "border border-border/40 dark:border-white/[0.06]",
            "transition-colors duration-300",
            "group-hover:bg-muted dark:group-hover:bg-white/[0.1]",
            "group-hover:text-foreground/80"
          )}
        >
          {t}
        </motion.span>
      ))}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Action Buttons
   ───────────────────────────────────────────── */

function ActionButtons({ links }: { links: Project["links"] }) {
  if (!links.length) return null;

  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link) => {
        const isGitHub =
          link.label.toLowerCase() === "github" ||
          link.href.includes("github.com");
        const Icon = isGitHub ? GithubIcon : ExternalLink;

        return (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "group/btn relative inline-flex items-center gap-2 rounded-xl px-5 py-2.5",
              "text-sm font-medium",
              "transition-all duration-300 ease-out",
              isGitHub
                ? [
                    "border border-border/60 dark:border-white/10",
                    "bg-transparent",
                    "text-foreground/70",
                    "hover:border-foreground/30 dark:hover:border-white/20",
                    "hover:bg-muted/60 dark:hover:bg-white/[0.06]",
                    "hover:text-foreground",
                  ]
                : [
                    "border border-transparent",
                    "bg-gradient-to-r from-blue-600 to-violet-600",
                    "text-white",
                    "shadow-lg shadow-blue-600/20",
                    "hover:shadow-xl hover:shadow-blue-600/30",
                    "hover:brightness-110",
                  ]
            )}
          >
            <Icon className="h-4 w-4" />
            <span>{isGitHub ? "Source Code" : "Live Preview"}</span>
            {!isGitHub && (
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
            )}
          </a>
        );
      })}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Gradient Preview Area
   ───────────────────────────────────────────── */

function GradientPreview({
  gradient,
  title,
  height = "h-[300px]",
}: {
  gradient: string;
  title: string;
  height?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl",
        height,
        "bg-gradient-to-br",
        gradient
      )}
    >
      {/* Subtle noise overlay */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')]" />

      {/* Floating geometric shapes for visual interest */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Central glow */}
          <div className="absolute -inset-16 rounded-full bg-white/10 blur-3xl" />

          {/* Grid pattern */}
          <div className="relative grid grid-cols-3 gap-3 opacity-20">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className={cn(
                  "h-6 w-6 rounded-md border border-white/30 bg-white/10",
                  i === 4 && "bg-white/20 border-white/40 scale-110"
                )}
              />
            ))}
          </div>

          {/* Title overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              {title}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/20 to-transparent" />
    </div>
  );
}

/* ─────────────────────────────────────────────
   Featured Project Card
   ───────────────────────────────────────────── */

function FeaturedProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const isReversed = index % 2 !== 0;

  return (
    <SpotlightCard custom={index}>
      <div
        className={cn(
          "relative z-20 flex flex-col gap-6 p-5 sm:p-6 lg:flex-row lg:gap-8 lg:p-8",
          isReversed && "lg:flex-row-reverse"
        )}
      >
        {/* Gradient Preview — 60% */}
        <div className="w-full lg:w-[58%]">
          <GradientPreview
            gradient={project.gradient}
            title={project.title}
            height="h-[240px] sm:h-[280px] lg:h-[320px]"
          />
        </div>

        {/* Content — 40% */}
        <div className="flex w-full flex-col justify-center gap-5 lg:w-[42%]">
          {/* Title */}
          <div>
            <motion.h3
              variants={fadeInUp}
              className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
            >
              {project.title}
            </motion.h3>

            {/* Metrics badge */}
            {project.metrics && (
              <motion.div variants={fadeInUp} className="mt-2">
                <span
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full px-3 py-1",
                    "text-xs font-semibold",
                    "bg-gradient-to-r from-blue-500/10 to-violet-500/10",
                    "text-blue-600 dark:text-blue-400",
                    "border border-blue-500/20 dark:border-blue-400/20",
                    "ring-1 ring-inset ring-blue-500/10"
                  )}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
                  {project.metrics}
                </span>
              </motion.div>
            )}
          </div>

          {/* Long description */}
          <motion.p
            variants={fadeInUp}
            className="text-sm leading-relaxed text-muted-foreground sm:text-[15px]"
          >
            {project.longDescription}
          </motion.p>

          {/* Tech chips */}
          <TechChips tech={project.tech} />

          {/* Action buttons */}
          <ActionButtons links={project.links} />
        </div>
      </div>
    </SpotlightCard>
  );
}

/* ─────────────────────────────────────────────
   Non-Featured Project Card
   ───────────────────────────────────────────── */

function SmallProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <SpotlightCard custom={index + 3}>
      <div className="relative z-20 flex h-full flex-col p-4 sm:p-5">
        {/* Gradient preview */}
        <GradientPreview
          gradient={project.gradient}
          title={project.title}
          height="h-[180px] sm:h-[200px]"
        />

        {/* Content */}
        <div className="mt-5 flex flex-1 flex-col gap-4">
          <div>
            <h3 className="text-xl font-bold tracking-tight text-foreground">
              {project.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {project.longDescription}
            </p>
          </div>

          <div className="mt-auto">
            <TechChips tech={project.tech} />
          </div>

          {project.links.length > 0 && (
            <div className="pt-1">
              <ActionButtons links={project.links} />
            </div>
          )}
        </div>
      </div>
    </SpotlightCard>
  );
}

/* ─────────────────────────────────────────────
   Projects Section
   ───────────────────────────────────────────── */

export default function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="relative overflow-hidden py-24 sm:py-32 lg:py-40"
    >
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/[0.03] blur-[120px] dark:bg-blue-500/[0.06]" />
        <div className="absolute right-1/4 bottom-0 h-[500px] w-[500px] translate-x-1/2 rounded-full bg-violet-500/[0.03] blur-[120px] dark:bg-violet-500/[0.06]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={sectionHeader}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mb-16 sm:mb-20 lg:mb-24"
        >
          <motion.p
            variants={fadeInUp}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground"
          >
            Selected Work
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg"
          >
            A curated selection of products and experiences I&apos;ve built —
            each one a reflection of premium craft and modern engineering.
          </motion.p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="flex flex-col gap-8 sm:gap-10"
        >
          {featuredProjects.map((project, i) => (
            <FeaturedProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>

        {/* Non-Featured Projects */}
        {otherProjects.length > 0 && (
          <div className="mt-10 sm:mt-14">
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              className="mb-8 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground"
            >
              More Projects
            </motion.p>

            <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
              {otherProjects.map((project, i) => (
                <SmallProjectCard
                  key={project.id}
                  project={project}
                  index={i}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
