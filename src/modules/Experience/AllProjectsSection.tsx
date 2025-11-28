"use client";
import { Button } from "amvasdev-ui";
import { useState } from "react";
import GradientText from "@/components/GradientText";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "../../data/projects";

export default function AllProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const categories = ["All", "Frontend", "Backend", "Full Stack"];

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <GradientText as="h2" size="4xl" className="mb-4">
            All Projects
          </GradientText>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Complete portfolio of my work in healthcare technology and web
            development
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              id={`filter-category-${category.toLowerCase().replace(/\s+/g, "-")}`}
              variant={selectedCategory === category ? "primary" : "ghost"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="transition-all duration-200"
              aria-label={`Filter projects by ${category} category`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              variant="standard"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
