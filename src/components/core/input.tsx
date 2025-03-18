import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { classnames } from "@/utils/classnames";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof InputStyles> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { type, className, ...rest } = props;

  return (
    <input
      ref={ref}
      type={type}
      className={classnames(InputStyles({ className }))}
      {...rest}
    ></input>
  );
});

const InputStyles = cva([
  "peer",
  "h-10",
  "w-full",
  "select-none",
  "appearance-none",
  "rounded-lg",
  "border",
  "border-neutral-200",
  "bg-transparent",
  "text-neutral-800",
  "px-4",
  "py-2",
  "text-base",
  "outline-none",
  "placeholder:text-base",
  "placeholder:text-neutral-500",
  "focus-visible:outline-none",
  "disabled:cursor-not-allowed",
  "disabled:opacity-50",
]);

Input.displayName = "Input";

export default Input;
