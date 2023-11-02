import { describe, expect, it, beforeAll } from "@jest/globals";
import {
  getNextSkill,
  jumpToNextCompetency,
  jumpToNextExpectation,
} from "./nav-utils";
import type { Skill, UUID } from "../../../data";
import { Competencies, Skills, getTrack } from "../../../data";

describe("nav-utils", () => {
  const coreComptetencyKeys = Competencies.filter(
    ({ functionalArea: track }) => track === "Core",
  ).map(({ key }) => key);

  const coreSkillsList = Object.values(Skills).filter(({ competency }) =>
    coreComptetencyKeys.includes(competency),
  );

  const coreSkillsDict: Record<UUID, Skill> = {};

  beforeAll(() => {
    coreSkillsList.forEach((skill) => {
      coreSkillsDict[skill.id] = skill;
    });
  });

  // ensure nav functions don't return undefined and loop both directions
  describe.each(coreSkillsList)(`for skill`, (skill) => {
    const track = getTrack("core");
    describe(`${skill.id}`, () => {
      it.each([true, false])("should jump to the next competency", (rev) => {
        expect(jumpToNextCompetency({ skill, track, rev })).not.toBeUndefined();
      });
      it.each([true, false])("should jump to the next expectation", (rev) => {
        expect(
          jumpToNextExpectation({ skill, track, rev }),
        ).not.toBeUndefined();
      });
      it.each([true, false])(
        "should get next skill until it returns to the original skill",
        (rev) => {
          let nextSkill: keyof typeof Skills = skill.id;
          let iterations = 0;
          do {
            nextSkill = getNextSkill({
              skill: coreSkillsDict[nextSkill],
              track,
              rev,
            });
            iterations++;
          } while (
            nextSkill !== skill.id &&
            iterations <= Object.keys(coreSkillsDict).length
          );
          expect(nextSkill).toBe(skill.id);
          expect(iterations).toEqual(Object.keys(coreSkillsDict).length);
        },
      );
    });
  });
});
