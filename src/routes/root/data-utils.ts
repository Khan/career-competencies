import type { State, Action } from "../../context";

export const importData = (
  e: React.ChangeEvent<HTMLInputElement>,
  dispatch: React.Dispatch<Action>,
) => {
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

export const exportData = (data: State) => {
  // We want to export the file with the user's name
  // so that managers can easily differentiate between
  // multiple files
  const fileName = data.user
    ? data.user.firstName + data.user.lastName + "-Competencies.json"
    : "Competencies.json";

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
