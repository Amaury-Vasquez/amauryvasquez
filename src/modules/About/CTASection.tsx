import { ChevronRight, Mail } from "lucide-react";
import ButtonLink from "@/components/ButtonLink";
import GradientText from "@/components/GradientText";
import { ABOUT_SECTIONS } from "@/constants/aboutSections";

export default function CTASection() {
  return (
    <section
      id={ABOUT_SECTIONS.CTA}
      className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10"
    >
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <GradientText as="h2" size="4xl" className="mb-6">
            Let&apos;s Connect & Collaborate
          </GradientText>
          <p className="text-lg text-base-content/70 mb-8">
            Whether you want to discuss technology, chess strategies, or
            potential collaborations, I&apos;d love to hear from you. Let&apos;s
            build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <ButtonLink
              variant="primary"
              size="lg"
              href="/contact"
              className="flex items-center gap-2"
              aria-label="Navigate to contact page"
            >
              <Mail size={20} />
              Get In Touch
            </ButtonLink>
            <ButtonLink
              variant="ghost"
              size="lg"
              href="/projects"
              className="flex items-center gap-2"
              aria-label="Navigate to projects page"
            >
              View My Work
              <ChevronRight size={20} />
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
