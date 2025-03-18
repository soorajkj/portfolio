"use client";

import * as React from "react";
import Container from "@/components/core/container";
import Readme from "@/components/Readme";

export default function About() {
  return (
    <section id="#about" className="relative overflow-hidden">
      <Container>
        <div className="py-24">
          <Readme />
        </div>
      </Container>
    </section>
  );
}
