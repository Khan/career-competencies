import {
  Outlet,
  RouterProvider,
  createHashRouter,
  redirect,
} from "react-router-dom";
import { Nav, Overview, Result, Prompt, questionnaireLoader } from "./routes";

const router = createHashRouter([
  {
    path: "/",
    element: <Nav />,
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
