"use client";

import * as React from "react";
import * as FramerMotion from "framer-motion";
import Tooltip from "@/components/core/tooltip";
import Navigation from "@/components/Navigation";

export default function Header() {
  const { scrollY } = FramerMotion.useScroll();
  const [isHidden, setIsHiiden] = React.useState(false);
  const lastYRef = React.useRef(0);

  FramerMotion.useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 24) {
      setIsHiiden(difference > 0);
      lastYRef.current = y;
    }
  });

  return (
    <FramerMotion.AnimatePresence mode="wait">
      <FramerMotion.motion.header
        animate={isHidden ? "hidden" : "isHidden"}
        whileHover="isHidden"
        onFocusCapture={() => setIsHiiden(false)}
        variants={{ hidden: { y: "100%" }, isHidden: { y: "0%" } }}
        transition={{ duration: 0.2 }}
        className="fixed bottom-0 z-50 flex w-full justify-center p-4"
      >
        <Tooltip.TooltipProvider delayDuration={200}>
          <Navigation />
        </Tooltip.TooltipProvider>
      </FramerMotion.motion.header>
    </FramerMotion.AnimatePresence>
  );
}
