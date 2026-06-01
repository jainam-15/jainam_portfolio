"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const processes = [
  {
    icon: Search,
    title: "Research & Strategy",
    description: "Understanding the problem, user psychology, and architecting a scalable foundation."
  },
  {
    icon: PenTool,
    title: "Premium Design",
    description: "Crafting Apple-like, cinematic UI/UX using modern design systems and typography."
  },
  {
    icon: Code2,
    title: "AI-Assisted Build",
    description: "Writing high-performance code with AI workflows for maximum speed and quality."
  },
  {
    icon: Rocket,
    title: "Deploy & Scale",
    description: "Optimizing for 60fps, SEO, and robust infrastructure before the final launch."
  }
];

export function Process() {
  const containerRef = useRef(null);

  return (
    <section className="relative py-32 bg-foreground/5 overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            How I <span className="text-gradient">Build Products.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {processes.map((proc, idx) => {
            const Icon = proc.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + idx * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative glass-card p-8 rounded-3xl hover-target group"
              >
                <div className="w-14 h-14 rounded-full bg-background border border-border flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{proc.title}</h3>
                <p className="text-muted-foreground">{proc.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
