"use client";

import { motion } from "framer-motion";
import { Send, ArrowRight } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    // Placeholder for actual form submission logic using resend
    setTimeout(() => {
      setStatus("success");
    }, 2000);
  };

  return (
    <section id="contact" className="relative py-32 bg-background border-t border-border/50 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-foreground/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-6 block">Engage</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight">
              Let&apos;s build the <span className="text-foreground text-gradient">future.</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have an ambitious project in mind? Whether it&apos;s a startup idea, a complex technical challenge, or a full-time role—I&apos;m ready to architect the solution.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="glass-card p-8 md:p-12 rounded-[2rem] border border-border/50 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent pointer-events-none" />
            
            {status === "success" ? (
              <div className="text-center py-16 relative z-10">
                <div className="w-20 h-20 bg-green-500/10 border border-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-8 h-8 ml-1" />
                </div>
                <h3 className="text-3xl font-bold mb-4 tracking-tight">Transmission Sent</h3>
                <p className="text-muted-foreground">I will process your message and respond shortly.</p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="mt-8 px-6 py-3 rounded-full border border-border/50 bg-background/50 hover:bg-foreground/5 transition-colors text-sm font-medium"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 group">
                    <label htmlFor="name" className="text-xs font-mono tracking-widest uppercase text-muted-foreground group-focus-within:text-foreground transition-colors">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full bg-background/30 border-b border-border/50 px-0 py-3 focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/50 text-foreground"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2 group">
                    <label htmlFor="email" className="text-xs font-mono tracking-widest uppercase text-muted-foreground group-focus-within:text-foreground transition-colors">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full bg-background/30 border-b border-border/50 px-0 py-3 focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/50 text-foreground"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2 group">
                  <label htmlFor="message" className="text-xs font-mono tracking-widest uppercase text-muted-foreground group-focus-within:text-foreground transition-colors">Message</label>
                  <textarea 
                    id="message" 
                    required
                    rows={4}
                    className="w-full bg-background/30 border-b border-border/50 px-0 py-3 focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/50 text-foreground resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="w-full bg-foreground text-background font-semibold rounded-xl px-8 py-4 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 disabled:hover:scale-100 shadow-xl mt-4"
                >
                  {status === "loading" ? "Processing..." : "Initiate Contact"}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
