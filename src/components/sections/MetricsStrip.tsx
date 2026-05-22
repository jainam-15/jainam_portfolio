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
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
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

      // Ease-out cubic
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
// Telemetry Metric Card Component
// ─────────────────────────────────────────────

function MetricCard({
  metric,
  index,
  isInView,
}: {
  metric: (typeof metrics)[number];
  index: number;
  isInView: boolean;
}) {
  const count = useCountUp(metric.value, isInView);
  const hasDisplayValue = "displayValue" in metric && metric.displayValue;

  return (
    <motion.div
      variants={metricReveal}
      className="group relative flex flex-col items-start justify-between border-r border-b border-white/5 p-6 text-left hover:bg-white/[0.01] transition-colors duration-300"
    >
      {/* Corner crosshair for each panel */}
      <div className="hud-crosshair hud-crosshair-tl opacity-40 group-hover:opacity-100 transition-opacity" />
      <div className="hud-crosshair hud-crosshair-br opacity-40 group-hover:opacity-100 transition-opacity" />

      {/* Sensor Metadata */}
      <div className="w-full flex justify-between items-center font-mono text-[9px] tracking-widest text-muted-foreground/60 select-none">
        <span>SENSOR // 0{index + 1}</span>
        <span>SYS_OK</span>
      </div>

      {/* Main Metric Output */}
      <div className="my-6">
        <div className="text-3xl font-extrabold tracking-tight sm:text-4xl font-mono text-foreground">
          {hasDisplayValue ? (
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              {metric.displayValue}
            </span>
          ) : (
            <span className="flex items-baseline">
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent tabular-nums">
                {count}
              </span>
              {metric.suffix && (
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent ml-0.5">
                  {metric.suffix}
                </span>
              )}
            </span>
          )}
        </div>
        {/* Label */}
        <div className="mt-1 text-xs font-mono tracking-wider text-muted-foreground uppercase">
          {metric.label}
        </div>
      </div>

      {/* Dynamic Telemetry Hex Value */}
      <div className="w-full font-mono text-[8px] tracking-widest text-muted-foreground/40 select-none">
        <span>MEM_SECT // 0xAF{index}B{count}</span>
      </div>
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
      className="relative overflow-hidden border-y border-white/5 bg-black/40 backdrop-blur-md"
    >
      {/* Subtle blueprint grid underlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 blueprint-grid opacity-25" />
      <div className="pointer-events-none absolute inset-0 -z-10 dot-matrix opacity-40" />

      <div className="mx-auto max-w-7xl">
        {/* Telemetry panel layout */}
        <motion.div
          variants={stripContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border-l border-white/5"
        >
          {metrics.map((metric, idx) => (
            <MetricCard
              key={metric.label}
              metric={metric}
              index={idx}
              isInView={isInView}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
