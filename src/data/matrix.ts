import type { Competency } from "./competencies";
import { Competencies } from "./competencies";
import { Skills } from "./skills";
import type { Expectation } from "./expectations";
import { Expectations } from "./expectations";

const PrimaryExpectations = Expectations.filter(
  (e) => !e.partial,
) as readonly Expectation[];

export const Matrix: {
  byCompetency: (Competency & {
    expectations: (Expectation & {
      skills: (typeof Skills)[keyof typeof Skills][];
    })[];
  })[];
  byExpectation: (Expectation & {
    competencies: (Competency & {
      skills: (typeof Skills)[keyof typeof Skills][];
    })[];
  })[];
} = {
  byCompetency: Competencies.map((competency) => ({
    ...competency,
    expectations: PrimaryExpectations.map((expectation) => ({
      ...expectation,
      skills: Object.values(Skills).filter(
        (skill) =>
          skill.competency === competency.key &&
          skill.expectation === expectation.key,
      ),
    })),
  })),
  byExpectation: PrimaryExpectations.map((expectation) => ({
    ...expectation,
    competencies: Competencies.map((competency) => ({
      ...competency,
      skills: Object.values(Skills).filter(
        (skill) =>
          skill.competency === competency.key &&
          skill.expectation === expectation.key,
      ),
    })),
  })),
};
