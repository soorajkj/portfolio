"use client";

import * as React from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";

export default function ThemeProvider(props: ThemeProviderProps) {
  const { children, ...rest } = props;

  return (
    <React.Fragment>
      <NextThemeProvider disableTransitionOnChange {...rest}>
        {children}
      </NextThemeProvider>
    </React.Fragment>
  );
}
