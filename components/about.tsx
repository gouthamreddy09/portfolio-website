export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-card/40">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <div className="w-12 h-1 bg-primary rounded mb-8"></div>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              I&apos;m a Computer Science undergraduate at GITAM specializing in AI & Machine Learning, with a passion
              for generative AI and prompt engineering. Currently, I&apos;m exploring the intersection of cutting-edge
              AI technologies and practical applications.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              As a participant in Smart India Hackathon 2024, I&apos;ve developed a strong foundation in building
              AI-integrated, user-centric solutions. During my AI/ML internship at Vipplav AI (May-June 2025), I gained
              hands-on experience with machine learning model development and deployment in real-world scenarios.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m committed to translating theoretical knowledge into practical applications, constantly learning
              and pushing the boundaries of what&apos;s possible with AI.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-lg bg-background border border-border">
              <h3 className="font-semibold mb-2 text-primary">Education</h3>
              <p className="text-sm text-muted-foreground mb-1">
                <strong>B.Tech in Computer Science (AI & ML)</strong>
              </p>
              <p className="text-sm text-muted-foreground mb-3">GITAM, Hyderabad | CGPA: 7.42</p>
              <p className="text-xs text-muted-foreground">July 2022 - June 2026</p>
            </div>

            <div className="p-6 rounded-lg bg-background border border-border">
              <h3 className="font-semibold mb-2 text-accent">Location</h3>
              <p className="text-sm text-muted-foreground">Hyderabad, Telangana, India</p>
            </div>

            <div className="p-6 rounded-lg bg-background border border-border">
              <h3 className="font-semibold mb-2 text-primary">Contact</h3>
              <p className="text-sm text-muted-foreground mb-2">
                <a href="tel:+919515259081" className="hover:text-accent transition-colors">
                  +91 9515259081
                </a>
              </p>
              <p className="text-sm text-muted-foreground">
                <a href="mailto:goutham922005@gmail.com" className="hover:text-accent transition-colors">
                  goutham922005@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
