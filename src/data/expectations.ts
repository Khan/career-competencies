export interface Expectation {
  readonly key: string;
  readonly title: string;
  readonly partial: boolean;
  readonly value: number; // coincides with the index
}

export const Expectations: readonly Expectation[] = [
  {
    key: "none",
    title: "None",
    partial: true,
    value: 0,
  },
  {
    key: "beginner",
    title: "Beginner",
    partial: false,
    value: 1,
  },
  {
    key: "partialIntermediate",
    title: "Partial Intermediate",
    partial: true,
    value: 2,
  },
  {
    key: "intermediate",
    title: "Intermediate",
    partial: false,
    value: 3,
  },
  {
    key: "partialAdvanced",
    title: "Partial Advanced",
    partial: true,
    value: 4,
  },
  {
    key: "advanced",
    title: "Advanced",
    partial: false,
    value: 5,
  },
  {
    key: "partialExpert",
    title: "Partial Expert",
    partial: true,
    value: 6,
  },
  {
    key: "expert",
    title: "Expert",
    partial: false,
    value: 7,
  },
  {
    key: "partialLeadingExpert",
    title: "Partial Leading Expert",
    partial: true,
    value: 8,
  },
  {
    key: "leadingExpert",
    title: "Leading Expert",
    partial: false,
    value: 9,
  },
] as const;

export const getExpectation = (expectation: string): Expectation => {
  const found = Expectations.find((e) => e.key === expectation);
  if (!found) {
    throw new Error(`Expectation not found: ${expectation}`);
  }
  return found;
};
