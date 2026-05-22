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

/* ─── Social icon map ───────────────────────────────── */
const socialIconMap: Record<string, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
};

/* ─── CTA data ──────────────────────────────────────── */
const ctaCards = [
  {
    label: "Chat on WhatsApp",
    href: "https://wa.me/919426180574",
    icon: MessageCircle,
    gradient: "from-green-500 to-emerald-600",
    glowColor: "green",
    hoverBorder: "hover:border-green-500/30",
    ringColor: "ring-green-500/20",
  },
  {
    label: "Book a Call",
    href: "tel:+919426180574",
    icon: Phone,
    gradient: "from-blue-500 to-cyan-500",
    glowColor: "blue",
    hoverBorder: "hover:border-blue-500/30",
    ringColor: "ring-blue-500/20",
  },
  {
    label: "Send Email",
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    gradient: "from-purple-500 to-violet-600",
    glowColor: "purple",
    hoverBorder: "hover:border-purple-500/30",
    ringColor: "ring-purple-500/20",
  },
] as const;

/* ─── Animation variants ────────────────────────────── */
const cardVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden py-24 sm:py-32 lg:py-40"
    >
      {/* ── Animated mesh gradient background ──────── */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-1/2 left-1/2 h-[1000px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-500/8 via-violet-500/6 to-purple-500/8 blur-[100px] dark:from-blue-500/12 dark:via-violet-500/10 dark:to-purple-500/12" />
        <div className="absolute -bottom-1/4 -left-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-green-500/5 via-emerald-500/5 to-cyan-500/5 blur-[120px] dark:from-green-500/8 dark:via-emerald-500/8 dark:to-cyan-500/8" />
        <div className="absolute top-1/3 -right-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-bl from-purple-500/5 via-pink-500/5 to-rose-500/5 blur-[120px] dark:from-purple-500/8 dark:via-pink-500/8 dark:to-rose-500/8" />
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black_40%,transparent_100%)] dark:bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        {/* ── Headline ──────────────────────────────── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mb-14 text-center lg:mb-20"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Let&apos;s build something
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500 bg-clip-text text-transparent">
              exceptional.
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-5 max-w-lg text-base text-muted-foreground sm:text-lg"
          >
            Have a project in mind? Let&apos;s create something remarkable
            together.
          </motion.p>
        </motion.div>

        {/* ── CTA cards ─────────────────────────────── */}
        <div className="mx-auto mb-16 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3 lg:mb-20">
          {ctaCards.map((cta, i) => (
            <motion.a
              key={cta.label}
              href={cta.href}
              target={cta.href.startsWith("http") ? "_blank" : undefined}
              rel={cta.href.startsWith("http") ? "noopener noreferrer" : undefined}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className={`group relative flex flex-col items-center gap-3 rounded-2xl border border-border/50 bg-card/50 p-6 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${cta.hoverBorder} dark:bg-white/[0.03] dark:hover:bg-white/[0.05]`}
            >
              {/* Glow backdrop */}
              <div
                className={`pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              >
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${cta.gradient} opacity-[0.04]`}
                />
              </div>

              {/* Icon circle */}
              <div
                className={`relative flex size-12 items-center justify-center rounded-xl bg-gradient-to-br ${cta.gradient} shadow-lg transition-transform duration-300 group-hover:scale-110`}
              >
                <cta.icon className="size-5 text-white" />
              </div>

              <span className="relative text-sm font-semibold tracking-tight">
                {cta.label}
              </span>

              <ArrowUpRight className="absolute top-4 right-4 size-4 text-muted-foreground/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
            </motion.a>
          ))}
        </div>

        {/* ── Contact form ──────────────────────────── */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mx-auto max-w-2xl"
        >
          <ContactForm />
        </motion.div>

        {/* ── Social links ──────────────────────────── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mt-16 flex items-center justify-center gap-4"
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
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group flex size-11 items-center justify-center rounded-xl border border-border/50 bg-card/50 backdrop-blur-xl transition-colors duration-300 hover:border-blue-500/25 hover:bg-blue-500/5 dark:bg-white/[0.03] dark:hover:bg-white/[0.06]"
                aria-label={link.label}
              >
                <Icon className="size-[18px] text-muted-foreground transition-colors group-hover:text-foreground" />
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Contact Form sub-component ─────────────────────── */
function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    // UI-only — no backend
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-xl sm:p-8 dark:bg-white/[0.03]"
    >
      <h3 className="mb-6 text-lg font-semibold tracking-tight">
        Send a message
      </h3>

      <div className="grid gap-4 sm:grid-cols-2">
        {/* Name */}
        <div className="space-y-2">
          <label
            htmlFor="contact-name"
            className="text-sm font-medium text-foreground/80"
          >
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            required
            placeholder="Your name"
            className="flex h-10 w-full rounded-lg border border-border/60 bg-background/50 px-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-blue-500/40 focus:ring-2 focus:ring-blue-500/10 dark:bg-white/[0.04] dark:focus:bg-white/[0.06]"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label
            htmlFor="contact-email"
            className="text-sm font-medium text-foreground/80"
          >
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            required
            placeholder="you@example.com"
            className="flex h-10 w-full rounded-lg border border-border/60 bg-background/50 px-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-blue-500/40 focus:ring-2 focus:ring-blue-500/10 dark:bg-white/[0.04] dark:focus:bg-white/[0.06]"
          />
        </div>
      </div>

      {/* Message */}
      <div className="mt-4 space-y-2">
        <label
          htmlFor="contact-message"
          className="text-sm font-medium text-foreground/80"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          required
          rows={4}
          placeholder="Tell me about your project..."
          className="flex w-full resize-none rounded-lg border border-border/60 bg-background/50 px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-blue-500/40 focus:ring-2 focus:ring-blue-500/10 dark:bg-white/[0.04] dark:focus:bg-white/[0.06]"
        />
      </div>

      {/* Submit */}
      <motion.button
        type="submit"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        disabled={submitted}
        className="mt-6 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 disabled:opacity-70"
      >
        {submitted ? (
          <>
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="inline-block"
            >
              ✓
            </motion.span>
            Message sent!
          </>
        ) : (
          <>
            <Send className="size-4" />
            Send message
          </>
        )}
      </motion.button>
    </form>
  );
}
