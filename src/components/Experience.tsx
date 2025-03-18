"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "@/components/core/container";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <section id="#experience" className="relative overflow-hidden">
      <Container>
        <div className="py-24">
          <div className="flex flex-col items-center gap-4 pb-24 text-center">
            <h2 className="max-w-screen-sm font-family-bebas text-5xl font-medium leading-none text-neutral-900">
              From learning code to building solutions for the web
            </h2>
            <p className="w-full max-w-lg text-base">
              From my Diploma in Computer Engineering, where I first developed a
              passion for building and problem-solving, to stepping into the
              professional world. This timeline highlights the key moments that
              have shaped my career in tech.
            </p>
          </div>
          <div className="relative w-full" ref={containerRef}>
            <div ref={ref} className="mx-auto">
              <div className="grid grid-cols-12 gap-6">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="group col-span-12">
                    <div className="grid grid-cols-12">
                      <div className="relative col-span-12 grid lg:col-span-4">
                        <div className="sticky top-12 z-10 self-start">
                          <div className="flex w-full flex-row items-center gap-2">
                            <span className="inline-flex whitespace-nowrap text-base font-medium leading-none">
                              October 24, 2024
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="relative col-span-12 lg:col-span-8">
                        <div className="flex flex-col">
                          <h3 className="mb-1 text-lg font-semibold leading-none text-neutral-700">
                            Junior Frontend Developer
                          </h3>
                          <div className="mb-4 cursor-pointer text-base font-semibold">
                            <div className="flex items-center gap-2">
                              <p>Stratagile Consultancy PVT LTD</p> |{" "}
                              <p>Kochi, India</p>
                            </div>
                          </div>
                          <div className="w-full">
                            <ul className="list-outside space-y-2 text-base">
                              <li>
                                Deliver high-quality, robust production code for
                                a diverse array of projects for clients
                                including Harvard Business School, Everytown for
                                Gun Safety, Pratt Institute, Koala Health,
                                Vanderbilt University, The 19th News, and more
                              </li>
                              <li>
                                Work alongside creative directors to lead the
                                research, development, and architecture of
                                technical solutions to fulfill business
                                requirements
                              </li>
                              <li>
                                Collaborate with designers, project managers,
                                and other engineers to transform creative
                                concepts into production realities for clients
                                and stakeholders
                              </li>
                              <li>
                                Provide leadership within engineering department
                                through close collaboration, knowledge shares,
                                and mentorship
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div
                style={{ height: height + "px" }}
                className="absolute -left-6 top-0 w-px overflow-hidden bg-transparent"
              >
                <motion.div
                  style={{
                    height: heightTransform,
                    opacity: opacityTransform,
                  }}
                  className="absolute inset-x-0 top-0 w-px bg-orange-500"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
