export default function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "Java", "HTML/CSS"],
    },
    {
      category: "AI/ML Technologies",
      skills: [
        "PyTorch",
        "TensorFlow",
        "Stable Diffusion",
        "LLM Concepts",
        "RAG Systems",
        "Vector Embeddings",
        "FAISS",
      ],
    },
    {
      category: "Web Development",
      skills: ["React.js", "Next.js", "Flask", "Tailwind CSS", "TypeScript"],
    },
    {
      category: "Databases & Backend",
      skills: ["Supabase", "PostgreSQL", "AWS S3", "Edge Functions", "REST APIs"],
    },
    {
      category: "Tools & Platforms",
      skills: ["Google Colab", "Hugging Face", "Git", "Vercel", "Netlify", "CUDA"],
    },
    {
      category: "NLP & APIs",
      skills: ["Google Translate API", "OpenWeather API", "Google Maps API", "LangChain", "SentenceTransformers"],
    },
  ]

  return (
    <section id="skills" className="py-24 px-6 bg-card/40">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Skills & Expertise</h2>
          <div className="w-12 h-1 bg-primary rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg bg-background border border-border hover:border-primary transition-all duration-300"
            >
              <h3 className="font-bold text-lg mb-4 text-primary">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-primary/10 text-sm text-foreground border border-primary/20 hover:border-primary hover:text-primary transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-border">
          <h3 className="font-bold text-lg mb-4">Soft Skills</h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Logical Thinking",
              "Problem Solving",
              "Team Collaboration",
              "Prompt Engineering",
              "Research",
              "Communication",
            ].map((skill, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full bg-primary/20 text-sm text-foreground border border-primary/30"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
