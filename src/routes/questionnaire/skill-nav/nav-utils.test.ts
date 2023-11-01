import { describe, expect, it } from "bun:test";
import {
  getNextSkill,
  jumpToNextCompetency,
  jumpToNextExpectation,
} from "./nav-utils";
import { Skills } from "../../../data";

// ensure nav functions don't return undefined and loop both directions
describe.each(Object.values(Skills))(`for skill`, (skill) => {
  describe(`${skill.id}`, () => {
    it.each([true, false])("should jump to the next competency", (rev) => {
      expect(jumpToNextCompetency(skill, rev)).not.toBeUndefined();
    });
    it.each([true, false])("should jump to the next expectation", (rev) => {
      expect(jumpToNextExpectation(skill, rev)).not.toBeUndefined();
    });
    it.each([true, false])(
      "should get next skill until it returns to the original skill",
      (rev) => {
        let nextSkill: keyof typeof Skills = skill.id;
        let iterations = 0;
        do {
          nextSkill = getNextSkill(Skills[nextSkill], rev);
          iterations++;
        } while (
          nextSkill !== skill.id &&
          iterations <= Object.keys(Skills).length
        );
        expect(nextSkill).toBe(skill.id);
        expect(iterations).toEqual(Object.keys(Skills).length);
      },
    );
  });
});
