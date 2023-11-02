import type { Skill } from "../../../data";
import { Matrix } from "../../../data";
import { loopIndex } from "../../../utils";

const increment = <T>(start: T, arr: readonly T[], rev?: boolean) => {
  const index = arr.indexOf(start) + (rev ? -1 : 1);
  return arr[loopIndex([...arr], index)];
};

export const jumpToNextExpectation = (skill: Skill, rev?: boolean) => {
  const expectationKeys = Matrix("Core").byExpectation.map(({ key }) => key);
  const expectationKey = increment(skill.expectation, expectationKeys, rev);
  const expectation = Matrix("Core").byExpectation.find(
    ({ key }) => key === expectationKey,
  );
  const competency = expectation?.competencies.find(
    ({ key }) => key === skill.competency,
  );
  return competency?.skills[0].id;
};

export const jumpToNextCompetency = (skill: Skill, rev?: boolean) => {
  const competencyKeys = Matrix("Core").byCompetency.map(({ key }) => key);
  const competencyKey = increment(skill.competency, competencyKeys, rev);
  const competency = Matrix("Core").byCompetency.find(
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
const skillIdsByExpectation = Matrix("Core").byExpectation.flatMap(
  ({ competencies }) =>
    competencies.flatMap(({ skills }) => skills.map(({ id }) => id)),
);
export const getNextSkill = (skill: Skill, rev?: boolean) =>
  increment(skill.id, skillIdsByExpectation, rev);
