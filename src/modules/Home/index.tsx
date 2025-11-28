"use client";
import ButtonLink from "@/components/ButtonLink";
import GradientText from "@/components/GradientText";
import { NAME } from "@/constants/data";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 to-base-200 flex items-center justify-center relative min-h-content">
      {/* Hero Section */}
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <GradientText as="h1" size="5xl" className="mb-6">
            {NAME}
          </GradientText>
          <h2 className="text-2xl md:text-3xl text-base-content/80 mb-8 font-light">
            Web Developer & Software Engineer
          </h2>
          <p className="text-lg text-base-content/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting exceptional digital experiences through functional
            websites, robust backend systems, and scalable architecture
            solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-16">
            <ButtonLink
              variant="primary"
              size="lg"
              href="/experience"
              aria-label="Navigate to experience page"
            >
              View My Experience
            </ButtonLink>
            <ButtonLink
              variant="ghost"
              size="lg"
              href="/contact"
              aria-label="Navigate to contact page"
            >
              Get In Touch
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
}
