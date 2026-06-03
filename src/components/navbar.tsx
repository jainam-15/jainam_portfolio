"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "./ui/button"

const navItems = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Services", href: "/#services" },
  { name: "Projects", href: "/#projects" },
  { name: "Process", href: "/#process" },
  { name: "Contact", href: "/#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  const closeMenu = () => setIsOpen(false)

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 rounded-full border border-border/40 bg-background/60 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-white/5 transition-all duration-300">
        <nav className="flex items-center px-6 h-14">
          <ul className="flex items-center gap-6 text-sm font-medium text-muted-foreground mr-5">
            {navItems.map((item) => (
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
            <Button asChild variant="default" className="rounded-full h-9 px-5 text-sm font-semibold">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile Header */}
      <header className="flex md:hidden fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] rounded-2xl border border-border/40 bg-background/60 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-white/5 transition-all duration-300 flex-col">
        <div className="flex items-center justify-between w-full px-6 h-14">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground p-1"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 right-0 bg-background/90 backdrop-blur-xl border border-border/50 rounded-2xl p-6 shadow-xl md:hidden"
          >
            <ul className="flex flex-col gap-4 text-base font-medium">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="block hover:text-primary transition-colors text-center"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="pt-4 border-t border-border mt-2">
                <Button asChild className="w-full rounded-full">
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Resume</a>
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </header>
    </>
  )
}
