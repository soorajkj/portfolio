"use client";

import * as React from "react";
import { Link } from "react-scroll";
import { IconTypes } from "@/components/core/icon";
import Dock from "@/components/Dock";

interface Menu {
  icon: IconTypes;
  label: string;
  path: string;
}

const arr: Menu[] = [
  { label: "Home", path: "#about", icon: "BigsurfNotes" },
  { label: "Home", path: "#experience", icon: "BigsurfDocs" },
  { label: "Home", path: "#portfolio", icon: "BigsurfPhotos" },
  { label: "Home", path: "#contact", icon: "BigsurfMessage" },
  { label: "Home", path: "#portfolio", icon: "BigsurfPhotos" },
  { label: "Home", path: "#contact", icon: "BigsurfMessage" },
];

export default function MacDock() {
  return (
    <div className="mb-4 w-full">
      <div className="flex items-center justify-center">
        <div className="rounded-2xl border border-neutral-200 bg-white bg-opacity-60 backdrop-blur">
          <Dock.DockRoot magnification={54} className="h-14">
            {arr.map((_, i) => (
              <Dock.DockItem key={i} size={40}>
                <Link
                  to={_.path}
                  smooth={true}
                  spy={true}
                  duration={1000}
                  className="scroll group flex h-full w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-orange-500 bg-clip-padding backdrop-blur-md transition-all duration-300"
                >
                  <img
                    src="https://alignui.com/images/landing/template-hr-icon.png"
                    alt=""
                    className="size-full"
                  ></img>
                </Link>
              </Dock.DockItem>
            ))}
          </Dock.DockRoot>
        </div>
      </div>
    </div>
  );
}
