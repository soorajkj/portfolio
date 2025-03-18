import * as React from "react";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Page() {
  return (
    <React.Fragment>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </React.Fragment>
  );
}
