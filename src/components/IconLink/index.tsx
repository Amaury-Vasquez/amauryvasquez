"use client";
import { getIconButtonClasses } from "amvasdev-ui";
import clsx from "clsx";
import Link from "next/link";
import { ReactNode } from "react";

interface IconLinkProps {
  href: string;
  icon: ReactNode;
  disabled?: boolean;
  className?: string;
  external?: boolean;
  target?: string;
  rel?: string;
  "aria-label"?: string;
}

const EXTERNAL_URL_PREFIXES = ["http", "mailto", "tel"];

export default function IconLink({
  href,
  icon,
  disabled = false,
  className = "",
  external = false,
  target,
  rel,
  "aria-label": ariaLabel,
}: IconLinkProps) {
  const iconButtonClasses = getIconButtonClasses();

  const combinedClasses = clsx(
    iconButtonClasses,
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
        {icon}
      </a>
    );
  }

  return (
    <Link href={href} {...linkProps}>
      {icon}
    </Link>
  );
}
