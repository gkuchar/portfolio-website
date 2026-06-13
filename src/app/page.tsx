import Image from "next/image";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6">
      <Hero />
      <About />
      <Skills />
    </main>
  );
}
