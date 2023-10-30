import { Outlet } from "react-router-dom";
import { Nav } from "./nav";
import { DataFunctions } from "./data-functions";

export const Root = () => (
  <>
    <DataFunctions />
    <Outlet />
    <Nav />
  </>
);
