"use client"

import * as React from "react"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Mail, Phone } from "lucide-react"
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa"
import { motion, Variants } from "framer-motion"

const leftVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } },
}

const rightVariants: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.2 } },
}

export function Contact() {
  const [result, setResult] = React.useState("")
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setResult("Sending...")

    const formData = new FormData(event.currentTarget)
    
    // Web3Forms Access Key
    // NOTE: Replace this value with your actual Web3Forms Access Key
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })

      const data = await response.json()

      if (data.success) {
        setResult("Message sent successfully!")
        event.currentTarget.reset()
      } else {
        console.error("Error", data)
        setResult(data.message)
      }
    } catch (error) {
      console.error(error)
      setResult("Something went wrong. Please try again.")
    }

    setIsSubmitting(false)
    
    // Clear message after 5 seconds
    setTimeout(() => {
      setResult("")
    }, 5000)
  }

  return (
    <Section id="contact" className="bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 overflow-hidden">
          
          {/* Contact Info */}
          <motion.div
            variants={leftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Let's Build Something Great Together
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Whether you're building a startup, launching a product, or need help bringing an idea to life, I'd love to hear about it.
            </p>

            <div className="space-y-6 mb-10">
              <a href="mailto:jainam150606@gmail.com" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground font-medium">Email</div>
                  <div className="text-lg font-medium">jainam150606@gmail.com</div>
                </div>
              </a>
              <a href="tel:9426180574" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground font-medium">Phone</div>
                  <div className="text-lg font-medium">+91 94261 80574</div>
                </div>
              </a>
            </div>

            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="rounded-full w-12 h-12 hover:text-primary hover:border-primary" asChild>
                <a href="https://linkedin.com/in/jainam-shah15" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full w-12 h-12 hover:text-primary hover:border-primary" asChild>
                <a href="https://github.com/jainam-15" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full w-12 h-12 hover:text-green-500 hover:border-green-500" asChild>
                <a href="https://wa.me/919426180574" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={rightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-card border border-border rounded-3xl p-8 shadow-sm"
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={onSubmit}>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name <span className="text-red-500">*</span></label>
                  <input 
                    id="name" 
                    name="name"
                    type="text" 
                    placeholder="John Doe"
                    required
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow" 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email <span className="text-red-500">*</span></label>
                  <input 
                    id="email" 
                    name="email"
                    type="email" 
                    placeholder="john@example.com"
                    required
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow" 
                  />
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">Phone Number <span className="text-red-500">*</span></label>
                  <input 
                    id="phone"
                    name="phone"
                    type="tel" 
                    placeholder="+91 98765 43210"
                    required
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow" 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="projectType" className="text-sm font-medium">Project Type <span className="text-red-500">*</span></label>
                  <select 
                    id="projectType"
                    name="projectType"
                    defaultValue=""
                    required
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow appearance-none"
                  >
                    <option value="" disabled>Select a project type...</option>
                    <option value="web">Web Application</option>
                    <option value="mobile">Mobile App</option>
                    <option value="ai">AI Integration</option>
                    <option value="landing">Landing Page</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow resize-none" 
                />
              </div>

              <Button size="lg" className="w-full rounded-xl" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
              
              {result && (
                <div className={`text-sm text-center font-medium mt-4 ${result.includes("success") ? "text-green-500" : "text-primary"}`}>
                  {result}
                </div>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </Section>
  )
}
