import { useRef } from "react";
import Clickable from "@khanacademy/wonder-blocks-clickable";
import { PhosphorIcon } from "@khanacademy/wonder-blocks-icon";

import Export from "@phosphor-icons/core/regular/export.svg";
import DownloadSimple from "@phosphor-icons/core/regular/download-simple.svg";

import { useData, useDataDispatch } from "../../context";
import "./data-functions.css";

import type { State } from "../../context";
import { handleExport, importData } from "./data-utils.ts";

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
      <Clickable
        role="button"
        aria-label="Export"
        onClick={() => {
          handleExport(data);
        }}
        id="export"
      >
        {() => <PhosphorIcon icon={Export} size="large" />}
      </Clickable>
      <Clickable
        role="button"
        aria-label="Import"
        onClick={handleImport}
        id="import"
      >
        {() => <PhosphorIcon icon={DownloadSimple} size="large" />}
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
  );
};
export default DataFunctions;
