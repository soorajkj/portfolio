import * as React from "react";
import About from "@/components/About";
import Contacts from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";

export default function Page() {
  return (
    <React.Fragment>
      <Hero />
      <About />
      <Experience />
      <Contacts />
    </React.Fragment>
  );
}
