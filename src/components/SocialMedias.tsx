import React from "react";
import Link from "next/link";
import Icon, { IconTypes } from "@/components/core/icon";

interface Media {
  label: string;
  icon: IconTypes;
}

const arr: Media[] = [
  {
    label: "Twitter",
    icon: "Twitter",
  },
  {
    label: "Instagram",
    icon: "Instagram",
  },
  {
    label: "Github",
    icon: "Github",
  },
  {
    label: "LinkedIn",
    icon: "Linkedin",
  },
  {
    label: "LinkedIn",
    icon: "Youtube",
  },
];

export default function SocialMedias() {
  return (
    <div className="inline-flex flex-row gap-2">
      {arr.map((_, i) => (
        <Link href={"/"} key={i}>
          <div className="relative flex origin-center cursor-pointer items-center justify-center rounded-md p-0.5 duration-300 hover:scale-105 hover:text-zinc-400">
            <Icon icon={_.icon} className="size-5" />
          </div>
        </Link>
      ))}
    </div>
  );
}
