import * as React from "react"
import Link from "next/link"
import { Mail } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border py-12" suppressHydrationWarning>
      <div className="container mx-auto px-6" suppressHydrationWarning>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6" suppressHydrationWarning>
          
          <div className="text-center md:text-left" suppressHydrationWarning>
            <Link href="/" className="text-xl font-bold tracking-tight inline-block mb-2">
              Jainam Shah
            </Link>
            <p className="text-muted-foreground font-medium mb-1">
              AI-Powered Product Engineer
            </p>
            <p className="text-sm text-muted-foreground">
              Building products that solve real problems.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/jainam-15" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/jainam-shah15" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:jainam150606@gmail.com" 
              className="w-10 h-10 rounded-full flex items-center justify-center bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground flex items-center justify-center">
          <p>© 2026 Jainam Shah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
