"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { metrics } from "@/lib/constants";

const stripContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const metricReveal: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

function useCountUp(target: number, isInView: boolean, duration: number = 1600) {
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
      className="flex flex-col items-center justify-center p-8 text-center"
    >
      <div className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-foreground select-none">
        {hasDisplayValue ? (
          <span>{metric.displayValue}</span>
        ) : (
          <span className="tabular-nums">
            {count}
            {metric.suffix && <span className="text-muted-foreground/80 ml-0.5">{metric.suffix}</span>}
          </span>
        )}
      </div>
      <div className="mt-2 text-xs md:text-sm tracking-wide text-muted-foreground/60 font-sans font-medium uppercase">
        {metric.label}
      </div>
    </motion.div>
  );
}

export default function MetricsStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-y border-border bg-card/20 backdrop-blur-sm py-8 sm:py-12"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          variants={stripContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 divide-y divide-border/20 md:divide-y-0"
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
