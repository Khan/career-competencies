import type { Level, Skill, Track, UUID } from "../data";

interface SkillAction {
  type: "checked" | "unchecked";
  data: Skill;
};
type ExampleUpdatedAction = {
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

interface User {
  firstName: string;
  lastName: string;
  email: string;
  track: Track;
  declaredLevel: Level;
};
export type State = {
  skills?: Record<
    UUID,
    { checked?: boolean; examples?: { [key: UUID]: string } }
  >;
  user?: User;
}
