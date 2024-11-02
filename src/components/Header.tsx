"use client";

import * as React from "react";
import Link from "next/link";
import Logo from "public/images/logo.svg";
import * as Scroll from "react-scroll";
import Container from "@/components/core/container";

export default function Header() {
  return (
    <React.Fragment>
      <header className="sticky left-0 top-0 z-50 h-auto w-full bg-black/20 backdrop-blur">
        <Container>
          <div className="flex h-16 items-center justify-between gap-4 border-b border-slate-300/10 text-sm">
            <div className="flex flex-1 items-center justify-start">
              <Link href="/" className="cursor-pointer select-none">
                <Logo />
              </Link>
            </div>
            <nav className="relative flex flex-1 items-center justify-end">
              <ul className="flex items-center gap-4 font-family-roboto-pt-mono text-neutral-400">
                {["about", "experience", "projects", "blogs", "contact"].map(
                  (_, i) => (
                    <li key={i}>
                      <Scroll.Link
                        to={"#" + _}
                        smooth={true}
                        duration={500}
                        offset={-56}
                        spy={true}
                        className="cursor-pointer select-none  px-2 py-2 text-xs font-semibold uppercase transition hover:text-white"
                        activeClass="text-white"
                      >
                        0{i}.{_}
                      </Scroll.Link>
                    </li>
                  )
                )}
              </ul>
            </nav>
          </div>
        </Container>
      </header>
    </React.Fragment>
  );
}
