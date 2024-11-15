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
  "flex",
  "flex-1",
  "w-full",
  "select-none",
  "appearance-none",
  "rounded-lg",
  "border",
  "border-neutral-800/50",
  "bg-white/5",
  "px-4",
  "py-2",
  "text-sm",
  "outline-none",
  "placeholder:text-white/30",
  "focus-visible:outline-none",
  "disabled:cursor-not-allowed",
  "disabled:opacity-50",
]);

Input.displayName = "Input";

export default Input;
