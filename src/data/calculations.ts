import type { Competency, Expectation } from ".";
import { Matrix, Expectations } from ".";
import type { useData } from "../context";

export function calculateCompetencies(
  skills: ReturnType<typeof useData>["skills"],
): [[Competency, Expectation][], Expectation] {
  const competencyExpectation: [Competency, Expectation][] =
    Matrix.byCompetency.map((competency) => {
      let expectationMet = Expectations[0]; // none
      for (const expectation of competency.expectations) {
        const totalSkills = expectation.skills.length;
        const skillsMet = expectation.skills.filter(
          (skill) => skills?.[skill.id]?.checked === true,
        ).length;
        switch (true) {
          // completely meets expecation; move on to next expectation
          case skillsMet === totalSkills:
            expectationMet = expectation;
            continue;
          // partially meets expectation; add 1 to last expectation met to find partial
          case skillsMet >= totalSkills / 2:
            expectationMet =
              expectationMet.value > 0
                ? Expectations[expectationMet.value + 1]
                : expectationMet;
            break;
          default:
            break;
        }
      }
      return [competency, expectationMet];
    });

  const overallExpectation = (): Expectation => {
    let expectationMet = Expectations[0]; // none
    const lowestExpectationValue = Math.min(
      ...competencyExpectation.map(([_, e]) => e.value),
    );
    const lowestGreaterThanOne =
      competencyExpectation.filter(
        ([_, e]) => e.value === lowestExpectationValue,
      ).length > 1;
    for (const expectation of Expectations.slice().reverse()) {
      // It is OK if **one** competency is one level lower.
      if (expectation.value - 1 > lowestExpectationValue) {
        continue;
      }
      if (
        expectation.value - 1 === lowestExpectationValue &&
        lowestGreaterThanOne
      ) {
        continue;
      }

      const totalCompetencies = Matrix.byCompetency.length;
      const competenciesAtExpectation = competencyExpectation.filter(
        ([_, e]) => e.value >= expectation.value,
      ).length;
      const competenciesExceedingExpectation = competencyExpectation.filter(
        ([_, e]) => e.value > expectation.value,
      ).length;

      // For Advanced (4) and higher, each level should meet the aligned
      //   expectation for n-1 competencies and be one level higher for one
      //   competency.
      if (expectation.value > 4) {
        if (
          competenciesAtExpectation >= totalCompetencies &&
          competenciesExceedingExpectation >= 1
        ) {
          expectationMet = expectation;
          break;
        }
      }
      // For Partial Advanced (3) and lower, each level should meet the aligned
      //   expectation for n-2 competencies and be one level higher for one
      //   competency. It is OK if one competency is one level lower.
      if (
        competenciesAtExpectation >= totalCompetencies - 2 &&
        competenciesExceedingExpectation >= 1
      ) {
        expectationMet = expectation;
        break;
      }
    }
    return expectationMet;
  };
  return [competencyExpectation, overallExpectation()];
}
