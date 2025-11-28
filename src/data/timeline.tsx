import { Award, Code2, Target } from "lucide-react";

export interface TimelineEvent {
  date: string;
  title: string;
  role: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export const timeline: TimelineEvent[] = [
  {
    date: "November 2022",
    title: "Started Journey",
    role: "Intern at Ballast Lane Applications",
    description:
      "Began as an intern working on bug fixes and learning the fundamentals of web development in a healthcare technology environment.",
    icon: <Target className="size-4" />,
    color: "text-info",
  },
  {
    date: "April 2023",
    title: "Junior Developer",
    role: "Promotion to Junior Developer",
    description:
      "Advanced to junior developer role, taking on prototype implementations and focusing primarily on frontend development for PrescriberPoint.",
    icon: <Code2 className="size-4" />,
    color: "text-success",
  },
  {
    date: "January 2025",
    title: "Semi-Senior Developer",
    role: "Current Role - Full Stack Development",
    description:
      "Now focusing on full-stack development of product detail pages, managing data processing pipelines and creating beautiful user interfaces for pharmaceutical products.",
    icon: <Award className="size-4" />,
    color: "text-primary",
  },
];
