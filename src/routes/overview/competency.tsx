import type { Matrix } from "../../data";
import { ExpectationItem } from "./expectation";

export const CompetencyItem = ({
  competency,
}: {
  competency: (typeof Matrix.byCompetency)[number];
}) => (
  <details key={competency.key}>
    <summary>{competency.title}</summary>
    {competency.expectations.map((expectation) => (
      <ExpectationItem key={expectation.key} expectation={expectation} />
    ))}
  </details>
);
