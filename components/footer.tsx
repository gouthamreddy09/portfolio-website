export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-6 border-t border-border bg-card/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© {currentYear} Goutham Reddy. All rights reserved.</p>
          <p className="text-sm text-muted-foreground">Crafted with ❤️ using React, Next.js, and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
