"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-foreground text-background border-t border-foreground overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-80px" }}
            className="lg:sticky lg:top-28"
          >
            <p className="text-xs font-mono tracking-widest uppercase text-background/50 mb-8">
              Let&apos;s talk
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight mb-6">
              Have an idea?
              <br />
              <span className="text-background/40">Let&apos;s build it.</span>
            </h2>
            <p className="text-base text-background/60 leading-relaxed">
              I&apos;m open to interesting projects, collaborations, and conversations.
              Reach out — I respond to every message.
            </p>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            {status === "success" ? (
              <div className="py-16 text-center">
                <p className="text-2xl font-bold tracking-tight text-background mb-3">
                  Message sent.
                </p>
                <p className="text-background/60 mb-8 text-sm">
                  I&apos;ll get back to you shortly.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-sm text-background/50 hover:text-background transition-colors underline underline-offset-4"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-[10px] font-mono tracking-widest uppercase text-background/40"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full bg-transparent border-b border-background/20 pb-2.5 focus:outline-none focus:border-background/60 transition-colors placeholder:text-background/25 text-background text-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-[10px] font-mono tracking-widest uppercase text-background/40"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full bg-transparent border-b border-background/20 pb-2.5 focus:outline-none focus:border-background/60 transition-colors placeholder:text-background/25 text-background text-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-[10px] font-mono tracking-widest uppercase text-background/40"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full bg-transparent border-b border-background/20 pb-2.5 focus:outline-none focus:border-background/60 transition-colors placeholder:text-background/25 text-background text-sm resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-background text-foreground font-semibold rounded-full px-6 py-3.5 flex items-center justify-center gap-2.5 hover:opacity-90 transition-opacity disabled:opacity-40 text-sm mt-2"
                >
                  {status === "loading" ? "Sending..." : "Send message"}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
