import { useData } from "../../context";
import { Expectations, Matrix } from "../../data";
import "./result.css";

export const Result = () => {
  const competenciesForUser = Matrix.byCompetency;
  const { skills } = useData();

  const expectationsMet = competenciesForUser.map((competency) => {
    let expectationsMet = 0;
    for (const expectation of competency.expectations) {
      const totalSkills = expectation.skills.length;
      const skillsMet = expectation.skills.filter(
        (skill) => skills?.[skill.id]?.checked === true,
      ).length;
      switch (true) {
        // completely meets expecation; move on to next expectation
        case skillsMet === totalSkills:
          expectationsMet = expectation.value;
          continue;
        // partially meets expectation; add 1 to last expectation met to indicate partial
        case skillsMet >= totalSkills / 2:
          expectationsMet =
            expectationsMet > 0 ? expectationsMet + 1 : expectationsMet;
          break;
        default:
          break;
      }
    }
    return expectationsMet;
  });

  return (
    <table id="result-table">
      <thead>
        <tr>
          <th scope="col">Competency</th>
          <th scope="col">Expectation</th>
        </tr>
      </thead>
      <tbody>
        {competenciesForUser.map((competency, i) => (
          <tr key={competency.key}>
            <th scope="row">{competency.title}</th>
            <td>
              {Expectations.find((e) => e.value === expectationsMet[i])?.title}
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <th>EXPECTATION</th>
          <td>ugh</td>
        </tr>
        <tr>
          <th>LEVEL MAPPING</th>
          <td>pain</td>
        </tr>
      </tfoot>
    </table>
  );
};
