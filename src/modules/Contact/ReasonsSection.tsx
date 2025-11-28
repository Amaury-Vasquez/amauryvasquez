import clsx from "clsx";
import GradientText from "@/components/GradientText";
import { CONTACT_SECTIONS } from "@/constants/contactSections";
import { CONTACT_REASONS, type ContactReason } from "@/data/contact";

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

function ReasonCard({ reason }: { reason: ContactReason }) {
  const { Icon, title, description, iconVariant } = reason;
  const { iconColor, iconBg } = colorVariants[iconVariant];

  return (
    <div className="bg-base-100 rounded-xl p-8 shadow-lg border border-base-300 hover:shadow-xl transition-all hover:-translate-y-1">
      <div className="flex items-center gap-4 mb-4">
        <div className={clsx(iconBg, "p-3 rounded-lg")}>
          <Icon className={clsx("size-6", iconColor)} />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-base-content/70 leading-relaxed">{description}</p>
    </div>
  );
}

export default function ReasonsSection() {
  return (
    <section id={CONTACT_SECTIONS.REASONS} className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <GradientText as="h2" size="4xl" className="mb-4">
            Why Reach Out?
          </GradientText>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Whether it&apos;s for work or just a friendly chat, I&apos;m always
            excited to connect with new people.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {CONTACT_REASONS.map((reason) => (
            <ReasonCard key={reason.title} reason={reason} />
          ))}
        </div>
      </div>
    </section>
  );
}
