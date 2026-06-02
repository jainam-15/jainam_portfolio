"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const frameworkSteps = [
  { step: "Problem", desc: "Identify the friction point. If the problem isn't painful enough, the product shouldn't exist." },
  { step: "Research", desc: "Deconstruct human behavior. Why does this problem exist? How are they currently solving it manually?" },
  { step: "Architecture", desc: "Design the database schema and system architecture before writing a single line of UI code." },
  { step: "AI Acceleration", desc: "Identify where LLMs and autonomous agents can replace manual effort and decision-making." },
  { step: "Development", desc: "Rapid, strictly typed, component-driven build. Zero compromise on 60fps animations and fluid UI." },
  { step: "Testing", desc: "Stress test the core loops. If the system cracks under pressure, the architecture is flawed." },
  { step: "Launch", desc: "Deploy with aggressive monitoring. The real product begins the moment the first user interacts with it." },
  { step: "Iteration", desc: "Measure impact. Refine the UX. Scale the infrastructure. A product is never truly finished." }
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
      
      {/* Cinematic Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-foreground/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        
        <div className="mb-24 text-center">
          <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-6 block">How I Think</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
            The Decision-Making <span className="text-muted-foreground">Framework.</span>
          </h2>
        </div>

        <div className="relative">
          {/* Central Pipeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-foreground/10 md:-translate-x-1/2 overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-foreground shadow-[0_0_15px_rgba(255,255,255,0.8)]"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-12 md:space-y-16">
            {frameworkSteps.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`relative flex flex-col md:flex-row items-start md:items-center justify-between w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Node */}
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "backOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-foreground border-4 border-background -translate-x-[7px] md:-translate-x-1/2 z-10 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                  />

                  {/* Spacer */}
                  <div className="hidden md:block md:w-[45%]" />

                  {/* Content */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="w-full md:w-[45%] pl-16 md:pl-0"
                  >
                    <div className={`group ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                      <span className="text-[10px] font-mono tracking-widest uppercase text-muted-foreground mb-2 block">
                        Phase 0{idx + 1}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-3">{item.step}</h3>
                      <p className="text-muted-foreground leading-relaxed text-lg group-hover:text-foreground/80 transition-colors">
                        {item.desc}
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
