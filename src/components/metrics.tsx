"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const metrics = [
  { value: "12+", label: "Products Built" },
  { value: "4", label: "Apps Shipped" },
  { value: "5000+", label: "Hours Building" },
  { value: "25+", label: "AI Automations Created" },
  { value: "10k+", label: "Users Impacted" },
  { value: "100+", label: "Problems Solved" }
];

export function Metrics() {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="relative py-32 bg-foreground text-background overflow-hidden">
      
      {/* Background Subtle Grid for premium feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className="mb-20 text-center">
          <span className="text-xs font-mono tracking-widest uppercase text-background/60 mb-6 block">The Proof</span>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * idx, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-center flex flex-col items-center group"
            >
              <span className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-background group-hover:scale-110 transition-transform duration-500 ease-out">{metric.value}</span>
              <span className="text-sm font-mono tracking-widest uppercase text-background/60 group-hover:text-background/90 transition-colors">{metric.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
