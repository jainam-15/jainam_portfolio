"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Moon, Sun, Code, Home, User, Mail, Briefcase } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", icon: Home, href: "#home" },
  { name: "About", icon: User, href: "#about" },
  { name: "Projects", icon: Code, href: "#projects" },
  { name: "Experience", icon: Briefcase, href: "#experience" },
  { name: "Contact", icon: Mail, href: "#contact" },
];

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0, x: "-50%" }}
      animate={{ y: 0, opacity: 1, x: "-50%" }}
      transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.5 }}
      className="fixed bottom-8 left-1/2 z-50 p-2 liquid-glass rounded-full flex items-center gap-1 shadow-2xl border border-border/50 bg-background/50 backdrop-blur-2xl"
    >
      {navItems.map((item, idx) => {
        const Icon = item.icon;
        return (
          <a
            key={idx}
            href={item.href}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative p-3 rounded-full hover:bg-foreground/10 transition-colors group"
          >
            <Icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors relative z-10" />
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  initial={{ opacity: 0, y: 10, x: "-50%" }}
                  animate={{ opacity: 1, y: 0, x: "-50%" }}
                  exit={{ opacity: 0, y: 10, x: "-50%" }}
                  className="absolute -top-12 left-1/2 bg-foreground text-background text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl pointer-events-none"
                >
                  {item.name}
                  {/* Tooltip triangle */}
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-foreground rotate-45" />
                </motion.span>
              )}
            </AnimatePresence>
          </a>
        );
      })}

      <div className="w-[1px] h-6 bg-border mx-2" />

      {mounted && (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          onMouseEnter={() => setHoveredIndex(99)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="relative p-3 rounded-full hover:bg-foreground/10 transition-colors group"
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors relative z-10" />
          ) : (
            <Moon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors relative z-10" />
          )}
          <AnimatePresence>
            {hoveredIndex === 99 && (
              <motion.span
                initial={{ opacity: 0, y: 10, x: "-50%" }}
                animate={{ opacity: 1, y: 0, x: "-50%" }}
                exit={{ opacity: 0, y: 10, x: "-50%" }}
                className="absolute -top-12 left-1/2 bg-foreground text-background text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl pointer-events-none"
              >
                Theme
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-foreground rotate-45" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      )}
    </motion.div>
  );
}
