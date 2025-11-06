# 🚀 AI/ML Developer Portfolio

A modern, responsive portfolio website showcasing Goutham Reddy Chellapuram's expertise in AI/ML, full-stack development, and generative AI projects.

## ✨ Features

- **Modern Dark Theme**: Sophisticated navy gradient background with purple/blue accents
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices
- **Project Showcase**: Dynamic project cards with cover images, descriptions, and live demos
- **Email Contact Form**: Integrated with Resend for direct email delivery
- **Skills Section**: Organized by categories (Programming, AI/ML, Web Dev, Databases, Tools)
- **Achievement Highlights**: Smart India Hackathon, internships, and certifications
- **Quick Contact**: Copy email and phone number with smooth feedback
- **Smooth Animations**: Hover effects and transitions for enhanced UX

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Components**: React with TypeScript
- **Email Service**: Resend API
- **Icons**: Lucide React
- **Fonts**: Geist (Google Fonts)

## 📋 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone or download the project**
   \`\`\`bash
   git clone <repository-url>
   cd portfolio
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up environment variables**
   - Open the Vars section in v0 or create a `.env.local` file
   - Add your Resend API key:
     \`\`\`
     RESEND_API_KEY=your_resend_api_key_here
     \`\`\`

4. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

5. **Open in browser**
   Navigate to `http://localhost:3000`

## ⚙️ Configuration

### Customizing Contact Information

Edit `components/contact.tsx`:
- Email: Update `goutham922005@gmail.com`
- Phone: Update `+91 9515259081`
- Social Links: Add your GitHub and LinkedIn URLs

### Updating Project Information

Edit `components/projects.tsx` to:
- Modify project titles, descriptions, and tech stacks
- Update live demo and GitHub links
- Add or remove projects

### Changing Design Colors

Edit `app/globals.css`:
- Modify CSS variables for colors, spacing, and typography
- Update gradient background colors
- Adjust card and accent colors

## 📧 Email Contact Form Setup

The contact form uses **Resend** for email delivery:

1. **Get your Resend API Key**
   - Visit [resend.com](https://resend.com)
   - Create an account and get your API key

2. **Add to Environment Variables**
   - In v0: Go to Vars section → Add `RESEND_API_KEY`
   - Or in `.env.local`:
     \`\`\`
     RESEND_API_KEY=your_key_here
     \`\`\`

3. **Email Recipient**
   - All contact form submissions go to: `goutham922005@gmail.com`
   - Update this in `app/api/send-email/route.ts` if needed

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel Dashboard](https://vercel.com)
3. Add environment variables in Vercel Project Settings
4. Deploy with one click

### Other Hosting Options

- **Netlify**: Connect GitHub repo and deploy
- **GitHub Pages**: Build and deploy static site
- **Any Node.js Host**: Ensure Node.js 18+ support

## 📁 Project Structure

\`\`\`
portfolio/
├── app/
│   ├── api/
│   │   └── send-email/
│   │       └── route.ts          # Email API endpoint
│   ├── globals.css               # Global styles & design tokens
│   ├── layout.tsx                # Root layout with fonts
│   └── page.tsx                  # Main page
├── components/
│   ├── navigation.tsx            # Header navigation
│   ├── hero.tsx                  # Hero section
│   ├── about.tsx                 # About & education
│   ├── projects.tsx              # Project showcase
│   ├── skills.tsx                # Skills section
│   ├── achievements.tsx          # Achievements & certifications
│   └── contact.tsx               # Contact form & quick contact
├── public/
│   └── projects/                 # Project cover images
└── README.md                      # This file
\`\`\`

## 🎨 Customization Tips

- **Add New Sections**: Create new components in `/components` and import in `app/page.tsx`
- **Update Images**: Replace project images in `/public/projects/`
- **Modify Fonts**: Update `app/layout.tsx` to change fonts
- **Adjust Spacing**: Update Tailwind classes for responsive breakpoints
- **Change Colors**: Modify CSS variables in `app/globals.css`

## 🐛 Troubleshooting

### Email Form Not Working
- ✅ Check RESEND_API_KEY is set in environment variables
- ✅ Verify API key is valid in Resend dashboard
- ✅ Check browser console for error messages

### Images Not Loading
- ✅ Ensure images exist in `/public/projects/`
- ✅ Check image file paths in `components/projects.tsx`

### Styling Issues
- ✅ Clear browser cache (Cmd/Ctrl + Shift + R)
- ✅ Verify Tailwind classes are correct
- ✅ Check globals.css for CSS variable definitions

## 📞 Contact

- **Email**: goutham922005@gmail.com
- **Phone**: +91 9515259081
- **GitHub**: [gouthamreddy09](https://github.com/gouthamreddy09)

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ by Goutham Reddy Chellapuram**
