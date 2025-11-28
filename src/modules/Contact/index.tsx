import ContactMethodsSection from "./ContactMethodsSection";
import CTASection from "./CTASection";
import HeroSection from "./HeroSection";
import ReasonsSection from "./ReasonsSection";

export default function Contact() {
  return (
    <div className="min-h-content bg-gradient-to-br from-base-100 to-base-200">
      <HeroSection />
      <ContactMethodsSection />
      <ReasonsSection />
      <CTASection />
    </div>
  );
}
