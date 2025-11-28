import CTASection from "./CTASection";
import EducationSection from "./EducationSection";
import HeroSection from "./HeroSection";
import HobbiesSection from "./HobbiesSection";
import PhilosophySection from "./PhilosophySection";

export default function About() {
  return (
    <div className="min-h-content bg-gradient-to-br from-base-100 to-base-200">
      <HeroSection />
      <EducationSection />
      <HobbiesSection />
      <PhilosophySection />
      <CTASection />
    </div>
  );
}
