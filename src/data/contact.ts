import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Clock,
  MessageSquare,
  Briefcase,
  Coffee,
  type LucideProps,
} from "lucide-react";
import type { ColorVariant } from "@/components/InfoCard";
import type { FC } from "react";

export type IconType = FC<LucideProps>;

export interface ContactMethod {
  Icon: IconType;
  title: string;
  value: string;
  href: string;
  description: string;
  iconVariant: ColorVariant;
}

export interface ContactReason {
  Icon: IconType;
  title: string;
  description: string;
  iconVariant: ColorVariant;
}

export const LINKEDIN_URL = "https://www.linkedin.com/in/amaury-vasquez-dev/";
export const GITHUB_URL = "https://github.com/Amaury-Vasquez";

export const CONTACT_METHODS: ContactMethod[] = [
  {
    Icon: Mail,
    title: "Email",
    value: "amaury.vasquezenriquez@gmail.com",
    href: "mailto:amaury.vasquezenriquez@gmail.com",
    description: "Best for detailed inquiries and project discussions",
    iconVariant: "primary",
  },
  {
    Icon: Linkedin,
    title: "LinkedIn",
    value: "amaury-vasquez-dev",
    href: LINKEDIN_URL,
    description: "Let's connect professionally and expand our networks",
    iconVariant: "secondary",
  },
  {
    Icon: Github,
    title: "GitHub",
    value: "Amaury-Vasquez",
    href: GITHUB_URL,
    description: "Check out my open source projects and contributions",
    iconVariant: "accent",
  },
];

export const CONTACT_REASONS: ContactReason[] = [
  {
    Icon: Briefcase,
    title: "Job Opportunities",
    description:
      "Open to discussing full-time positions, contract work, and exciting new challenges",
    iconVariant: "primary",
  },
  {
    Icon: MessageSquare,
    title: "Collaboration",
    description:
      "Interested in collaborating on open source projects or building something together",
    iconVariant: "secondary",
  },
  {
    Icon: Coffee,
    title: "Just Chat",
    description:
      "Want to talk about tech, chess, or anything interesting? I'm always up for a conversation",
    iconVariant: "accent",
  },
];

export const LOCATION_INFO = {
  Icon: MapPin,
  location: "Mexico",
  timezone: "CST (UTC-6)",
};

export const AVAILABILITY_INFO = {
  Icon: Clock,
  status: "Available for opportunities",
  responseTime: "Usually responds within 24 hours",
};
