import { useState } from "react";
import circleIconFill from "@phosphor-icons/core/fill/circle-fill.svg";
import circleIcon from "@phosphor-icons/core/bold/circle-bold.svg";
import caretDown from "@phosphor-icons/core/bold/caret-down-bold.svg";
import caretUp from "@phosphor-icons/core/bold/caret-up-bold.svg";
import { PhosphorIcon } from "@khanacademy/wonder-blocks-icon";
import { View } from "@khanacademy/wonder-blocks-core";
import Clickable from "@khanacademy/wonder-blocks-clickable";
import { NavLink } from "react-router-dom";
import type { Skill } from "../../data";
import { useData } from "../../context";

export const SkillItem = ({ skill }: { skill: Skill }) => {
  const [expanded, setExpanded] = useState(false);

  console.log({ skill });

  const { skills } = useData();
  const skillData = skills?.[skill.id];
  const checked = !!skillData?.checked;
  const exampleEntries = Object.entries(skillData?.examples ?? {});

  return (
    <>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "1em",
        }}
      >
        <Status checked={checked} />
        <p>
          <NavLink to={`/questionnaire/skill/${skill.id}`}>
            {skill.description}
          </NavLink>
        </p>
        {!!exampleEntries.length && (
          <ExamplesToggle
            label={`Show examples for ${skill.description}`}
            expanded={expanded}
            handleClick={() => {
              setExpanded(!expanded);
            }}
          />
        )}
      </View>
      {expanded &&
        !!exampleEntries.length &&
        exampleEntries.map(([key, value]) => (
          <p key={key}>
            <NavLink to={`/questionnaire/skill/${skill.id}#${key}`}>
              {value}
            </NavLink>
          </p>
        ))}
    </>
  );
};

export const Status = ({ checked }: { checked: boolean }) => (
  <PhosphorIcon icon={checked ? circleIconFill : circleIcon} size="medium" />
);

export const ExamplesToggle = ({
  label,
  expanded,
  handleClick,
}: {
  label: string;
  expanded: boolean;
  handleClick: () => void;
}) => (
  <Clickable
    role="checkbox"
    onClick={handleClick}
    aria-label={label}
    aria-expanded={expanded}
    style={{ fontSize: 0 }}
  >
    {() => <PhosphorIcon icon={expanded ? caretUp : caretDown} size="medium" />}
  </Clickable>
);
