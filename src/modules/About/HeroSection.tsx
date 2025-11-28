"use client";
import { Button } from "amvasdev-ui";
import { ChevronDown, Code2, Heart, MapPin, Trophy } from "lucide-react";
import GradientText from "@/components/GradientText";
import { ABOUT_SECTIONS } from "@/constants/aboutSections";

export default function HeroSection() {
  const scrollToNext = () => {
    const nextSection = document.getElementById(ABOUT_SECTIONS.EDUCATION);
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id={ABOUT_SECTIONS.HERO}
      className="py-10 md:py-20 relative min-h-content"
    >
      <div className="container mx-auto px-6 flex flex-col gap-6 md:gap-12 justify-center items-center">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex flex-wrap justify-center gap-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              <Code2 className="size-4" />
              Frontend Specialist
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
              <MapPin className="size-4" />
              Mexico
            </span>
          </div>

          <GradientText as="h1" size="5xl" gradient="rainbow" className="mb-6">
            Hey, I&apos;m Amaury Vasquez
          </GradientText>

          <p className="text-xl text-base-content/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            A passionate software developer with 3+ years of experience crafting
            digital experiences.
            <br />
            <span className="text-primary font-semibold">
              Frontend specialist
            </span>{" "}
            with solid backend knowledge and a love for continuous improvement.
          </p>

          <Button
            id="about-hero-learn-more"
            variant="ghost"
            size="lg"
            onClick={scrollToNext}
            className="flex items-center gap-2 mx-auto"
            aria-label="Scroll to education section"
          >
            Learn More About Me
            <ChevronDown className="size-4" />
          </Button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-16 md:top-20 left-2 md:left-10 bg-primary/10 p-4 rounded-lg backdrop-blur-sm border border-primary/20 animate-float">
          <Code2 className="size-6 text-primary" />
        </div>
        <div className="absolute top-96 md:top-40 right-2 md:right-20 bg-secondary/10 p-4 rounded-lg backdrop-blur-sm border border-secondary/20 animate-float-delayed">
          <Heart className="size-6 text-secondary" />
        </div>
        <div className="absolute bottom-16 md:bottom-40 left-2 md:left-20 bg-accent/10 p-4 rounded-lg backdrop-blur-sm border border-accent/20 animate-float">
          <Trophy className="size-6 text-accent" />
        </div>
      </div>
    </section>
  );
}
