import {
  Outlet,
  RouterProvider,
  createHashRouter,
  redirect,
} from "react-router-dom";
import {
  Root,
  Overview,
  Result,
  Prompt,
  questionnaireLoader,
  Profile,
} from "./routes";
import { loader } from "./loader";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    loader,
    children: [
      {
        path: "",
        loader: () => redirect("/overview"),
      },
      {
        path: "overview",
        element: <Overview />,
      },
      {
        path: "result",
        element: <Result />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "questionnaire",
        element: <Outlet />,
        children: [
          {
            path: "skill/:id",
            loader: questionnaireLoader,
            element: <Prompt />,
          },
          {
            path: "*?",
            loader: questionnaireLoader,
          },
        ],
      },
    ],
  },
  {
    path: "/*",
    loader: () => redirect("/"),
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
