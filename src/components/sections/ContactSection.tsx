"use client";

import { useRef, useState, type FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import {
  MessageCircle,
  Phone,
  Mail,
  Send,
  Github,
  Linkedin,
  Instagram,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { socialLinks, siteConfig } from "@/lib/constants";
import {
  fadeInUp,
  staggerContainer,
  defaultViewport,
  scaleIn,
} from "@/lib/animations";
import { cn } from "@/lib/utils";

const socialIconMap: Record<string, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
};

const ctaCards = [
  {
    label: "WhatsApp",
    href: "https://wa.me/919426180574",
    icon: MessageCircle,
    hoverBorder: "hover:border-green-500/20",
    sysKey: "WA_COMM // CHAT",
  },
  {
    label: "Phone Dial",
    href: "tel:+919426180574",
    icon: Phone,
    hoverBorder: "hover:border-blue-500/20",
    sysKey: "DIAL_COMM // VOICE",
  },
  {
    label: "Email Box",
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    hoverBorder: "hover:border-purple-500/20",
    sysKey: "SMTP_COMM // SEND",
  },
] as const;

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden py-36 sm:py-44 border-t border-white/5"
    >
      {/* Blueprint grid underlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 blueprint-grid opacity-10" />

      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-1/2 left-1/2 h-[1000px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-500/5 via-violet-500/3 to-purple-500/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mb-24 text-left border-l-2 border-blue-500/80 pl-6"
        >
          <motion.div
            variants={fadeInUp}
            className="font-mono text-xs tracking-[0.3em] text-blue-500/80 font-bold mb-2"
          >
            {"// COMMUNICATION_HUB // INTAKE"}
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-extrabold tracking-tighter text-foreground sm:text-5xl lg:text-6xl uppercase"
          >
            {"Let's Collaborate"}
          </motion.h2>
        </motion.div>

        {/* CTA Telemetry Cards */}
        <div className="mx-auto mb-20 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          {ctaCards.map((cta, i) => {
            const Icon = cta.icon;
            return (
              <motion.a
                key={cta.label}
                href={cta.href}
                target={cta.href.startsWith("http") ? "_blank" : undefined}
                rel={cta.href.startsWith("http") ? "noopener noreferrer" : undefined}
                custom={i}
                variants={fadeInUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className={cn(
                  "group relative flex flex-col items-start gap-4 rounded-lg border border-white/5 bg-black/40 p-5 text-left backdrop-blur-xl transition-all duration-300",
                  cta.hoverBorder
                )}
              >
                {/* CAD Crosshairs */}
                <div className="hud-crosshair hud-crosshair-tl opacity-40 group-hover:opacity-100" />
                <div className="hud-crosshair hud-crosshair-br opacity-40 group-hover:opacity-100" />

                {/* Telemetry label */}
                <span className="font-mono text-[8px] tracking-widest text-muted-foreground/35 select-none">
                  {cta.sysKey}
                </span>

                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded border border-white/5 bg-white/5">
                    <Icon className="size-4 text-blue-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-sm font-mono tracking-wider text-foreground">
                    {cta.label.toUpperCase()}
                  </span>
                </div>

                <ArrowUpRight className="absolute top-4 right-4 size-3 text-muted-foreground/35 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </motion.a>
            );
          })}
        </div>

        {/* Contact Intake Form - CLI Prompt layout */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mx-auto max-w-2xl"
        >
          <ContactForm />
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mt-20 flex items-center justify-center gap-4 border-t border-white/5 pt-8"
        >
          {socialLinks.map((link) => {
            const Icon = socialIconMap[link.icon] ?? Github;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInUp}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group flex size-10 items-center justify-center rounded border border-white/5 bg-black/40 hover:bg-white/5 transition-colors duration-300"
                aria-label={link.label}
              >
                <Icon className="size-[16px] text-muted-foreground transition-colors group-hover:text-white" />
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Contact Form Component (CLI command layout)
// ─────────────────────────────────────────────
function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    // UI-only submission mock
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="group relative rounded-lg border border-white/5 bg-black/45 p-6 backdrop-blur-xl sm:p-8"
    >
      {/* CAD Crosshairs */}
      <div className="hud-crosshair hud-crosshair-tl opacity-60" />
      <div className="hud-crosshair hud-crosshair-tr opacity-60" />
      <div className="hud-crosshair hud-crosshair-bl opacity-60" />
      <div className="hud-crosshair hud-crosshair-br opacity-60" />

      {/* Terminal Title Bar */}
      <div className="flex justify-between items-center border-b border-white/5 pb-2 mb-6 font-mono text-[9px] tracking-widest text-muted-foreground/40 select-none">
        <span>{"SYSTEM_INBOX // INTENT_SHELL // ONLINE"}</span>
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
          SECURE_TLS
        </span>
      </div>

      <div className="space-y-6">
        
        {/* Name Prompt Input */}
        <div className="font-mono space-y-1 text-left">
          <label htmlFor="contact-name" className="text-xs text-blue-400">
            guest@jainam_shah:~$ enter --name:
          </label>
          <input
            id="contact-name"
            type="text"
            required
            placeholder="Your name..."
            value={formState.name}
            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
            className="flex h-10 w-full rounded border border-white/5 bg-white/[0.02] px-3 font-mono text-xs text-foreground placeholder:text-muted-foreground/30 focus:border-blue-500/30 focus:bg-white/[0.04] outline-none transition-all"
          />
        </div>

        {/* Email Prompt Input */}
        <div className="font-mono space-y-1 text-left">
          <label htmlFor="contact-email" className="text-xs text-blue-400">
            guest@jainam_shah:~$ enter --email:
          </label>
          <input
            id="contact-email"
            type="email"
            required
            placeholder="you@example.com..."
            value={formState.email}
            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
            className="flex h-10 w-full rounded border border-white/5 bg-white/[0.02] px-3 font-mono text-xs text-foreground placeholder:text-muted-foreground/30 focus:border-blue-500/30 focus:bg-white/[0.04] outline-none transition-all"
          />
        </div>

        {/* Message Prompt Input */}
        <div className="font-mono space-y-1 text-left">
          <label htmlFor="contact-message" className="text-xs text-blue-400">
            guest@jainam_shah:~$ enter --message:
          </label>
          <textarea
            id="contact-message"
            required
            rows={4}
            placeholder="Describe your product requirements or ideas..."
            value={formState.message}
            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
            className="flex w-full resize-none rounded border border-white/5 bg-white/[0.02] p-3 font-mono text-xs text-foreground placeholder:text-muted-foreground/30 focus:border-blue-500/30 focus:bg-white/[0.04] outline-none transition-all"
          />
        </div>

      </div>

      {/* Submit execution block */}
      <motion.button
        type="submit"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        disabled={submitted}
        className="mt-8 flex h-11 w-full items-center justify-center gap-2 rounded border border-blue-500/30 bg-blue-500/10 font-mono text-xs text-blue-400 tracking-wider hover:bg-blue-500/15 disabled:opacity-50 transition-all select-none"
      >
        {submitted ? (
          <>
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="inline-block font-bold text-emerald-400"
            >
              [ ✓ TRANSMISSION_SUCCESS ]
            </motion.span>
          </>
        ) : (
          <>
            <Send className="size-3.5" />
            <span>guest@jainam_shah:~$ execute --transmit</span>
          </>
        )}
      </motion.button>
    </form>
  );
}
