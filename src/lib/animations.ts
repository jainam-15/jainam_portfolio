// ─────────────────────────────────────────────
// Framer Motion Animation Presets
// ─────────────────────────────────────────────

import { type Variants } from "framer-motion";

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

export const slideInFromBottom: Variants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export const letterReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const blurIn: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const magneticHover = {
  rest: { x: 0, y: 0 },
  hover: { scale: 1.05, transition: { duration: 0.3, ease: "easeOut" } },
};

export const glowPulse: Variants = {
  initial: { boxShadow: "0 0 0 0 rgba(99, 102, 241, 0)" },
  animate: {
    boxShadow: [
      "0 0 0 0 rgba(99, 102, 241, 0)",
      "0 0 20px 4px rgba(99, 102, 241, 0.3)",
      "0 0 0 0 rgba(99, 102, 241, 0)",
    ],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
};

// Viewport settings for scroll-triggered animations
export const defaultViewport = {
  once: true,
  margin: "-100px",
};

export const earlyViewport = {
  once: true,
  margin: "-50px",
};
