import * as React from "react";
import GitHubCalendar from "react-github-calendar";

export default function Contributions() {
  return (
    <div className="relative w-full font-family-roboto-pt-mono *:!overflow-hidden">
      <GitHubCalendar
        username="soorajkj"
        blockSize={16}
        blockMargin={4}
        fontSize={12}
        theme={{
          dark: ["#18181b", "#f87171", "#dc2626", "#991b1b", "#7f1d1d"],
        }}
      />
    </div>
  );
}
