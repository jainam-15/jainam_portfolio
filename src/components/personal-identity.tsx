"use client";

import { motion } from "framer-motion";
import { User, Lightbulb, Workflow, Target, Zap } from "lucide-react";
import { useRef } from "react";

const principles = [
  {
    icon: Target,
    title: "Problem First",
    description: "I don't build features. I solve problems."
  },
  {
    icon: Workflow,
    title: "AI Native",
    description: "AI isn't a tool in my workflow. It's part of how I think."
  },
  {
    icon: Lightbulb,
    title: "Product Mindset",
    description: "Every technical decision should create business value."
  },
  {
    icon: Zap,
    title: "Execution Over Ideas",
    description: "Ideas are everywhere. Execution creates impact."
  }
];

export function PersonalIdentity() {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} id="about" className="relative py-32 bg-background overflow-hidden border-t border-border/50">
      
      {/* Cinematic ambient glow */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-foreground/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[3/4] w-full rounded-3xl overflow-hidden liquid-glass relative border border-border/50 group">
              {/* Premium Portrait Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-foreground/5">
                <User className="w-24 h-24 text-foreground/20 group-hover:text-foreground/40 transition-colors duration-700" />
                <span className="text-xs font-mono tracking-widest uppercase text-foreground/30 mt-6 block">Portrait Placeholder</span>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 z-20">
                <div className="glass-card px-6 py-4 rounded-2xl border border-border/50 inline-block backdrop-blur-xl">
                  <span className="text-2xl font-bold block text-foreground tracking-tight">Jainam</span>
                  <span className="text-sm font-medium text-muted-foreground">Product Builder</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative & Principles */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-6 block border-l-2 border-foreground pl-4">The Architect</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-8 leading-tight">
              Creating Software That <span className="text-muted-foreground">Solves Real Problems.</span>
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-muted-foreground font-medium leading-relaxed mb-16">
              <p>
                My obsession isn't with code. It's with <strong className="text-foreground font-semibold">utility</strong>. I started building because I saw a massive gap between brilliant engineering and actual human usability.
              </p>
              <p>
                Today, I leverage artificial intelligence not just as a feature, but as a foundational architecture to accelerate development and construct systems that were impossible a few years ago. From concept and database architecture to cinematic UI, I own the entire lifecycle.
              </p>
              <p>
                I don't just build apps. I build <strong className="text-foreground font-semibold">businesses</strong>.
              </p>
            </div>

            {/* Founder Principles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {principles.map((principle, idx) => {
                const Icon = principle.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 + (idx * 0.1), ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="p-6 rounded-2xl glass-card border border-border/50 hover:bg-foreground/5 transition-colors group"
                  >
                    <Icon className="w-6 h-6 text-foreground mb-4 group-hover:scale-110 transition-transform duration-500 ease-out" />
                    <h3 className="text-lg font-bold text-foreground mb-2">{principle.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {principle.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
