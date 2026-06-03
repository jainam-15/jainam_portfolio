import * as React from "react"
import Image from "next/image"
import { Section } from "@/components/ui/section"
import { CheckCircle2 } from "lucide-react"

export function About() {
  return (
    <Section id="about" className="bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            More Than Just Another Developer
          </h2>
          <p className="text-lg text-muted-foreground">
            I'm a developer who never settles for average.
          </p>
        </div>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-20 items-center">

          {/* Photo side */}
          <div className="relative w-64 md:w-full max-w-sm aspect-[4/4] md:aspect-[4/5] rounded-3xl overflow-hidden bg-muted border border-border shadow-xl shrink-0 mx-auto md:mx-0">
            <Image
              src="/Jainamshah.jpg"
              alt="Jainam Shah"
              fill
              sizes="(max-width: 768px) 100vw, 384px"
              className="object-cover object-center translate-x-4 scale-175"
              priority
            />
          </div>

          {/* Content side */}
          <div className="flex flex-col justify-center">

            <div className="space-y-4 text-muted-foreground mb-8 text-base md:text-lg leading-relaxed">
              <p>
                I started learning to code at the age of 16 and later completed my Bachelor's in Computer Applications.
              </p>
              <p>
                Today, I build scalable full-stack applications, mobile apps, and AI-powered systems that solve real business problems. I enjoy creating products that have a meaningful impact rather than building things only for demonstration purposes.
              </p>
              <p>
                Clients trust me because of my attention to detail, problem-solving mindset, and ability to transform ideas into working products.
              </p>
            </div>

            {/* Status Card */}
            <div className="bg-background rounded-2xl p-6 border border-border shadow-sm">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Current Status
              </h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                {[
                  "Freelance",
                  "Contract",
                  "Full-Time Opportunities"
                ].map((status) => (
                  <li key={status} className="flex items-center gap-2 text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    {status}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </Section>
  )
}
