import * as React from "react";
import About from "@/components/About";
import Contacts from "@/components/Contact";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Page() {
  return (
    <React.Fragment>
      <About />
      <Experience />
      <Projects />
      <Contacts />
    </React.Fragment>
  );
}
