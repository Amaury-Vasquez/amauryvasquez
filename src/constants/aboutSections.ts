export const ABOUT_SECTIONS = {
  HERO: "hero",
  EDUCATION: "education", 
  HOBBIES: "hobbies",
  PHILOSOPHY: "philosophy",
  CTA: "cta"
} as const;

export type AboutSectionId = typeof ABOUT_SECTIONS[keyof typeof ABOUT_SECTIONS];