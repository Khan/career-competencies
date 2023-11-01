import type { Competency } from "./competencies";
import { Competencies } from "./competencies";
import { Skills } from "./skills";
import type { Expectation } from "./expectations";
import { Expectations } from "./expectations";
import type { Track } from "./tracks";

const PrimaryExpectations = Expectations.filter(
  (e) => !e.partial,
) as readonly Expectation[];

type MatrixType = (track?: Track) => {
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
};


const filterByTrack = (selectedTrack, competency: Competency) => {
  return !selectedTrack || competency.track === "Core" || selectedTrack === competency.track;
}

export const Matrix: MatrixType = (selectedTrack) => (
  {
    byCompetency: Competencies.filter((competency) => filterByTrack(selectedTrack, competency)).map((competency) => ({
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
      competencies: Competencies.filter((competency) => filterByTrack(selectedTrack, competency)).map((competency) => ({
        ...competency,
        skills: Object.values(Skills).filter(
          (skill) =>
            skill.competency === competency.key &&
            skill.expectation === expectation.key,
        ),
      })),
    })),
  });
