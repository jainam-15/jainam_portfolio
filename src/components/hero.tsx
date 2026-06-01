"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background">
      {/* Architectural Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center opacity-20 dark:opacity-30">
        <div className="w-full max-w-[1400px] h-full border-x border-border/50 relative">
          <div className="absolute top-0 bottom-0 left-1/4 w-px bg-border/30" />
          <div className="absolute top-0 bottom-0 left-2/4 w-px bg-border/30" />
          <div className="absolute top-0 bottom-0 left-3/4 w-px bg-border/30" />
          
          <div className="absolute left-0 right-0 top-1/4 h-px bg-border/30" />
          <div className="absolute left-0 right-0 top-2/4 h-px bg-border/30" />
          <div className="absolute left-0 right-0 top-3/4 h-px bg-border/30" />
        </div>
      </div>

      {/* Subtle glowing accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-foreground/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-4xl">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-border/50 bg-background/50 backdrop-blur-md mb-8"
          >
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </div>
            <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground">Systems Online</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-8"
          >
            <span className="block text-foreground">AI-Powered</span>
            <span className="block text-foreground">Software.</span>
            <span className="block text-muted-foreground">Built to Scale.</span>
          </motion.h1>

          {/* Subtitle / Positioning */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-12 font-medium leading-relaxed"
          >
            I am Jainam Shah, a Founder-Minded Engineer & AI Systems Architect. I build intelligent, high-performance digital products with cinematic user experiences.
          </motion.p>

          {/* CTAs & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <a
              href="#projects"
              className="group flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-full font-semibold transition-all hover:scale-[1.02] active:scale-95 shadow-xl"
            >
              Explore Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/jainam-15/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm hover:bg-foreground/5 transition-colors group"
              >
                <Github className="w-5 h-5 text-foreground/80 group-hover:text-foreground transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/jainam-shah15/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm hover:bg-foreground/5 transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-foreground/80 group-hover:text-foreground transition-colors" />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm hover:bg-foreground/5 transition-colors group flex items-center gap-2"
              >
                <Terminal className="w-5 h-5 text-foreground/80 group-hover:text-foreground transition-colors" />
                <span className="text-sm font-medium sr-only sm:not-sr-only text-foreground/80 group-hover:text-foreground">Resume</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Bottom gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
