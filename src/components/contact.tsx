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
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Let&apos;s build the <span className="text-gradient">future.</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Whether it&apos;s a freelance project, a startup idea, or a full-time role — let&apos;s make it happen.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="glass-card p-8 md:p-12 rounded-3xl"
          >
            {status === "success" ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                <p className="text-muted-foreground">I&apos;ll get back to you as soon as possible.</p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="mt-8 px-6 py-3 rounded-full border border-border hover:bg-foreground/5 transition-colors"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground/80">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all hover-target"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground/80">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all hover-target"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground/80">Message</label>
                  <textarea 
                    id="message" 
                    required
                    rows={5}
                    className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all hover-target resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="w-full bg-foreground text-background font-medium rounded-xl px-8 py-4 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity hover-target disabled:opacity-50"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
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
