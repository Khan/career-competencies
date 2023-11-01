import type { Track } from "./tracks";

// These may need to be split into levels for different tracks in the future
export const EngineeringLevels = {
  0: "None",
  1: "SRP I",
  2: "SRP II",
  3: "LEC 1 (Senior 1)",
  4: "LEC 1 (Senior 2)",
  5: "LEC 2 (Staff/Architect)",
  6: "LEC 2 (Senior Staff/Architect)",
  7: "LEC X (Principal & Distinguished)",
} as const;

// if accessor number higher than levels, return highest level
// eventually, we will have a switch case for each track
export const getLevel = (accessor: number, _track?: Track): string =>
  (EngineeringLevels as Record<number, string>)[accessor > 7 ? 7 : accessor];
