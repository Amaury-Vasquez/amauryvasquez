export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: "Frontend" | "Backend" | "Full Stack";
  status: "Completed" | "In Progress" | "Concept";
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  impact?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Yield Rate",
    description:
      "A single-page application focused on calculating and displaying investment yields for fixed-income investments.",
    longDescription:
      "Built a streamlined tool for investors to calculate and visualize yields from fixed-income investments. The application provides clear, accurate yield calculations with an intuitive interface designed for quick analysis.",
    technologies: ["React", "TypeScript", "TailwindCSS"],
    category: "Frontend",
    status: "Completed",
    image: "/api/placeholder/600/400",
    demoUrl: "http://yieldrate.amauryvasquez.com/",
    featured: true,
    impact: "Simplifies fixed-income investment analysis",
  },
  {
    id: "2",
    title: "amvasdev-ui",
    description:
      "A comprehensive React component library with daisyUI styling system, providing reusable UI components for modern web applications.",
    longDescription:
      "Developed a full-featured component library that powers this portfolio and other projects. Features 14 predefined themes, TypeScript support, and a wide range of customizable components built on top of daisyUI's styling system.",
    technologies: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "daisyUI",
      "Storybook",
    ],
    category: "Frontend",
    status: "Completed",
    image: "/api/placeholder/600/400",
    demoUrl: "http://ui.amauryvasquez.com/",
    featured: true,
    impact: "Powers multiple production applications",
  },
];
