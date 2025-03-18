"use client";

import React from "react";
import MacDock from "@/components/MacDock";

export default function Readme() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <div className="relative mx-auto grid w-full max-w-screen-md overflow-hidden rounded-2xl bg-neutral-200/40 p-2.5">
        <div className="relative rounded-xl bg-white shadow">
          <div className="flex flex-col rounded-xl">
            <div className="flex items-center border-b border-neutral-200 px-4 py-2">
              <div className="flex flex-1 gap-2">
                <div
                  className="size-2.5 rounded-full"
                  style={{
                    background: "rgb(237, 106, 94)",
                  }}
                />
                <div
                  className="size-2.5 rounded-full"
                  style={{
                    background: "rgb(244, 191, 78)",
                  }}
                />
                <div
                  className="size-2.5 rounded-full"
                  style={{
                    background: "rgb(97, 198, 85)",
                  }}
                />
              </div>
              <div className="hidden flex-1 items-center justify-center gap-1 rounded-md bg-neutral-100 py-0.5 xl:flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 15 14"
                  className="size-3.5 text-[#bbb]"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M7.5 1.313a2.917 2.917 0 0 0-2.917 2.916V5.25h-.146c-.885 0-1.604.718-1.604 1.604v4.375c0 .886.719 1.604 1.604 1.604h6.125c.886 0 1.605-.718 1.605-1.604V6.854c0-.886-.719-1.604-1.604-1.604h-.146V4.23A2.917 2.917 0 0 0 7.5 1.311ZM9.542 5.25V4.23a2.042 2.042 0 1 0-4.084 0v1.02z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-xs">https://soorajkj.vercel.app</span>
              </div>
              <div className="hidden flex-1 justify-end gap-4 xl:flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="text-ln-gray-300 size-[18px]"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.25"
                    d="M9 2.813v8.437m0-8.438 3.375 3.376M9 2.813 5.625 6.187m9.563 3.375v4.126a1.5 1.5 0 0 1-1.5 1.5H4.312a1.5 1.5 0 0 1-1.5-1.5V9.561"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                  className="text-ln-gray-300 size-[18px]"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.125"
                    d="M9 2.813V9m0 0v6.188M9 9H2.813M9 9h6.188"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 19 18"
                  className="text-ln-gray-300 size-[18px]"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.25"
                    d="M12.073 6.563V3c0-.518-.443-.938-.99-.938H3.167c-.547 0-.99.42-.99.938v7.5c0 .518.443.938.99.938h3.76m.99-4.876h7.916c.547 0 .99.42.99.938V15c0 .518-.443.938-.99.938H7.917c-.547 0-.99-.42-.99-.938V7.5c0-.518.443-.938.99-.938"
                  />
                </svg>
              </div>
            </div>
            <div className="mx-auto flex min-h-96 max-w-xl flex-col justify-center gap-2 px-4 py-12">
              <p>
                Hi, I’m <strong>Sooraj Janardhanan</strong>, a passionate{" "}
                <strong>Frontend Engineer</strong> based in{" "}
                <strong>Kochi, India</strong>. I specialize in building{" "}
                <strong>high-quality, user-friendly web applications</strong>{" "}
                with modern technologies like{" "}
                <strong>React.js, Next.js, TypeScript, and Tailwind CSS</strong>
                .
              </p>

              <p>
                With <strong>3+ years of experience</strong> in the industry, I
                have worked on building{" "}
                <strong>
                  scalable, accessible, and performant digital experiences
                </strong>
                . My approach to development is <strong>human-centered</strong>,
                ensuring that every interface is not only visually appealing but
                also intuitive and functional.
              </p>

              <p>
                Currently, I’m focused on{" "}
                <strong>creating a custom Tailwind CSS plugin</strong> to
                streamline theming and improve design consistency across
                projects. I thrive on writing{" "}
                <strong>clean, maintainable code</strong>, collaborating with
                teams, and staying up to date with the latest{" "}
                <strong>UI/UX trends</strong>.
              </p>

              <p>
                When I’m not coding, you’ll probably find me{" "}
                <strong>
                  experimenting with design systems, learning new technologies,
                  or refining my personal projects
                </strong>
                .
              </p>
            </div>
            <MacDock />
          </div>
        </div>
      </div>
    </div>
  );
}
