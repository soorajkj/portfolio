/* eslint-disable no-console */

import React, { forwardRef } from "react";
import * as VisuallyHiddenPrimitive from "@radix-ui/react-visually-hidden";
import { icons as lucideIcons } from "lucide-react";

export const icons = {
  ...lucideIcons,
};

export type IconTypes = keyof typeof icons;

interface IconProps extends React.SVGProps<SVGSVGElement> {
  icon: IconTypes;
  label?: string;
}

const Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { icon, label, ...rest } = props;
  const IconEle = icons[icon];

  if (!IconEle) {
    console.warn(`Icon "${icon}" does not exist in the icon libraries.`);
    return null;
  }

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
