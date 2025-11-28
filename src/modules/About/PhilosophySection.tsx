"use client";
import GradientText from "@/components/GradientText";
import InfoCard from "@/components/InfoCard";
import { ABOUT_SECTIONS } from "@/constants/aboutSections";
import { PHILOSOPHY_DATA } from "@/data/about";

export default function PhilosophySection() {
  return (
    <section id={ABOUT_SECTIONS.PHILOSOPHY} className="py-20 bg-base-200/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <GradientText as="h2" size="4xl" className="mb-4">
            Life Philosophy
          </GradientText>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            The principles that guide my approach to life, work, and continuous
            growth
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {PHILOSOPHY_DATA.map((item, index) => {
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

        <div className="max-w-3xl mx-auto mt-12 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 border border-primary/20">
            <p className="text-lg text-base-content/80 font-medium">
              &quot;Happiness comes from improving yourself every single
              day&quot;
            </p>
            <p className="text-sm text-base-content/60 mt-2">
              — My personal motto for continuous growth
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
