"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Terminal } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import { useEffect, useState, useRef } from "react";

export function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  // Agent Network Nodes Generation
  const [nodes, setNodes] = useState<{ id: number; x: number; y: number }[]>([]);
  
  useEffect(() => {
    // Generate static nodes for the background network once mounted
    const newNodes = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    setNodes(newNodes);
  }, []);

  return (
    <section ref={containerRef} id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background">
      
      {/* Background Interactive Agent Network */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0 pointer-events-none opacity-30 dark:opacity-40">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
              <stop offset="50%" stopColor="currentColor" stopOpacity="0.4" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          {nodes.map((node, i) => (
            <g key={node.id}>
              {/* Connecting Lines */}
              {nodes.slice(i + 1, i + 4).map((target) => (
                <motion.line
                  key={`${node.id}-${target.id}`}
                  x1={`${node.x}%`}
                  y1={`${node.y}%`}
                  x2={`${target.x}%`}
                  y2={`${target.y}%`}
                  stroke="url(#networkGradient)"
                  strokeWidth="1"
                  className="text-foreground"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", delay: i * 0.1 }}
                />
              ))}
              {/* Nodes */}
              <motion.circle
                cx={`${node.x}%`}
                cy={`${node.y}%`}
                r="3"
                className="fill-foreground"
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
              />
              {/* Glow around nodes */}
              <motion.circle
                cx={`${node.x}%`}
                cy={`${node.y}%`}
                r="12"
                className="fill-foreground/10"
                animate={{ scale: [1, 2, 1], opacity: [0, 0.5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
              />
            </g>
          ))}
        </svg>
      </motion.div>

      {/* Ambient Depth Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-foreground/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex flex-col items-center text-center">
        
        {/* Status Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-border bg-background/50 backdrop-blur-xl mb-12 shadow-sm"
        >
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-foreground"></span>
          </div>
          <span className="text-xs font-mono tracking-widest uppercase text-foreground/80">Jainam Shah • AI Product Builder</span>
        </motion.div>

        {/* Massive Editorial Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-[8rem] font-bold tracking-tighter leading-[0.9] mb-8"
        >
          <span className="block text-foreground">Engineering</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/40">Intelligence.</span>
        </motion.h1>

        {/* Powerful Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="max-w-2xl text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed mb-16"
        >
          I design, architect, and deploy world-class AI products. Bridging the gap between bleeding-edge technology and real human needs.
        </motion.p>

        {/* Social Proof / Trust anchors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="flex items-center gap-6"
        >
          <a
            href="https://github.com/jainam-15/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>
          <div className="w-1 h-1 rounded-full bg-border" />
          <a
            href="https://www.linkedin.com/in/jainam-shah15/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
          <div className="w-1 h-1 rounded-full bg-border" />
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
          >
            <Terminal className="w-5 h-5" />
            <span>Resume</span>
          </a>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase text-muted-foreground">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-muted-foreground" />
        </motion.div>
      </motion.div>

    </section>
  );
}
