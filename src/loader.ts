import { redirect, type LoaderFunction } from "react-router-dom";
import type { State } from "./context";

export const loader: LoaderFunction = () => {
  const dataJson = localStorage.getItem("competenciesData");
  const data = dataJson ? (JSON.parse(dataJson) as State) : {};
  if (!data.user) {
    return redirect("/profile");
  }
  return redirect("/overview");
};
