import { useData } from "../../context";
import { Matrix, getTrack } from "../../data";
import { CompetencyItem } from "./competency";
import "./overview.css";

export const Overview = () => {
  const { user } = useData();
  const track = user?.track ?? getTrack("core");
  const functions = user?.track?.functions ?? ["core"];
  return (
    <span id="overview">
      {user?.track?.title ? (
        <h3>Competencies for {user.track.title}</h3>
      ) : (
        <h3>Track not selected; visit </h3>
      )}
      {functions.map((funcArea) => (
        <>
          <h6
            key={funcArea}
            style={{ margin: "1em 0 0 0", textTransform: "uppercase" }}
          >
            {funcArea}
          </h6>
          {track &&
            Matrix(track)
              .byCompetency.filter((comp) => comp.functionalArea === funcArea)
              .map((competency) => (
                <CompetencyItem key={competency.key} competency={competency} />
              ))}
        </>
      ))}
    </span>
  );
};
