import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "PicHaven - Cloud Photo Management",
      description:
        "A scalable full-stack cloud photo platform with secure image management, real-time search, and password-locked hidden folders.",
      longDescription:
        "Built a comprehensive photo management solution featuring 19 Supabase Edge Functions, drag-and-drop uploads, tag-based filtering, and production-ready CI/CD pipeline.",
      tech: ["React", "TypeScript", "Supabase", "AWS S3", "PostgreSQL", "Tailwind CSS"],
      link: "https://pichaven.netlify.app",
      github: "https://github.com/gouthamreddy09/PicHaven",
      image: "/projects/pichaven-cover.jpg",
      color: "from-blue-600 to-purple-600",
    },
    {
      title: "RAG Pipeline Documentation System",
      description:
        "Intelligent document processing system using Retrieval-Augmented Generation with semantic search capabilities.",
      longDescription:
        "Developed a comprehensive RAG pipeline featuring PDF text extraction, FAISS vector indexing, semantic search using SentenceTransformers, and contextual response generation with source traceability.",
      tech: ["Python", "LangChain", "FAISS", "SentenceTransformers", "TinyLlama", "scikit-learn"],
      link: "#",
      github: "https://github.com/gouthamreddy09/rag",
      image: "/projects/rag-pipeline-cover.jpg",
      color: "from-purple-600 to-pink-600",
    },
    {
      title: "Stable Diffusion Fine-tuning",
      description: "Fine-tuned Stable Diffusion v1.4 on Flickr30k dataset with multilingual support.",
      longDescription:
        "Implemented custom data preprocessing pipeline with VAE encoding, achieved memory-optimized training with mixed precision (fp16), and added multilingual support for Telugu language prompts.",
      tech: ["Python", "PyTorch", "Diffusers", "CUDA", "Google Colab", "Hugging Face"],
      link: "#",
      github: "https://github.com/gouthamreddy09/Stable-Diffusion-Fine-tuning-with-Flickr30k-Dataset",
      image: "/projects/stable-diffusion-cover.jpg",
      color: "from-green-600 to-cyan-600",
    },
    {
      title: "FlowCure - Healthcare Analytics Platform",
      description:
        "Healthcare Analytics Platform for Hospital Operations Optimization with real-time dashboards, patient flow analysis, and bottleneck detection.",
      longDescription:
        "Built comprehensive analytics dashboards featuring executive KPIs, admission trends, department metrics, patient flow visualization, AI-powered bottleneck detection, what-if simulation, and optimization insights with multi-workspace support and role-based access control.",
      tech: ["React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "Vite"],
      link: "https://flowcure.netlify.app", // Updated FlowCure link to production URL
      github: "https://github.com/gouthamreddy09/CareFlow",
      image: "/projects/flowcure-cover.jpg",
      color: "from-emerald-600 to-teal-600",
    },
  ]

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Projects</h2>
          <div className="w-12 h-1 bg-primary rounded"></div>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group rounded-lg bg-card border border-border overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <div className="relative h-48 w-full overflow-hidden bg-muted">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-card/80"></div>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs px-3 py-1 rounded-full bg-muted/50 text-muted-foreground">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex gap-3">
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors"
                    >
                      View Live
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors"
                    >
                      GitHub
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
