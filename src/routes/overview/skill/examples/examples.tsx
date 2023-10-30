import { NavLink } from "react-router-dom";
import type { UUID } from "../../../../data";
import { examplesId } from "./utils";

export const Examples = ({
  skillId,
  examples,
}: {
  skillId: UUID;
  examples: [UUID, string][];
}) => (
  <>
    <span>Examples</span>
    <ol id={examplesId(skillId)}>
      {examples.map(([key, value]) => (
        <li key={key}>
          <NavLink to={`/questionnaire/skill/${skillId}#${key}`}>
            {value}
          </NavLink>
        </li>
      ))}
    </ol>
  </>
);
