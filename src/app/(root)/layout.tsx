import * as React from "react";
import { LayoutProps } from "@/types/layout";
import Abstract from "@/components/Abstract";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <div className="relative flex h-full min-h-screen flex-1 flex-col">
      <Header />
      <Abstract />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
