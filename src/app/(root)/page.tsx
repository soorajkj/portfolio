import * as React from "react";
import About from "@/components/About";
import Contacts from "@/components/Contact";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Temp from "@/components/Temp";

export default function Page() {
  return (
    <React.Fragment>
      <Temp />
      <About />
      <Experience />
      <Projects />
      <Contacts />
    </React.Fragment>
  );
}
