import circleIcon from "@phosphor-icons/core/regular/circle.svg";
import circleCheckedIcon from "@phosphor-icons/core/regular/check-circle.svg";
import { PhosphorIcon } from "@khanacademy/wonder-blocks-icon";
import Clickable from "@khanacademy/wonder-blocks-clickable";
import "./checkbox.css";

export interface CheckboxProps {
  label: string;
  checked: boolean;
  handleClick: () => void;
  [x: string | number | symbol]: unknown;
}

export const Checkbox = ({
  label,
  checked,
  handleClick,
  ...props
}: CheckboxProps) => (
  <Clickable
    role="checkbox"
    onClick={handleClick}
    aria-label={label}
    aria-checked={checked}
    id="checkbox"
  >
    {() => (
      <PhosphorIcon
        icon={checked ? circleCheckedIcon : circleIcon}
        size="xlarge"
        {...props}
      />
    )}
  </Clickable>
);
