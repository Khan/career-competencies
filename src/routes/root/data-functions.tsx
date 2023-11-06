import { useRef } from "react";
import Clickable from "@khanacademy/wonder-blocks-clickable";
import { PhosphorIcon } from "@khanacademy/wonder-blocks-icon";

import Upload from "@phosphor-icons/core/regular/file-arrow-up.svg";
import Download from "@phosphor-icons/core/regular/file-arrow-down.svg";

import { useData, useDataDispatch } from "../../context";
import "./data-functions.css";

import type { State } from "../../context";
import { exportData, importData } from "./data-utils.ts";

const DataFunctions = () => {
  const data: State = useData();
  const inputReference = useRef<HTMLInputElement>(null);
  const dispatch = useDataDispatch();

  const handleImport = () => {
    // Click the hidden input to open the file dialog
    inputReference.current?.click();
  };

  return (
    <div id="data-fns-wrapper">
      <div id="data-fns">
        <Clickable
          role="button"
          aria-label="Import JSON File"
          onClick={handleImport}
          id="import"
          title="Import JSON File"
        >
          {() => <PhosphorIcon icon={Upload} size="large" />}
        </Clickable>
        <Clickable
          role="button"
          aria-label="Download JSON File"
          onClick={() => {
            exportData(data);
          }}
          id="export"
          title="Download JSON File"
        >
          {() => <PhosphorIcon icon={Download} size="large" />}
        </Clickable>
        <input
          type="file"
          aria-label="File Upload"
          hidden
          ref={inputReference}
          onChange={(e) => {
            importData(e, dispatch);
          }}
        />
      </div>
    </div>
  );
};
export default DataFunctions;
