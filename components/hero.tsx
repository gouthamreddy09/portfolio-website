"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-card border border-border text-xs text-accent">
            Welcome to my portfolio
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Goutham Reddy</h1>
          <p className="text-xl text-muted-foreground mb-4">AI/ML Developer | Generative AI Enthusiast</p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Building intelligent solutions with cutting-edge AI technologies. Specialized in LLMs, Stable Diffusion, and
            full-stack development.
          </p>
        </div>

        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all font-medium flex items-center justify-center gap-2 group"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg border border-border text-foreground hover:bg-card transition-all font-medium"
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div className={`transition-all duration-1000 delay-500 pt-8 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
            <div>
              <p className="text-3xl font-bold text-primary">3+</p>
              <p className="text-sm text-muted-foreground">Projects</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent">8+</p>
              <p className="text-sm text-muted-foreground">Technologies</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">2025</p>
              <p className="text-sm text-muted-foreground">Intern @Vipplav AI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
