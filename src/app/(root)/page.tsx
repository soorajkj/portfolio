import * as React from "react";
import About from "@/components/About";
import Experience from "@/components/Experience";
import GetInTouch from "@/components/GetInTouch";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Page() {
  return (
    <React.Fragment>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <GetInTouch />
    </React.Fragment>
  );
}
