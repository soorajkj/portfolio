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
    const {
      children,
      asChild,
      variant = "primary",
      className,
      ...rest
    } = props;

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
    "relative",
    "cursor-pointer",
    "whitespace-nowrap",
    "inline-flex",
    "items-center",
    "space-x-1",
    "justify-center",
    "rounded-lg",
    "px-4",
    "py-2",
    "h-9",
    "border",
    "border-transparent",
    "text-sm",
    "font-medium",
    "leading-none",
    "disabled:opacity-80",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-gradient-to-b",
          "from-transparent",
          "to-zinc-900/20",
          "bg-zinc-950/20",
          "text-white",
          "border-t-white/10",
          "hover:bg-zinc-800",
        ],
        secondary: [
          "bg-white",
          "text-neutral-950",
          "border-t-white/10",
          "hover:bg-white",
        ],
      },
    },
  }
);
