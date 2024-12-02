"use client";

import * as React from "react";
import * as FramerMotion from "framer-motion";
import { Link } from "react-scroll";
import Container from "@/components/core/container";
import Icon, { IconTypes } from "@/components/core/icon";
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

export default function Header() {
  const { scrollY } = FramerMotion.useScroll();
  const [isHidden, setIsHidden] = React.useState(false);
  const lastYRef = React.useRef(0);

  FramerMotion.useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 24) {
      setIsHidden(difference > 0);
      lastYRef.current = y;
    }
  });

  return (
    <FramerMotion.AnimatePresence mode="wait">
      <FramerMotion.motion.header
        animate={isHidden ? "hidden" : "isHidden"}
        whileHover="isHidden"
        onFocusCapture={() => setIsHidden(false)}
        variants={{ hidden: { y: "100%" }, isHidden: { y: "0%" } }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-0 z-50 w-full justify-center py-4"
      >
        <Container>
          <div className="flex items-center justify-center">
            <div className="rounded-2xl border border-zinc-50/10 bg-zinc-50/10 bg-opacity-80 shadow shadow-zinc-950 backdrop-blur">
              <Dock.DockRoot magnification={68} className="h-16">
                {arr.map((_, i) => (
                  <Dock.DockItem key={i} size={48}>
                    <Link
                      to={_.path}
                      smooth={true}
                      spy={true}
                      duration={1000}
                      className="scroll group flex h-full w-full cursor-pointer items-center justify-center rounded-xl border
                      bg-clip-padding text-zinc-400 backdrop-blur-md transition-all duration-300"
                    >
                      <Icon icon={_.icon} className="size-full" />
                    </Link>
                  </Dock.DockItem>
                ))}
              </Dock.DockRoot>
            </div>
          </div>
        </Container>
      </FramerMotion.motion.header>
    </FramerMotion.AnimatePresence>
  );
}
