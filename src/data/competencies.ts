import type { FunctionalArea } from "./tracks";

// Leaving the door open here to map to values and principles in the future.
export interface Competency {
  readonly key: string;
  readonly title: string;
  readonly description: string;
  readonly functionalArea: FunctionalArea;
  readonly kaValues?: string[];
  readonly a2ePrinciples?: string[];
}

// Source: https://docs.google.com/spreadsheets/d/1_8FPu_7KaRFb_KqriiHgnP_1Oe43L-1Vr695fgqI3Po/edit?usp=sharing on 2023-10-27
export const Competencies: readonly Competency[] = [
  {
    key: "deliveringResultsForImpact",
    title: "Delivering Results For Impact",
    description:
      "Aware of the overall objective, prioritizes tasks effectively, and achieves desired outcomes that benefit the organization's mission.",
    functionalArea: "Core",
  },
  {
    key: "problemSolving",
    title: "Problem Solving",
    description:
      "Uses knowledge of the organization to solve problems and accomplish goals. Exercise sound reasoning to analyze issues, synthesize information, make decisions and solve problems.",
    functionalArea: "Core",
  },
  {
    key: "communicationAndEngagement",
    title: "Communication and Engagement",
    description:
      "Shares appropriate information with relevant individuals, at the appropriate time and in a suitable manner. Actively listens to facilitate understanding and effective communication.",
    functionalArea: "Core",
  },
  {
    key: "leadership",
    title: "Leadership",
    description:
      "Leverage strengths to guide cross-functional collaboration and inspire others to contribute towards achieving shared objectives.",
    functionalArea: "Core",
  },
  {
    key: "inclusiveCollaboration",
    title: "Inclusive Collaboration",
    description:
      "Collaborates effectively with a diverse team, fostering a supportive environment where everyone feels valued, empowered, and free to contribute towards a shared goal.",
    functionalArea: "Core",
  },
  {
    key: "coachingAndFeedback",
    title: "Coaching and Feedback",
    description:
      "Demonstrates honesty and integrity in developing others by consistently listening, providing constructive feedback, and remaining open-minded.",
    functionalArea: "Management",
  },
  {
    key: "navigateChangeAndDifficulty",
    title: "Navigate Change and Difficulty",
    description:
      "Demonstrates emotional intelligence in leading self and others through change and facilitating difficult conversations with empathy.",
    functionalArea: "Management",
  },
  {
    key: "ensuresAccountability",
    title: "Ensures Accountability",
    description:
      "Prioritizes achievement of intended outcomes, holding both self and others accountable. Fosters a culture where team members feel ownership of their roles and responsibilities.",
    functionalArea: "Management",
  },
  {
    key: "domainExpertise",
    title: "Domain Expertise",
    description:
      "Knowledge of your discipline (e.g. Security, Accessibility, Performance), Language, Tools, Product sense",
    functionalArea: "Engineering",
  },
] as const;
