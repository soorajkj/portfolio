/* eslint-disable @next/next/no-img-element */

import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { classnames } from "@/utils/classnames";

interface ProjectProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof ProjectStyles> {}

export default function Project(props: ProjectProps) {
  const { className } = props;
  return (
    <div className={classnames(ProjectStyles({ className }))}>
      <div className="flex flex-col-reverse items-start gap-2 rounded">
        <div className="relative flex h-72 w-full items-center overflow-hidden">
          <img src="/images/project-placeholder.webp" alt="" />
        </div>
        <div className="flex flex-col gap-2 p-6 pb-0 text-white">
          <p className="text-xs">Typescript</p>
          <h4 className="text-lg font-semibold text-white">
            Build a Spotify Connected App
          </h4>
          <div className="flex flex-col rounded-lg group-even:items-start">
            <p>
              A web app for visualizing personalized Spotify data. View your top
              artists, top tracks, recently played tracks, and detailed audio
              information about each track. Create and save new playlists of
              recommended tracks based on your existing playlists and more.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4 font-family-roboto-pt-mono text-xs opacity-80">
              {["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"].map(
                (_, i) => (
                  <div key={i}>{_}</div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ProjectStyles = cva([
  "project",
  "group",
  "flex",
  "cursor-pointer",
  "flex-col",
  "items-center",
  "overflow-hidden",
  "w-full",
  "rounded-3xl",
  "border",
  "border-zinc-800/40",
  "backdrop-blur-md",
]);
