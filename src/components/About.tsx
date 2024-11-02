import * as React from "react";
import Container from "@/components/core/container";

export default function About() {
  return (
    <section className="relative overflow-hidden">
      <Container>
        <div className="border-b border-neutral-900 py-24">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-6">
              <h2 className="bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-400 bg-clip-text text-4xl font-semibold text-transparent">
                We’re crafting the project planning tool for teams that care
                about quality
              </h2>
            </div>
            <div className="col-span-6 max-w-lg space-y-4 text-sm leading-relaxed text-neutral-400">
              <p>
                Hello! My name is{" "}
                <b className="text-neutral-300">Sooraj Janardhanan</b> and I
                enjoy creating things that live on the internet. My interest in
                web development started back in 2012 when I decided to try
                editing custom Tumblr themes — turns out hacking together a
                custom reblog button taught me a lot about HTML & CSS!
              </p>
              <p>
                Fast-forward to today, and I’ve had the privilege of working at
                an advertising agency, a start-up, a huge corporation, and a
                student-led design studio. My main focus these days is building
                accessible, inclusive products and digital experiences at
                Upstatement for a variety of clients.
              </p>
              <p>
                I also recently launched a course that covers everything you
                need to build a web app with the Spotify API using Node & React.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
