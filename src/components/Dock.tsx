"use client";

import React, { PropsWithChildren, useRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { classnames } from "@/utils/classnames";

const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

export interface DockProps extends VariantProps<typeof DocStyles> {
  className?: string;
  magnification?: number;
  distance?: number;
  direction?: "top" | "middle" | "bottom";
  children: React.ReactNode;
}

const DockRoot = React.forwardRef<HTMLDivElement, DockProps>((props, ref) => {
  const {
    className,
    children,
    magnification = DEFAULT_MAGNIFICATION,
    distance = DEFAULT_DISTANCE,
    direction = "bottom",
    ...rest
  } = props;
  const mouseX = useMotionValue(Infinity);

  const renderChildren = () => {
    return React.Children.map(children, (child) => {
      if (React.isValidElement(child) && child.type === DockItem) {
        return React.cloneElement(child, {
          ...child.props,
          mouseX: mouseX,
          magnification: magnification,
          distance: distance,
        });
      }
      return child;
    });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      {...rest}
      className={classnames(DocStyles({ direction, className }))}
    >
      {renderChildren()}
    </motion.div>
  );
});

export interface DockItemProps {
  size?: number;
  magnification?: number;
  distance?: number;
  mouseX?: any;
  className?: string;
  children?: React.ReactNode;
  props?: PropsWithChildren;
}

const DockItem = ({
  size = 40,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  mouseX,
  className,
  children,
  ...props
}: DockItemProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const distanceCalc = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [size, magnification, size]
  );

  let width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className={classnames("aspect-square", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};

const DocStyles = cva(["flex", "gap-2", "p-2"], {
  variants: {
    direction: {
      middle: "items-center",
      top: "items-start",
      bottom: "items-end",
    },
  },
});

DockRoot.displayName = "DockRoot";
DockItem.displayName = "DockItem";

const Dock = { DockRoot, DockItem };

export default Dock;
