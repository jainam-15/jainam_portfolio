"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Moon, Sun, Code, Home, User, Mail, Briefcase } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

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

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.5 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 glass rounded-full px-4 py-2 flex items-center gap-2 shadow-2xl"
    >
      {navItems.map((item, idx) => {
        const Icon = item.icon;
        return (
          <a
            key={idx}
            href={item.href}
            className="group relative p-3 rounded-full hover:bg-foreground/10 transition-colors hover-target"
          >
            <Icon className="w-5 h-5 text-foreground/70 group-hover:text-foreground transition-colors" />
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs font-medium px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {item.name}
            </span>
          </a>
        );
      })}

      <div className="w-px h-6 bg-border mx-2" />

      {mounted && (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-3 rounded-full hover:bg-foreground/10 transition-colors hover-target relative group"
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5 text-foreground/70 group-hover:text-foreground transition-colors" />
          ) : (
            <Moon className="w-5 h-5 text-foreground/70 group-hover:text-foreground transition-colors" />
          )}
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs font-medium px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            Theme
          </span>
        </button>
      )}
    </motion.div>
  );
}
