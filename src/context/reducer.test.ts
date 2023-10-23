import { expect, describe, it } from "vitest";
import { dataReducer } from "./reducer";
import type { Action, State } from "./types";
import type { UUID } from "../data";
import { Skills } from "../data";

export const SkillIDs = Object.keys(Skills) as UUID[];

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
        examples: [],
      },
    },
  };

  initialState.skills![SkillIDs[0]] = {
    checked: true,
    examples: ["example 1", "example 2"],
  };

  it("should add a skill to state", () => {
    const action: Action = {
      type: "checked",
      data: Skills[SkillIDs[1] as keyof typeof Skills],
    };
    const newState = dataReducer(initialState, action);
    expect(newState?.skills?.[action.data.id]).toEqual({
      checked: true,
      examples: [],
      ...action.data,
    });
  });

  it("should update examples for a skill in state", () => {
    const action: Action = {
      type: "examples-updated",
      data: {
        id: "2-2-2-2-2",
        examples: ["new example"],
      },
    };
    const newState = dataReducer(initialState, action);
    expect(newState?.skills?.[action.data.id].examples).toEqual(action.data);
  });

  it("should remove a skill from state without losing examples", () => {
    const action: Action = {
      type: "unchecked",
      data: Skills[SkillIDs[0] as keyof typeof Skills],
    };
    const newState = dataReducer(initialState, action);
    expect(newState.skills![SkillIDs[0]].checked).toBe(false);
    expect(newState.skills![SkillIDs[0]].examples).toEqual(
      initialState.skills![SkillIDs[0]].examples,
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
            examples: [],
          },
          "5-4-3-2-1": {
            checked: true,
            examples: ["example 1", "example 2"],
          },
          "6-7-8-9-0": {
            checked: true,
            examples: ["example 3"],
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
      data: Skills[SkillIDs[3] as keyof typeof Skills],
    };
    expect(() => dataReducer(initialState, action)).toThrow(
      "Cannot uncheck unattained skill",
    );
  });
});
