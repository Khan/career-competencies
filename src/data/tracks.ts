export interface Track {
  readonly key: string;
  readonly title: string;
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
    functions: ["Core"],
  },
  {
    key: "dataInsights",
    title: "Data Insights",
    functions: ["Core", "Engineering"],
  },
  {
    key: "itProfessional",
    title: "IT Professional",
    functions: ["Core", "Engineering"],
  },
  {
    key: "engManagement",
    title: "Management, Engineering",
    functions: ["Core", "Management", "Engineering"],
  },
  {
    key: "softwareEngineer",
    title: "Software Engineer",
    functions: ["Core", "Engineering"],
  },
  {
    key: "qualityAnalyst",
    title: "Quality Analyst",
    functions: ["Core", "Engineering"],
  },
  {
    key: "qualityEngineer",
    title: "Quality Engineer",
    functions: ["Core", "Engineering"],
  },
  {
    key: "otherManagement",
    title: "Management, Other",
    functions: ["Core", "Management"],
  },
] as const;

export const getTrack = (track: string): Track => {
  const found = Tracks.find((t) => t.key === track);
  if (!found) {
    throw new Error(`Track not found: ${track}`);
  }
  return found;
};
