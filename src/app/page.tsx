import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Skills } from "@/components/sections/skills"
import { Services } from "@/components/sections/services"
import { FeaturedProjects } from "@/components/sections/featured-projects"
import { Process } from "@/components/sections/process"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Services />
      <FeaturedProjects />
      <Process />
      <Contact />
    </>
  )
}
