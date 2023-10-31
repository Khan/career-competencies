import { useData } from "../../context";
import { calculateCompetencies, getLevel } from "../../data";
import "./result.css";

export const Result = () => {
  const { skills } = useData();

  const [competencyExpectations, overallExpectation] =
    calculateCompetencies(skills);

  return (
    <table id="result-table">
      <thead>
        <tr>
          <th scope="col">Competency</th>
          <th scope="col">Expectation</th>
        </tr>
      </thead>
      <tbody>
        {competencyExpectations.map(([c, e]) => (
          <tr key={c.key}>
            <td>{c.title}</td>
            <td>{e.title}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <th>EXPECTATION</th>
          <td>{overallExpectation.title}</td>
        </tr>
        <tr>
          <th>LEVEL MAPPING</th>
          <td>{getLevel(overallExpectation.value)}</td>
        </tr>
      </tfoot>
    </table>
  );
};
