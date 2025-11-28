"use client";
import { getButtonClasses } from "amvasdev-ui";
import clsx from "clsx";
import Link from "next/link";
import { ReactNode } from "react";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?:
    | "base"
    | "neutral"
    | "primary"
    | "secondary"
    | "accent"
    | "info"
    | "success"
    | "warning"
    | "error"
    | "ghost"
    | "link";
  size?: "xs" | "sm" | "md" | "lg";
  outlined?: boolean;
  disabled?: boolean;
  className?: string;
  external?: boolean;
  target?: string;
  rel?: string;
  "aria-label"?: string;
}

const EXTERNAL_URL_PREFIXES = ["http", "mailto", "tel"];

export default function ButtonLink({
  href,
  children,
  variant = "base",
  size = "md",
  outlined = false,
  disabled = false,
  className = "",
  external = false,
  target,
  rel,
  "aria-label": ariaLabel,
}: ButtonLinkProps) {
  const buttonClasses = getButtonClasses({
    variant,
    size,
    outlined,
  });

  const combinedClasses = clsx(
    buttonClasses,
    {
      "btn-disabled": disabled,
    },
    className
  );

  const linkProps = {
    className: combinedClasses,
    "aria-label": ariaLabel,
    ...(external && {
      target: target || "_blank",
      rel: rel || "noopener noreferrer",
    }),
    ...(target && { target }),
    ...(rel && { rel }),
  };

  if (
    external ||
    EXTERNAL_URL_PREFIXES.some((prefix) => href.startsWith(prefix))
  ) {
    return (
      <a href={href} {...linkProps}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} {...linkProps}>
      {children}
    </Link>
  );
}
