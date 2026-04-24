import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://avimathur.tech"),
  title: {
    default: "Avi Mathur — AI/ML Research Engineer",
    template: "%s | Avi Mathur",
  },
  description:
    "Portfolio of Avi Mathur — AI/ML Research Engineer specializing in reinforcement learning, LLM evaluation, and deployed neural systems.",
  keywords: [
    "AI Developer",
    "ML Engineer",
    "Reinforcement Learning",
    "LLM Evaluation",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Python",
    "TensorFlow",
    "PyTorch",
  ],
  authors: [{ name: "Avi Mathur", url: "https://avimathur.tech" }],
  creator: "Avi Mathur",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://avimathur.tech",
    title: "Avi Mathur — AI/ML Research Engineer",
    description:
      "AI/ML Research Engineer specializing in reinforcement learning, LLM evaluation, and deployed neural systems.",
    siteName: "Avi Mathur Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avi Mathur — AI/ML Research Engineer",
    description:
      "AI/ML Research Engineer specializing in reinforcement learning, LLM evaluation, and deployed neural systems.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://avimathur.tech";
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Avi Mathur",
    url: siteUrl,
    jobTitle: "AI/ML Research Engineer",
    email: "mathuravi668@gmail.com",
    sameAs: [
      "https://www.linkedin.com/in/avi-mathur-a3a25727b/",
      "https://github.com/AviMath2412",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Poornima Institute of Engineering and Technology",
    },
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Reinforcement Learning",
      "Deep Learning",
      "Python",
      "TensorFlow",
      "PyTorch",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/icon.png" />
      </head>
      <body className={`${inter.variable} ${jetBrainsMono.variable} ${cormorant.variable} font-sans antialiased bg-primary text-primary transition-colors duration-500`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Script
            id="person-json-ld"
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
