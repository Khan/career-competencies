export interface Expectation {
  readonly key: string;
  readonly title: string;
  readonly partial: boolean;
  readonly value: number;
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
