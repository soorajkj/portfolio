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
  "rounded-xl",
  "border",
  "border-neutral-200",
  "bg-transparent",
  "text-neutral-800",
  "px-4",
  "py-2",
  "text-base",
  "placeholder:text-base",
  "placeholder:text-neutral-500",
  "focus-visible:outline-none",
  "disabled:cursor-not-allowed",
  "disabled:opacity-50",
  "resize-none",
]);

Textarea.displayName = "Textarea";

export default Textarea;
