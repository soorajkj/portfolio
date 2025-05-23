import React from "react";
import type { Metadata } from "next";
import { LayoutProps } from "@/types/layout";
import Toaster from "@/components/core/toaster";
import ThemeProvider from "@/components/ThemeProvider";
import "@/styles/app.css";

export const metadata: Metadata = {};

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="w-full overflow-x-hidden bg-neutral-50 font-family-manrope text-base font-normal not-italic text-neutral-600 antialiased">
        <ThemeProvider enableSystem defaultTheme="system" attribute="class">
          <Toaster>{children}</Toaster>
        </ThemeProvider>
      </body>
    </html>
  );
}
