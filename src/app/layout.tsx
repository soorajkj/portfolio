import React from "react";
import type { Metadata } from "next";
import { LayoutProps } from "@/types/layout";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ThemeProvider from "@/components/ThemeProvider";
import "@/styles/app.css";

export const metadata: Metadata = {};

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="h-full min-h-screen w-full overflow-x-hidden bg-black font-family-manrope text-sm font-normal leading-relaxed  text-white antialiased md:text-base md:leading-relaxed">
        <ThemeProvider enableSystem defaultTheme="system" attribute="class">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
