import React from "react";
import Icon from "@/components/core/icon";

export default function Readme() {
  return (
    <div className="relative mx-auto w-full max-w-screen-lg p-1.5">
      <div className="relative rounded-xl before:pointer-events-none before:absolute before:-inset-1.5 before:rounded-lg before:border before:border-zinc-900 after:pointer-events-none after:absolute after:-inset-1.5 after:bg-gradient-to-b after:from-transparent after:via-transparent after:to-zinc-950 after:opacity-0">
        <div className="rounded-lg border border-zinc-800 bg-zinc-800/20">
          <div className="flex h-11 items-center gap-1 border-b border-zinc-800 px-4 text-zinc-600">
            <Icon icon="File01Icon" className="size-4" />
            <p className="font-family-roboto-pt-mono">Readme.md</p>
          </div>
          <div className="mx-auto flex max-w-xl flex-col gap-4 px-4 py-24 font-family-roboto-pt-mono">
            <p>
              Hello! My name is <b className="">Sooraj Janardhanan</b>. I’m a{" "}
              <b className="">software engineer</b> specializing in building
              (and occasionally designing) exceptional digital experiences. I
              enjoy creating things that live on the internet. My interest in
              web development started back in 2012 when I decided to try editing
              custom Tumblr themes — turns out hacking together a custom reblog
              button taught me a lot about HTML & CSS!
            </p>
            <p>
              Fast-forward to today, and I’ve had the privilege of working at an
              advertising agency, a start-up, a huge corporation, and a
              student-led design studio. My main focus these days is building
              accessible, inclusive products and digital experiences at
              Upstatement for a variety of clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
