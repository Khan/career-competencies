import type { Track } from "./tracks";

// index 0 is below Beginner expectation-- then it goes:
// 1: Beginner, 2: Partial Intermediate, 3: Intermediate, 4: Partial Advanced, 5: Advanced, 6: Partial Expert, 7: Expert
type TrackLevels = [
  null,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
];

// if accessor number higher than levels, return highest level
export const getLevel = (
  expectationValue: number,
  track: Track,
): string | null => {
  const accessor = expectationValue > 7 ? 7 : expectationValue;
  return Levels(track, accessor);
};

// These may need to be split into levels for different tracks in the future
const Levels = (track: Track, expectationValue: number): string | null => {
  switch (track) {
    // So far, we only have levels for one track: Software Engineer
    case "Software Engineer":
      return SoftwareEngineer[expectationValue];
    default:
      return null;
  }
};

const SoftwareEngineer: TrackLevels = [
  null,
  "SRP I",
  "SRP II",
  "LEC 1 (Senior 1)",
  "LEC 1 (Senior 2)",
  "LEC 2 (Staff/Architect)",
  "LEC 2 (Senior Staff/Architect)",
  "LEC X (Principal & Distinguished)",
];
