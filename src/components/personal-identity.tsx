"use client";

import { motion } from "framer-motion";
import { User, Lightbulb, Target, Sparkles, AlertCircle } from "lucide-react";

export function PersonalIdentity() {
  return (
    <section id="about" className="relative py-32 bg-background border-t border-border/50">
      
      {/* Cinematic ambient glow */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-foreground/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 relative sticky top-32"
          >
            <div className="aspect-[3/4] w-full rounded-[2rem] overflow-hidden liquid-glass relative border border-border/50 group shadow-2xl">
              {/* Premium Portrait Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-foreground/5">
                <User className="w-24 h-24 text-foreground/20 group-hover:text-foreground/40 transition-colors duration-700" />
                <span className="text-xs font-mono tracking-widest uppercase text-foreground/30 mt-6 block">Portrait Placeholder</span>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 z-20">
                <div className="glass-card px-6 py-4 rounded-2xl border border-border/50 inline-block backdrop-blur-xl">
                  <span className="text-2xl font-bold block text-foreground tracking-tight">Jainam</span>
                  <span className="text-sm font-medium text-muted-foreground">Founder & Product Builder</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative & Lessons */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-6 block border-b border-border/50 pb-4 inline-block">The Architect</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-10 leading-tight">
              I don't just write code. <br/>
              <span className="text-muted-foreground">I build businesses.</span>
            </h2>

            <div className="space-y-8 text-lg text-muted-foreground font-medium leading-relaxed mb-16">
              <p>
                My obsession isn't with syntax. It's with <strong className="text-foreground font-semibold">human utility</strong>. Early in my career, I spent months perfecting architectures for products that nobody ended up using. That was a harsh lesson in the reality of software engineering.
              </p>
              <p>
                I realized that brilliant code without distribution, or an elegant database without a compelling user experience, is ultimately worthless. 
              </p>
            </div>

            {/* The Lessons - Humanized Grid */}
            <div className="space-y-6">
              
              {/* Insight 1 */}
              <div className="p-8 rounded-[2rem] glass-card border border-border/50 hover:bg-foreground/5 transition-colors group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-foreground/20 group-hover:bg-foreground transition-colors" />
                <div className="flex items-start gap-6">
                  <div className="mt-1">
                    <AlertCircle className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">The Mistake That Changed Me</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Building in a vacuum. I used to think if the engineering was perfect, the product would succeed. I learned the hard way that 80% of product value is in the execution, the UI, and the go-to-market strategy. Now, I start with the problem, not the tech stack.
                    </p>
                  </div>
                </div>
              </div>

              {/* Insight 2 */}
              <div className="p-8 rounded-[2rem] glass-card border border-border/50 hover:bg-foreground/5 transition-colors group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-foreground/20 group-hover:bg-foreground transition-colors" />
                <div className="flex items-start gap-6">
                  <div className="mt-1">
                    <Target className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Execution Over Ideas</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Ideas are free. The friction to launch is the only thing that matters. My entire toolkit—Next.js, Supabase, Vercel—is optimized for one thing: turning a whiteboard concept into a scalable, revenue-generating product in days, not months.
                    </p>
                  </div>
                </div>
              </div>

              {/* Insight 3 */}
              <div className="p-8 rounded-[2rem] glass-card border border-border/50 hover:bg-foreground/5 transition-colors group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-foreground/20 group-hover:bg-foreground transition-colors" />
                <div className="flex items-start gap-6">
                  <div className="mt-1">
                    <Sparkles className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">The AI Paradigm Shift</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      When LLMs became viable, everything changed. AI isn't just a "feature" I tack onto apps—it's a fundamental architectural layer. It allows me to build workflows that actively reason, classify intent, and act autonomously. It's no longer just software; it's intelligence.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
