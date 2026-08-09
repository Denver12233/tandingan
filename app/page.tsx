import About from "@/src/components/sections/About";
import Contact from "@/src/components/sections/Contact";
import Education from "@/src/components/sections/Education";
import Experience from "@/src/components/sections/Experience";
import Hero from "@/src/components/sections/Hero";
import Skills from "@/src/components/sections/Skills";
import Footer from "@/src/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0E14] text-[#F5F3EE] selection:bg-[#F2A65A] selection:text-[#0B0E14]">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
