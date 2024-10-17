import React, { Fragment } from "react";
import About from "@components/about";
import Experience from "@components/experience";
import Hero from "@components/hero";

export default function Page() {
  return (
    <Fragment>
      <Hero />
      <About />
      <Experience />
    </Fragment>
  );
}
