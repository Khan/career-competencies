import { redirect, type LoaderFunction } from "react-router-dom";
import { Skills } from "../../data";

export const loader: LoaderFunction = ({ params }) => {
  if (!params.id) {
    return redirect(`/questionnaire/skill/${Object.keys(Skills)[0]}`);
  }
  return {
    skill: Skills[params.id as keyof typeof Skills],
  };
};
