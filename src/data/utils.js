/* eslint-disable @typescript-eslint/no-unused-vars */

// I'm using this in Chrome console to generate the skills data.
const generateSkills = (competency, text) => {
  const lines = text.split(/\r?\n/).map((line) => line.trim());
  let currentExpectation = "beginner";
  const skills = [];
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
    skills.push({
      competency: competency,
      expectation: currentExpectation,
      id: crypto.randomUUID(),
      description: line,
    });
  }
  return skills;
};
