/* eslint-disable @next/next/no-img-element */

import * as React from "react";
import Icon from "@/components/core/icon";

export default function Project() {
  return (
    <div className="flex flex-col justify-between overflow-hidden rounded-2xl bg-neutral-800/60 p-6 hover:brightness-110">
      <div className="mb-4">
        <div className="relative">
          <img
            src="https://dreamcut.ai/assets/preview1-BzS5F37f.jpg"
            alt="Preview"
            className="mb-4 w-full rounded-2xl"
          />
        </div>
        <p className="text-xs text-white/50">Typescript</p>
        <p className="my-2 text-xl font-semibold text-white">
          Build a Spotify Connected App
        </p>
        <p className="mb-4 line-clamp-5 whitespace-pre-line text-neutral-400">
          Unlike tutorials that only cover a few concepts and leave you with
          half-baked GitHub repositories, this course covers everything from
          explaining the principles of REST APIs to implementing Spotify&apos;s
          OAuth flow and fetching API data in a React app. By the end of the
          course, you’ll have an app deployed to the internet you can add to
          your portfolio.
        </p>
      </div>
      <div>
        <div className="mb-2 flex text-xs text-white/50">
          <span className="flex items-center gap-1">
            <Icon icon="ArrowUpRight" className="size-4" />
            <span>Preview website</span>
          </span>
          <span className="ml-4 flex items-center gap-1">
            <Icon icon="Code" className="size-4" />
            <span>Source code</span>
          </span>
        </div>
        <hr className="mb-2 h-[1px] w-full border-0 bg-gradient-to-r from-white/10 to-white/0" />
        <div className="flex justify-between text-xs text-white/50">
          <span className="flex items-center gap-1">
            <Icon icon="Eye" className="size-4" />
            <span>289</span>
          </span>
          <span className="flex items-center gap-1">
            <Icon icon="GitFork" className="size-4" />
            <span>550</span>
          </span>
          <span className="flex items-center gap-1">
            <Icon icon="Star" className="size-4" />
            <span>5.3K</span>
          </span>
          <span className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={14}
              height={14}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-bookmark mr-1"
            >
              <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
            </svg>{" "}
            4.1K
          </span>
        </div>
      </div>
    </div>
  );
}
