import { Matrix } from "../../data";
import { CompetencyItem } from "./competency";
import "./overview.css";

export const Overview = () => (
  <span id="overview">
    {Matrix("Software Engineer").byCompetency.map((competency) => (
      <CompetencyItem key={competency.key} competency={competency} />
    ))}
  </span>
);
