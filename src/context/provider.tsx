/// <reference lib="dom" />
import type { ReactNode } from "react";
import { useEffect, useReducer } from "react";
import { dataReducer } from "./reducer";
import { DataContext, DataDispatchContext } from "./context";
import { getData, setData } from "./local-storage";

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [userCompetencies, dispatch] = useReducer(dataReducer, getData());
  useEffect(() => {
    setData(userCompetencies);
  }, [userCompetencies]);

  return (
    <DataContext.Provider value={userCompetencies}>
      <DataDispatchContext.Provider value={dispatch}>
        {children}
      </DataDispatchContext.Provider>
    </DataContext.Provider>
  );
};
