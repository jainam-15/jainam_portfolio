"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function MobileFloatingCTA() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <motion.a
      href="https://wa.me/919426180574"
      target="_blank"
      rel="noopener noreferrer"
      style={{ opacity }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg md:hidden"
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500 to-emerald-500" />
      <MessageCircle className="relative z-10 h-6 w-6 text-white" />
    </motion.a>
  );
}
