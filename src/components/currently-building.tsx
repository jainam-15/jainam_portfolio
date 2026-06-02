"use client";

import { motion } from "framer-motion";
import { Activity, ArrowRight, PlayCircle } from "lucide-react";

const initiatives = [
  {
    name: "Intent AI Platform",
    mission: "Democratizing full-stack software creation through natural language.",
    stage: "Private Alpha",
    stageColor: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    vision: "To allow anyone with domain expertise to generate, deploy, and scale complex web applications without writing boilerplate code."
  },
  {
    name: "Autonomous Lead Workflows",
    mission: "Removing human friction from B2B sales pipelines.",
    stage: "Active Deployment",
    stageColor: "text-green-400 bg-green-400/10 border-green-400/20",
    vision: "Creating a seamless orchestrator that not only captures leads but autonomously negotiates and schedules based on intent signals."
  }
];

export function CurrentlyBuilding() {
  return (
    <section className="relative py-32 bg-background border-t border-border/50 overflow-hidden">
      
      {/* Background Pulse */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-foreground/5 rounded-full blur-[150px] pointer-events-none translate-x-1/3 -translate-y-1/3" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-foreground/5 text-sm font-mono tracking-widest uppercase text-foreground mb-6 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Building In Public
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
            Current <span className="text-muted-foreground">Initiatives.</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {initiatives.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * idx, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative glass-card p-8 md:p-12 rounded-[2rem] border border-border/50 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Hover Ambient Light */}
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-10">
                
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">{item.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${item.stageColor} shadow-sm whitespace-nowrap`}>
                      {item.stage}
                    </span>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-3 flex items-center gap-2">
                      <PlayCircle className="w-4 h-4" /> The Mission
                    </h4>
                    <p className="text-xl text-foreground font-medium leading-relaxed">
                      {item.mission}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-3 flex items-center gap-2">
                      <ArrowRight className="w-4 h-4" /> Future Vision
                    </h4>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {item.vision}
                    </p>
                  </div>
                </div>

                {/* Visual Momentum Indicator */}
                <div className="hidden md:flex flex-col items-center justify-center min-w-[200px]">
                  <div className="w-24 h-24 rounded-full border border-border/50 bg-background/50 flex items-center justify-center relative shadow-inner">
                    <Activity className="w-10 h-10 text-foreground opacity-50" />
                    {/* Orbiting progress element */}
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-[-2px] rounded-full border-[3px] border-transparent border-t-foreground/30 border-r-foreground/10"
                    />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground mt-6 font-mono">Status: Active</span>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
