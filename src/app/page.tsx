import { ThemeProvider } from "@/components/ThemeProvider";
import { Sidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Research } from "@/components/Research";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <ThemeProvider>
      <div className="mx-auto grid max-w-[1680px] lg:grid-cols-[clamp(272px,24vw,328px)_1fr]">
        <Sidebar />
        <div id="top">
          <MobileNav />
          <Hero />
          <About />
          <Research />
          <Projects />
          <Experience />
          <Skills />
          <Education />
          <Contact />
        </div>
      </div>
    </ThemeProvider>
  );
}
