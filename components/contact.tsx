"use client"

import type React from "react"

import { Mail, Linkedin, Github, Send, Phone } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [phoneCopied, setPhoneCopied] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [submitMessage, setSubmitMessage] = useState("")

  const copyEmail = () => {
    navigator.clipboard.writeText("goutham922005@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const copyPhone = () => {
    navigator.clipboard.writeText("+91 9515259081")
    setPhoneCopied(true)
    setTimeout(() => setPhoneCopied(false), 2000)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send email")
      }

      setSubmitStatus("success")
      setSubmitMessage("Message sent successfully! I'll get back to you soon.")
      setFormData({ email: "", subject: "", message: "" })
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } catch (error) {
      setSubmitStatus("error")
      setSubmitMessage(error instanceof Error ? error.message : "Failed to send message. Please try again.")
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const socials = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/gouthamreddy09",
      color: "hover:text-foreground",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/gouthamreddy",
      color: "hover:text-blue-500",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:goutham922005@gmail.com",
      color: "hover:text-red-500",
    },
  ]

  return (
    <section id="contact" className="py-24 px-6 bg-card/40">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Let&apos;s Work Together</h2>
        <div className="w-12 h-1 bg-primary rounded mx-auto mb-8"></div>

        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-center">
          I&apos;m always interested in exploring new opportunities and collaborating on innovative AI/ML projects. Feel
          free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Your Email</label>
              <input
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors text-foreground"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Subject</label>
              <input
                type="text"
                placeholder="Project collaboration, job opportunity..."
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
                maxLength={100}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors text-foreground"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                placeholder="Tell me about your project or opportunity..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={4}
                maxLength={1000}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors text-foreground resize-none"
              />
              <p className="text-xs text-muted-foreground mt-1">{formData.message.length}/1000</p>
            </div>

            {submitStatus === "success" && (
              <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-600">
                ✓ {submitMessage}
              </div>
            )}
            {submitStatus === "error" && (
              <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-600">
                ✕ {submitMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-all font-semibold flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Quick Contact Section */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Contact</h3>
              <button
                onClick={copyEmail}
                className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all font-semibold flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                {copied ? "Email Copied!" : "Copy Email"}
              </button>
              <button
                onClick={copyPhone}
                className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all font-semibold flex items-center justify-center gap-2 mt-3"
              >
                <Phone className="w-5 h-5" />
                {phoneCopied ? "Phone Copied!" : "Copy Phone"}
              </button>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                {socials.map((social, idx) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center w-12 h-12 rounded-lg bg-card border border-border text-muted-foreground ${social.color} transition-all hover:bg-primary/10`}
                      aria-label={social.label}
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  )
                })}
              </div>
            </div>

            <div className="p-4 rounded-lg bg-card border border-border">
              <p className="text-sm text-muted-foreground">
                <strong>Response Time:</strong> I typically reply within 24-48 hours during weekdays.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">📍 Available for remote opportunities and freelance projects</p>
        </div>
      </div>
    </section>
  )
}
