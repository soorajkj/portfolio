"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { classnames } from "@/utils/classnames";

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
        className={classnames(ButtonStyles({ variant, className }))}
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
    "button",
    "relative",
    "cursor-pointer",
    "whitespace-nowrap",
    "inline-flex",
    "items-center",
    "justify-center",
    "rounded-lg",
    "px-6",
    "py-3.5",
    "border",
    "border-transparent",
    "font-family-montserrat",
    "text-base",
    "font-medium",
    "leading-none",
  ],
  {
    variants: {
      variant: {
        primary: [
          "button--primary",
          "bg-zinc-100",
          "text-zinc-950",
          "border-zinc-950/10",
          "ring-offset-zinc-950",
          "shadow-sm",
          "hover:bg-zinc-200",
          "focus:outline-none ",
          "focus:ring-1",
          "focus:ring-zinc-300",
          "focus:ring-offset-2",
          "dark:bg-zinc-800/60",
          "dark:text-zinc-400",
          "dark:border-white/10",
          "dark:ring-zinc-800",
          "dark:hover:bg-zinc-800",
          "dark:hover:text-zinc-300",
          "dark:focus:ring-zinc-700",
          "dark:focus:ring-offset-zinc-950",
        ],
        secondary: [
          "button--secondary",
          "bg-green-100",
          "text-green-950",
          "border-green-950/10",
          "ring-offset-green-950",
          "shadow-sm",
          "hover:bg-green-200",
          "focus:outline-none ",
          "focus:ring-1",
          "focus:ring-green-300",
          "focus:ring-offset-2",
          "dark:bg-green-700",
          "dark:text-green-100",
          "dark:border-white/10",
          "dark:ring-green-800",
          "dark:hover:bg-green-800",
          "dark:hover:text-green-300",
          "dark:focus:ring-green-700",
          "dark:focus:ring-offset-green-950",
        ],
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);
