import React from "react";
import type { Metadata } from "next";
import { LayoutProps } from "@types";
import * as fonts from "@lib/fonts";
import { cx } from "@lib/utils";
import "@styles/app.css";

export const metadata: Metadata = {};

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      className={cx(`
      ${fonts.montserrat.variable}
      ${fonts.robotoMono.variable}
      ${fonts.bebasNeue.variable}
      scroll-smooth
      `)}
    >
      <body className="cf-h-full cf-min-h-screen cf-w-full cf-overflow-x-hidden cf-bg-white cf-font-family-montserrat cf-text-sm cf-font-normal cf-leading-relaxed cf-text-zinc-500 cf-antialiased md:cf-text-base md:cf-leading-relaxed dark:cf-bg-zinc-950 dark:cf-text-zinc-500">
        {children}
      </body>
    </html>
  );
}
