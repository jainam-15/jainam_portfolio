"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const pipeline = [
  {
    icon: Search,
    phase: "Discovery",
    title: "Problem Deconstruction",
    description: "Before writing a single line of code, we define the exact business problem, identify bottlenecks, and map the user psychology required for adoption."
  },
  {
    icon: PenTool,
    phase: "Architecture",
    title: "Systems & UI Design",
    description: "Designing the data models, cloud infrastructure, and a cinematic, Apple-tier user interface that builds immediate trust."
  },
  {
    icon: Code2,
    phase: "Development",
    title: "AI-Assisted Build",
    description: "Executing the architecture rapidly using modern AI workflows. Strictly typed, highly scalable, and optimized for performance from day one."
  },
  {
    icon: Rocket,
    phase: "Deployment",
    title: "Launch & Scale",
    description: "Rigorous testing, SEO optimization, and global deployment. Ensuring the product can handle scale the moment it hits the market."
  }
];

export function Process() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative py-32 bg-background border-t border-border/50 overflow-hidden">
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        
        <div className="mb-24 text-center">
          <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-6 block">Methodology</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
            From Idea to <span className="text-muted-foreground">Product.</span>
          </h2>
        </div>

        <div className="relative">
          {/* Central Pipeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-foreground/10 md:-translate-x-1/2 rounded-full overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-foreground shadow-[0_0_15px_rgba(255,255,255,0.8)]"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-12 md:space-y-24">
            {pipeline.map((step, idx) => {
              const isEven = idx % 2 === 0;
              const Icon = step.icon;
              return (
                <div key={idx} className={`relative flex flex-col md:flex-row items-start md:items-center justify-between w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Pipeline Node */}
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "backOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="absolute left-8 md:left-1/2 w-12 h-12 rounded-full bg-background border-[3px] border-border/50 -translate-x-1/2 z-10 flex items-center justify-center shadow-xl"
                  >
                    <Icon className="w-5 h-5 text-foreground" />
                  </motion.div>

                  {/* Spacer */}
                  <div className="hidden md:block md:w-[45%]" />

                  {/* Content */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="w-full md:w-[45%] pl-20 md:pl-0"
                  >
                    <div className={`glass-card p-8 rounded-3xl border border-border/50 hover:bg-foreground/5 transition-colors relative overflow-hidden group ${isEven ? 'md:text-left' : 'md:text-right flex md:flex-col md:items-end'}`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                      <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-4 block border-b border-border/50 pb-2 inline-block">
                        Phase 0{idx + 1} // {step.phase}
                      </span>
                      <h3 className="text-2xl font-bold tracking-tight text-foreground mb-3">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
