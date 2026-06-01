"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const metrics = [
  { value: "4", label: "Production Products" },
  { value: "50+", label: "AI Workflows Deployed" },
  { value: "10k+", label: "Users Served" },
  { value: "99.9%", label: "Uptime Achieved" }
];

export function Metrics() {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="relative py-24 bg-foreground text-background overflow-hidden">
      
      {/* Background Subtle Grid for premium feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * idx, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-center md:text-left flex flex-col items-center md:items-start"
            >
              <span className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">{metric.value}</span>
              <span className="text-sm font-mono tracking-widest uppercase text-background/60">{metric.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
