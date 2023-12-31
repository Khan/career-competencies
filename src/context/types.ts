import type { Expectation, Skill, Track, UUID } from "../data";

interface SkillAction {
  type: "checked" | "unchecked";
  data: Skill;
}
interface ExampleUpdatedAction {
  type: "example-updated";
  data: {
    example: {
      key: UUID;
      value: string;
    };
    skillId: UUID;
  };
}
interface UserDataUpdatedAction {
  type: "user-data-updated";
  data: User;
}
interface ImportDataAction {
  type: "data-imported";
  data: State;
}
export type Action =
  | SkillAction
  | ExampleUpdatedAction
  | UserDataUpdatedAction
  | ImportDataAction;

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  track?: Track;
  currentExpectation?: Expectation;
}
export interface State {
  skills?: Record<
    UUID,
    Skill & { checked: boolean; examples: Record<UUID, string> }
  >;
  user?: User;
}
