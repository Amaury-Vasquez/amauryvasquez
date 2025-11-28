"use client";
import GradientText from "@/components/GradientText";
import InfoCard from "@/components/InfoCard";
import { ABOUT_SECTIONS } from "@/constants/aboutSections";
import { EDUCATION_DATA } from "@/data/about";

export default function EducationSection() {
  return (
    <section id={ABOUT_SECTIONS.EDUCATION} className="py-20 bg-base-200/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <GradientText as="h2" size="4xl" className="mb-4">
            Educational Foundation
          </GradientText>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            From formal computer science education to self-directed learning
            during the pandemic
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {EDUCATION_DATA.map((item, index) => {
            const { Icon, title, description, iconVariant, badges } = item;

            return (
              <InfoCard
                key={index}
                Icon={Icon}
                title={title}
                description={description}
                iconVariant={iconVariant}
                badges={badges}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
