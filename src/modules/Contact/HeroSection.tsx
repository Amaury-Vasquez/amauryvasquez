"use client";
import { Button } from "amvasdev-ui";
import { ChevronDown, Mail, Send, Sparkles } from "lucide-react";
import GradientText from "@/components/GradientText";
import { CONTACT_SECTIONS } from "@/constants/contactSections";
import { AVAILABILITY_INFO, LOCATION_INFO } from "@/data/contact";

export default function HeroSection() {
  const scrollToNext = () => {
    const nextSection = document.getElementById(CONTACT_SECTIONS.METHODS);
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  const { Icon: MapIcon, location, timezone } = LOCATION_INFO;
  const { Icon: ClockIcon, status } = AVAILABILITY_INFO;

  return (
    <section
      id={CONTACT_SECTIONS.HERO}
      className="py-10 md:py-20 relative min-h-content"
    >
      <div className="container mx-auto px-6 flex flex-col gap-6 md:gap-12 justify-center items-center">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex flex-wrap justify-center gap-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 text-success rounded-full text-sm font-medium">
              <ClockIcon className="size-4" />
              {status}
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
              <MapIcon className="size-4" />
              {location} ({timezone})
            </span>
          </div>

          <GradientText as="h1" size="5xl" gradient="rainbow" className="mb-6">
            Let&apos;s Connect
          </GradientText>

          <p className="text-xl text-base-content/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind, want to collaborate, or just want to say hi?
            <br />
            <span className="text-primary font-semibold">
              I&apos;d love to hear from you.
            </span>{" "}
            Let&apos;s build something amazing together.
          </p>

          <Button
            id="contact-hero-get-in-touch"
            variant="ghost"
            size="lg"
            onClick={scrollToNext}
            className="flex items-center gap-2 mx-auto"
            aria-label="Scroll to contact methods section"
          >
            Get In Touch
            <ChevronDown className="size-4" />
          </Button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-16 md:top-20 left-2 md:left-10 bg-primary/10 p-4 rounded-lg backdrop-blur-sm border border-primary/20 animate-float">
          <Mail className="size-6 text-primary" />
        </div>
        <div className="absolute top-96 md:top-40 right-2 md:right-20 bg-secondary/10 p-4 rounded-lg backdrop-blur-sm border border-secondary/20 animate-float-delayed">
          <Send className="size-6 text-secondary" />
        </div>
        <div className="absolute bottom-16 md:bottom-40 left-2 md:left-20 bg-accent/10 p-4 rounded-lg backdrop-blur-sm border border-accent/20 animate-float">
          <Sparkles className="size-6 text-accent" />
        </div>
      </div>
    </section>
  );
}
