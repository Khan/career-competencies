import { Competencies, type Competency } from "./competencies";
import { Skills } from "./skills";
import { Expectations } from "./levels";
import { toTitleCase } from "../utils";

export const Matrix = Object.keys(Competencies).map((competencyKey) => ({
  ...Competencies[competencyKey as Competency],
  key: competencyKey,
  expectations: Expectations.map((expectationKey) => ({
    key: expectationKey,
    title: toTitleCase(expectationKey),
    skills: Object.values(Skills).filter(
      (skill) =>
        skill.competency === competencyKey &&
        skill.expectation === expectationKey,
    ),
  })),
}));

export const MatrixByExpectation = Expectations.map((expectationKey) => ({
  key: expectationKey,
  title: toTitleCase(expectationKey),
  competencies: Object.keys(Competencies).map((competencyKey) => ({
    ...Competencies[competencyKey as Competency],
    key: competencyKey,
    skills: Object.values(Skills).filter(
      (skill) =>
        skill.competency === competencyKey &&
        skill.expectation === expectationKey,
    ),
  })),
}));
