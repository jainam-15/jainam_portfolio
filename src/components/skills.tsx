"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, BrainCircuit, Smartphone, Settings } from "lucide-react";

const capabilities = [
  {
    title: "AI Systems",
    description: "Orchestrating agentic workflows and integrating state-of-the-art LLMs into production applications.",
    icon: BrainCircuit,
    colSpan: "lg:col-span-2",
  },
  {
    title: "SaaS Architecture",
    description: "Designing scalable, secure, and multi-tenant systems capable of handling high traffic.",
    icon: Database,
    colSpan: "lg:col-span-1",
  },
  {
    title: "Mobile Products",
    description: "Crafting cross-platform applications with seamless native performance and UI.",
    icon: Smartphone,
    colSpan: "lg:col-span-1",
  },
  {
    title: "Product Engineering",
    description: "Delivering cinematic frontend experiences with rigorous attention to detail and interaction design.",
    icon: Code2,
    colSpan: "lg:col-span-2",
  },
  {
    title: "Scalable Infrastructure",
    description: "Automating deployments and optimizing performance for global scale.",
    icon: Settings,
    colSpan: "lg:col-span-3",
  }
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 bg-background overflow-hidden border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl" ref={ref}>
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-4 block">Capability Matrix</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
              The <span className="text-foreground text-gradient">Architecture</span> of Scale.
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.1 * idx, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative glass-card p-8 rounded-3xl overflow-hidden hover-target border border-border/50 ${cap.colSpan}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="mb-12">
                  <div className="w-12 h-12 rounded-xl bg-background border border-border/50 flex items-center justify-center mb-6 shadow-sm">
                    <cap.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 tracking-tight text-foreground">{cap.title}</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-md">
                    {cap.description}
                  </p>
                </div>
                
                {/* Visual anchor point */}
                <div className="self-end w-2 h-2 rounded-full bg-border group-hover:bg-foreground/50 transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
