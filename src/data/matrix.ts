import type { Competency } from "./competencies";
import { Competencies } from "./competencies";
import { Skills } from "./skills";
import type { Expectation } from "./expectations";
import { Expectations } from "./expectations";
import type { Track } from "./tracks";

const PrimaryExpectations = Expectations.filter(
  (e) => !e.partial,
) as readonly Expectation[];

const filterByTrack = (competency: Competency, track: Track) => {
  return track.functions.includes(competency.functionalArea);
};

export const Matrix = (
  selectedTrack: Track,
): {
  byCompetency: MatrixCompetencyItem[];
  byExpectation: MatrixExpectationItem[];
} => ({
  byCompetency: Competencies.filter((competency) =>
    filterByTrack(competency, selectedTrack),
  ).map((competency) => ({
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
    competencies: Competencies.filter((competency) =>
      filterByTrack(competency, selectedTrack),
    ).map((competency) => ({
      ...competency,
      skills: Object.values(Skills).filter(
        (skill) =>
          skill.competency === competency.key &&
          skill.expectation === expectation.key,
      ),
    })),
  })),
});

export interface MatrixCompetencyItem extends Competency {
  expectations: (Expectation & {
    skills: (typeof Skills)[keyof typeof Skills][];
  })[];
}

export interface MatrixExpectationItem extends Expectation {
  competencies: (Competency & {
    skills: (typeof Skills)[keyof typeof Skills][];
  })[];
}
