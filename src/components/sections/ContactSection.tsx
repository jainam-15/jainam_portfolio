"use client";

import { useRef, useState, type FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import { socialLinks, siteConfig } from "@/lib/constants";

// Custom SVG Icons to avoid import issues or library dependencies

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const socialIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
};

export default function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative w-full overflow-hidden bg-black py-32 md:py-48 select-none"
    >
      <div className="mx-auto max-w-4xl px-6">
        
        {/* Section Header */}
        <div className="mb-24 text-left">
          <span className="text-[10px] tracking-[0.25em] text-zinc-600 font-bold uppercase block mb-3">
            Connection
          </span>
          <h2 className="text-[clamp(3rem,8vw,6.5rem)] font-black tracking-[-0.05em] leading-[0.9] text-white uppercase">
            Start Dialogue.
          </h2>
        </div>

        {/* Minimalist Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl"
        >
          <form onSubmit={handleSubmit} className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Name Field */}
              <div className="flex flex-col gap-3 text-left">
                <label htmlFor="contact-name" className="text-[10px] font-mono tracking-[0.25em] text-zinc-500 uppercase">
                  Name / Entity
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="Identify yourself..."
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-transparent border-b border-zinc-800 focus:border-white py-4 text-base md:text-lg text-white placeholder:text-zinc-700 outline-none transition-all duration-500 rounded-none font-sans"
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-3 text-left">
                <label htmlFor="contact-email" className="text-[10px] font-mono tracking-[0.25em] text-zinc-500 uppercase">
                  Return Path / Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="name@domain.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-transparent border-b border-zinc-800 focus:border-white py-4 text-base md:text-lg text-white placeholder:text-zinc-700 outline-none transition-all duration-500 rounded-none font-sans"
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="flex flex-col gap-3 text-left">
              <label htmlFor="contact-message" className="text-[10px] font-mono tracking-[0.25em] text-zinc-500 uppercase">
                The Intent / Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                placeholder="What are we building?"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full resize-none bg-transparent border-b border-zinc-800 focus:border-white py-4 text-base md:text-lg text-white placeholder:text-zinc-700 outline-none transition-all duration-500 rounded-none font-sans"
              />
            </div>

            {/* Submit Action */}
            <div className="pt-4 flex items-center justify-between gap-6 flex-wrap">
              <span className="text-[10px] tracking-widest text-zinc-600 font-mono select-none">
                {"// Routing directly to primary inbox."}
              </span>
              
              <button
                type="submit"
                disabled={submitted}
                className="group/btn inline-flex items-center gap-2 text-xs font-bold tracking-widest text-white hover:text-zinc-400 uppercase transition-colors duration-300 disabled:opacity-50"
              >
                <span>{submitted ? "Message Sent" : "Submit Intent →"}</span>
              </button>
            </div>
          </form>
        </motion.div>

        {/* Direct Channels & Social Row */}
        <div className="mt-32 pt-16 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-6 gap-y-2 text-xs text-zinc-500">
            <span className="select-none text-zinc-700">Direct:</span>
            <a href="https://wa.me/919426180574" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300 font-bold uppercase tracking-wider">
              WhatsApp
            </a>
            <span className="text-zinc-800 select-none">·</span>
            <a href="tel:+919426180574" className="hover:text-white transition-colors duration-300 font-bold uppercase tracking-wider">
              Call
            </a>
            <span className="text-zinc-800 select-none">·</span>
            <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors duration-300 font-bold uppercase tracking-wider">
              Email
            </a>
          </div>

          {/* Social Icons (typographic / minimal SVG) */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => {
              const Icon = socialIconMap[link.icon] ?? GithubIcon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-white transition-colors duration-300 p-1"
                  aria-label={link.label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

