import type { Skill } from "../../data";
import { Competencies, Expectations, Matrix } from "../../data";
import { loopIndex } from "../../utils";

const increment = <T>(start: T, arr: readonly T[], rev?: boolean) => {
  const index = arr.indexOf(start) + (rev ? -1 : 1);
  return arr[loopIndex([...arr], index)];
};

export const jumpToNextExpectation = (skill: Skill, rev?: boolean) => {
  const expectationKey = increment(skill.expectation, Expectations, rev);
  const expectation = Matrix.byExpectation.find(
    ({ key }) => key === expectationKey,
  );
  const competency = expectation?.competencies.find(
    ({ key }) => key === skill.competency,
  );
  return competency?.skills[0].id;
};

export const jumpToNextCompetency = (skill: Skill, rev?: boolean) => {
  const competencyKey = increment(
    skill.competency,
    Competencies.map(({ key }) => key),
    rev,
  );
  const competency = Matrix.byCompetency.find(
    ({ key }) => key === competencyKey,
  );
  const expectation = competency?.expectations.find(
    ({ key }) => key === skill.expectation,
  );
  return expectation?.skills[0].id;
};

// Since we are grouping by expectation first and then by competency, we need to
//   iterate to the next competency within the same expectation, or the next
//   expectation if we are at the end of the competencies for the current
//   expectation.
const skillIdsByExpectation = Matrix.byExpectation.flatMap(({ competencies }) =>
  competencies.flatMap(({ skills }) => skills.map(({ id }) => id)),
);
export const getNextSkill = (skill: Skill, rev?: boolean) =>
  increment(skill.id, skillIdsByExpectation, rev);
