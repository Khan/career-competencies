import { redirect, type LoaderFunction } from "react-router-dom";
import type { State } from "./context";
import { dataKey } from "./context";

export const loader: LoaderFunction = () => {
  const dataJson = localStorage.getItem(dataKey);
  const data = dataJson ? (JSON.parse(dataJson) as State) : {};
  if (!data.user) {
    return redirect("/profile");
  }
  return redirect("/overview");
};
