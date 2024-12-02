import React from "react";
import Container from "@/components/core/container";
import Icon from "./core/icon";

export default function Experience() {
  return (
    <section id="#experience">
      <Container>
        <div className="border-b border-zinc-900 py-24">
          <div className="mb-16 flex flex-col items-center gap-4 text-center">
            <h2 className="max-w-screen-sm bg-gradient-to-b from-zinc-50 via-zinc-300 to-zinc-400 bg-clip-text text-4xl font-semibold leading-tight text-transparent">
              Overview of my professional experience and career progression
            </h2>
            <p className="w-full max-w-md text-sm">
              Although I&apos;m not currently looking for any new opportunities,
              my inbox is always open. Whether you have a question or just want
              to say hi, I&apos;ll try my best to get back to you!
            </p>
          </div>
          <div className="relative grid grid-cols-12">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="group col-span-12 pb-12 last:pb-0">
                <div className="grid grid-cols-12 gap-8">
                  <div className="relative col-span-12 grid lg:col-span-3">
                    <div className="sticky top-12 z-10 self-start">
                      <div className="flex w-full flex-row items-center gap-2">
                        <div className="flex aspect-square size-6 items-center justify-center bg-zinc-950">
                          <Icon
                            icon="Calendar04Icon"
                            className="size-4 flex-1"
                          ></Icon>
                        </div>
                        <span className="ont-family-roboto-pt-mono inline-flex whitespace-nowrap lg:justify-start">
                          October 24, 2024
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="relative col-span-12 lg:col-span-9">
                    <div className="flex flex-col">
                      <h3 className="mb-2 text-lg font-semibold leading-none text-white">
                        Junior Frontend Developer
                      </h3>
                      <div className="mb-8 cursor-pointer text-sm font-medium">
                        <div className="flex items-center gap-2">
                          <p>Stratagile Consultancy PVT LTD</p> |{" "}
                          <p>Kochi, India</p>
                        </div>
                      </div>
                      <div className="w-full">
                        <ul className="list-outside space-y-2 text-sm">
                          <li>
                            Deliver high-quality, robust production code for a
                            diverse array of projects for clients including
                            Harvard Business School, Everytown for Gun Safety,
                            Pratt Institute, Koala Health, Vanderbilt
                            University, The 19th News, and more
                          </li>
                          <li>
                            Work alongside creative directors to lead the
                            research, development, and architecture of technical
                            solutions to fulfill business requirements
                          </li>
                          <li>
                            Collaborate with designers, project managers, and
                            other engineers to transform creative concepts into
                            production realities for clients and stakeholders
                          </li>
                          <li>
                            Provide leadership within engineering department
                            through close collaboration, knowledge shares, and
                            mentorship
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
