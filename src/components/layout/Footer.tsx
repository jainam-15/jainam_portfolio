"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, ArrowUpRight, Heart } from "lucide-react";
import { navItems, socialLinks, siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { fadeInUp, staggerContainer } from "@/lib/animations";

// ─────────────────────────────────────────────
// Icon Map
// ─────────────────────────────────────────────

const socialIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
};

// ─────────────────────────────────────────────
// Animation Variants
// ─────────────────────────────────────────────

const footerLinkVariants = {
  rest: { x: 0 },
  hover: {
    x: 2,
    transition: { duration: 0.2, ease: "easeOut" },
  },
} as const;

const socialIconVariants = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.15,
    y: -2,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 15,
    },
  },
} as const;

const arrowVariants = {
  rest: { opacity: 0, x: -4, y: 4 },
  hover: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.2, ease: "easeOut" },
  },
} as const;

// ─────────────────────────────────────────────
// Footer Component
// ─────────────────────────────────────────────

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border/40">
      {/* Subtle top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="mx-auto max-w-6xl px-6 pt-16 pb-8">
        {/* ── Main Footer Grid ─────────────────── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8"
        >
          {/* Brand Column */}
          <motion.div variants={fadeInUp} className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 shadow-lg shadow-blue-500/20">
                <span className="text-white font-bold text-sm">J</span>
              </div>
              <span className="text-lg font-semibold tracking-tight text-foreground">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              {siteConfig.description}
            </p>
          </motion.div>

          {/* Navigation Column */}
          <motion.div variants={fadeInUp} className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <motion.button
                    onClick={() => handleNavClick(item.href)}
                    className="group flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                  >
                    <motion.span variants={footerLinkVariants}>
                      {item.label}
                    </motion.span>
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect Column */}
          <motion.div variants={fadeInUp} className="md:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-4">
              Connect
            </h3>
            <ul className="space-y-2.5">
              {socialLinks.map((link) => {
                const IconComponent = socialIconMap[link.icon];
                return (
                  <li key={link.label}>
                    <motion.a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                    >
                      {IconComponent && (
                        <IconComponent className="w-3.5 h-3.5" />
                      )}
                      <motion.span variants={footerLinkVariants}>
                        {link.label}
                      </motion.span>
                      <motion.span variants={arrowVariants}>
                        <ArrowUpRight className="w-3 h-3" />
                      </motion.span>
                    </motion.a>
                  </li>
                );
              })}
            </ul>

            {/* Email */}
            <div className="mt-6">
              <motion.a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                whileHover={{ x: 2 }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {siteConfig.email}
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Bottom Bar ───────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 pt-6 border-t border-border/30"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-xs text-muted-foreground/50">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>

            {/* Built by */}
            <p className="flex items-center gap-1.5 text-xs text-muted-foreground/50">
              Designed & Built with
              <Heart className="w-3 h-3 text-rose-500/70 fill-rose-500/70" />
              by
              <span className="text-muted-foreground/70 font-medium">
                {siteConfig.name}
              </span>
            </p>

            {/* Social Icons Row — compact */}
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => {
                const IconComponent = socialIconMap[link.icon];
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "flex items-center justify-center w-8 h-8 rounded-full",
                      "text-muted-foreground/50 hover:text-foreground",
                      "bg-foreground/[0.03] hover:bg-foreground/[0.07]",
                      "transition-colors duration-200"
                    )}
                    variants={socialIconVariants}
                    initial="rest"
                    whileHover="hover"
                    aria-label={link.label}
                  >
                    {IconComponent && (
                      <IconComponent className="w-3.5 h-3.5" />
                    )}
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
