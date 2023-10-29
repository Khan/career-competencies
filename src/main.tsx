import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Router from "./router.tsx";
import "./index.css";
import { DataProvider } from "./context";

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <DataProvider>
        <Router />
      </DataProvider>
    </React.StrictMode>,
  );
}
