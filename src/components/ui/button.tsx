"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "secondary"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    // We cannot directly use framer-motion props if it's asChild because Slot strips them
    // For simplicity, we just apply motion to the non-asChild button,
    // and for asChild, the link itself can have hover animations via CSS or we can use motion(Slot)
    // Actually, simple CSS transitions are already applied, so standard Slot is fine.
    
    if (asChild) {
      return (
        <Comp
          ref={ref}
          className={cn(
            "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
            {
              "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm": variant === "default",
              "border border-border bg-background hover:bg-muted hover:text-foreground": variant === "outline",
              "hover:bg-muted hover:text-foreground": variant === "ghost",
              "bg-muted text-foreground hover:bg-muted/80": variant === "secondary",
              "h-10 px-4 py-2": size === "default",
              "h-9 rounded-full px-3": size === "sm",
              "h-12 rounded-full px-8 text-base": size === "lg",
              "h-10 w-10": size === "icon",
            },
            className
          )}
          {...props}
        />
      )
    }

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm": variant === "default",
            "border border-border bg-background hover:bg-muted hover:text-foreground": variant === "outline",
            "hover:bg-muted hover:text-foreground": variant === "ghost",
            "bg-muted text-foreground hover:bg-muted/80": variant === "secondary",
            "h-10 px-4 py-2": size === "default",
            "h-9 rounded-full px-3": size === "sm",
            "h-12 rounded-full px-8 text-base": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className
        )}
        {...(props as any)}
      />
    )
  }
)
Button.displayName = "Button"
