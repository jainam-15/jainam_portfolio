import { Hero } from "@/components/hero";
import { PersonalIdentity } from "@/components/personal-identity";
import { VisionObsessions } from "@/components/vision-obsessions";
import { CurrentlyBuilding } from "@/components/currently-building";
import { Projects } from "@/components/projects";
import { Metrics } from "@/components/metrics";
import { Process } from "@/components/process";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Hero />
      <PersonalIdentity />
      <VisionObsessions />
      <CurrentlyBuilding />
      <Projects />
      <Metrics />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
