import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import CaseStudy from "@/components/CaseStudy";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <CaseStudy />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
