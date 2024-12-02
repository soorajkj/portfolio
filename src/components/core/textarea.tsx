import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { classnames } from "@/utils/classnames";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof TextareaStyles> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={classnames(TextareaStyles({ className }))}
        {...props}
      />
    );
  }
);

const TextareaStyles = cva([
  "flex",
  "h-full",
  "max-h-24",
  "w-full",
  "rounded-lg",
  "border",
  "border-zinc-600/50",
  "bg-zinc-900",
  "px-2",
  "py-2",
  "text-base",
  "text-white",
  "placeholder:text-sm",
  "placeholder:text-zinc-400/50",
  "focus-visible:outline-none",
  "disabled:cursor-not-allowed",
  "disabled:opacity-50",
  "resize-none",
]);

Textarea.displayName = "Textarea";

export default Textarea;
