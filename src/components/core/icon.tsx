import React, { forwardRef } from "react";
import * as VisuallyHiddenPrimitive from "@radix-ui/react-visually-hidden";
import { icons as lucideIcons, LucideProps } from "lucide-react";

export const icons = {
  ...lucideIcons,
};

export type IconTypes = keyof typeof icons;

interface IconProps extends Omit<LucideProps, "ref"> {
  icon: IconTypes;
  label?: string;
}

const Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { icon, label, ...rest } = props;
  const IconEle = icons[icon];

  return (
    <React.Fragment>
      <IconEle ref={ref} aria-hidden={true} focusable={false} {...rest} />
      {label && (
        <VisuallyHiddenPrimitive.Root>{label}</VisuallyHiddenPrimitive.Root>
      )}
    </React.Fragment>
  );
});

Icon.displayName = "Icon";

export default Icon;
