import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { classnames } from "@/utils/classnames";

interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof ContainerStyles> {}

export default function Container(props: ContainerProps) {
  const { children, className, ...rest } = props;

  return (
    <div
      className={classnames(ContainerStyles({ className }))}
      style={{ maxWidth: "1140px" }}
      {...rest}
    >
      {children}
    </div>
  );
}

const ContainerStyles = cva([
  "container",
  "relative",
  "mx-auto",
  "w-full",
  "px-6",
]);
