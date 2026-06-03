"use client"

import * as React from "react"
import Image from "next/image"
import { Section } from "@/components/ui/section"
import { CheckCircle2 } from "lucide-react"
import { motion, Variants } from "framer-motion"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } },
}

export function About() {
  return (
    <Section id="about" className="bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            More Than Just Another Developer
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground">
            I'm a developer who never settles for average.
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-20 items-center"
        >

          {/* Photo side */}
          <motion.div variants={itemVariants} className="relative w-64 md:w-full max-w-sm aspect-[4/4] md:aspect-[4/5] rounded-3xl overflow-hidden bg-muted border border-border shadow-xl shrink-0 mx-auto md:mx-0 group">
            <Image
              src="/Jainamshah.jpg"
              alt="Jainam Shah"
              fill
              sizes="(max-width: 768px) 150vw, 800px"
              quality={100}
              className="object-cover object-center translate-x-4 scale-[1.8] group-hover:scale-[1.85] transition-transform duration-700 ease-out"
              priority
            />
          </motion.div>

          {/* Content side */}
          <div className="flex flex-col justify-center">

            <div className="space-y-4 text-muted-foreground mb-8 text-base md:text-lg leading-relaxed">
              <motion.p variants={itemVariants}>
                I started learning to code at the age of 16 and later completed my Bachelor's in Computer Applications.
              </motion.p>
              <motion.p variants={itemVariants}>
                Today, I build scalable full-stack applications, mobile apps, and AI-powered systems that solve real business problems. I enjoy creating products that have a meaningful impact rather than building things only for demonstration purposes.
              </motion.p>
              <motion.p variants={itemVariants}>
                Clients trust me because of my attention to detail, problem-solving mindset, and ability to transform ideas into working products.
              </motion.p>
            </div>

            {/* Status Card */}
            <motion.div variants={itemVariants} className="bg-background rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-all">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Current Status
              </h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                {[
                  "Freelance",
                  "Contract",
                  "Full-Time Opportunities"
                ].map((status, idx) => (
                  <motion.li 
                    key={status} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + (idx * 0.1) }}
                    className="flex items-center gap-2 text-sm font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    {status}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </Section>
  )
}
