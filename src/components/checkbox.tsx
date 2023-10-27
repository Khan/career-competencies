import circleIcon from "@phosphor-icons/core/regular/circle.svg";
import circleCheckedIcon from "@phosphor-icons/core/regular/check-circle.svg";
import { PhosphorIcon } from "@khanacademy/wonder-blocks-icon";
import Clickable from "@khanacademy/wonder-blocks-clickable";
import type { CheckboxProps } from "./types";
import "./checkbox.css";

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
