"use client";

import { motion } from "framer-motion";
import { Send, ArrowRight } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
    }, 2000);
  };

  return (
    <section id="contact" className="relative py-40 bg-foreground border-t border-border/50 overflow-hidden text-background">
      
      {/* Intense Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-full bg-background/5 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: Emotional Close */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="text-xs font-mono tracking-widest uppercase text-background/50 mb-8 block">The Next Step</span>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
              Let's Build <br/>
              <span className="text-background/40">Something</span> <br/>
              Meaningful.
            </h2>
            <p className="text-xl md:text-2xl text-background/70 leading-relaxed font-medium">
              If you have an idea worth building, a complex system to architect, or a team that needs a founder-minded engineer—I'm ready.
            </p>
          </motion.div>

          {/* Right: Stark, minimal form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="p-8 md:p-12 rounded-[2rem] bg-background/5 backdrop-blur-2xl border border-background/10 relative overflow-hidden shadow-2xl"
          >
            {status === "success" ? (
              <div className="text-center py-16 relative z-10">
                <div className="w-20 h-20 bg-green-500/10 border border-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Send className="w-8 h-8 ml-1" />
                </div>
                <h3 className="text-4xl font-bold mb-4 tracking-tight text-background">Transmission Sent</h3>
                <p className="text-background/60 text-lg">I will process your message and respond shortly.</p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="mt-10 px-8 py-4 rounded-full border border-background/20 bg-background/5 hover:bg-background/10 transition-colors text-sm font-semibold text-background"
                >
                  Initiate another sequence
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3 group">
                    <label htmlFor="name" className="text-xs font-mono tracking-widest uppercase text-background/50 group-focus-within:text-background transition-colors">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full bg-transparent border-b-2 border-background/20 px-0 py-3 focus:outline-none focus:border-background transition-colors placeholder:text-background/30 text-background text-lg"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-3 group">
                    <label htmlFor="email" className="text-xs font-mono tracking-widest uppercase text-background/50 group-focus-within:text-background transition-colors">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full bg-transparent border-b-2 border-background/20 px-0 py-3 focus:outline-none focus:border-background transition-colors placeholder:text-background/30 text-background text-lg"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-3 group">
                  <label htmlFor="message" className="text-xs font-mono tracking-widest uppercase text-background/50 group-focus-within:text-background transition-colors">Message</label>
                  <textarea 
                    id="message" 
                    required
                    rows={4}
                    className="w-full bg-transparent border-b-2 border-background/20 px-0 py-3 focus:outline-none focus:border-background transition-colors placeholder:text-background/30 text-background text-lg resize-none"
                    placeholder="Tell me about your vision..."
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="w-full bg-background text-foreground font-bold rounded-2xl px-8 py-5 flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 disabled:hover:scale-100 shadow-xl mt-8 text-lg"
                >
                  {status === "loading" ? "Processing..." : "Initiate Contact"}
                  <ArrowRight className="w-6 h-6" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
