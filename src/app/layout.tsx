import React from "react";
import type { Metadata } from "next";
import { LayoutProps } from "@/types/layout";
import "@/styles/app.css";

export const metadata: Metadata = {};

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="h-full min-h-screen w-full overflow-x-hidden bg-white font-family-montserrat text-sm font-normal leading-relaxed text-zinc-500 antialiased md:text-base md:leading-relaxed dark:bg-zinc-950 dark:text-zinc-500">
        {children}
      </body>
    </html>
  );
}
