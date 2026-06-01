"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Layers, Workflow } from "lucide-react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Cpu,
      title: "AI Systems",
      description: "Integrating intelligent agentic workflows and LLM infrastructure."
    },
    {
      icon: Layers,
      title: "SaaS Architecture",
      description: "Building resilient, multi-tenant scalable backends."
    },
    {
      icon: Workflow,
      title: "Premium UX",
      description: "Engineering fluid, Apple-like cinematic interfaces."
    }
  ];

  return (
    <section id="about" className="relative py-32 bg-background overflow-hidden border-t border-border/50">
      {/* Subtle background gradient */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1/3 h-[500px] bg-foreground/5 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          
          {/* Left: Text Content */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 leading-tight">
                Architecting the intersection of <span className="text-foreground">AI</span> and <span className="text-foreground">Product.</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground font-medium leading-relaxed">
                <p>
                  I don&apos;t just write code. I build businesses. My approach combines deep engineering expertise with strong product intuition, resulting in software that scales elegantly.
                </p>
                <p>
                  From designing robust cloud architectures to engineering fluid cinematic frontends, I ensure every layer of the stack meets an uncompromising standard of quality.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: Feature Cards */}
          <div className="lg:col-span-6 lg:col-start-7 space-y-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: 0.2 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-px bg-gradient-to-r from-foreground/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                
                <div className="relative glass-card p-8 rounded-2xl hover-target flex flex-col sm:flex-row gap-6 items-start">
                  <div className="p-4 rounded-xl bg-background/50 border border-border/50 shadow-inner">
                    <feature.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground tracking-tight mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
