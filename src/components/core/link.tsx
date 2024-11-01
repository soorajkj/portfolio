import React, { CSSProperties, ReactNode } from "react";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import { cva, VariantProps } from "class-variance-authority";
import { classnames } from "@/utils/classnames";

interface LinkProps extends NextLinkProps, VariantProps<typeof LinkStyles> {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  underline?: boolean;
}

export default function Link(props: LinkProps) {
  const { href, children, className, ...rest } = props;

  return (
    <NextLink
      href={href}
      {...rest}
      className={classnames(LinkStyles({ className }))}
    >
      {children}
    </NextLink>
  );
}

const LinkStyles = cva(["link", "inline-block"]);
