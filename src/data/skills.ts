export interface Skill {
  name: string;
  level: number;
  category: string;
}

export const skills: Skill[] = [
  { name: "React/Next.js", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 95, category: "Languages" },
  { name: "JavaScript", level: 95, category: "Languages" },
  { name: "Node JS", level: 90, category: "Backend" },
  { name: "Python", level: 85, category: "Languages" },
  { name: "Fast API", level: 85, category: "Backend" },
  { name: "SQL Databases", level: 80, category: "Database" },
  { name: "NoSQL Databases", level: 75, category: "Database" },
];
