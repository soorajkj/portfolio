"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cx } from "@lib/utils";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonStyles> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { children, asChild, variant, className, ...rest } = props;

    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cx(ButtonStyles({ variant, className }))}
        {...rest}
      >
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export default Button;

export const ButtonStyles = cva(
  [
    "cf-button",
    "cf-relative",
    "cf-cursor-pointer",
    "cf-whitespace-nowrap",
    "cf-inline-flex",
    "cf-items-center",
    "cf-justify-center",
    "cf-rounded-lg",
    "cf-px-6",
    "cf-py-3.5",
    "cf-border",
    "cf-border-transparent",
    "cf-font-family-montserrat",
    "cf-text-base",
    "cf-font-medium",
    "cf-leading-none",
  ],
  {
    variants: {
      variant: {
        primary: [
          "cf-button--primary",
          "cf-bg-zinc-100",
          "cf-text-zinc-950",
          "cf-border-zinc-950/10",
          "cf-ring-offset-zinc-950",
          "cf-shadow-sm",
          "hover:cf-bg-zinc-200",
          "focus:cf-outline-none ",
          "focus:cf-ring-1",
          "focus:cf-ring-zinc-300",
          "focus:cf-ring-offset-2",
          "dark:cf-bg-zinc-800/60",
          "dark:cf-text-zinc-400",
          "dark:cf-border-white/10",
          "dark:cf-ring-zinc-800",
          "dark:hover:cf-bg-zinc-800",
          "dark:hover:cf-text-zinc-300",
          "dark:focus:cf-ring-zinc-700",
          "dark:focus:cf-ring-offset-zinc-950",
        ],
        secondary: [
          "cf-button--secondary",
          "cf-bg-green-100",
          "cf-text-green-950",
          "cf-border-green-950/10",
          "cf-ring-offset-green-950",
          "cf-shadow-sm",
          "hover:cf-bg-green-200",
          "focus:cf-outline-none ",
          "focus:cf-ring-1",
          "focus:cf-ring-green-300",
          "focus:cf-ring-offset-2",
          "dark:cf-bg-green-700",
          "dark:cf-text-green-100",
          "dark:cf-border-white/10",
          "dark:cf-ring-green-800",
          "dark:hover:cf-bg-green-800",
          "dark:hover:cf-text-green-300",
          "dark:focus:cf-ring-green-700",
          "dark:focus:cf-ring-offset-green-950",
        ],
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);
