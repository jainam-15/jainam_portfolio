"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  { step: "Problem", desc: "If the problem isn't painful enough, the product shouldn't exist." },
  { step: "Research", desc: "Deconstruct behavior. Why does this problem exist? How are people solving it today?" },
  { step: "Architecture", desc: "Design the schema and system before writing a line of UI." },
  { step: "AI Layer", desc: "Identify where reasoning and automation can replace manual decision-making." },
  { step: "Build", desc: "Rapid, typed, component-driven. No compromise on performance or UI quality." },
  { step: "Test", desc: "Stress the core loops. If it cracks under pressure, the architecture is wrong." },
  { step: "Launch", desc: "Deploy with monitoring. The real product begins the moment users interact." },
  { step: "Iterate", desc: "Measure impact. Refine UX. Scale infrastructure. A product is never finished." },
];

export function Process() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} id="process" className="relative py-24 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-8 max-w-5xl">

        <div className="mb-16">
          <p className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-6">
            Process
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
            How I work<span className="text-foreground/40">.</span>
          </h2>
        </div>

        <div className="relative">
          {/* Scroll-driven line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-border md:-translate-x-1/2 overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full bg-foreground"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-10 md:space-y-14">
            {steps.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-start md:items-center w-full ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Node */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, ease: "backOut" }}
                    viewport={{ once: true, margin: "-80px" }}
                    className="absolute left-0 md:left-1/2 w-3 h-3 rounded-full bg-foreground border-2 border-background -translate-x-1 md:-translate-x-1.5 z-10"
                  />

                  {/* Spacer */}
                  <div className="hidden md:block md:w-[47%]" />

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 24 : -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true, margin: "-80px" }}
                    className="w-full md:w-[47%] pl-8 md:pl-0"
                  >
                    <div className={isEven ? "md:text-left md:pl-8" : "md:text-right md:pr-8"}>
                      <p className="text-[10px] font-mono tracking-widest uppercase text-muted-foreground/60 mb-1">
                        {String(idx + 1).padStart(2, "0")}
                      </p>
                      <h3 className="text-xl font-bold tracking-tight text-foreground mb-1.5">
                        {item.step}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
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
