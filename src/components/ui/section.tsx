"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionProps extends HTMLMotionProps<"section"> {
  children: React.ReactNode
  delay?: number
}

export function Section({ className, children, delay = 0, ...props }: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn("py-20 md:py-32", className)}
      {...props}
    >
      {children}
    </motion.section>
  )
}
