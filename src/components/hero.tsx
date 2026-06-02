"use client";

import { motion } from "framer-motion";
import { ArrowDown, BrainCircuit } from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center justify-center h-full pt-20">
        
        {/* Signature Moment: The Neural Sphere */}
        <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] mb-12 flex items-center justify-center pointer-events-none">
          {mounted && (
            <>
              {/* Outer Glow */}
              <motion.div 
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-foreground/10 rounded-full blur-[80px]"
              />

              {/* Orbital Ring 1 */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute w-[90%] h-[90%] border border-dashed border-foreground/20 rounded-full"
              />

              {/* Orbital Ring 2 (Counter-rotate) */}
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute w-[70%] h-[70%] border border-foreground/10 rounded-full flex items-center justify-center"
              >
                {/* Floating Nodes on Ring */}
                {[0, 1, 2].map((i) => (
                  <motion.div 
                    key={`node-${i}`}
                    className="absolute w-2 h-2 bg-foreground rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                    style={{ 
                      top: '50%', 
                      left: '50%', 
                      marginTop: '-4px', 
                      marginLeft: '-4px',
                      transform: `rotate(${i * 120}deg) translateX(${150}px)` 
                    }}
                  />
                ))}
              </motion.div>

              {/* The Core */}
              <div className="relative z-10 w-32 h-32 md:w-40 md:h-40 rounded-full bg-background border border-border/50 flex items-center justify-center shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden liquid-glass">
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-br from-foreground/20 to-transparent"
                />
                <BrainCircuit className="w-12 h-12 md:w-16 md:h-16 text-foreground relative z-20" />
              </div>
            </>
          )}
        </div>

        {/* Massive Editorial Typography */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-8 block">Jainam — AI Product Builder</span>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 leading-[0.9]">
            Engineering <br/>
            <span className="text-foreground/40 text-gradient">Intelligence.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed mb-12">
            I don't just write code. I architect scalable systems, automate complex workflows, and build the future of software.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#about" className="group flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background font-bold rounded-full text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl pointer-events-auto">
              Enter The Mind
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
