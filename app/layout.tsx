import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import SpotlightEffect from "@/components/SpotlightEffect";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://techwithavi.xyz'),
  title: "Avi Mathur — AI/ML Developer & Full Stack Engineer",
  description: "Portfolio of Avi Mathur — AI/ML Developer specializing in vector search, LLM automation, and full-stack engineering. Building intelligent systems that solve real-world problems.",
  keywords: ["AI Developer", "ML Engineer", "Vector Search", "LLM Automation", "Full Stack Developer", "React", "Next.js", "Python", "TensorFlow", "LangChain"],
  authors: [{ name: "Avi Mathur" }],
  creator: "Avi Mathur",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://techwithavi.xyz",
    title: "Avi Mathur — AI/ML Developer & Full Stack Engineer",
    description: "AI/ML Developer specializing in vector search, intelligent automation, and full-stack engineering. Building production-ready AI systems.",
    siteName: "Avi Mathur Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Avi Mathur - AI/ML Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Avi Mathur — AI/ML Developer & Full Stack Engineer",
    description: "Building intelligent systems with vector search, LLM automation, and modern web technologies.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Avi Mathur",
    url: "https://techwithavi.xyz",
    image: "https://techwithavi.xyz/og.png",
    jobTitle: "AI/ML Developer & Full Stack Engineer",
    description: "AI/ML developer specializing in vector search, intelligent automation, and full-stack engineering.",
    email: "mathuravi668@gmail.com",
    telephone: "+91-77009-23732",
    sameAs: [
      "https://linkedin.com/in/avi-mathur",
      "https://github.com/AviMath2412",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Rajasthan Technical University",
    },
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Vector Search",
      "LLM Automation",
      "Full Stack Development",
      "React.js",
      "Next.js",
      "Python",
      "TensorFlow",
      "LangChain",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-bg text-text`}>
        <SpotlightEffect />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
