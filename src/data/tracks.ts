export const Tracks = [
  "Data Insights",
  "IT Professional",
  "Management",
  "Software Engineer",
  "Quality Analyst",
  "Quality Engineer",
  "Core",
] as const;

export type Track = (typeof Tracks)[number];
