import { describe, expect, it } from "@jest/globals";

import { Matrix } from ".";
import type { MatrixCompetencyItem, MatrixExpectationItem } from "./matrix";

describe("Matrix function", () => {
  it('should filter competencies and expectations by "Core" track', () => {
    const track = "Core";
    const result = Matrix(track);

    expect(result).toHaveProperty("byCompetency");
    expect(result).toHaveProperty("byExpectation");

    result.byCompetency.forEach((competency: MatrixCompetencyItem) => {
      expect(competency.track).toBe(track);
    });

    result.byExpectation.forEach((expectation: MatrixExpectationItem) => {
      expect(
        expectation.competencies.every(
          (competency) => competency.track === track,
        ),
      ).toBe(true);
    });
  });

  it('should filter competencies and expectations by "Software Engineer" track', () => {
    const track = "Software Engineer";
    const result = Matrix(track);

    //expect result legth to be 6 (5 core + 1 software engineer)
    expect(result.byCompetency.length).toBe(6);
    expect(result.byCompetency[5].title).toBe("Domain Expertise");
    expect(result.byCompetency[5].track).toBe(track);
  });
});
