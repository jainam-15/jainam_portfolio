"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          {/* Left: Text Content */}
          <div>
            <motion.div variants={itemVariants} className="mb-6">
              <span className="text-primary font-medium tracking-wider uppercase text-sm">
                About Me
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 tracking-tight">
                Engineering <span className="text-gradient">meets Product.</span>
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6 text-lg text-muted-foreground">
              <p>
                I am not just a developer. I am a product builder obsessed with quality. My approach combines deep engineering expertise with strong product thinking and premium UX design.
              </p>
              <p>
                Whether it&apos;s architecting a scalable backend, designing a cinematic frontend, or integrating AI-assisted workflows, I build systems that perform at the highest level.
              </p>
              <p>
                I thrive in startup environments where innovation, speed, and quality intersect. I don&apos;t write code just to complete tasks; I build scalable products that leave a lasting impact.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-10 grid grid-cols-2 gap-6">
              <div className="glass-card p-6 rounded-2xl">
                <h3 className="text-3xl font-bold text-foreground mb-2">100%</h3>
                <p className="text-sm text-muted-foreground">Commitment to Quality & Details</p>
              </div>
              <div className="glass-card p-6 rounded-2xl">
                <h3 className="text-3xl font-bold text-foreground mb-2">∞</h3>
                <p className="text-sm text-muted-foreground">Passion for Scalable Architecture</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Layered Visuals */}
          <motion.div variants={itemVariants} className="relative h-[600px] w-full flex items-center justify-center">
            {/* Background glowing shape */}
            <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full" />
            
            {/* Layered Glass Panels */}
            <motion.div 
              className="absolute w-64 h-80 glass-card rounded-3xl border border-white/10 z-10 -rotate-6 flex items-end p-6"
              whileHover={{ rotate: 0, scale: 1.05, zIndex: 30 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <p className="text-xl font-bold">AI Integration</p>
            </motion.div>

            <motion.div 
              className="absolute w-72 h-96 bg-card/80 backdrop-blur-2xl rounded-3xl border border-white/10 z-20 rotate-3 shadow-2xl flex items-end p-6"
              whileHover={{ rotate: 0, scale: 1.05, zIndex: 30 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <p className="text-2xl font-bold text-gradient">Product Architecture</p>
            </motion.div>

            <motion.div 
              className="absolute w-56 h-72 glass-card rounded-3xl border border-white/10 z-0 translate-x-32 -translate-y-10 rotate-12 flex items-end p-6"
              whileHover={{ rotate: 0, scale: 1.05, zIndex: 30 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <p className="text-lg font-bold">Premium UX</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
