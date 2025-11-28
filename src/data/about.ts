import {
  GraduationCap,
  Monitor,
  Zap,
  Trophy,
  Palette,
  Target,
  Lightbulb,
  TrendingUp,
  type LucideProps,
} from "lucide-react";
import type { ColorVariant } from "@/components/InfoCard";
import type { BadgeProps } from "amvasdev-ui";
import type { FC } from "react";

export type IconType = FC<LucideProps>;

export interface EducationItem {
  Icon: IconType;
  title: string;
  institution: string;
  location: string;
  description: string;
  iconVariant: ColorVariant;
  badges: BadgeProps[];
}

export interface HobbyItem {
  Icon: IconType;
  title: string;
  category: string;
  description: string;
  achievement?: string;
  iconVariant: ColorVariant;
  badges: BadgeProps[];
}

export interface PhilosophyItem {
  Icon: IconType;
  title: string;
  concept: string;
  description: string;
  iconVariant: ColorVariant;
  badges: BadgeProps[];
}

export const EDUCATION_DATA: EducationItem[] = [
  {
    Icon: GraduationCap,
    title: "Computer Science",
    institution: "Instituto Politécnico Nacional, ESCOM",
    location: "Mexico",
    description:
      "Studied computer science fundamentals and software engineering principles at one of Mexico's top technical institutions.",
    iconVariant: "primary",
    badges: [
      {
        variant: "primary",
        soft: true,
        children: "IPN, ESCOM",
      },
      { children: "Mexico" },
    ],
  },
  {
    Icon: Monitor,
    title: "Web Dev Journey",
    institution: "Platzi & Self-Study",
    location: "Online",
    description:
      "Leveraged pandemic time to master web development through comprehensive online courses and hands-on projects.",
    iconVariant: "secondary",
    badges: [
      { variant: "primary", soft: true, children: "Platzi & Self-Study" },
      { children: "Online" },
    ],
  },
  {
    Icon: Zap,
    title: "Continuous Learning",
    institution: "Various Platforms",
    location: "Ongoing",
    description:
      "Always exploring new technologies and methodologies to stay current with industry trends and best practices.",
    iconVariant: "accent",
    badges: [
      { variant: "primary", soft: true, children: "Various Platforms" },
      { children: "Ongoing" },
    ],
  },
];

export const HOBBIES_DATA: HobbyItem[] = [
  {
    Icon: Trophy,
    title: "Competitive Chess",
    category: "Mind Sport",
    description:
      "FIDE-rated competitive player with achievements in national championships across advanced and expert categories.",
    achievement: "National Championships",
    iconVariant: "primary",
    badges: [
      { soft: true, children: "Mind Sport" },
      { variant: "success", soft: true, children: "National Championships" },
    ],
  },
  {
    Icon: Target,
    title: "Soccer",
    category: "Team Sport",
    description:
      "Playing soccer helps me stay active, build teamwork skills, and provides a great balance to coding sessions.",
    iconVariant: "secondary",
    badges: [{ soft: true, children: "Team Sport" }],
  },
  {
    Icon: TrendingUp,
    title: "Fitness & Exercise",
    category: "Wellness",
    description:
      "Regular exercise routine that keeps me energized and focused, essential for maintaining peak performance in development work.",
    iconVariant: "accent",
    badges: [{ soft: true, children: "Wellness" }],
  },
];

export const PHILOSOPHY_DATA: PhilosophyItem[] = [
  {
    Icon: Lightbulb,
    title: "Kaizen",
    concept: "Continuous Improvement",
    description:
      "Believing in small, daily improvements that compound over time. Every day is an opportunity to become 1% better.",
    iconVariant: "primary",
    badges: [
      { variant: "primary", soft: true, children: "Continuous Improvement" },
    ],
  },
  {
    Icon: Palette,
    title: "Ikigai",
    concept: "Life Purpose",
    description:
      "Finding the intersection of what I love, what I'm good at, what the world needs, and what I can be paid for.",
    iconVariant: "secondary",
    badges: [{ variant: "primary", soft: true, children: "Life Purpose" }],
  },
];
