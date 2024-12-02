"use client";

import * as React from "react";
import Container from "@/components/core/container";
import Readme from "@/components/Readme";

export default function About() {
  return (
    <section id="#about" className="relative overflow-hidden">
      <Container>
        <div className="py-24">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12">
              <Readme />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
