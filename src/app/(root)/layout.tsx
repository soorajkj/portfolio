import React from "react";
import { LayoutProps } from "@types";
import Footer from "@components/footer";
import Header from "@components/header";

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <div className="cf-flex cf-h-full cf-min-h-screen cf-flex-col">
      <Header></Header>
      <main className="cf-flex-1">{children}</main>
      <Footer></Footer>
    </div>
  );
}
