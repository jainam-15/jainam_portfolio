"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const journey = [
  {
    phase: "03",
    title: "Independent Product Architect",
    subtitle: "SaaS & Consumer Apps",
    duration: "Current",
    description: "Designing, developing, and scaling proprietary products like LeadsArk and Your Music Space. Handling end-to-end execution from database architecture and cloud infrastructure to highly polished, cinematic frontends."
  },
  {
    phase: "02",
    title: "Premium Web Consultant",
    subtitle: "Freelance & Agency Collaborations",
    duration: "Various Clients",
    description: "Delivering conversion-optimized, high-performance web applications. Bridging the gap between strict engineering requirements and Apple-tier aesthetic design for diverse businesses."
  },
  {
    phase: "01",
    title: "Systems Engineering",
    subtitle: "9 Dot Technology",
    duration: "5 Months",
    description: "Contributed to enterprise-scale backend systems. Spearheaded the integration of AI-assisted workflows, optimizing performance bottlenecks and enforcing rigorous code quality standards."
  }
];

export function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="relative py-32 bg-background border-t border-border/50 overflow-hidden" ref={containerRef}>
      
      {/* Background ambient light */}
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-foreground/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-32 text-center"
        >
          <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-6 block">Evolution</span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
            The <span className="text-muted-foreground">Journey.</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Main vertical track */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border/50 md:-translate-x-[0.5px]">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-foreground shadow-[0_0_10px_rgba(255,255,255,0.5)] dark:shadow-[0_0_10px_rgba(255,255,255,0.8)]"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-24 md:space-y-32">
            {journey.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`relative flex flex-col md:flex-row items-start md:items-center justify-between w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Node */}
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-background border-[3px] border-foreground -translate-x-[7.5px] md:-translate-x-2 z-10"
                  />

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-[45%]" />

                  {/* Content Card */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="w-full md:w-[45%] pl-16 md:pl-0"
                  >
                    <div className={`flex flex-col ${isEven ? 'md:items-start text-left' : 'md:items-end md:text-right'}`}>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-4 border border-border/50 px-3 py-1 rounded-full bg-background/50">
                        {step.duration}
                      </span>
                      <h3 className="text-3xl font-bold tracking-tight mb-2 text-foreground">{step.title}</h3>
                      <h4 className="text-lg font-medium text-foreground/70 mb-6">{step.subtitle}</h4>
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
