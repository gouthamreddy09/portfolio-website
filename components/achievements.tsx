import { Trophy, Award, Briefcase } from "lucide-react"

export default function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: "Smart India Hackathon 2024",
      description: "Selected participant - Built CitySage & Farm Link projects",
      color: "text-yellow-500",
    },
    {
      icon: Briefcase,
      title: "AI/ML & NLP Intern",
      description: "Vipplav AI (May - June 2025) - Hands-on experience with ML models and NLP solutions",
      color: "text-blue-500",
    },
    {
      icon: Award,
      title: "Cybersecurity Training",
      description: "TATA & Mastercard simulations - IAM policies, phishing analysis, threat evaluation",
      color: "text-purple-500",
    },
  ]

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Accomplishments</h2>
          <div className="w-12 h-1 bg-primary rounded"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, idx) => {
            const Icon = achievement.icon
            return (
              <div
                key={idx}
                className="p-8 rounded-lg bg-card border border-border hover:border-primary transition-all duration-300 group"
              >
                <Icon className={`w-8 h-8 mb-4 ${achievement.color} group-hover:scale-110 transition-transform`} />
                <h3 className="font-bold text-lg mb-2">{achievement.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{achievement.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
