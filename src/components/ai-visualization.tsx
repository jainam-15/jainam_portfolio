"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Database, Cpu, ArrowRightLeft, Blocks } from "lucide-react";
import { useRef } from "react";

export function AiVisualization() {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="relative py-32 bg-background border-t border-border/50 overflow-hidden">
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        <div className="mb-24 text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-6 block">Systems Architecture</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight mb-6">
            Building <span className="text-muted-foreground">Autonomous Workflows.</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            I design intelligent pipelines where data flows seamlessly between user interfaces, robust backends, and cutting-edge LLMs.
          </p>
        </div>

        {/* The Visualization Canvas */}
        <div className="relative w-full max-w-5xl mx-auto aspect-[16/10] md:aspect-[21/9] rounded-[2rem] border border-border/50 liquid-glass p-8 md:p-16 flex items-center justify-center">
          
          {/* Animated Flow Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />
          
          <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-between z-10">
            
            {/* Node 1: Client/User */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-4 z-20"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-background border border-border flex items-center justify-center shadow-lg relative">
                <Blocks className="w-8 h-8 text-foreground" />
                <motion.div className="absolute inset-0 border border-foreground rounded-2xl" animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />
              </div>
              <span className="text-sm font-mono tracking-widest uppercase text-muted-foreground">Client UI</span>
            </motion.div>

            {/* Connection 1 */}
            <div className="flex-1 flex items-center justify-center relative w-full h-16 md:h-auto">
              <motion.div className="absolute h-px w-full bg-border/50 hidden md:block" />
              <motion.div className="absolute w-px h-full bg-border/50 block md:hidden" />
              <motion.div 
                animate={{ x: [0, 100, 0], opacity: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="hidden md:flex absolute items-center justify-center"
              >
                <ArrowRightLeft className="w-5 h-5 text-foreground/50" />
              </motion.div>
            </div>

            {/* Node 2: Backend/Logic */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-4 z-20"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-foreground flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.1)] dark:shadow-[0_0_30px_rgba(255,255,255,0.2)] relative">
                <Cpu className="w-10 h-10 text-background" />
                {/* Rotating ring */}
                <motion.div 
                  animate={{ rotate: 360 }} 
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-10px] border border-dashed border-foreground/30 rounded-full"
                />
              </div>
              <span className="text-sm font-mono tracking-widest uppercase text-foreground">Core Logic Engine</span>
            </motion.div>

            {/* Connection 2 */}
            <div className="flex-1 flex items-center justify-center relative w-full h-16 md:h-auto">
              <motion.div className="absolute h-px w-full bg-border/50 hidden md:block" />
              <motion.div className="absolute w-px h-full bg-border/50 block md:hidden" />
              <motion.div 
                animate={{ x: [0, 100, 0], opacity: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
                className="hidden md:flex absolute items-center justify-center"
              >
                <ArrowRightLeft className="w-5 h-5 text-foreground/50" />
              </motion.div>
            </div>

            {/* Node 3 & 4 Stacked: LLMs and DB */}
            <div className="flex flex-col gap-8 md:gap-16 z-20">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <div className="w-16 h-16 rounded-2xl bg-background/50 backdrop-blur-md border border-border flex items-center justify-center">
                  <BrainCircuit className="w-7 h-7 text-foreground" />
                </div>
                <span className="text-sm font-mono tracking-widest uppercase text-muted-foreground hidden md:block">LLM APIs</span>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <div className="w-16 h-16 rounded-2xl bg-background/50 backdrop-blur-md border border-border flex items-center justify-center">
                  <Database className="w-7 h-7 text-foreground" />
                </div>
                <span className="text-sm font-mono tracking-widest uppercase text-muted-foreground hidden md:block">Vector DB</span>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
