import { PhosphorIcon } from "@khanacademy/wonder-blocks-icon";
import Export from "@phosphor-icons/core/regular/export.svg";
import DownloadSimple from "@phosphor-icons/core/regular/download-simple.svg";
import Clickable from "@khanacademy/wonder-blocks-clickable";
import "./data-functions.css";
import { useData, useDataDispatch } from "../../context";
import { useRef } from "react";
import type { State } from "../../context";

export const DataFunctions = () => {
  const data: unknown = useData();
  const inputReference = useRef<HTMLInputElement>(null);
  const dispatch = useDataDispatch();

  const handleImport = () => {
    // Click the hidden input to open the file dialog
    inputReference.current?.click();
  };

  const importData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Set up the FileReader to read the file
      // parse the JSON and dispatch the data
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const result = e.target?.result;
        if (typeof result === "string") {
          try {
            const parsed = JSON.parse(result) as State;
            if (parsed) {
              dispatch({
                type: "data-imported",
                data: parsed,
              });
            }
          } catch (error) {
            console.error("Failed to parse JSON:", error);
          }
        }
      };
      reader.onerror = () => {
        console.error("Failed to read file:", reader.error);
      };
      reader.readAsText(file);
    }
  };

  const handleExport = () => {
    // TODO: We could export this with the user's name
    // so that it's easier for managers to find the right file
    const fileName = "competencies.json";

    // Create a blob link, download it, and remove the link
    const blob = new Blob([JSON.stringify(data)], { type: "text/json" });
    const jsonURL = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    document.body.appendChild(link);
    link.href = jsonURL;
    link.setAttribute("download", fileName);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="data-fns-wrapper">
      <Clickable
        role="button"
        aria-label="Export"
        onClick={handleExport}
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
      <input type="file" hidden ref={inputReference} onChange={importData} />
    </div>
  );
};
