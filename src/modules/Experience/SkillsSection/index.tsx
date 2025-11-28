import GradientText from "@/components/GradientText";
import { skills } from "@/data/skills";
import SkillCard from "./SkillCard";

export default function SkillsSection() {
  return (
    <section className="py-20 bg-base-200/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <GradientText as="h2" size="4xl" className="mb-4">
            Technical Expertise
          </GradientText>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Core technologies and frameworks I work with daily in pharmaceutical
            development
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {skills
            .sort((a, b) => b.level - a.level)
            .map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
        </div>
      </div>
    </section>
  );
}
