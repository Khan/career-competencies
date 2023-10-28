/* eslint-disable */

// I've been copy-pasting this into Chrome console and running it to generate
//   the data for skills. The "text" comes from copying a column on a sheet like
//   this: https://docs.google.com/spreadsheets/d/16ZYjKgx5FluGKDyuUS3CxXKy1o4MyspeGrO9ogwLTzo/edit#gid=1212361745
const generateSkills = (competency, text) => {
  const lines = text.split(/\r?\n/).map((line) => line.trim());
  let currentExpectation = "beginner";
  const skills = {};
  for (const line of lines) {
    if (line === "") {
      continue;
    }
    if (
      [
        "Beginner",
        "Intermediate",
        "Advanced",
        "Expert",
        "Leading Expert",
      ].includes(line)
    ) {
      currentExpectation = line.toLowerCase();
      continue;
    }
    const id = crypto.randomUUID();
    skills[id] = {
      competency: competency,
      expectation: currentExpectation,
      id: id,
      description: line,
    };
  }
  return skills;
};
