/* eslint-disable */

// Not CLI scripts.
//   I've been copy-pasting these into Chrome console to generate the data.

// The "text" comes from copying a column on a sheet like the old worksheet and this:
//   https://docs.google.com/spreadsheets/d/16ZYjKgx5FluGKDyuUS3CxXKy1o4MyspeGrO9ogwLTzo/edit#gid=1212361745
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

// Regina's has a different format from previous worksheets. Creating an array
//   where each element is the skills in order of expectation-- i.e.,
//   ["beginner skills in bullet form", "intermediate skills in bullet form", ...]
const skillsFromReginaSheet = (competency, skillsArray) => {
  const skills = {};
  const expectations = [
    "beginner",
    "intermediate",
    "advanced",
    "expert",
    "leading expert",
  ];
  if (skillsArray.length !== expectations.length) {
    console.error("ERROR: skillsArray.length !== expectations.length");
    return;
  }
  for (let i = 0; i < skillsArray.length; i++) {
    const expectation = expectations[i];
    const skillsGroup = skillsArray[i];
    const lines = skillsGroup.split(/\r?\n/);
    // get rid of quotation marks and bullet points, and trim whitespace
    for (let j = 0; j < lines.length; j++) {
      lines[j] = lines[j]
        .replace(/"/g, "")
        .replace(/•/g, "")
        .replace(/\*/g, "")
        .trim();
    }
    for (const line of lines) {
      if (line === "") {
        continue;
      }
      const id = crypto.randomUUID();
      skills[id] = {
        competency: competency,
        expectation: expectation,
        id: id,
        description: line,
      };
    }
  }
  return skills;
};
