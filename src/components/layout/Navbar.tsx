"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  const openMenu = () => {
    window.dispatchEvent(new Event("toggle-command-menu"));
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none select-none">
      <div className="w-full px-6 sm:px-12 py-6 sm:py-8 flex items-center justify-between text-[10px] sm:text-xs font-mono tracking-[0.3em] text-muted-foreground/30 uppercase">
        
        {/* Left Side: Editorial Credit */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="pointer-events-auto cursor-default transition-colors duration-500 hover:text-white/60"
        >
          <span>Jainam Shah</span>
          <span className="hidden sm:inline text-muted-foreground/15 mx-4">{"//"}</span>
          <span className="hidden sm:inline">Digital Identity</span>
        </motion.div>

        {/* Right Side: Interactive Command Trigger */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="pointer-events-auto flex items-center gap-6"
        >
          <span className="hidden md:inline text-muted-foreground/15 font-light">
            SELECTIVE INTAKE ACTIVE
          </span>
          <button
            onClick={openMenu}
            className="text-muted-foreground/50 hover:text-white transition-colors duration-300 pointer-events-auto bg-transparent border-none outline-none cursor-pointer"
          >
            [ Menu ]
          </button>
        </motion.div>

      </div>
    </header>
  );
}
