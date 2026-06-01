"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useRef } from "react";

const testimonials = [
  {
    quote: "Jainam doesn't just write code, he understands the business problem. The architecture he built scaled effortlessly during our launch.",
    author: "Client / Founder",
    role: "SaaS Startup"
  },
  {
    quote: "The level of polish on the UI combined with a rock-solid backend is rare to find in a single engineer. Absolute professional.",
    author: "Product Manager",
    role: "Enterprise Client"
  },
  {
    quote: "He integrated complex AI workflows into our existing pipeline in a matter of days. Highly recommended for any AI-native product builds.",
    author: "Technical Lead",
    role: "AI Agency"
  }
];

export function Testimonials() {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="relative py-32 bg-background border-t border-border/50 overflow-hidden">
      
      {/* Cinematic ambient glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-foreground/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        <div className="mb-24 text-center">
          <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-6 block">Proof</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
            What Clients & <span className="text-muted-foreground">Users Say.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * idx, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative p-8 md:p-10 rounded-[2rem] glass-card border border-border/50 flex flex-col h-full hover:-translate-y-2 transition-transform duration-500"
            >
              <Quote className="w-10 h-10 text-foreground/20 mb-8" />
              
              <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed mb-12 flex-grow">
                "{testimonial.quote}"
              </p>
              
              <div className="mt-auto">
                <span className="block font-bold text-foreground tracking-tight">{testimonial.author}</span>
                <span className="text-sm font-mono text-muted-foreground uppercase tracking-wider">{testimonial.role}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
