/* eslint-disable */

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
      id: crypto.randomUUID(),
      description: line,
    };
  }
  return skills;
};
