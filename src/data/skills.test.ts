import { describe, expect, test } from "@jest/globals";
import { Skills } from "./skills";

describe("Skills", () => {
  test("should have no duplicates", () => {
    // Get all skill descriptions
    const skillDescriptions = Object.values(Skills).map(
      (skill) => skill.description,
    );

    // Get unique skill descriptions
    const uniqueSkillDescriptions = Array.from(new Set(skillDescriptions));

    // If there are duplicates, they will be highlighted in output
    expect(skillDescriptions).toEqual(uniqueSkillDescriptions);
  });
});
