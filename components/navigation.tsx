"use client"

import { useState } from "react"

interface NavigationProps {
  scrolled: boolean
}

export default function Navigation({ scrolled }: NavigationProps) {
  const [activeSection, setActiveSection] = useState("home")

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-primary">
          GOUTHAM REDDY
        </a>

        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="px-6 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all text-sm font-medium"
        >
          Let&apos;s Talk
        </a>
      </div>
    </nav>
  )
}
