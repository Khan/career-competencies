import { useRef } from "react";
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
  const itemsRef = useRef<Map<string, HTMLInputElement>>();

  const getMap = () => {
    if (!itemsRef.current) {
      // Initialize the Map on first usage.
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  };

  const setMap = (example: string, node: HTMLInputElement | null) => {
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
            <input
              type="text"
              ref={(node) => {
                setMap(key, node);
              }}
              value={exampleInputs[key]}
              placeholder={
                i === 0
                  ? "I demonstrate this skill by..."
                  : "Add another example"
              }
              onChange={(e) => {
                dispatch({
                  type: "example-updated",
                  data: {
                    skillId,
                    example: {
                      key: key,
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
