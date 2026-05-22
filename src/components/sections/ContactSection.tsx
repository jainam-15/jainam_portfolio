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
  },
  {
    label: "Phone",
    href: "tel:+919426180574",
    icon: Phone,
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
] as const;

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden py-32 md:py-48 border-t border-border bg-background"
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-500/[0.02] to-purple-500/[0.02] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6">
        
        {/* Section Heading */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mb-24 text-center"
        >
          <motion.div
            variants={fadeInUp}
            className="text-[10px] tracking-[0.2em] text-muted-foreground/50 font-bold uppercase mb-3"
          >
            Connection
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl uppercase"
          >
            Get In Touch
          </motion.h2>
        </motion.div>

        {/* CTA Contact Links */}
        <div className="mx-auto mb-16 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
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
                className="group relative flex items-center justify-between rounded-2xl border border-white/[0.04] bg-white/[0.01] p-6 transition-all duration-300 hover:border-foreground/[0.08]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex size-10 items-center justify-center rounded-lg border border-white/[0.05] bg-white/[0.02] text-muted-foreground group-hover:text-foreground transition-colors">
                    <Icon className="size-4" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">
                    {cta.label}
                  </span>
                </div>
                <ArrowUpRight className="size-4 text-muted-foreground/45 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </motion.a>
            );
          })}
        </div>

        {/* Contact Form */}
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
          className="mt-24 flex items-center justify-center gap-4 border-t border-border/40 pt-8"
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
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="group flex size-10 items-center justify-center rounded-full border border-white/[0.05] bg-white/[0.01] hover:border-foreground/[0.1] hover:bg-white/[0.03] transition-all duration-300"
                aria-label={link.label}
              >
                <Icon className="size-4 text-muted-foreground transition-colors group-hover:text-foreground" />
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

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
      className="group relative rounded-2xl border border-white/[0.04] bg-white/[0.01] p-8 md:p-10 backdrop-blur-md"
    >
      <div className="space-y-6">
        
        {/* Name Input */}
        <div className="space-y-2 text-left">
          <label htmlFor="contact-name" className="text-xs font-semibold tracking-wider text-muted-foreground/70 uppercase">
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            required
            placeholder="John Doe"
            value={formState.name}
            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
            className="flex h-12 w-full rounded-lg border border-white/[0.05] bg-white/[0.02] px-4 font-sans text-sm text-foreground placeholder:text-muted-foreground/30 focus:border-white/20 focus:bg-white/[0.04] outline-none transition-all"
          />
        </div>

        {/* Email Input */}
        <div className="space-y-2 text-left">
          <label htmlFor="contact-email" className="text-xs font-semibold tracking-wider text-muted-foreground/70 uppercase">
            Email Address
          </label>
          <input
            id="contact-email"
            type="email"
            required
            placeholder="john@example.com"
            value={formState.email}
            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
            className="flex h-12 w-full rounded-lg border border-white/[0.05] bg-white/[0.02] px-4 font-sans text-sm text-foreground placeholder:text-muted-foreground/30 focus:border-white/20 focus:bg-white/[0.04] outline-none transition-all"
          />
        </div>

        {/* Message Input */}
        <div className="space-y-2 text-left">
          <label htmlFor="contact-message" className="text-xs font-semibold tracking-wider text-muted-foreground/70 uppercase">
            Message
          </label>
          <textarea
            id="contact-message"
            required
            rows={5}
            placeholder="Tell me about your project..."
            value={formState.message}
            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
            className="flex w-full resize-none rounded-lg border border-white/[0.05] bg-white/[0.02] p-4 font-sans text-sm text-foreground placeholder:text-muted-foreground/30 focus:border-white/20 focus:bg-white/[0.04] outline-none transition-all"
          />
        </div>

      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        disabled={submitted}
        className="mt-8 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-foreground text-background font-sans text-sm font-semibold tracking-wide hover:opacity-90 disabled:opacity-50 transition-all select-none"
      >
        {submitted ? (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-semibold"
          >
            Message Sent Successfully
          </motion.span>
        ) : (
          <>
            <Send className="size-4" />
            <span>Send Message</span>
          </>
        )}
      </motion.button>
    </form>
  );
}
