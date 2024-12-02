import * as React from "react";
import Image from "next/image";
import Container from "@/components/core/container";

export default function Hero() {
  return (
    <section
      id="#home"
      className="relative overflow-hidden before:absolute before:inset-0 before:bg-[url('/images/noise.png')] before:bg-top before:bg-no-repeat before:opacity-80"
    >
      <Container>
        <div className="py-48">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <div className="flex flex-col items-center">
                <div className="relative size-20 overflow-hidden rounded-full border-4 border-zinc-50">
                  <Image
                    src={"https://avatars.githubusercontent.com/u/77554877?v=4"}
                    alt=""
                    fill
                    className="-rotate-6 grayscale"
                  />
                </div>
                <div className="my-4 rounded-full border border-zinc-100/10 bg-zinc-50/10 px-4 py-1">
                  <p className="text-zinc-200">Sooraj Janardhanan 👋</p>
                </div>
                <h2 className="mx-auto w-full max-w-screen-md bg-gradient-to-b from-zinc-50 via-zinc-300 to-zinc-400 bg-clip-text text-center text-6xl font-semibold leading-tight text-transparent">
                  I build high quality solutions for the internet.
                </h2>
                <p className="mx-auto mt-8 w-full max-w-xl text-center text-base">
                  I’m a software engineer specializing in building (and
                  occasionally designing) exceptional digital experiences.
                  Currently, I’m focused on building accessible, human-centered
                  products at Upstatement.
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <button className="relative flex h-11 w-full items-center justify-center whitespace-nowrap rounded-lg border border-transparent bg-zinc-950 bg-clip-padding px-10 py-3 font-family-roboto-pt-mono text-sm font-medium leading-none text-zinc-500 transition before:absolute before:-inset-px before:-z-10 before:rounded-lg before:bg-gradient-to-r before:from-zinc-700 before:via-zinc-950 before:to-zinc-700">
                    $ Download Resume
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
