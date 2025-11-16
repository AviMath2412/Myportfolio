# Avi Mathur - Portfolio Website

A modern, aesthetic, production-grade portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- ⚡ Built with Next.js 14 App Router
- 🎨 Styled with Tailwind CSS
- ✨ Smooth animations with Framer Motion
- 🌙 Dark mode by default with theme toggle
- 📱 Fully responsive design
- 🎯 SEO optimized with metadata and sitemap
- 🔥 Modern glassmorphism UI
- 📧 Contact form with EmailJS integration
- ♿ Accessibility compliant

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Email:** EmailJS
- **Deployment:** Vercel (recommended)

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📧 EmailJS Setup

To enable the contact form:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Get your credentials (Service ID, Template ID, Public Key)
5. Update `components/sections/Contact.tsx` with your credentials:

```typescript
await emailjs.sendForm(
  "YOUR_SERVICE_ID",
  "YOUR_TEMPLATE_ID",
  formRef.current,
  "YOUR_PUBLIC_KEY"
);
```

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme:
- `deepBlue`: #0A1128
- `neonAzure`: #00C2FF
- `softWhite`: #F5F7FA
- `blueViolet`: #6E00FF

### Content
All content is centralized in `data/content.ts`. Update:
- Personal information
- Skills
- Experience
- Projects
- Certifications

### Logo & Branding
The logo and vector compass symbol are in `components/Logo.tsx`.

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── sitemap.ts          # SEO sitemap
│   └── robots.ts           # Robots.txt
├── components/
│   ├── sections/           # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   ├── Logo.tsx            # Logo & symbol components
│   ├── Navigation.tsx      # Navigation bar
│   ├── ThemeProvider.tsx   # Theme context
│   └── Footer.tsx          # Footer component
├── data/
│   └── content.ts          # All content data
├── public/                 # Static assets
└── tailwind.config.ts      # Tailwind configuration
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

Build the production version:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## 📝 SEO Checklist

- [x] Meta tags configured
- [x] Open Graph tags added
- [x] Sitemap generated
- [x] Robots.txt configured
- [x] Semantic HTML
- [x] Alt text for images
- [x] ARIA labels
- [ ] Add your domain to `sitemap.ts` and `robots.ts`
- [ ] Create and add `og.png` image to `/public`
- [ ] Add favicon files

## 🎯 Performance Optimization

- Lazy loading for images
- Optimized fonts with Next.js font optimization
- Minimal JavaScript bundle
- CSS purging with Tailwind
- Static generation where possible

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contact

- **Email:** mathuravi668@gmail.com
- **LinkedIn:** [linkedin.com/in/avi-mathur](https://linkedin.com/in/avi-mathur)
- **GitHub:** [github.com/AviMath2412](https://github.com/AviMath2412)

---

Built with ❤️ by Avi Mathur
