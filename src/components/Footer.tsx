"use client";

import * as React from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { classnames } from "@/utils/classnames";
import Container from "@/components/core/container";

interface Link {
  name: string;
  url: string;
  progress?: boolean;
}

interface LinksCategory {
  [category: string]: Link[];
}

const links: LinksCategory = {
  Menu: [
    { name: "Home", url: "#home" },
    { name: "About", url: "#about" },
    { name: "Experience", url: "#experience" },
    { name: "Projects", url: "#projects" },
    { name: "Contact", url: "#contact" },
  ],
  Socials: [
    { name: "GitHub", url: "https://github.com/soorajkj" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/soorajkj" },
    { name: "Twitter", url: "https://x.com/soorajkj7" },
  ],
  More: [{ name: "Blog", url: "", progress: true }],
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-neutral-200">
      <Container>
        <div className="static">
          <div className="flex flex-col justify-between gap-6 py-6 lg:flex-row">
            <div className="relative flex flex-1 flex-col gap-4">
              <p className="hidden max-w-sm text-sm lg:block">
                Crafted using ReactJS + NextJS, and TypeScript for a smooth,
                dynamic experience, with Tailwind CSS for styling, and all
                development happening in VSCode
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 109 70"
                width={109}
                height={70}
              >
                <path
                  stroke="#707070"
                  strokeDasharray="2 3"
                  strokeLinejoin="round"
                  d="M8.112 56.534c20.141-6.58 38.911-18.41 51.927-35.297 3.46-4.485 6.58-10.681 3.723-15.589-2.76-4.75-9.37-5.173-14.736-4.258C27.816 4.98 9.23 21.345 2.786 42.106 1.454 46.394.598 50.928 1.19 55.383c.593 4.456 2.78 8.842 6.503 11.29 4.005 2.646 9.196 2.745 13.881 1.732 9.128-1.977 17.332-7.967 22.056-16.11 1.448-2.498 2.605-5.271 2.605-8.173 0-2.891-1.341-5.92-3.869-7.287-3.859-2.085-8.563.285-12.014 3-2.907 2.281-5.745 5.104-6.416 8.762-.923 5.055 2.975 10.16 7.845 11.645s10.235-.05 14.483-2.872c4.248-2.832 7.572-6.835 10.829-10.78-.68.837-.972 2.47-.71 3.522a3.5 3.5 0 0 0 2.051 2.36c1.594.65 3.422 0 4.88-.924a13.9 13.9 0 0 0 5.58-6.983c-1.42 1.22-1.4 3.777-.292 5.3 1.108 1.525 3.091 2.204 4.957 2.086 1.857-.118 3.616-.944 5.191-1.947a22.8 22.8 0 0 0 7.504-7.927c1.147-2.026 2.003-4.456 1.274-6.668-.525-1.603-1.837-2.862-3.334-3.61s-3.189-1.032-4.851-1.16a28.6 28.6 0 0 0-15.708 3.314c-.603.325-1.283.806-1.274 1.495 0 .728.749 1.2 1.43 1.436 1.856.64 3.878.55 5.841.433 12.822-.748 25.594-2.194 38.367-3.63"
                />
              </svg>
            </div>
            <div className="flex flex-1 flex-row gap-6 whitespace-nowrap">
              {Object.keys(links).map((category) => (
                <div key={category} className="flex flex-1 flex-col gap-4">
                  <h3 className="font-medium text-neutral-700">{category}</h3>
                  <ul className="flex flex-col gap-4">
                    {links[category].map((link, i) =>
                      link.url.startsWith("#") ? (
                        <li key={i} className="inline-flex">
                          <ScrollLink
                            className="relative block cursor-pointer text-sm"
                            smooth={true}
                            duration={1000}
                            offset={-50}
                            to={link.url}
                          >
                            {link.name}
                          </ScrollLink>
                        </li>
                      ) : (
                        <li key={i} className="inline-flex">
                          <Link
                            className={classnames(
                              "pointer-events-auto relative block text-sm",
                              link.progress &&
                                "pointer-events-none after:ml-1 after:h-2 after:rounded-md after:border after:border-orange-200 after:bg-orange-400 after:bg-opacity-15 after:px-0.5 after:text-xs after:text-orange-500 after:content-['Soon']"
                            )}
                            href={link.url}
                            target="_blank"
                          >
                            {link.name}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center justify-between py-4 text-sm lg:flex-row">
            <div className="flex items-center">
              <p>
                © {new Date().getFullYear()} Soorajkj.portfolio. Design System.
                All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
