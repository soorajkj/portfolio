import * as React from "react";
import { LayoutProps } from "@/types/layout";

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <div className="flex h-full min-h-screen flex-col">
      <main className="flex-1">{children}</main>
    </div>
  );
}
