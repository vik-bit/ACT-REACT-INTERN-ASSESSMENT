# ACT - Avyukt Core Technology

A modern, responsive website for ACT (Avyukt Core Technology) - a leading software development company specializing in custom solutions, eCommerce platforms, and digital transformation services.

## 🚀 Features

- **Modern Design**: Clean, professional interface with vibrant gradients and animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive Components**: Smooth scrolling navigation, hover effects, and dynamic forms
- **Performance Optimized**: Built with Next.js 15 for optimal loading speeds
- **Accessible**: Follows web accessibility best practices
- **SEO Ready**: Structured for search engine optimization

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom gradients and animations
- **UI Components**: Radix UI primitives with shadcn/ui
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Deployment**: Vercel-ready

## 📋 Sections

- **Hero**: Compelling introduction with animated background
- **Solutions**: Comprehensive service offerings with visual cards
- **Pricing**: Three-tier pricing structure (Basic, Standard, Elite)
- **FAQs**: Common questions and detailed answers
- **Contact**: Interactive contact form with company information
- **Footer**: Company details and quick navigation

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/your-username/act-website.git
cd act-website
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

\`\`\`
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── header.tsx        # Navigation header
│   ├── hero-section.tsx  # Hero section
│   ├── solutions-section.tsx
│   ├── pricing-section.tsx
│   ├── faq-section.tsx
│   ├── contact-section.tsx
│   └── footer.tsx
├── lib/                  # Utility functions
└── public/              # Static assets
\`\`\`

## 🎨 Customization

### Colors and Themes

The website uses a custom color scheme defined in `app/globals.css`. Key color variables:

- Primary gradient: Blue to purple (`#667eea` to `#764ba2`)
- Secondary gradients: Various combinations for different sections
- Background gradients: Subtle animated backgrounds

### Content Updates

1. **Company Information**: Update contact details in `components/contact-section.tsx` and `components/footer.tsx`
2. **Services**: Modify the solutions array in `components/solutions-section.tsx`
3. **Pricing**: Update pricing plans in `components/pricing-section.tsx`
4. **FAQs**: Edit questions and answers in `components/faq-section.tsx`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

**ACT - Avyukt Core Technology**
- Email: hello@act-tech.com
- Phone: +1 (555) 123-4567
- Address: 123 Tech Street, Innovation District, San Francisco, CA 94105

## 🙏 Acknowledgments

- Design inspiration from modern SaaS websites
- Icons provided by Lucide React
- UI components built with Radix UI
- Styling powered by Tailwind CSS

---

Built with ❤️ by the ACT development team
