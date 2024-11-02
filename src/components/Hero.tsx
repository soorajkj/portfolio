import * as React from "react";
import Container from "@/components/core/container";

export default function Hero() {
  return (
    <section className="hidden">
      <Container>
        <div className="pt-24">
          <div className="flex w-full flex-col items-center justify-center gap-4 text-center">
            <h1 className="font-family-bebas-neue text-6xl">
              I craft things for the Internet
            </h1>
            <p className="max-w-lg text-neutral-300">
              I’m a software engineer specializing in building (and occasionally
              designing) exceptional digital experiences. Currently, I’m focused
              on building accessible, human-centered products at Upstatement.
            </p>
            <div className="flex gap-2">
              <button className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black">
                Browse works
              </button>
              {/* <button className="rounded-lg bg-neutral-800 px-4 py-2 text-sm font-medium text-white">
                Download Resume
              </button> */}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
