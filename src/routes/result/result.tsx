import { useData } from "../../context";
import { calculateCompetencies, getLevel } from "../../data";
import "./result.css";

export const Result = () => {
  const data = useData();

  const [competencyExpectations, overallExpectation] =
    calculateCompetencies(data);

  const levelMapping = getLevel(
    overallExpectation.value,
    data.user?.track ?? "Core",
  );

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
          <th>Overall Expectation</th>
          <td>{overallExpectation.title}</td>
        </tr>
        {levelMapping && (
          <tr>
            <th>LEVEL MAPPING</th>
            <td>
              {getLevel(overallExpectation.value, data.user?.track ?? "Core")}
            </td>
          </tr>
        )}
      </tfoot>
    </table>
  );
};
