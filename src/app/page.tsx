import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Roadmap from "@/components/Roadmap";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Roadmap />
      <Contact />
    </main>
  );
}
