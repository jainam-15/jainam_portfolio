"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { metrics } from "@/lib/constants";

// ─────────────────────────────────────────────
// Animation Variants
// ─────────────────────────────────────────────

const stripContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const metricReveal: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

// ─────────────────────────────────────────────
// Animated Counter Hook
// ─────────────────────────────────────────────

function useCountUp(
  target: number,
  isInView: boolean,
  duration: number = 1800
) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current || target === 0) return;
    hasAnimated.current = true;

    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic for a satisfying deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return count;
}

// ─────────────────────────────────────────────
// Individual Metric Card
// ─────────────────────────────────────────────

function MetricCard({
  metric,
  isInView,
}: {
  metric: (typeof metrics)[number];
  isInView: boolean;
}) {
  const count = useCountUp(metric.value, isInView);
  const hasDisplayValue = "displayValue" in metric && metric.displayValue;

  return (
    <motion.div
      variants={metricReveal}
      className="group relative flex flex-col items-center justify-center px-4 py-6 text-center"
    >
      {/* Subtle separator line (not on first item of each row) */}
      <div className="absolute left-0 top-1/2 hidden h-8 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-border to-transparent first:hidden lg:block" />

      {/* Number / Value */}
      <div className="text-3xl font-bold tracking-tight text-foreground transition-colors duration-300 sm:text-4xl">
        {hasDisplayValue ? (
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            {metric.displayValue}
          </span>
        ) : (
          <span>
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent tabular-nums">
              {count}
            </span>
            {metric.suffix && (
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                {metric.suffix}
              </span>
            )}
          </span>
        )}
      </div>

      {/* Label */}
      <span className="mt-1.5 text-xs font-medium tracking-wide text-muted-foreground uppercase sm:text-sm">
        {metric.label}
      </span>
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// Metrics Strip Section
// ─────────────────────────────────────────────

export default function MetricsStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-y border-border/50"
    >
      {/* Subtle gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/[0.02] via-purple-500/[0.03] to-blue-500/[0.02] dark:from-blue-500/[0.04] dark:via-purple-500/[0.06] dark:to-blue-500/[0.04]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={stripContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 divide-x divide-border/40 sm:grid-cols-3 lg:grid-cols-6"
        >
          {metrics.map((metric) => (
            <MetricCard
              key={metric.label}
              metric={metric}
              isInView={isInView}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
