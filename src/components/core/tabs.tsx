"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { classnames } from "@/utils/classnames";

const TabsRoot = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={classnames(
      "mb-6 flex h-10 items-center gap-4 border-0",
      className
    )}
    {...props}
  />
));

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={classnames(
      "text-color-white/50 data-[state=active]:border-b-color-accent data-[state=active]:text-color-accent mb-px inline-flex items-center justify-center whitespace-nowrap border-b-2 px-2 pb-2.5 pt-3 text-base font-semibold leading-none transition-all disabled:pointer-events-none disabled:opacity-50",
      className
    )}
    {...props}
  />
));

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={classnames(className)}
    {...props}
  />
));

TabsList.displayName = TabsPrimitive.List.displayName;
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
TabsContent.displayName = TabsPrimitive.Content.displayName;

const Tabs = { TabsRoot, TabsList, TabsTrigger, TabsContent };

export default Tabs;
