"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import { useEffect, useState } from "react";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glowing orbs following mouse */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: mousePosition.x - 400,
            y: mousePosition.y - 400,
          }}
          transition={{ type: "tween", ease: "easeOut", duration: 2 }}
          className="absolute w-[800px] h-[800px] rounded-full bg-primary/20 blur-[120px] opacity-50 dark:opacity-30"
        />
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-blue-500/20 blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-[150px] animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] z-0" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center mt-20">
        
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-foreground/10 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-sm font-medium tracking-wide">Available for new opportunities</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6"
        >
          <span className="block">Jainam Shah</span>
          <span className="block text-gradient">AI-Powered Full-Stack</span>
          <span className="block text-gradient">Engineer</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-4"
        >
          I build scalable web apps, AI-powered systems, and premium digital experiences using modern development workflows.
        </motion.p>
        
        {/* Secondary bold statement */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="max-w-2xl font-medium text-foreground/80 mb-10"
        >
          &quot;I don&apos;t settle for average — whether it&apos;s design, logic, or user experience.&quot;
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projects"
            className="group flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-medium transition-transform hover:scale-105 hover-target"
          >
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 glass px-8 py-4 rounded-full font-medium transition-transform hover:scale-105 hover-target"
          >
            Contact Me
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 glass px-8 py-4 rounded-full font-medium transition-transform hover:scale-105 hover-target"
          >
            <Download className="w-4 h-4" />
            Resume
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 flex gap-6"
        >
          {[
            { icon: Github, href: "https://github.com/jainam-15/" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/jainam-shah15/" },
            { icon: Mail, href: "mailto:jainam15business@gmail.com" },
          ].map((social, idx) => {
            const Icon = social.icon;
            return (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass hover:bg-foreground/10 transition-colors hover-target"
              >
                <Icon className="w-5 h-5 text-foreground/80" />
              </a>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
