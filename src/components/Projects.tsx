import * as React from "react";
import Container from "@/components/core/container";
import Project from "@/components/Project";

export default function Projects() {
  return (
    <section id="#projects" className="relative overflow-hidden">
      <Container>
        <div className="py-24">
          <div className="flex flex-col items-center gap-4 pb-24 text-center">
            <h2 className="max-w-screen-sm font-family-bebas text-5xl leading-none text-neutral-900">
              Here are some of the things that I&apos;ve built during my journey
            </h2>
            <p className="w-full max-w-lg text-base">
              Each project I’ve worked on has been an opportunity to solve
              real-world problems and push my skills further. From dynamic web
              applications to scalable systems, these are just a few projects
              I’ve developed over time.
            </p>
          </div>
          <div className="relative overflow-x-auto">
            <div className="mx-auto grid max-w-4xl grid-cols-12 gap-6">
              {Array.from({ length: 6 }).map((_p, i) => (
                <div key={i} className="group col-span-6">
                  <Project />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
