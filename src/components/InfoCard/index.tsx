import { Badge, type BadgeProps } from "amvasdev-ui";
import clsx from "clsx";
import type { IconType } from "@/data/about";

export type ColorVariant = "primary" | "secondary" | "accent";

interface InfoCardProps {
  title: string;
  badges?: BadgeProps[];
  description: string;
  Icon: IconType;
  iconVariant: ColorVariant;
}

const colorVariants = {
  primary: {
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
  },
  secondary: {
    iconColor: "text-secondary",
    iconBg: "bg-secondary/10",
  },
  accent: {
    iconColor: "text-accent",
    iconBg: "bg-accent/10",
  },
};

export default function InfoCard({
  title,
  badges,
  description,
  Icon,
  iconVariant,
}: InfoCardProps) {
  const { iconColor, iconBg } = colorVariants[iconVariant];

  return (
    <div className="bg-base-100 rounded-xl p-8 shadow-lg border border-base-300 hover:shadow-xl transition-all hover:-translate-y-1">
      <div className="flex items-start gap-4 mb-6 flex-wrap">
        <div className="flex w-full gap-4 items-center">
          <div className={clsx(iconBg, "p-3 rounded-lg w-fit h-fit")}>
            <Icon className={clsx("size-6", iconColor)} />
          </div>
          <h3 className="text-2xl font-bold mb-1">{title}</h3>
        </div>
        {badges?.length ? (
          <div className="flex flex-wrap gap-2">
            {badges.map((badge, index) => (
              <Badge key={index} {...badge}>
                {badge.children}
              </Badge>
            ))}
          </div>
        ) : null}
      </div>

      <p className="text-base-content/70 leading-relaxed">{description}</p>
    </div>
  );
}
