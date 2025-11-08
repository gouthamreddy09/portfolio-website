"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden"
      style={{
        backgroundImage: "url(/hero-background.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40"></div>

      <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-4 leading-tight text-balance">Goutham Reddy Chellapuram</h1>

          <p className="text-xl md:text-2xl font-semibold text-primary mb-3">
            AI/ML Developer & Generative AI Enthusiast
          </p>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
            Computer Science undergraduate specializing in AI & Machine Learning with hands-on experience in LLMs,
            Stable Diffusion, and RAG Systems. Smart India Hackathon 2024 participant with a passion for building
            intelligent solutions.
          </p>

          <p className="text-sm text-muted-foreground">
            📍 Hyderabad, Telangana | 📧 goutham922005@gmail.com | 📱 +91 9515259081
          </p>
        </div>

        <div
          className={`transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 max-w-2xl mx-auto">
            <div className="p-3 rounded-lg bg-card/50 border border-border/50">
              <p className="text-2xl font-bold text-primary">3+</p>
              <p className="text-sm text-muted-foreground">AI/ML Projects</p>
            </div>
            <div className="p-3 rounded-lg bg-card/50 border border-border/50">
              <p className="text-2xl font-bold text-primary">15+</p>
              <p className="text-sm text-muted-foreground">Technologies</p>
            </div>
            <div className="p-3 rounded-lg bg-card/50 border border-border/50">
              <p className="text-2xl font-bold text-primary">2025</p>
              <p className="text-sm text-muted-foreground">Intern @ Vipplav</p>
            </div>
            <div className="p-3 rounded-lg bg-card/50 border border-border/50">
              <p className="text-2xl font-bold text-primary">100%</p>
              <p className="text-sm text-muted-foreground">Dedication</p>
            </div>
          </div>
        </div>

        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a
              href="#projects"
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all font-semibold flex items-center justify-center gap-2 group"
            >
              Explore My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg border-2 border-border text-foreground hover:bg-card/50 transition-all font-semibold"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
