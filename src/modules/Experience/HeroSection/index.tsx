import { Code2, Database, Globe, Lightbulb } from "lucide-react";
import GradientText from "@/components/GradientText";
import ScrollTo from "./ScrollTo";

export default function HeroSection() {
  return (
    <section id="hero" className="py-10 md:py-20 relative min-h-content">
      <div className="container mx-auto px-6 flex flex-col gap-6 md:gap-12 justify-center items-center">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              <Lightbulb className="size-4" />
              Full Stack Developer
            </span>
          </div>

          <GradientText as="h1" size="5xl" gradient="rainbow" className="mb-6">
            Crafting Digital Solutions
          </GradientText>

          <p className="text-xl text-base-content/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transforming data into intuitive, accessible digital experiences.
            <br />
            Specializing in full-stack development
          </p>
        </div>
        <ScrollTo />
      </div>

      {/* Floating Cards */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-16 md:top-20 left-2 md:left-10 bg-primary/10 p-4 rounded-lg backdrop-blur-sm border border-primary/20 animate-float">
          <Code2 className="size-6 text-primary" />
        </div>
        <div className="absolute top-96 md:top-40 right-2 md:right-20 bg-secondary/10 p-4 rounded-lg backdrop-blur-sm border border-secondary/20 animate-float-delayed">
          <Database className="size-6 text-secondary" />
        </div>
        <div className="absolute bottom-16 md:bottom-40 left-2 md:left-20 bg-accent/10 p-4 rounded-lg backdrop-blur-sm border border-accent/20 animate-float">
          <Globe className="size-6 text-accent" />
        </div>
      </div>
    </section>
  );
}
