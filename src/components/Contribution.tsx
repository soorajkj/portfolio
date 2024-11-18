import * as React from "react";
import GitHubCalendar from "react-github-calendar";

export default function Contribution() {
  return (
    <div className="my-8 hidden items-center justify-center">
      <div className="rounded-lg border border-neutral-900 px-6 py-4">
        <GitHubCalendar
          username="soorajkj"
          blockSize={14}
          blockMargin={4}
          fontSize={12}
        />
      </div>
    </div>
  );
}
