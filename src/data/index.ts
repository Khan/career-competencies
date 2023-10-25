/*
 *  Per John Resig and Dian Rosile, these base competencies will replaced with
 *  new competencie that may vary by role, track, and level.
 */
export { Competencies, type Competency } from "./competencies";
export { Skills, type Skill } from "./skills";
export { Matrix, MatrixByExpectation } from "./matrix";

/*
 *  While we don't need Levels and Tracks to calculate the skills matrix, we
 *  are going to record the data in anticipation of future use per above note
 */
export {
  Expectations,
  ExpectationLevelMap,
  Levels,
  type Level,
  type Expectation,
} from "./levels";
export { Tracks, type Track } from "./tracks";
export { type UUID } from "./types";
