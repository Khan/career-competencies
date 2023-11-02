import type { MatrixCompetencyItem } from "../../data";
import { ExpectationItem } from "./expectation";

export const CompetencyItem = ({
  competency,
}: {
  competency: MatrixCompetencyItem;
}) => (
  <details key={competency.key} id={"competency-" + competency.key}>
    <summary>{competency.title}</summary>
    {competency.expectations.map((expectation) => (
      <ExpectationItem key={expectation.key} expectation={expectation} />
    ))}
  </details>
);
