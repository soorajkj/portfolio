"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cva, type VariantProps } from "class-variance-authority";
import { cx } from "@lib/utils";

interface SeparatorOwnProps
  extends React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> {
  orientation?: "horizontal" | "vertical";
}

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SeparatorOwnProps & VariantProps<typeof SeparatorStyles>
>((props, ref) => {
  const {
    className,
    orientation = "horizontal",
    decorative = true,
    ...rest
  } = props;

  return (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cx(SeparatorStyles({ orientation, className }))}
      {...rest}
    />
  );
});

Separator.displayName = SeparatorPrimitive.Root.displayName;

export default Separator;

const SeparatorStyles = cva(
  [
    "cf-separator",
    "cf-relative",
    "cf-shrink-0",
    "cf-cursor-auto",
    "cf-pointer-events-none",
  ],
  {
    variants: {
      orientation: {
        horizontal: "cf-w-full cf-h-px",
        vertical: "cf-h-full cf-w-px",
      },
    },
  }
);
