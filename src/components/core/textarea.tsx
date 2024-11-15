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
  "min-h-20",
  "w-full",
  "rounded-lg",
  "border",
  "border-neutral-800/50",
  "bg-white/5",
  "px-4",
  "py-2",
  "text-sm",
  "placeholder:text-white/30",
  "focus-visible:outline-none",
  "disabled:cursor-not-allowed",
  "disabled:opacity-50",
]);

Textarea.displayName = "Textarea";

export default Textarea;
