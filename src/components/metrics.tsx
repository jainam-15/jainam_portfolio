"use client";

import { motion } from "framer-motion";

const metrics = [
  { value: "12+", label: "Products Built" },
  { value: "4", label: "Apps Shipped" },
  { value: "5k+", label: "Hours Building" },
  { value: "25+", label: "AI Automations" },
  { value: "10k+", label: "Users Impacted" },
  { value: "100+", label: "Problems Solved" },
];

export function Metrics() {
  return (
    <section className="relative py-20 bg-foreground text-background overflow-hidden border-t border-foreground">
      <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.07 * idx, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-40px" }}
              className="flex flex-col"
            >
              <span className="text-4xl md:text-5xl font-bold tracking-tighter text-background mb-2">
                {metric.value}
              </span>
              <span className="text-xs font-mono tracking-widest uppercase text-background/50">
                {metric.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
