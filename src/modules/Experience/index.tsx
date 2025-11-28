import { PROJECTS } from "../../data/projects";
import AllProjectsSection from "./AllProjectsSection";
import CTASection from "./CTASection";
import FeaturedProjectsSection from "./FeaturedProjectsSection";
import HeroSection from "./HeroSection";
import SkillsSection from "./SkillsSection";
import TimelineSection from "./TimelineSection";

export default function Projects() {
  return (
    <div className="min-h-content bg-gradient-to-br from-base-100 to-base-200">
      <HeroSection />
      <TimelineSection />
      <FeaturedProjectsSection />
      <SkillsSection />
      {PROJECTS.length > 3 ? <AllProjectsSection /> : null}
      <CTASection />
    </div>
  );
}
