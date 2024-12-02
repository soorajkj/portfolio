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
  "border-zinc-600/50",
  "bg-zinc-900",
  "text-white",
  "px-2",
  "py-2",
  "text-base",
  "outline-none",
  "placeholder:text-sm",
  "placeholder:text-zinc-400/50",
  "focus-visible:outline-none",
  "disabled:cursor-not-allowed",
  "disabled:opacity-50",
]);

Input.displayName = "Input";

export default Input;
