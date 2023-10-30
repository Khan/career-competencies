import Clickable from "@khanacademy/wonder-blocks-clickable";
import { PhosphorIcon } from "@khanacademy/wonder-blocks-icon";
import caretDown from "@phosphor-icons/core/bold/caret-down-bold.svg";
import caretUp from "@phosphor-icons/core/bold/caret-up-bold.svg";

export const ExpandToggle = ({
  label,
  controls,
  expanded,
  handleClick,
}: {
  label: string;
  controls: string;
  expanded: boolean;
  handleClick: () => void;
}) => (
  <Clickable
    role="checkbox"
    onClick={handleClick}
    aria-label={label}
    aria-controls={controls}
    aria-expanded={expanded}
    style={{ fontSize: 0 }}
  >
    {() => <PhosphorIcon icon={expanded ? caretUp : caretDown} size="medium" />}
  </Clickable>
);
