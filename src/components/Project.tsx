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
      <div className="flex flex-col-reverse items-start gap-2">
        <div className="flex flex-col items-start gap-2">
          <span className="inline rounded border border-orange-500/20 bg-orange-500/10 px-1 py-0.5 text-sm font-medium leading-none text-orange-600">
            Typescript
          </span>
          <h4 className="text-lg font-semibold text-neutral-700">
            Build a Spotify Connected App
          </h4>
          <div className="flex flex-col rounded-lg group-even:items-start">
            <p>
              A web app for visualizing personalized Spotify data. View your top
              artists, top tracks, recently played tracks, and detailed audio
              information about each track. Create and save new playlists of
              recommended tracks based on your existing playlists and more.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
              {["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"].map(
                (_, i) => (
                  <div key={i}>{_}</div>
                )
              )}
            </div>
          </div>
        </div>
        <div className="relative h-72 w-full">
          <img
            src="https://alignui.com/images/landing/template-thumbnails/hr-2.png"
            alt=""
            width="800"
            height="600"
            className="absolute inset-0 size-full"
          />
        </div>
      </div>
    </div>
  );
}

const ProjectStyles = cva([
  "group flex cursor-pointer flex-col items-center w-full pb-6 rounded-xl bg-white p-6 shadow mb-1",
]);
