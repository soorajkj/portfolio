"use client";

import * as React from "react";
import * as Scroll from "react-scroll";
import Icon, { IconTypes } from "@/components/core/icon";
import Tooltip from "@/components/core/tooltip";
import Dock from "@/components/Dock";

interface Menu {
  id: string;
  label: string;
  icon: IconTypes;
}

const menu: Menu[] = [
  { id: "#about", label: "About", icon: "CircleUserRound" },
  { id: "#experience", label: "Experience", icon: "GitPullRequest" },
  { id: "#projects", label: "Projects", icon: "Box" },
  { id: "#contact", label: "Contact", icon: "MessageCircle" },
];

export default function Navigation() {
  return (
    <nav className="relative">
      <Dock.DockRoot magnification={64} distance={100}>
        {menu.map(({ id, label, icon }, i) => (
          <Dock.DockItem key={i} size={46}>
            <Tooltip.TooltipRoot>
              <Tooltip.TooltipTrigger asChild>
                <div className="size-full overflow-hidden rounded-xl [&>a]:grid [&>a]:size-full [&>a]:place-items-center">
                  <Scroll.Link to={id} href="#" smooth offset={-96}>
                    <Icon icon={icon} className="size-6" />
                  </Scroll.Link>
                </div>
              </Tooltip.TooltipTrigger>
              <Tooltip.TooltipContent>
                <p>{label}</p>
              </Tooltip.TooltipContent>
            </Tooltip.TooltipRoot>
          </Dock.DockItem>
        ))}
      </Dock.DockRoot>
    </nav>
  );
}
