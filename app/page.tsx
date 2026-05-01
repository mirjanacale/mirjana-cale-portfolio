import Navbar    from "@/components/layout/Navbar";
import Footer    from "@/components/layout/Footer";
import Hero      from "@/components/sections/Hero";
import About     from "@/components/sections/About";
import Skills    from "@/components/sections/Skills";
import Projects  from "@/components/sections/Projects";
import CaseStudy from "@/components/sections/CaseStudy";
import Contact   from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CaseStudy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
