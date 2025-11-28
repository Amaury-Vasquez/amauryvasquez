import { ChevronRight, Users } from "lucide-react";
import ButtonLink from "@/components/ButtonLink";
import GradientText from "@/components/GradientText";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <GradientText as="h2" size="4xl" className="mb-6">
            Let&apos;s Build Something Amazing
          </GradientText>
          <p className="text-lg text-base-content/70 mb-8">
            Ready to discuss your next healthcare technology project? I&apos;d
            love to hear about your ideas and explore how we can bring them to
            life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <ButtonLink
              variant="primary"
              size="lg"
              href="/contact"
              className="flex items-center gap-2"
              aria-label="Navigate to contact page"
            >
              <Users size={20} />
              Start a Conversation
            </ButtonLink>
            <ButtonLink
              variant="ghost"
              size="lg"
              href="/about"
              className="flex items-center gap-2"
              aria-label="Navigate to about page"
            >
              Learn More About Me
              <ChevronRight size={20} />
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
