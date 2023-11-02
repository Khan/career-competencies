import type { State } from "./types";

export const dataKey = "competenciesDataV1";

export const getData = (): State => {
  const data = localStorage.getItem(dataKey);
  return data ? (JSON.parse(data) as State) : {};
};

export const setData = (data: State) => {
  localStorage.setItem(dataKey, JSON.stringify(data));
};
