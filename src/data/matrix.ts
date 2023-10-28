import { Competencies } from "./competencies";
import { Skills } from "./skills";
import { Expectations } from "./levels";
import { toTitleCase } from "../utils";

export const Matrix = {
  byCompetency: Competencies.map((competency) => ({
    ...competency,
    expectations: Expectations.map((expectationKey) => ({
      key: expectationKey,
      title: toTitleCase(expectationKey),
      skills: Object.values(Skills).filter(
        (skill) =>
          skill.competency === competency.key &&
          skill.expectation === expectationKey,
      ),
    })),
  })),
  byExpectation: Expectations.map((expectationKey) => ({
    key: expectationKey,
    title: toTitleCase(expectationKey),
    competencies: Competencies.map((competency) => ({
      ...competency,
      skills: Object.values(Skills).filter(
        (skill) =>
          skill.competency === competency.key &&
          skill.expectation === expectationKey,
      ),
    })),
  })),
};
