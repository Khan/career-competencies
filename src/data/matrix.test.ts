import { describe, expect, it } from "@jest/globals";

import { Matrix } from ".";
import type { MatrixCompetencyItem, MatrixExpectationItem } from "./matrix";
import { getTrack } from "./tracks";

describe("Matrix function", () => {
  it('should filter competencies and expectations by "Core" track', () => {
    const track = getTrack("core");
    const result = Matrix(track);

    expect(result).toHaveProperty("byCompetency");
    expect(result).toHaveProperty("byExpectation");

    result.byCompetency.forEach((competency: MatrixCompetencyItem) => {
      expect(competency.functionalArea).toBe("Core");
    });

    result.byExpectation.forEach((expectation: MatrixExpectationItem) => {
      expect(
        expectation.competencies.every((competency) =>
          track.functions.includes(competency.functionalArea),
        ),
      ).toBe(true);
    });
  });

  it('should filter competencies and expectations by "Software Engineer" track', () => {
    const track = getTrack("softwareEngineer");
    const result = Matrix(track);

    //expect result legth to be 6 (5 core + 1 software engineer)
    expect(result.byCompetency.length).toBe(6);
    expect(result.byCompetency[5].title).toBe("Domain Expertise");
    expect(result.byCompetency[5].functionalArea).toBe("Engineering");
  });
});
