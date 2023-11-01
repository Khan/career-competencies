import { useRef, useEffect } from "react";
import { useDataDispatch } from "../../context";
import type { UUID } from "../../data";

export const Examples = ({
  skillId,
  examples,
}: {
  skillId: UUID;
  examples: Record<UUID, string>;
}) => {
  const dispatch = useDataDispatch();
  const itemsRef = useRef<Map<string, HTMLTextAreaElement>>();

  // Used to automatically resize the textarea to fit the content
  const onChangeResizeHandler = function (textArea: HTMLTextAreaElement) {
    textArea.style.height = "1em";
    textArea.style.height = `${textArea.scrollHeight}px`;
  };

  useEffect(() => {
    // set the initial height of the textareas to
    // the height of their content on initial render
    const map = getMap();
    map.forEach((node) => {
      if (node.textContent) {
        onChangeResizeHandler(node);
      }
    });
  }, []);

  const getMap = () => {
    if (!itemsRef.current) {
      // Initialize the Map on first usage.
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  };

  const setMap = (example: string, node: HTMLTextAreaElement | null) => {
    const map = getMap();
    if (node) {
      map.set(example, node);
    } else {
      map.delete(example);
    }
  };

  // create an empty input to invite the user to add an example
  const exampleInputs = { ...examples };
  exampleInputs[crypto.randomUUID()] = "";

  return (
    <div id="examples">
      <span>
        Great! Please provide some examples of how you demonstrate this skill.
      </span>
      <ul>
        {Object.keys(exampleInputs).map((key, i) => (
          <li key={key} id={key}>
            <textarea
              ref={(node) => {
                setMap(key, node);
              }}
              value={exampleInputs[key as UUID]}
              placeholder={
                i === 0
                  ? "I demonstrate this skill by..."
                  : "Add another example"
              }
              onChange={(e) => {
                onChangeResizeHandler(e.target);
                dispatch({
                  type: "example-updated",
                  data: {
                    skillId,
                    example: {
                      key: key as UUID,
                      value: e.target.value,
                    },
                  },
                });
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
