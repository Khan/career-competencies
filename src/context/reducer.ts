import type { State, Action } from "./types";

export const dataReducer = (state: State, action: Action): State => {
  const { type, data } = action;
  switch (type) {
    // add skill to state
    case "checked": {
      return {
        ...state,
        skills: {
          ...state.skills,
          [data.id]: {
            ...data,
            checked: true,
            examples: state.skills?.[data.id]?.examples ?? [],
          },
        },
      };
    }
    // update examples for skill in state
    case "example-updated": {
      const { [data.example.key]: _, ...examplesSansKey } =
        state.skills?.[data.skillId]?.examples ?? {};
      return {
        ...state,
        skills: {
          ...state.skills,
          [data.skillId]: {
            ...state.skills?.[data.skillId],
            examples: !data.example.value
              ? examplesSansKey
              : {
                  ...state.skills?.[data.skillId]?.examples,
                  [data.example.key]: data.example.value,
                },
          },
        },
      };
    }
    // remove skill from state without losing examples
    case "unchecked": {
      if (!state.skills?.[data.id] || !state.skills[data.id].checked) {
        throw Error("Cannot uncheck unattained skill");
      }
      return {
        ...state,
        skills: {
          ...state.skills,
          [data.id]: {
            ...state.skills[data.id],
            checked: false,
          },
        },
      };
    }
    // update user data
    case "user-data-updated": {
      return {
        ...state,
        user: data,
      };
    }
    // import data
    case "data-imported": {
      return {
        ...data,
      };
    }
    default: {
      throw Error("Unknown action");
    }
  }
};
