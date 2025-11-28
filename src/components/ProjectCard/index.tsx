import { Badge } from "amvasdev-ui";
import {
  ExternalLink,
  Github,
  Globe,
  Palette,
  Server,
  TrendingUp,
} from "lucide-react";
import ButtonLink from "../ButtonLink";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  variant?: "featured" | "standard";
}

const getCategoryIcon = (category: string) => {
  if (category === "Frontend") {
    return <Palette />;
  } else if (category === "Backend") {
    return <Server />;
  } else if (category === "Full Stack") {
    return <Globe />;
  }
  return <Globe />;
};

const getBadgeVariant = (status: string) => {
  if (status === "Completed") {
    return "success";
  } else if (status === "In Progress") {
    return "warning";
  }
  return "info";
};

export default function ProjectCard({
  project,
  variant = "standard",
}: ProjectCardProps) {
  const iconSize = variant === "featured" ? "text-6xl" : "text-5xl";
  const imageHeight = variant === "featured" ? "h-48" : "h-40";
  const hoverTransform =
    variant === "featured" ? "hover:-translate-y-2" : "hover:-translate-y-1";

  const {
    category,
    featured,
    status,
    title,
    description,
    impact,
    technologies,
    demoUrl,
    githubUrl,
  } = project;

  return (
    <div
      className={`group bg-base-100 rounded-xl shadow-lg border border-base-300 overflow-hidden hover:shadow-2xl transition-all duration-300 ${hoverTransform}`}
    >
      {/* Project Image/Icon */}
      <div
        className={`${imageHeight} bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center`}
      >
        <div className={`${iconSize} opacity-20`}>
          {getCategoryIcon(category)}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Category and Status */}
        <div className="flex items-center justify-between mb-3">
          <Badge variant="primary" soft>
            {category}
          </Badge>
          {featured && variant === "standard" ? (
            <Badge variant="accent" soft>
              Featured
            </Badge>
          ) : null}
          {variant === "featured" ? (
            <Badge variant={getBadgeVariant(status)}>{status}</Badge>
          ) : null}
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Project Description */}
        <p className="text-base-content/70 mb-4 text-sm leading-relaxed">
          {description}
        </p>

        {/* Impact */}
        {impact ? (
          <div className="flex items-center gap-2 mb-4 text-sm text-success">
            <TrendingUp className="size-4" />
            <span>{impact}</span>
          </div>
        ) : null}

        {/* Technologies */}
        <div
          className={`flex flex-wrap mb-4 ${
            variant === "featured" ? "gap-2" : "gap-1"
          }`}
        >
          {technologies.slice(0, 3).map((tech: string) => (
            <span key={tech} className="px-2 py-1 bg-base-200 text-xs rounded">
              {tech}
            </span>
          ))}
          {technologies.length > 3 ? (
            <span className="px-2 py-1 text-xs text-base-content/60">
              +{technologies.length - 3}
              {variant === "featured" ? " more" : ""}
            </span>
          ) : null}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          {demoUrl ? (
            <ButtonLink
              href={demoUrl}
              variant="primary"
              size="sm"
              className="flex items-center gap-1"
              aria-label={`View demo for ${title}`}
            >
              <ExternalLink className="size-3" />
              Demo
            </ButtonLink>
          ) : null}
          {githubUrl ? (
            <ButtonLink
              href={githubUrl}
              variant="ghost"
              size="sm"
              className="flex items-center gap-1"
              aria-label={`View source code for ${title}`}
            >
              <Github className="size-3" />
              Code
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </div>
  );
}
