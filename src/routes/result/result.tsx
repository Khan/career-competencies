import { useData } from "../../context";
import { calculateCompetencies, getLevel, getTrack } from "../../data";
import "./result.css";

export const Result = () => {
  const data = useData();
  const track = data.user?.track ?? getTrack("core");

  const [competencyExpectations, overallExpectation] =
    calculateCompetencies(data);

  const levelMapping = getLevel(
    overallExpectation.value,
    competencyExpectations,
    track,
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
            <td>{levelMapping}</td>
          </tr>
        )}
      </tfoot>
    </table>
  );
};
