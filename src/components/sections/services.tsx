"use client"

import * as React from "react"
import { Section } from "@/components/ui/section"
import { Globe, Smartphone, Bot, LayoutTemplate, Rocket } from "lucide-react"
import { motion, Variants } from "framer-motion"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0, 
    transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] } 
  },
}

const services = [
  {
    title: "Full-Stack Web Development",
    description: "Modern, scalable, high-performance web applications tailored to your business needs.",
    icon: <Globe className="w-6 h-6" />,
    className: "md:col-span-3 bg-foreground text-background border-transparent",
    iconClassName: "bg-background/10 text-background",
    descClassName: "text-background/80",
  },
  {
    title: "Mobile App Development",
    description: "Cross-platform Android and iOS applications with seamless native-like experiences.",
    icon: <Smartphone className="w-6 h-6" />,
    className: "md:col-span-3 bg-card border-border",
    iconClassName: "bg-primary/10 text-primary",
    descClassName: "text-muted-foreground",
  },
  {
    title: "AI Integration",
    description: "AI-powered workflows and automation systems.",
    icon: <Bot className="w-6 h-6" />,
    className: "md:col-span-2 bg-card border-border",
    iconClassName: "bg-primary/10 text-primary",
    descClassName: "text-muted-foreground",
  },
  {
    title: "Landing Pages",
    description: "High-converting, visually stunning websites.",
    icon: <LayoutTemplate className="w-6 h-6" />,
    className: "md:col-span-2 bg-card border-border",
    iconClassName: "bg-primary/10 text-primary",
    descClassName: "text-muted-foreground",
  },
  {
    title: "MVP Development",
    description: "Rapid product development for startups.",
    icon: <Rocket className="w-6 h-6" />,
    className: "md:col-span-2 bg-foreground text-background border-transparent",
    iconClassName: "bg-background/10 text-background",
    descClassName: "text-background/80",
  },
]

export function Services() {
  return (
    <Section id="services" className="bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Services
          </h2>
          <p className="text-lg text-muted-foreground">
            I offer end-to-end development services to help you build, launch, and scale your product.
          </p>
        </div>

        {/* Symmetrical Bento Grid (6 Columns) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-6 gap-6 max-w-6xl mx-auto"
        >
          {services.map((service, idx) => (
            <motion.div 
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
              className={`border rounded-3xl p-8 shadow-sm group ${service.className}`}
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${service.iconClassName}`}>
                {service.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">
                {service.title}
              </h3>
              <p className={`leading-relaxed text-sm md:text-base ${service.descClassName}`}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}
