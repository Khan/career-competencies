import { useData } from "../../context";
import { Matrix } from "../../data";
import { CompetencyItem } from "./competency";
import "./overview.css";

export const Overview = () => {
  const { user } = useData();
  return (
    <span id="overview">
      {Matrix(user?.track ?? "Core").byCompetency.map((competency) => (
        <CompetencyItem key={competency.key} competency={competency} />
      ))}
    </span>
  );
};
