import { createContext, useContext } from "react";
import type { State, Action } from "./types";

export const DataContext = createContext<State>({});
export const DataDispatchContext = createContext<React.Dispatch<Action>>(
  () => undefined,
);
export const useData = () => {
  return useContext(DataContext);
};
export const useDataDispatch = () => {
  return useContext(DataDispatchContext);
};
