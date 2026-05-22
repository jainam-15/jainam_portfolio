"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const duration = 1600; // ms
    const intervalTime = 20; // ms
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const nextProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(nextProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => setIsDone(true), 200);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black font-sans"
        >
          {/* Noise overlay */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')]" />

          <div className="relative flex flex-col items-center gap-6">
            {/* Elegant J Logo Outline */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative flex size-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] shadow-2xl backdrop-blur-md"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-50" />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-3xl font-black text-transparent">
                J
              </span>
            </motion.div>

            {/* Typography brand name */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-lg font-bold tracking-[0.25em] text-white uppercase"
              >
                JAINAM SHAH
              </motion.h1>
            </div>

            {/* Developer Tagline */}
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 0.5 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs tracking-wider text-white/50"
              >
                AI-Powered Full-Stack Engineer
              </motion.p>
            </div>

            {/* Progress Percentage */}
            <div className="mt-8 flex flex-col items-center gap-2">
              <motion.span
                className="font-mono text-3xl font-light text-white/90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {progress}%
              </motion.span>

              {/* Progress bar container */}
              <div className="h-[2px] w-48 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1, ease: "easeOut" }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
