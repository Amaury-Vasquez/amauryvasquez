import clsx from "clsx";
import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  className?: string;
  gradient?: "primary-secondary" | "primary-accent" | "secondary-accent" | "rainbow";
}

const sizeClasses = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl md:text-7xl",
  "6xl": "text-6xl md:text-8xl",
  "7xl": "text-7xl",
  "8xl": "text-8xl",
  "9xl": "text-9xl",
};

const gradientClasses = {
  "primary-secondary": "bg-gradient-to-r from-primary to-secondary",
  "primary-accent": "bg-gradient-to-r from-primary to-accent",
  "secondary-accent": "bg-gradient-to-r from-secondary to-accent", 
  "rainbow": "bg-gradient-to-r from-primary via-secondary to-accent",
};

export default function GradientText({
  children,
  size = "md",
  as: Component = "span",
  className,
  gradient = "primary-secondary",
}: GradientTextProps) {
  const classes = clsx(
    sizeClasses[size],
    gradientClasses[gradient],
    "font-bold bg-clip-text text-transparent leading-tight",
    // Add bottom padding to prevent descenders from being cut off
    size === "5xl" || size === "6xl" || size === "7xl" || size === "8xl" || size === "9xl" ? "pb-2" : "pb-1",
    className
  );

  return <Component className={classes}>{children}</Component>;
}