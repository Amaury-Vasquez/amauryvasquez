"use client";
import GradientText from "@/components/GradientText";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "../../data/projects";

export default function FeaturedProjectsSection() {
  const featuredProjects = PROJECTS.filter((project) => project.featured);

  if (!featuredProjects.length) return null;

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <GradientText as="h2" size="4xl" className="mb-4">
            Featured Projects
          </GradientText>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Key projects showcasing my expertise in full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              variant="featured"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
