"use client";

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink, X } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export type Project = {
  title: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  tech: string[];
  process?: string;
  learnings?: string;
  liveUrl?: string;
  githubUrl: string;
  image?: string;
}

export function ProjectsClient({ projects }: { projects: Project[] }) {
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);

  // Prevent scrolling when modal is open
  React.useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="container mx-auto px-6 pt-12 md:pt-20">
        
        {/* Header */}
        <div className="max-w-4xl mb-16">
          <Button variant="ghost" asChild className="mb-6 -ml-4 text-muted-foreground hover:text-foreground">
            <Link href="/">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-6">
            All Projects
          </h1>
          <p className="text-xl text-muted-foreground">
            A comprehensive look at the products I've engineered, the problems they solve, and the lessons learned along the way.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all flex flex-col group h-full overflow-hidden"
            >
              {project.image && (
                <div className="aspect-video w-full rounded-xl bg-muted overflow-hidden relative mb-6">
                  <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground line-clamp-3">{project.description}</p>
              </div>

              <div className="mb-8 flex flex-wrap gap-2">
                {project.tech.slice(0, 3).map(tech => (
                  <span key={tech} className="px-2.5 py-1 bg-muted rounded-md text-xs font-medium text-muted-foreground">
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="px-2.5 py-1 bg-muted rounded-md text-xs font-medium text-muted-foreground">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>

              <div className="mt-auto flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <FaGithub className="w-4 h-4" />
                    </a>
                  </Button>
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                </div>
                <Button variant="outline" size="sm" className="rounded-full" onClick={() => setSelectedProject(project)}>
                  View Details
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>

      {/* Interactive Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-card border border-border rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-border bg-muted/30">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold">{selectedProject.title}</h2>
                  <p className="text-muted-foreground mt-1">{selectedProject.description}</p>
                </div>
                <Button variant="ghost" size="icon" className="rounded-full shrink-0" onClick={() => setSelectedProject(null)}>
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Modal Body */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Left Column (Main details) */}
                  <div className="md:col-span-2 space-y-8">
                    <div>
                      <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-destructive" />
                        The Problem
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {selectedProject.problem}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        The Solution
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {selectedProject.solution}
                      </p>
                    </div>

                    {selectedProject.process && (
                      <div>
                        <h3 className="text-xl font-bold mb-3">Development Process</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {selectedProject.process}
                        </p>
                      </div>
                    )}

                    {selectedProject.learnings && (
                      <div>
                        <h3 className="text-xl font-bold mb-3">Key Learnings</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {selectedProject.learnings}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Right Column (Meta) */}
                  <div className="space-y-8 bg-muted/30 p-6 rounded-2xl border border-border h-fit">
                    <div>
                      <h4 className="font-bold mb-3 text-sm uppercase tracking-wider text-muted-foreground">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map(tech => (
                          <span key={tech} className="px-3 py-1 bg-background border border-border rounded-lg text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {selectedProject.features && (
                      <div>
                        <h4 className="font-bold mb-3 text-sm uppercase tracking-wider text-muted-foreground">Key Features</h4>
                        <ul className="space-y-2">
                          {selectedProject.features.map(feature => (
                            <li key={feature} className="flex items-start gap-2 text-sm text-foreground">
                              <span className="text-primary mt-0.5">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Modal Footer */}
              <div className="p-6 border-t border-border bg-muted/30 flex justify-end gap-4">
                <Button variant="outline" className="rounded-full" asChild>
                  <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="mr-2 w-4 h-4" />
                    View Source
                  </a>
                </Button>
                {selectedProject.liveUrl && selectedProject.liveUrl !== "#" && (
                  <Button className="rounded-full" asChild>
                    <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                      Visit Live Site
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
