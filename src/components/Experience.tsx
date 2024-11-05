import React from "react";
import Container from "@/components/core/container";

export default function Experience() {
  return (
    <section id="#experience">
      <Container>
        <div className="border-b border-neutral-900 py-24">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-6">
              <h2 className="bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-400 bg-clip-text text-4xl font-semibold leading-tight text-transparent">
                Overview of my professional experience and career progression
              </h2>
            </div>
            <div className="col-span-6">
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
          <div className="relative mt-24">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="group grid grid-cols-12 gap-8 pb-12 last:pb-0"
              >
                <div className="relative z-10 col-span-12 lg:col-span-6">
                  <div className="lg:sticky lg:top-24">
                    <p className="flex whitespace-nowrap pr-8 text-sm text-neutral-400 lg:justify-end">
                      October 24, 2024
                    </p>
                  </div>
                </div>
                <div className="relative col-span-12 lg:col-span-6">
                  <h3 className="mb-1.5 text-base font-semibold text-white">
                    Junior Frontend Developer
                  </h3>
                  <div className="mb-8 cursor-pointer text-sm font-medium text-neutral-300">
                    <div className="flex items-center gap-2">
                      <p>Stratagile Consultancy PVT LTD</p> |{" "}
                      <p>Kochi, India</p>
                    </div>
                  </div>
                  <div className="max-w-screen-sm text-neutral-400">
                    <ul className="list-outside space-y-2 text-sm">
                      <li>
                        Deliver high-quality, robust production code for a
                        diverse array of projects for clients including Harvard
                        Business School, Everytown for Gun Safety, Pratt
                        Institute, Koala Health, Vanderbilt University, The 19th
                        News, and more
                      </li>
                      <li>
                        Work alongside creative directors to lead the research,
                        development, and architecture of technical solutions to
                        fulfill business requirements
                      </li>
                      <li>
                        Collaborate with designers, project managers, and other
                        engineers to transform creative concepts into production
                        realities for clients and stakeholders
                      </li>
                      <li>
                        Provide leadership within engineering department through
                        close collaboration, knowledge shares, and mentorship
                      </li>
                    </ul>
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
