"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, LayoutTemplate, Users, Network, Code2 } from "lucide-react";

const obsessions = [
  { icon: Brain, title: "Autonomous Agents", description: "How can software move from 'tools we use' to 'entities that act on our behalf'?" },
  { icon: Cpu, title: "Hyper-Automation", description: "Eliminating the friction between human intent and digital execution." },
  { icon: Users, title: "Human Behavior", description: "Why people actually use products, vs why we think they do." },
  { icon: LayoutTemplate, title: "Cinematic Design", description: "The psychological impact of a perfect micro-interaction or a flawlessly rendered shadow." },
  { icon: Network, title: "Business Systems", description: "Software as a lever to multiply human output by 100x." },
  { icon: Code2, title: "Scalable Architectures", description: "Building foundations that don't crack when user 10,000 logs in." }
];

export function VisionObsessions() {
  return (
    <section className="relative py-32 bg-background overflow-hidden border-t border-border/50">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.03)_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05)_0%,transparent_50%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
          
          {/* Left Column: The Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col justify-center"
          >
            <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-6 block border-b border-border/50 pb-4 inline-block">The Bigger Picture</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-10 leading-tight">
              Software is <br/>
              <span className="text-muted-foreground">Digital Leverage.</span>
            </h2>

            <div className="space-y-6 text-xl text-muted-foreground font-medium leading-relaxed">
              <p>
                I am not building software for the sake of writing code. I am building systems because they are the ultimate form of leverage. 
              </p>
              <p>
                A well-architected AI workflow or a seamlessly designed application can automate the work of a dozen people, create new business models out of thin air, and solve problems at a scale that was previously impossible.
              </p>
              <p className="text-foreground font-bold">
                My vision is simple: to bridge the gap between human ambition and autonomous digital execution.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Obsessions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-foreground/5 p-8 md:p-12 rounded-[3rem] border border-border/50 relative overflow-hidden backdrop-blur-sm"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Brain className="w-32 h-32" />
            </div>

            <div className="relative z-10">
              <span className="text-xs font-mono tracking-widest uppercase text-foreground/50 mb-8 block">What Fascinates Me</span>
              <h3 className="text-3xl font-bold tracking-tight mb-12 text-foreground">Ideas I Can't Stop Thinking About</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                {obsessions.map((obs, idx) => {
                  const Icon = obs.icon;
                  return (
                    <div key={idx} className="group">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-10 h-10 rounded-full bg-background border border-border/50 flex items-center justify-center group-hover:scale-110 group-hover:border-foreground/50 transition-all duration-300">
                          <Icon className="w-5 h-5 text-foreground/70 group-hover:text-foreground transition-colors" />
                        </div>
                        <h4 className="text-lg font-bold text-foreground group-hover:text-foreground transition-colors">{obs.title}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {obs.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
