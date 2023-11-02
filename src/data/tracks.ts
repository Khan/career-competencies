export interface Track {
  readonly key: string;
  readonly title: string;
  readonly management: boolean;
  readonly functions: readonly FunctionalArea[];
}

export const FunctionalAreas = [
  "Engineering", // comprises Software Engineer, Quality Engineer, Data Insights, and others
  "Management",
  "Core", // applies to all tracks in org
] as const;

export type FunctionalArea = (typeof FunctionalAreas)[number];

export const Tracks: readonly Track[] = [
  {
    key: "core",
    title: "Other",
    management: false,
    functions: ["Core"],
  },
  {
    key: "dataInsights",
    title: "Data Insights",
    management: false,
    functions: ["Engineering", "Core"],
  },
  {
    key: "itProfessional",
    title: "IT Professional",
    management: false,
    functions: ["Engineering", "Core"],
  },
  {
    key: "engManagement",
    title: "Management, Engineering",
    management: true,
    functions: ["Engineering", "Management", "Core"],
  },
  {
    key: "softwareEngineer",
    title: "Software Engineer",
    management: false,
    functions: ["Engineering", "Core"],
  },
  {
    key: "qualityAnalyst",
    title: "Quality Analyst",
    management: false,
    functions: ["Engineering", "Core"],
  },
  {
    key: "qualityEngineer",
    title: "Quality Engineer",
    management: false,
    functions: ["Engineering", "Core"],
  },
  {
    key: "otherManagement",
    title: "Management, Other",
    management: true,
    functions: ["Management", "Core"],
  },
] as const;

export const getTrack = (track: string): Track => {
  const found = Tracks.find((t) => t.key === track);
  if (!found) {
    throw new Error(`Track not found: ${track}`);
  }
  return found;
};
