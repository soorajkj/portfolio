import * as React from "react";
import Container from "@/components/core/container";
import Project from "@/components/Project";

export default function Projects() {
  return (
    <section id="#projects">
      <Container>
        <div className="py-24">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-6">
              <h2 className="bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-400 bg-clip-text text-4xl font-semibold leading-tight text-transparent">
                Here are some of the things that I&apos;ve built
              </h2>
            </div>
            <div className="col-span-12 md:col-span-6">
              <p className="text-sm text-neutral-400">
                Linear has always been a fully remote company. Today, our small
                but mighty team is distributed across North America and Europe.
                What unites us is relentless focus, fast execution, and our
                passion for software craftsmanship. We are all makers at heart
                and care deeply about the quality of our work, down to the
                smallest detail.
              </p>
            </div>
          </div>
          <div className="mt-24 grid w-full grid-cols-12 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="col-span-12 md:col-span-6">
                <Project />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
