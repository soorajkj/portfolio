import React, { CSSProperties, ReactNode } from "react";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import { cva, VariantProps } from "class-variance-authority";
import { cx } from "@lib/utils";

interface LinkProps extends NextLinkProps, VariantProps<typeof LinkStyles> {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  underline?: boolean;
}

export default function Link(props: LinkProps) {
  const { href, children, className, ...rest } = props;

  return (
    <NextLink href={href} {...rest} className={cx(LinkStyles({ className }))}>
      {children}
    </NextLink>
  );
}

const LinkStyles = cva(["cf-link", "cf-inline-block"]);
