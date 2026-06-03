"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Mail, FileText } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { Button } from "@/components/ui/button"

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const } },
  }

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-32 md:pt-40 pb-12 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Headline */}
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 leading-[1.1]">
            Jainam Shah
          </motion.h1>

          {/* Subheading / Badge */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-muted-foreground tracking-tight">
              AI-Powered Product Engineer
            </h2>
            <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
              <Sparkles className="w-3 h-3" />
              Available
            </span>
          </motion.div>

          {/* Bio */}
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            I don't just write code. I take complex ideas and architect them into scalable, beautiful, and conversion-focused products. From zero to launch.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start gap-4 mb-12">
            <Button size="lg" asChild className="w-full sm:w-auto group">
              <Link href="/#contact">
                Build With Me
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
              <Link href="/#projects">View Projects</Link>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-20">
            <Button variant="ghost" size="icon" asChild className="rounded-full">
              <a href="https://linkedin.com/in/jainam-shah15" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="rounded-full">
              <a href="https://github.com/jainam-15" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="rounded-full">
              <a href="mailto:jainam150606@gmail.com" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </Button>

          </motion.div>

          {/* Metrics */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 pt-10 border-t border-white">
            <div className="flex flex-col gap-2">
              <span className="text-3xl font-bold tracking-tight text-foreground">15+</span>
              <span className="text-sm text-muted-foreground font-medium">Projects Built</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-3xl font-bold tracking-tight text-foreground">2+</span>
              <span className="text-sm text-muted-foreground font-medium">Years Building</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-3xl font-bold tracking-tight text-foreground">1000+</span>
              <span className="text-sm text-muted-foreground font-medium">Hours of Dev</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xl font-bold tracking-tight text-green-500 leading-tight">Available</span>
              <span className="text-sm text-muted-foreground font-medium">Freelance / Full-Time</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative gradient background (subtle) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
    </section>
  )
}
