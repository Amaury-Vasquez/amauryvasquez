"use client";
import GradientText from "@/components/GradientText";
import InfoCard from "@/components/InfoCard";
import { ABOUT_SECTIONS } from "@/constants/aboutSections";
import { HOBBIES_DATA } from "@/data/about";

export default function HobbiesSection() {
  return (
    <section id={ABOUT_SECTIONS.HOBBIES} className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <GradientText as="h2" size="4xl" className="mb-4">
            Beyond the Code
          </GradientText>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Hobbies and activities that keep me balanced, competitive, and
            continuously growing
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {HOBBIES_DATA.map((item, index) => {
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
