import { expect, describe, it } from "bun:test";
import { dataReducer } from "./reducer";
import type { Action, State } from "./types";
import { Skills } from "../data";

export const SkillIDs = Object.keys(Skills);

describe("dataReducer", () => {
  const initialState: State = {
    user: {
      firstName: "Ned",
      lastName: "Redmond",
      email: "ned@example.com",
      track: "Software Engineer",
      declaredLevel: "LEC 1 (Senior 1)",
    },
    skills: {
      "1-1-1-1-1": {
        checked: false,
        examples: {},
        competency: "deliveringResultsForImpact",
        expectation: "beginner",
        id: "1-1-1-1-1",
        description: "description 1",
      },
    },
  };

  if (!initialState.skills) {
    throw new Error("skills should not be undefined");
  }

  initialState.skills[SkillIDs[0]] = {
    checked: true,
    examples: {
      [crypto.randomUUID()]: "example 1",
      [crypto.randomUUID()]: "example 2",
    },
    competency: "deliveringResultsForImpact",
    expectation: "beginner",
    id: "1-1-1-1-1",
    description: "description 1",
  };

  it("should add a skill to state", () => {
    const action: Action = {
      type: "checked",
      data: Skills[SkillIDs[1]],
    };
    const newState = dataReducer(initialState, action);
    expect(newState.skills?.[action.data.id]).toEqual({
      checked: true,
      examples: [],
      ...action.data,
    });
  });

  it("should update examples for a skill in state", () => {
    const action: Action = {
      type: "example-updated",
      data: {
        skillId: "2-2-2-2-2",
        example: {
          key: crypto.randomUUID(),
          value: "new example",
        },
      },
    };
    const newState = dataReducer(initialState, action);
    expect(
      newState.skills?.[action.data.skillId].examples?.[
        action.data.example.key
      ],
    ).toEqual(action.data.example.value);
  });

  it("should remove a skill from state without losing examples", () => {
    const action: Action = {
      type: "unchecked",
      data: Skills[SkillIDs[0]],
    };
    const newState = dataReducer(initialState, action);
    if (!newState.skills || !initialState.skills) {
      throw new Error("skills should not be undefined");
    }
    expect(newState.skills[SkillIDs[0]].checked).toBe(false);
    expect(newState.skills[SkillIDs[0]].examples).toEqual(
      initialState.skills[SkillIDs[0]].examples,
    );
  });

  it("should update user data", () => {
    const action: Action = {
      type: "user-data-updated",
      data: {
        firstName: "Test",
        lastName: "Testmond",
        email: "test@example.com",
        track: "Management",
        declaredLevel: "LEC X (Principal & Distinguished)",
      },
    };
    const newState = dataReducer(initialState, action);
    expect(newState.user).toEqual(action.data);
  });

  it("should import data", () => {
    const action: Action = {
      type: "data-imported",
      data: {
        user: {
          firstName: "Red",
          lastName: "Nedmond",
          email: "red@example.com",
          track: "IT Professional",
          declaredLevel: "SRP II",
        },
        skills: {
          "1-2-3-4-5": {
            checked: false,
            examples: {},
            competency: "deliveringResultsForImpact",
            expectation: "beginner",
            id: "1-1-1-1-1",
            description: "description 1",
          },
          "5-4-3-2-1": {
            checked: true,
            examples: {
              [crypto.randomUUID()]: "example 1",
              [crypto.randomUUID()]: "example 2",
            },
            competency: "deliveringResultsForImpact",
            expectation: "beginner",
            id: "1-1-1-1-1",
            description: "description 1",
          },
          "6-7-8-9-0": {
            checked: true,
            examples: {
              [crypto.randomUUID()]: "example 3",
            },
            competency: "deliveringResultsForImpact",
            expectation: "beginner",
            id: "1-1-1-1-1",
            description: "description 1",
          },
        },
      },
    };
    const newState = dataReducer(initialState, action);
    expect(newState).toEqual(action.data);
  });

  it("should throw an error for an unknown action", () => {
    const action: Action = {
      // @ts-expect-error ts(2322) .. otherwise we can't test this
      type: "unknown",
    };
    expect(() => dataReducer(initialState, action)).toThrow("Unknown action");
  });

  it("should throw an error when unchecking an unattained skill", () => {
    const action: Action = {
      type: "unchecked",
      data: Skills[SkillIDs[3]],
    };
    expect(() => dataReducer(initialState, action)).toThrow(
      "Cannot uncheck unattained skill",
    );
  });
});
