import { Matrix } from "../../data";
import "./result.css";

export const Result = () => {
  const competenciesForUser = Matrix.byCompetency;

  return (
    <table id="result-table">
      <thead>
        <tr>
          <th scope="col">Competency</th>
          <th scope="col">Expectation</th>
        </tr>
      </thead>
      <tbody>
        {competenciesForUser.map((competency) => (
          <>
            <tr>
              <th scope="row">{competency.title}</th>
              <td>Test</td>
            </tr>
          </>
        ))}
      </tbody>
    </table>
  );
};
