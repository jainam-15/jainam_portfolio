"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const processes = [
  {
    icon: Search,
    title: "Research & Architecture",
    description: "Deep-diving into business logic, user psychology, and laying a scalable cloud and database foundation."
  },
  {
    icon: PenTool,
    title: "Cinematic Design",
    description: "Crafting fluid, Apple-tier UI/UX using high-end design systems, typography, and micro-interactions."
  },
  {
    icon: Code2,
    title: "AI-Assisted Build",
    description: "Writing high-performance, strictly typed code accelerated by modern AI workflows for maximum quality and speed."
  },
  {
    icon: Rocket,
    title: "Deploy & Scale",
    description: "Optimizing for 60fps animations, robust SEO, and scalable infrastructure before global launch."
  }
];

export function Process() {
  const containerRef = useRef(null);

  return (
    <section className="relative py-32 bg-background border-t border-border/50 overflow-hidden" ref={containerRef}>
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-2xl h-1/2 bg-foreground/5 blur-[120px] pointer-events-none rounded-b-full" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24 text-center max-w-3xl mx-auto"
        >
          <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-6 block">Execution</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
            The <span className="text-foreground text-gradient">Methodology.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          {processes.map((proc, idx) => {
            const Icon = proc.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * idx, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                className="group relative glass-card p-10 md:p-12 rounded-[2rem] hover-target overflow-hidden border border-border/50"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 rounded-2xl bg-background border border-border/50 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500 ease-out">
                    <Icon className="w-8 h-8 text-foreground" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 tracking-tight text-foreground">{proc.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {proc.description}
                  </p>
                  
                  <div className="mt-8 text-foreground/20 font-mono text-5xl font-bold absolute bottom-8 right-8 group-hover:text-foreground/40 transition-colors duration-500">
                    0{idx + 1}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
