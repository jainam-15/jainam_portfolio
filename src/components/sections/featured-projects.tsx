import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"
import { FaGithub } from "react-icons/fa"

const featuredProjects = [
  {
    title: "LeadsArk",
    description: "AI-powered lead management platform.",
    problem: "Businesses fail to respond and follow up with leads consistently.",
    solution: "Automated replies, lead qualification, follow-ups, and centralized lead management dashboard.",
    tech: ["Next.js", "Node.js", "TypeScript", "Tailwind CSS", "Supabase"],
    image: "/leadsark.png",

    liveUrl: "https://leadsark.vercel.app/",
    githubUrl: "https://github.com/jainam-15/leadsark",
  },
  {
    title: "Your Music Space",
    description: "Ad-free music platform across Android, iOS, and Web.",
    features: ["Unlimited listening", "No ads", "Cross-platform synchronization", "Gamified experience"],
    tech: ["Flutter", "Firebase", "Firestore", "Next.js"],
    image: "/yourmusicspace.png",
    liveUrl: "https://yourmusicspaceweb.vercel.app/",
    githubUrl: "https://github.com/jainam-15/YourMusicSpace",
  },
  {
    title: "Intent AI",
    description: "AI-powered vibe coding platform. Generate applications and websites from prompts.",
    tech: ["Next.js", "Node.js", "TypeScript", "Database", "APIs"],
    image: "/intent-ai.png",
    imageClassName: "scale-125",
    githubUrl: "#",
  },
  {
    title: "ChatX",
    description: "Private real-time chat application.",
    tech: ["Flutter", "Firebase", "Firestore"],
    image: "/chatx.png",
    liveUrl: "https://chatxweb.vercel.app/",
    githubUrl: "https://github.com/jainam-15/chatx",
  },
]

export function FeaturedProjects() {
  return (
    <Section id="projects" className="bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Featured Work
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            A selection of products I've built. Real solutions for real problems.
          </p>
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="flex flex-col gap-12 md:gap-16 max-w-6xl mx-auto">
          {featuredProjects.map((project, idx) => {
            const isEven = idx % 2 === 0

            return (
              <div
                key={project.title}
                className={`flex flex-col gap-8 md:gap-16 items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Image Side */}
                <div className="w-full md:w-1/2 group">
                  <div className="aspect-[4/3] rounded-3xl bg-muted border border-border overflow-hidden relative shadow-md group-hover:shadow-xl transition-shadow flex items-center justify-center">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className={`object-cover object-top transition-transform duration-500 group-hover:scale-105 ${project.imageClassName || ""}`}
                      />
                    ) : (
                      <div className="text-muted-foreground/50 font-medium tracking-widest uppercase">
                        {project.title} Screenshot
                      </div>
                    )}
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors" />
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl md:text-4xl font-bold">{project.title}</h3>
                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <Button variant="outline" size="icon" className="h-10 w-10 rounded-full" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <FaGithub className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button variant="default" size="icon" className="h-10 w-10 rounded-full" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>

                  <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    {project.problem && (
                      <div className="text-base">
                        <span className="font-semibold text-foreground">Problem:</span> <span className="text-muted-foreground">{project.problem}</span>
                      </div>
                    )}
                    {project.solution && (
                      <div className="text-base">
                        <span className="font-semibold text-foreground">Solution:</span> <span className="text-muted-foreground">{project.solution}</span>
                      </div>
                    )}
                    {project.features && (
                      <div className="text-base">
                        <span className="font-semibold text-foreground">Features:</span> <span className="text-muted-foreground">{project.features.join(", ")}</span>
                      </div>
                    )}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-1.5 bg-muted rounded-full text-sm font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
