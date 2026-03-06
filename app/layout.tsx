import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import SpotlightEffect from "@/components/SpotlightEffect";
import { ThemeProvider } from "@/components/theme-provider";
import { DottedSurface } from "@/components/ui/dotted-surface";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://avimathur.tech"),
  title: "Avi Mathur — AI/ML Developer & Full Stack Engineer",
  description:
    "Portfolio of Avi Mathur — AI/ML Developer specializing in vector search, LLM automation, and full-stack engineering.",
  keywords: ["AI Developer", "ML Engineer", "Vector Search", "Full Stack Developer", "React", "Next.js", "Python"],
  authors: [{ name: "Avi Mathur" }],
  openGraph: {
    type: "website",
    url: "https://avimathur.tech",
    title: "Avi Mathur — AI/ML Developer & Full Stack Engineer",
    description: "AI/ML Developer specializing in vector search, intelligent automation, and full-stack engineering.",
    siteName: "Avi Mathur Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avi Mathur — AI/ML Developer & Full Stack Engineer",
  },
  robots: { index: true, follow: true },
};

import { CustomCursor } from "@/components/ui/CustomCursor";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Avi Mathur",
    url: "https://avimathur.tech",
    jobTitle: "AI/ML Developer & Full Stack Engineer",
    email: "mathuravi668@gmail.com",
    sameAs: ["https://linkedin.com/in/avi-mathur", "https://github.com/AviMath2412"],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-primary text-primary transition-colors duration-500`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <DottedSurface />
          <SpotlightEffect />
          <CustomCursor />
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
