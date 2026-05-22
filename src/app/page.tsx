"use client";

import LoadingScreen from "@/components/layout/LoadingScreen";
import HeroSection from "@/components/sections/HeroSection";
import ManifestoSection from "@/components/sections/ManifestoSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      {/* Premium Loader */}
      <LoadingScreen />

      {/* Main Page Layout */}
      <div className="relative min-h-screen w-full overflow-hidden bg-background font-sans text-foreground">
        {/* Sections in cinematic order */}
        <HeroSection />
        <ManifestoSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </div>
    </>
  );
}
