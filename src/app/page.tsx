import { Hero } from "@/components/hero";
import { PersonalIdentity } from "@/components/personal-identity";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Metrics } from "@/components/metrics";
import { Testimonials } from "@/components/testimonials";
import { AiVisualization } from "@/components/ai-visualization";
import { Process } from "@/components/process";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Hero />
      <PersonalIdentity />
      <Skills />
      <Projects />
      <Metrics />
      <Testimonials />
      <AiVisualization />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
