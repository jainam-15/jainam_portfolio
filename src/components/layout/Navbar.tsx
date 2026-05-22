"use client";

import { useState, useEffect, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X, Command } from "lucide-react";
import { navItems, siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

// ─────────────────────────────────────────────
// Animation Variants
// ─────────────────────────────────────────────

const navbarVariants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 30,
    },
  },
  hidden: {
    y: -100,
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 35,
    },
  },
} as const;

const pillVariants = {
  initial: {
    width: "100%",
    borderRadius: "0px",
    backgroundColor: "rgba(0, 0, 0, 0)",
    backdropFilter: "blur(0px)",
  },
  scrolled: {
    width: "auto",
    borderRadius: "9999px",
    backdropFilter: "blur(20px)",
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 28,
      mass: 0.8,
    },
  },
} as const;

const linkHoverVariants = {
  rest: { width: 0, opacity: 0 },
  hover: {
    width: "100%",
    opacity: 1,
    transition: { duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] },
  },
} as const;

const mobileMenuVariants = {
  closed: {
    opacity: 0,
    transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  open: {
    opacity: 1,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
} as const;

const mobileNavItemVariants = {
  closed: { opacity: 0, x: -20 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1 + i * 0.06,
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

// ─────────────────────────────────────────────
// Navbar Component
// ─────────────────────────────────────────────

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // ── Scroll direction tracking ──────────────
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setIsScrolled(latest > 50);

    if (latest > 200) {
      setIsHidden(latest > previous);
    } else {
      setIsHidden(false);
    }
  });

  // ── Active section via IntersectionObserver ─
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navItems.forEach((item) => {
      const el = document.querySelector(item.href);
      if (el) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(item.href);
            }
          },
          { rootMargin: "-40% 0px -60% 0px" }
        );
        observer.observe(el);
        observers.push(observer);
      }
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // ── Lock body scroll when mobile menu is open ─
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const handleNavClick = useCallback(
    (href: string) => {
      setIsMobileOpen(false);
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    },
    []
  );

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  return (
    <>
      {/* ── Desktop Navbar ──────────────────────── */}
      <motion.header
        variants={navbarVariants}
        animate={isHidden ? "hidden" : "visible"}
        initial="visible"
        className="fixed top-0 left-0 right-0 z-50 hidden md:flex justify-center pointer-events-none"
      >
        <motion.nav
          className={cn(
            "pointer-events-auto mt-4 flex items-center gap-1 px-2 py-1.5 transition-colors duration-500",
            isScrolled
              ? "border border-border/50 bg-background/60 shadow-lg shadow-black/[0.03] dark:bg-background/40 dark:shadow-black/20 dark:border-white/[0.08]"
              : "bg-transparent"
          )}
          animate={isScrolled ? "scrolled" : "initial"}
          variants={pillVariants}
        >
          {/* Logo */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={cn(
              "flex items-center gap-2 px-3 py-2 rounded-full transition-colors duration-300",
              "hover:bg-foreground/[0.05]"
            )}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 shadow-lg shadow-blue-500/25">
              <Command className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-sm font-semibold tracking-tight text-foreground">
              {siteConfig.name.split(" ")[0]}
            </span>
          </motion.button>

          {/* Separator */}
          <div className="w-px h-5 bg-border/60 mx-1" />

          {/* Nav Links */}
          <div className="flex items-center gap-0.5">
            {navItems.map((item) => (
              <motion.button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  "relative px-3 py-2 text-[13px] font-medium rounded-full transition-colors duration-300",
                  activeSection === item.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                {/* Active Indicator — Background glow */}
                {activeSection === item.href && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-full bg-foreground/[0.06] dark:bg-white/[0.08]"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}

                <span className="relative z-10">{item.label}</span>

                {/* Hover underline */}
                {activeSection !== item.href && (
                  <motion.span
                    className="absolute bottom-1.5 left-3 right-3 h-px bg-gradient-to-r from-blue-500/60 to-violet-500/60"
                    variants={linkHoverVariants}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Separator */}
          <div className="w-px h-5 bg-border/60 mx-1" />

          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            className={cn(
              "flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-300",
              "text-muted-foreground hover:text-foreground hover:bg-foreground/[0.05]"
            )}
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle theme"
          >
            {mounted && (
              <AnimatePresence mode="wait">
                <motion.div
                  key={theme}
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === "dark" ? (
                    <Sun className="w-4 h-4" />
                  ) : (
                    <Moon className="w-4 h-4" />
                  )}
                </motion.div>
              </AnimatePresence>
            )}
          </motion.button>
        </motion.nav>
      </motion.header>

      {/* ── Mobile Navbar ───────────────────────── */}
      <motion.header
        variants={navbarVariants}
        animate={isHidden && !isMobileOpen ? "hidden" : "visible"}
        initial="visible"
        className="fixed top-0 left-0 right-0 z-50 flex md:hidden"
      >
        <div
          className={cn(
            "flex items-center justify-between w-full px-5 py-3.5 transition-all duration-500",
            isScrolled
              ? "bg-background/70 backdrop-blur-xl border-b border-border/40 dark:bg-background/50"
              : "bg-transparent"
          )}
        >
          {/* Mobile Logo */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2"
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 shadow-lg shadow-blue-500/25">
              <Command className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-sm font-semibold tracking-tight text-foreground">
              {siteConfig.name.split(" ")[0]}
            </span>
          </motion.button>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="flex items-center justify-center w-9 h-9 rounded-full text-muted-foreground hover:text-foreground transition-colors"
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              {mounted &&
                (theme === "dark" ? (
                  <Sun className="w-4.5 h-4.5" />
                ) : (
                  <Moon className="w-4.5 h-4.5" />
                ))}
            </motion.button>

            {/* Hamburger */}
            <motion.button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="flex items-center justify-center w-9 h-9 rounded-full text-foreground"
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMobileOpen ? "close" : "open"}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.15 }}
                >
                  {isMobileOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile Full-Screen Overlay ──────────── */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-background/95 backdrop-blur-2xl dark:bg-background/98" />

            {/* Navigation Content */}
            <nav className="relative flex flex-col justify-center h-full px-8">
              <div className="space-y-1">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.href}
                    custom={i}
                    variants={mobileNavItemVariants}
                    initial="closed"
                    animate="open"
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      "block w-full text-left py-3.5 text-3xl font-medium tracking-tight transition-colors duration-200",
                      activeSection === item.href
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <span className="flex items-center gap-4">
                      {activeSection === item.href && (
                        <motion.span
                          layoutId="mobileActiveDot"
                          className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-violet-500"
                        />
                      )}
                      {item.label}
                    </span>
                  </motion.button>
                ))}
              </div>

              {/* Bottom gradient line */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-12 h-px bg-gradient-to-r from-transparent via-border to-transparent"
              />

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="mt-6"
              >
                <p className="text-sm text-muted-foreground">
                  {siteConfig.description}
                </p>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
