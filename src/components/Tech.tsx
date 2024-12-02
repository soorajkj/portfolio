"use client";

import React from "react";
import Container from "@/components/core/container";
import Icon, { IconTypes } from "@/components/core/icon";
import Tooltip from "@/components/core/tooltip";

const arr: IconTypes[] = [
  "DEVHTML5",
  "DEVCSS3",
  "DEVSass",
  "DEVBootstrap5",
  "DEVTailwindCSS",
  "DEVJavaScript",
  "DEVTypeScript",
  "DEVJQuery",
  "DEVReact",
  "DEVNextJs",
  "DEVNodeJs",
  "DEVExpressJs",
  "DEVMongoDB",
  "DEVFirebase",
  "DEVPrisma",
  "DEVSupabase",
  "DEVPostgreSQL",
  "DEVBabel",
  "DEVWebpack",
  "DEVGulp",
  "DEVViteJS",
  "DEVDocker",
  "DEVGit",
  "DEVGitHub",
  "DEVVisualStudioCode",
  "DEVFigma",
  "DEVChrome",
];

export default function Tech() {
  return (
    <section id="comebackk" className="relative overflow-clip">
      <Container>
        <div className="py-0">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12">
              <div className="mb-16 flex flex-col items-center gap-4 text-center">
                <h2 className="hidden max-w-screen-sm bg-gradient-to-b from-zinc-50 via-zinc-300 to-zinc-400 bg-clip-text text-4xl font-semibold leading-tight text-transparent">
                  The tools and technologies that I&apos;ve been utilizing daily
                </h2>
              </div>
              <Tooltip.TooltipProvider>
                <div className="relative mx-auto flex max-w-screen-lg flex-wrap items-center justify-center gap-4 after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:bg-gradient-to-r after:from-zinc-950 after:via-transparent after:to-zinc-950">
                  {arr.map((_, i) => (
                    <Tooltip.TooltipRoot key={i}>
                      <Tooltip.TooltipTrigger asChild>
                        <div className="relative flex size-14 flex-col items-center gap-4 rounded-lg border border-zinc-900 bg-zinc-900/40">
                          <div className="relative flex aspect-square size-full cursor-pointer items-center justify-center grayscale-0 transition hover:grayscale-0">
                            <Icon icon={_} className="size-6" />
                          </div>
                        </div>
                      </Tooltip.TooltipTrigger>
                      <Tooltip.TooltipContent>
                        <p>{_.slice(3)}</p>
                      </Tooltip.TooltipContent>
                    </Tooltip.TooltipRoot>
                  ))}
                </div>
              </Tooltip.TooltipProvider>
            </div>
            <div className="col-span-6"></div>
          </div>
        </div>
      </Container>
    </section>
  );
}
