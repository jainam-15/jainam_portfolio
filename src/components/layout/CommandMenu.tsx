"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Compass, Sun, Moon, ArrowRight, Laptop, Sparkles } from "lucide-react";
import { navItems, socialLinks } from "@/lib/constants";
import { useTheme } from "next-themes";

export default function CommandMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [prevSearch, setPrevSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { setTheme } = useTheme();

  if (search !== prevSearch) {
    setPrevSearch(search);
    setSelectedIndex(0);
  }
  const menuRef = useRef<HTMLDivElement>(null);

  // Handle shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((open) => !open);
      } else if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Filter actions based on search
  const actions = [
    ...navItems.map((item) => ({
      label: `Navigate to ${item.label}`,
      category: "Navigation",
      icon: Compass,
      perform: () => {
        const el = document.querySelector(item.href);
        el?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      },
    })),
    {
      label: "Switch to Dark Mode",
      category: "Preferences",
      icon: Moon,
      perform: () => {
        setTheme("dark");
        setIsOpen(false);
      },
    },
    {
      label: "Switch to Light Mode",
      category: "Preferences",
      icon: Sun,
      perform: () => {
        setTheme("light");
        setIsOpen(false);
      },
    },
    {
      label: "Switch to System Theme",
      category: "Preferences",
      icon: Laptop,
      perform: () => {
        setTheme("system");
        setIsOpen(false);
      },
    },
    ...socialLinks.map((link) => ({
      label: `Open ${link.label}`,
      category: "Socials",
      icon: Sparkles,
      perform: () => {
        window.open(link.href, "_blank", "noopener,noreferrer");
        setIsOpen(false);
      },
    })),
  ];

  const filtered = actions.filter((action) =>
    action.label.toLowerCase().includes(search.toLowerCase())
  );

  // Handle keyboard navigation inside search list
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filtered.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filtered[selectedIndex]) {
          filtered[selectedIndex].perform();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filtered, selectedIndex]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Lock scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);



  return (
    <>
      {/* Floating K Badge in Screen Corner */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-40 hidden items-center gap-1.5 rounded-full border border-border/40 bg-card/60 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-md transition-all hover:border-border/80 hover:text-foreground md:flex"
      >
        <span>Press</span>
        <kbd className="pointer-events-none inline-flex h-4 select-none items-center gap-0.5 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[999] flex items-start justify-center pt-[15vh] px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
              onClick={() => setIsOpen(false)}
            />

            {/* Modal */}
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, scale: 0.96, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -8 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-border/50 bg-card/80 p-0 shadow-2xl backdrop-blur-xl dark:bg-zinc-950/80"
            >
              {/* Search input */}
              <div className="flex items-center gap-3 border-b border-border/50 px-4 py-3.5">
                <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Type a command or search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none border-none"
                  autoFocus
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-md border border-border/50 bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground transition-all hover:bg-muted/80"
                >
                  ESC
                </button>
              </div>

              {/* Actions List */}
              <div className="max-h-[330px] overflow-y-auto px-2 py-3">
                {filtered.length > 0 ? (
                  <div className="space-y-4">
                    {/* Group by category */}
                    {Array.from(new Set(filtered.map((a) => a.category))).map((cat) => {
                      const catActions = filtered.filter((a) => a.category === cat);
                      return (
                        <div key={cat} className="space-y-1">
                          <div className="px-3 text-[10px] font-semibold tracking-wider text-muted-foreground uppercase">
                            {cat}
                          </div>
                          {catActions.map((action) => {
                            const index = filtered.indexOf(action);
                            const isSelected = index === selectedIndex;
                            const Icon = action.icon;
                            return (
                              <button
                                key={action.label}
                                onClick={action.perform}
                                onMouseEnter={() => setSelectedIndex(index)}
                                className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition-all ${
                                  isSelected
                                    ? "bg-primary text-primary-foreground"
                                    : "text-foreground hover:bg-muted/50"
                                }`}
                              >
                                <div className="flex items-center gap-3">
                                  <Icon className={`h-4 w-4 ${isSelected ? "text-primary-foreground" : "text-muted-foreground"}`} />
                                  <span>{action.label}</span>
                                </div>
                                {isSelected && (
                                  <motion.span
                                    layoutId="arrow"
                                    initial={{ opacity: 0, x: -4 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="text-xs"
                                  >
                                    <ArrowRight className="h-3.5 w-3.5 text-primary-foreground" />
                                  </motion.span>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="px-4 py-8 text-center text-sm text-muted-foreground">
                    No results found for &ldquo;{search}&rdquo;
                  </div>
                )}
              </div>

              {/* System Info Bar */}
              <div className="flex items-center justify-between border-t border-border/40 bg-muted/40 px-4 py-2 font-mono text-[9px] text-muted-foreground/60 select-none">
                <div className="flex items-center gap-1.5">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>CORE_STABLE // V1.0.0</span>
                </div>
                <div>ENV // PROD_DEVL</div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
