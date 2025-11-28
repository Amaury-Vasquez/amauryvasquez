import { ChevronRight, Mail } from "lucide-react";
import ButtonLink from "@/components/ButtonLink";
import GradientText from "@/components/GradientText";
import { CONTACT_SECTIONS } from "@/constants/contactSections";
import { EMAIL } from "@/constants/data";

export default function CTASection() {
  return (
    <section
      id={CONTACT_SECTIONS.CTA}
      className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10"
    >
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <GradientText as="h2" size="4xl" className="mb-6">
            Ready to Start a Conversation?
          </GradientText>
          <p className="text-lg text-base-content/70 mb-8">
            Don&apos;t hesitate to reach out. Whether you have a question, a
            project idea, or just want to say hello, my inbox is always open.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <ButtonLink
              variant="primary"
              size="lg"
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-2"
              aria-label="Send me an email"
            >
              <Mail size={20} />
              Send Me an Email
            </ButtonLink>
            <ButtonLink
              variant="ghost"
              size="lg"
              href="/experience"
              className="flex items-center gap-2"
              aria-label="Navigate to experience page"
            >
              View My Experience
              <ChevronRight size={20} />
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
