import { RadarGraph } from "./radar-graph";
import "./result.css";
import { Table } from "./table";

export const Result = () => {
  return (
    <div id="result">
      <Table />
      <RadarGraph />
    </div>
  );
};
