import * as React from "react";
import { LayoutProps } from "@/types/layout";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <div className="relative flex h-full flex-1 flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
