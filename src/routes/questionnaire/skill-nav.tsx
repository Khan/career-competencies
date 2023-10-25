import { NavArrow } from "../../components";
import { Competencies } from "../../data";
import type { Skill } from "../../data";
import { toTitleCase } from "../../utils";
import {
  jumpToNextCompetency,
  jumpToNextExpectation,
  getNextSkill,
} from "./nav-utils";

export const SkillNav = ({ skill }: { skill: Skill }) => {
  const competency = Competencies[skill.competency];
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
        <h3>{toTitleCase(skill.expectation)}</h3>
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
          path={basePath + jumpToNextCompetency(skill, true)}
        />
        <h3 id="competency">{competency.title}</h3>
        <NavArrow
          direction="right"
          double
          path={basePath + jumpToNextCompetency(skill)}
        />
      </div>
      <div id="skill-nav" className="questionnaire-nav">
        <NavArrow
          direction="left"
          label={"previous skill"}
          path={basePath + getNextSkill(skill, true)}
        />
        <label htmlFor={skill.id}>{skill.description}</label>
        <NavArrow
          direction="right"
          label={"next skill"}
          path={basePath + getNextSkill(skill)}
        />
      </div>
    </>
  );
};
