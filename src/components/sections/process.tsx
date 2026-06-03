"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Section } from "@/components/ui/section"

import { Search, PenTool, Code2, ShieldCheck, Rocket } from "lucide-react"

const processSteps = [
  {
    title: "Discover",
    description: "Before I write a single line of code, I need to understand your vision. We'll discuss your goals, target audience, and the core problem we are trying to solve.",
    icon: <Search className="w-6 h-6" />
  },
  {
    title: "Architecture",
    description: "I don't just pick trendy frameworks. I design a scalable tech stack and database schema tailored specifically to your product's long-term growth and performance needs.",
    icon: <PenTool className="w-6 h-6" />
  },
  {
    title: "Build",
    description: "This is where the magic happens. I execute the development with clean, maintainable code, focusing on building a product that looks beautiful and runs blazingly fast.",
    icon: <Code2 className="w-6 h-6" />
  },
  {
    title: "Test",
    description: "I hate bugs as much as you do. I rigorously test the application across different scenarios to ensure reliability, security, and a flawless user experience.",
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    title: "Launch",
    description: "We go live. But my job doesn't end there. I monitor performance, fix any edge cases, and help you scale the infrastructure as your user base grows.",
    icon: <Rocket className="w-6 h-6" />
  },
]

export function Process() {
  const containerRef = React.useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  })

  // Create a growing line effect based on scroll
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <Section id="process" className="bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            How I Build
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            My personal approach to taking an idea from a whiteboard sketch to a production-ready product.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto relative" ref={containerRef}>
          {/* Background Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-border/50 -translate-x-1/2 rounded-full hidden md:block" />
          <div className="absolute left-[28px] top-0 bottom-0 w-1 bg-border/50 rounded-full md:hidden" />

          {/* Animated Foreground Line (Desktop) */}
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-primary -translate-x-1/2 rounded-full hidden md:block z-0 shadow-[0_0_15px_rgba(var(--primary),0.5)]" 
          />
          {/* Animated Foreground Line (Mobile) */}
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-[28px] top-0 bottom-0 w-1 bg-primary rounded-full md:hidden z-0 shadow-[0_0_15px_rgba(var(--primary),0.5)]" 
          />

          <div className="space-y-16 md:space-y-24">
            {processSteps.map((step, idx) => {
              const isEven = idx % 2 === 0
              
              return (
                <motion.div 
                  key={step.title} 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className={`relative flex items-start md:items-center gap-8 ${
                    isEven ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[28px] md:left-1/2 -translate-x-1/2 flex items-center justify-center mt-1 md:mt-0 z-10">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ type: "spring", delay: 0.2 }}
                      className="w-6 h-6 rounded-full bg-background border-4 border-primary shadow-sm"
                    />
                  </div>

                  {/* Content Card */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0">
                    <div className={`bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow ${
                      isEven ? "md:ml-12" : "md:mr-12"
                    }`}>
                      <div className="flex flex-col gap-6">
                        <div className="w-12 h-12 rounded-xl bg-muted text-foreground flex items-center justify-center border border-border/50">
                          {step.icon}
                        </div>
                        
                        <div>
                          <span className="text-sm font-semibold tracking-widest text-primary uppercase mb-3 block">
                            Step 0{idx + 1}
                          </span>
                          <h3 className="text-2xl font-bold mb-3 text-foreground">{step.title}</h3>
                          <p className="text-muted-foreground leading-relaxed text-lg">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </Section>
  )
}
