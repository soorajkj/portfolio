import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cx } from "@lib/utils";

interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof ContainerStyles> {}

export default function Container(props: ContainerProps) {
  const { children, className, ...rest } = props;

  return (
    <div className={cx(ContainerStyles({ className }))} {...rest}>
      {children}
    </div>
  );
}

const ContainerStyles = cva(["container"]);
