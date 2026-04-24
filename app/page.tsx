import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import AcademicSection from "@/components/sections/academic-section";
import Experience from "@/components/sections/Experience";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="main-content" className="overflow-x-hidden">
      <Hero />
      <Skills />
      <About />
      <Projects />
      <AcademicSection />
      <Experience />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  )
}
