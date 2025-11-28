import clsx from "clsx";
import { ExternalLink } from "lucide-react";
import GradientText from "@/components/GradientText";
import { CONTACT_SECTIONS } from "@/constants/contactSections";
import { CONTACT_METHODS, type ContactMethod } from "@/data/contact";

const colorVariants = {
  primary: {
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    hoverBorder: "hover:border-primary/50",
  },
  secondary: {
    iconColor: "text-secondary",
    iconBg: "bg-secondary/10",
    hoverBorder: "hover:border-secondary/50",
  },
  accent: {
    iconColor: "text-accent",
    iconBg: "bg-accent/10",
    hoverBorder: "hover:border-accent/50",
  },
};

function ContactMethodCard({ method }: { method: ContactMethod }) {
  const { Icon, title, value, href, description, iconVariant } = method;
  const { iconColor, iconBg, hoverBorder } = colorVariants[iconVariant];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        "group bg-base-100 rounded-xl p-8 shadow-lg border border-base-300 hover:shadow-xl transition-all hover:-translate-y-1",
        hoverBorder
      )}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className={clsx(iconBg, "p-3 rounded-lg")}>
          <Icon className={clsx("size-6", iconColor)} />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 text-wrap">
            <h3 className="text-xl font-bold">{title}</h3>
            <ExternalLink className="size-4 text-base-content/40 group-hover:text-base-content/70 transition-colors" />
          </div>
          <p className={clsx("font-medium break-all", iconColor)}>{value}</p>
        </div>
      </div>
      <p className="text-base-content/70 leading-relaxed">{description}</p>
    </a>
  );
}

export default function ContactMethodsSection() {
  return (
    <section id={CONTACT_SECTIONS.METHODS} className="py-20 bg-base-200/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <GradientText as="h2" size="4xl" className="mb-4">
            Ways to Reach Me
          </GradientText>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Choose your preferred method to get in touch. I&apos;m active on all
            these platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {CONTACT_METHODS.map((method) => (
            <ContactMethodCard key={method.title} method={method} />
          ))}
        </div>
      </div>
    </section>
  );
}
