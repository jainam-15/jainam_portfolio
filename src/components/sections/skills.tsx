"use client"

import * as React from "react"
import { Section } from "@/components/ui/section"
import { motion, Variants } from "framer-motion"
import { Monitor, Server, Smartphone, BrainCircuit, Wrench } from "lucide-react"
import { FaJava, FaRobot } from "react-icons/fa"
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiSupabase,
  SiFlutter,
  SiKotlin,
  SiOpenai,
  SiClaude,
  SiGit,
  SiVercel,
  SiCodemagic,
  SiFirebase
} from "react-icons/si"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 20 } 
  },
}

const skillsData = [
  {
    category: "Frontend",
    icon: <Monitor className="w-5 h-5" />,
    skills: [
      { name: "React", icon: <SiReact className="w-4 h-4 text-[#61DAFB]" /> },
      { name: "Next.js", icon: <SiNextdotjs className="w-4 h-4 text-foreground" /> },
      { name: "TypeScript", icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4 text-[#06B6D4]" /> },
    ],
  },
  {
    category: "Backend",
    icon: <Server className="w-5 h-5" />,
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="w-4 h-4 text-[#339933]" /> },
      { name: "Express.js", icon: <SiExpress className="w-4 h-4 text-foreground" /> },
      { name: "Supabase", icon: <SiSupabase className="w-4 h-4 text-[#3ECF8E]" /> },
    ],
  },
  {
    category: "Mobile",
    icon: <Smartphone className="w-5 h-5" />,
    skills: [
      { name: "Flutter", icon: <SiFlutter className="w-4 h-4 text-[#02569B]" /> },
      { name: "Java", icon: <FaJava className="w-4 h-4 text-[#007396]" /> },
      { name: "Kotlin", icon: <SiKotlin className="w-4 h-4 text-[#7F52FF]" /> },
    ],
  },
  {
    category: "AI",
    icon: <BrainCircuit className="w-5 h-5" />,
    skills: [
      { name: "OpenAI", icon: <SiOpenai className="w-4 h-4 text-foreground" /> },
      { name: "Claude", icon: <SiClaude className="w-4 h-4 text-[#D97757]" /> },
      { name: "AI Agents", icon: <FaRobot className="w-4 h-4 text-muted-foreground" /> },
    ],
  },
  {
    category: "Tools",
    icon: <Wrench className="w-5 h-5" />,
    skills: [
      { name: "Git", icon: <SiGit className="w-4 h-4 text-[#F05032]" /> },
      { name: "Vercel", icon: <SiVercel className="w-4 h-4 text-foreground" /> },
      { name: "Codemagic CI/CD", icon: <SiCodemagic className="w-4 h-4 text-[#F3705A]" /> },
      { name: "Firebase", icon: <SiFirebase className="w-4 h-4 text-[#FFCA28]" /> },
    ],
  },
]

export function Skills() {
  return (
    <Section id="skills" className="bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Technical Arsenal
          </h2>
          <p className="text-lg text-muted-foreground">
            The tools and technologies I use to build scalable, high-performance applications.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {skillsData.map((group, idx) => {
            // In dark mode, bg-foreground is white. We want 3 white and 2 black.
            // 0, 2, 4 will be white. 1, 3 will be black.
            const isWhiteCard = idx % 2 === 0
            
            return (
              <motion.div 
                key={group.category}
                variants={itemVariants}
                className={`border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow group ${
                  isWhiteCard 
                    ? "bg-foreground text-background border-transparent" 
                    : "bg-card text-card-foreground border-border"
                }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl transition-transform group-hover:scale-110 ${
                    isWhiteCard ? "bg-background/10 text-background" : "bg-primary/5 text-primary"
                  }`}>
                    {group.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span 
                      key={skill.name}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium border border-transparent transition-colors cursor-default ${
                        isWhiteCard 
                          ? "bg-background/10 hover:bg-background/20" 
                          : "bg-muted hover:bg-primary/5 hover:border-primary/20"
                      }`}
                    >
                      {skill.icon}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </Section>
  )
}
