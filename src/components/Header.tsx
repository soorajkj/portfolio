"use client";

import * as React from "react";
import Link from "next/link";
import * as FramerMotion from "framer-motion";
import Container from "@/components/core/container";
import Logo from "@/components/Logo";
import Navigation from "@/components/Navigation";

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
      <FramerMotion.motion.div
        animate={isHidden ? "hidden" : "isHidden"}
        whileHover="isHidden"
        onFocusCapture={() => setIsHidden(false)}
        variants={{ hidden: { y: "-100%" }, isHidden: { y: "0%" } }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 w-full py-4"
      >
        <Container>
          <div className="flex h-16 items-center justify-between gap-4 rounded-xl bg-white px-6 shadow">
            <div className="flex items-center gap-2.5 pr-3">
              <Link className="focus:outline-none" href="/">
                <div className="relative size-10 overflow-hidden rounded-full bg-black p-0.5 shadow-md">
                  <Logo />
                </div>
              </Link>
            </div>
            <Navigation />
          </div>
        </Container>
      </FramerMotion.motion.div>
    </FramerMotion.AnimatePresence>
  );
}
