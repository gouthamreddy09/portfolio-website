"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Sparkles } from "lucide-react"

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

      <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border text-sm text-accent font-medium">
            <Sparkles className="w-4 h-4" />
            Welcome to my portfolio
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight text-balance">Goutham Reddy</h1>

          <p className="text-2xl md:text-3xl font-semibold text-primary mb-4 text-balance">
            AI/ML Developer & Generative AI Enthusiast
          </p>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4 leading-relaxed text-pretty">
            I build intelligent solutions with cutting-edge AI technologies. Specialized in{" "}
            <span className="text-accent font-semibold">LLMs, Stable Diffusion, RAG Systems</span>, and full-stack
            development. Currently exploring the frontiers of generative AI and machine learning innovation.
          </p>

          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto mb-8">
            Smart India Hackathon 2024 Participant • AI/ML Intern @Vipplav AI • Python • PyTorch • React
          </p>
        </div>

        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className="px-8 py-4 rounded-lg bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all font-semibold flex items-center justify-center gap-2 group text-lg"
            >
              Explore My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-lg border-2 border-border text-foreground hover:bg-card/50 transition-all font-semibold text-lg"
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div className={`transition-all duration-1000 delay-500 pt-12 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold text-primary">3+</p>
              <p className="text-sm text-muted-foreground font-medium">AI/ML Projects</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold text-accent">15+</p>
              <p className="text-sm text-muted-foreground font-medium">Technologies</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold text-primary">2025</p>
              <p className="text-sm text-muted-foreground font-medium">Intern @Vipplav</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold text-accent">100%</p>
              <p className="text-sm text-muted-foreground font-medium">Passionate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
