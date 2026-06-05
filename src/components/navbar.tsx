"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, User, Wrench, Briefcase, LayoutGrid, GitMerge, Mail, FileText, ArrowUpRight } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "./ui/button"

const desktopNavItems = [
  { name: "Home", href: "/#home", icon: <Home className="w-5 h-5" /> },
  { name: "About", href: "/#about", icon: <User className="w-5 h-5" /> },
  { name: "Skills", href: "/#skills", icon: <Wrench className="w-5 h-5" /> },
  { name: "Services", href: "/#services", icon: <Briefcase className="w-5 h-5" /> },
  { name: "Projects", href: "/#projects", icon: <LayoutGrid className="w-5 h-5" /> },
  { name: "Contact", href: "/#contact", icon: <Mail className="w-5 h-5" /> },
]

const mobileNavItems = [
  { name: "Home", href: "/#home", icon: <Home className="w-[18px] h-[18px]" /> },
  { name: "About", href: "/#about", icon: <User className="w-[18px] h-[18px]" /> },
  { name: "Skills", href: "/#skills", icon: <Wrench className="w-[18px] h-[18px]" /> },
  { name: "Projects", href: "/#projects", icon: <LayoutGrid className="w-[18px] h-[18px]" /> },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 rounded-full border border-border/40 bg-background/60 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-white/5 transition-all duration-300">
        <nav className="flex items-center px-6 h-14">
          <ul className="flex items-center gap-6 text-sm font-medium text-muted-foreground mr-5">
            {desktopNavItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Separator */}
          <div className="w-px h-4 bg-border/50 hidden md:block" />

          <div className="flex items-center gap-4 ml-2">
            <ThemeToggle />
            <Button asChild variant="default" className="rounded-full h-9 px-5 text-sm font-semibold gap-1.5">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Resume
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile Bottom Navigation Bar */}
      <header className="flex md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-fit px-1.5 rounded-full border border-border/40 bg-background/80 backdrop-blur-xl shadow-2xl shadow-black/10 dark:shadow-white/5 transition-all duration-300">
        <nav className="flex items-center gap-1 h-12">
          {mobileNavItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="p-2 text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-full transition-all flex items-center justify-center"
              aria-label={item.name}
              title={item.name}
            >
              {item.icon}
            </Link>
          ))}
          
          <div className="w-px h-5 bg-border/50 mx-1 shrink-0" />
          
          <div className="shrink-0 scale-[0.85] origin-center">
            <ThemeToggle />
          </div>

          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 -ml-1 text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-full transition-all flex items-center justify-center shrink-0"
            title="Resume"
            aria-label="Resume"
          >
            <FileText className="w-[18px] h-[18px]" />
          </a>
        </nav>
      </header>
    </>
  )
}
