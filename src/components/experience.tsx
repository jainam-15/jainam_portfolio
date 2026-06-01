"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    title: "Software Engineering Intern",
    company: "9 Dot Technology",
    duration: "5 Months",
    description: "Contributed to scalable backend systems and integrated AI-assisted workflows into the product lifecycle. Focused on performance optimization and writing clean, maintainable code."
  },
  {
    title: "Freelance Developer",
    company: "Multiple Clients",
    duration: "3 Clients",
    description: "Built and delivered high-quality, conversion-optimized landing pages and full-stack applications. Ensured premium UX and robust architecture."
  },
  {
    title: "Product Builder",
    company: "SaaS & Own Products",
    duration: "4 Products",
    description: "Designed, developed, and launched 2 SaaS platforms and 2 personal products (including LeadsArk and Your Music Space). Handled everything from database design to frontend animations."
  }
];

export function Experience() {
  const containerRef = useRef(null);

  return (
    <section id="experience" className="relative py-32 overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Journey & <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Glowing Path Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-[0.5px]">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-primary to-transparent"
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true, margin: "-100px" }}
            />
          </div>

          <div className="space-y-16">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`relative flex flex-col md:flex-row items-center justify-between w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Dot */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="absolute left-[0px] md:left-1/2 w-4 h-4 rounded-full bg-primary -translate-x-[7.5px] md:-translate-x-2 shadow-[0_0_15px_rgba(255,255,255,0.5)] dark:shadow-[0_0_15px_rgba(255,255,255,0.8)] z-10"
                  />

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block md:w-[45%]" />

                  {/* Content Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="w-full md:w-[45%] pl-8 md:pl-0"
                  >
                    <div className="glass-card p-8 rounded-3xl hover-target group">
                      <span className="text-primary text-sm font-bold uppercase tracking-wider mb-2 block">{exp.duration}</span>
                      <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">{exp.title}</h3>
                      <h4 className="text-lg text-foreground/80 font-medium mb-4">{exp.company}</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
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
