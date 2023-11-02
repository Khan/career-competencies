import { useState } from "react";

import { NavLink } from "react-router-dom";
import type { Skill, UUID } from "../../../data";
import { useData, useDataDispatch } from "../../../context";
import { Examples, ExpandToggle, examplesId } from "./examples";
import "./skill.css";
import { Checkbox } from "../../../components";

export const SkillItem = ({ skill }: { skill: Skill }) => {
  const [expanded, setExpanded] = useState(false);

  const { skills } = useData();
  const dispatch = useDataDispatch();
  const skillData = skills?.[skill.id];
  const checked = !!skillData?.checked;
  const exampleEntries = Object.entries(skillData?.examples ?? {}) as [
    UUID,
    string,
  ][];
  const hasExamples = exampleEntries.length > 0;

  return (
    <>
      <div id={"skill-" + skill.id}>
        <Checkbox
          checked={checked}
          size="medium"
          label={"I can demonstrate this skill: " + skill.description}
          handleClick={() => {
            dispatch(
              skillData?.checked
                ? {
                    type: "unchecked",
                    data: skill,
                  }
                : {
                    type: "checked",
                    data: skill,
                  },
            );
          }}
          variant="radio"
        />
        <p>
          <NavLink to={`/questionnaire/skill/${skill.id}`}>
            {skill.description}
          </NavLink>
        </p>
        {hasExamples && (
          <ExpandToggle
            label={`Show examples for ${skill.description}`}
            controls={examplesId(skill.id)}
            expanded={expanded}
            handleClick={() => {
              setExpanded(!expanded);
            }}
          />
        )}
      </div>
      {expanded && hasExamples && (
        <Examples skillId={skill.id} examples={exampleEntries} />
      )}
    </>
  );
};
