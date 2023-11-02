import circleIcon from "@phosphor-icons/core/regular/circle.svg";
import circleCheckedIcon from "@phosphor-icons/core/regular/check-circle.svg";
import circleIconFill from "@phosphor-icons/core/fill/circle-fill.svg";

import { PhosphorIcon } from "@khanacademy/wonder-blocks-icon";
import Clickable from "@khanacademy/wonder-blocks-clickable";
import "./checkbox.css";

export interface CheckboxProps {
  size: "medium" | "xlarge";
  label: string;
  checked: boolean;
  handleClick: () => void;
  variant?: "radio" | "checkbox";
  [x: string | number | symbol]: unknown;
}

export const Checkbox = ({
  size,
  label,
  checked,
  handleClick,
  variant,
  ...props
}: CheckboxProps) => (
  <Clickable
    role="checkbox"
    onClick={handleClick}
    aria-label={label}
    aria-checked={checked}
    id="checkbox"
  >
    {() =>
      variant === "radio" ? (
        <PhosphorIcon
          icon={checked ? circleIconFill : circleIcon}
          size="medium"
        />
      ) : (
        <PhosphorIcon
          icon={checked ? circleCheckedIcon : circleIcon}
          size={size}
          {...props}
        />
      )
    }
  </Clickable>
);
