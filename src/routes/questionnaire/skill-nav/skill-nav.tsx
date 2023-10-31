import { Matrix } from "../../../data";
import type { Skill } from "../../../data";
import { NavArrow } from "./nav-arrow";
import {
  jumpToNextCompetency,
  jumpToNextExpectation,
  getNextSkill,
} from "./nav-utils";

export const SkillNav = ({ skill }: { skill: Skill }) => {
  const competency = Matrix.byCompetency.find(
    (c) => c.key === skill.competency,
  );

  if (!competency) {
    throw new Error(
      `Could not find competency for skill ${skill.id}: (${skill.description})`,
    );
  }

  const expectation = competency.expectations.find(
    (e) => e.key === skill.expectation,
  );

  if (!expectation) {
    throw new Error(
      `Could not find expectation for skill ${skill.id}: (${skill.description})`,
    );
  }

  const basePath = "/questionnaire/skill/";

  return (
    <>
      <div id="expectation-nav" className="questionnaire-nav">
        <NavArrow
          direction="left"
          double
          label={"previous expectation"}
          path={basePath + jumpToNextExpectation(skill, true)}
        />
        <h3>{expectation?.title}</h3>
        <NavArrow
          direction="right"
          double
          label={"next expectation"}
          path={basePath + jumpToNextExpectation(skill)}
        />
      </div>
      <div id="competency-nav" className="questionnaire-nav">
        <NavArrow
          direction="left"
          double
          label={"previous competency"}
          path={basePath + jumpToNextCompetency(skill, true)}
        />
        <h3 id="competency">{competency.title}</h3>
        <NavArrow
          direction="right"
          double
          label={"next competency"}
          path={basePath + jumpToNextCompetency(skill)}
        />
      </div>
      <div id="skill-nav" className="questionnaire-nav">
        <NavArrow
          direction="left"
          label={"previous skill"}
          path={basePath + getNextSkill(skill, true)}
        />
        <span>{skill.description}</span>
        <NavArrow
          direction="right"
          label={"next skill"}
          path={basePath + getNextSkill(skill)}
        />
      </div>
    </>
  );
};
