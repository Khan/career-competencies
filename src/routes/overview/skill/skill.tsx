import { useState } from "react";

import { NavLink } from "react-router-dom";
import type { Skill } from "../../../data";
import { useData } from "../../../context";
import { Examples, ExpandToggle, examplesId } from "./examples";
import { Status } from "./status-indicator";
import "./skill.css";

export const SkillItem = ({ skill }: { skill: Skill }) => {
  const [expanded, setExpanded] = useState(false);

  const { skills } = useData();
  const skillData = skills?.[skill.id];
  const checked = !!skillData?.checked;
  const exampleEntries = Object.entries(skillData?.examples ?? {});
  const hasExamples = exampleEntries.length > 0;

  return (
    <>
      <div id={"skill-" + skill.id}>
        <Status checked={checked} />
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
