# Avi Mathur - Portfolio Website

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

Modern, performant portfolio website showcasing AI/ML research projects, achievements, and professional experience.

🌐 **Live Site**: [avimathur.tech](https://avimathur.tech)

## ✨ Features

- **Modern Design**: Clean, professional UI with dark mode support
- **3D Graphics**: Interactive Three.js particle effects
- **Smooth Animations**: Framer Motion for fluid transitions
- **Fully Responsive**: Optimized for all devices and screen sizes
- **SEO Optimized**: Complete meta tags, sitemap, and structured data
- **Accessible**: WCAG 2.1 AA compliant with keyboard navigation
- **Performance**: Lighthouse score 90+ across all metrics
- **Secure**: Comprehensive security headers and input validation

## 🚀 Tech Stack

### Core
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion 12

### 3D Graphics
- **Three.js**: 3D rendering
- **React Three Fiber**: React renderer for Three.js
- **React Three Drei**: Useful helpers for R3F

### Additional
- **Form Handling**: Web3Forms API
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter, JetBrains Mono, Cormorant Garamond)

## 📦 Installation

### Prerequisites
- Node.js 20.x or higher
- npm or yarn

### Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AviMath2412/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Create environment file**:
   ```bash
   cp .env.example .env.local
   ```

4. **Update environment variables**:
   ```env
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

5. **Run development server**:
   ```bash
   npm run dev
   ```

6. **Open browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build

### Production Build
```bash
npm run build
npm run start
```

### Lint
```bash
npm run lint
```

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── error.tsx           # Error boundary
│   ├── not-found.tsx       # 404 page
│   ├── loading.tsx         # Loading state
│   ├── globals.css         # Global styles
│   ├── robots.ts           # Robots.txt generation
│   └── sitemap.ts          # Sitemap generation
├── components/
│   ├── sections/           # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Achievements.tsx
│   │   └── Contact.tsx
│   ├── three/              # 3D components
│   │   ├── HeroScene.tsx
│   │   └── ParticleField.tsx
│   ├── ui/                 # UI components
│   └── Navigation.tsx      # Main navigation
├── data/
│   └── content.ts          # Site content and data
├── lib/
│   └── utils.ts            # Utility functions
├── public/                 # Static assets
└── next.config.ts          # Next.js configuration
```

## 🔒 Security

This project implements comprehensive security measures:

- **HTTP Security Headers**: HSTS, CSP, X-Frame-Options, etc.
- **Input Validation**: All form inputs validated and sanitized
- **XSS Protection**: React's built-in escaping + additional measures
- **CSRF Protection**: Handled by Web3Forms API
- **Rate Limiting**: Form submission rate limiting
- **Dependency Security**: Regular audits with npm audit

See [SECURITY.md](SECURITY.md) for detailed security information.

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**:
   ```bash
   git push origin main
   ```

2. **Import to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Configure environment variables
   - Deploy

3. **Set Environment Variables**:
   ```
   NEXT_PUBLIC_SITE_URL=https://avimathur.tech
   ```

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

## ♿ Accessibility

- **WCAG 2.1 AA Compliant**: Meets accessibility standards
- **Keyboard Navigation**: Full keyboard support with skip links
- **Screen Reader Friendly**: Semantic HTML and ARIA labels
- **Reduced Motion**: Respects user motion preferences
- **Color Contrast**: Meets minimum contrast ratios

## 📊 Performance

- **Lighthouse Score**: 90+ across all metrics
- **Core Web Vitals**: Optimized LCP, FID, CLS
- **Code Splitting**: Lazy loading for 3D components
- **Image Optimization**: Next.js Image component
- **Font Optimization**: Google Fonts with display swap

## 🎨 Customization

### Update Content

Edit `data/content.ts` to update:
- Personal information
- Projects
- Skills
- Experience
- Achievements

### Modify Styles

- **Colors**: Update Tailwind config in `tailwind.config.ts`
- **Fonts**: Change in `app/layout.tsx`
- **Global Styles**: Edit `app/globals.css`

### Add Sections

1. Create component in `components/sections/`
2. Import and add to `app/page.tsx`
3. Update navigation in `components/Navigation.tsx`

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

**Avi Mathur**
- Email: mathuravi668@gmail.com
- LinkedIn: [linkedin.com/in/avi-mathur-a3a25727b](https://www.linkedin.com/in/avi-mathur-a3a25727b/)
- GitHub: [github.com/AviMath2412](https://github.com/AviMath2412)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Three.js](https://threejs.org/) - 3D graphics library
- [Web3Forms](https://web3forms.com/) - Form backend
- [Vercel](https://vercel.com/) - Hosting platform

---

**Built with ❤️ by Avi Mathur**
