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
    "button",
    "relative",
    "cursor-pointer",
    "whitespace-nowrap",
    "inline-flex",
    "items-center",
    "justify-center",
    "rounded-lg",
    "px-4",
    "py-2",
    "border",
    "border-transparent",
    "font-family-roboto-pt-mono",
    "text-xs",
    "font-semibold",
    "leading-none",
    "uppercase",
    "disabled:opacity-80",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-indigo-600",
          "text-neutral-50",
          "border-indigo-600",
          "hover:bg-indigo-700",
          "hover:border-indigo-700",
        ],
        secondary: [
          "bg-green-100",
          "text-green-950",
          "border-green-950/10",
          "ring-offset-green-950",
          "hover:bg-green-200",
        ],
      },
    },
  }
);
