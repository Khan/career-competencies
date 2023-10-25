import caretLeft from "@phosphor-icons/core/regular/caret-left.svg";
import caretRight from "@phosphor-icons/core/regular/caret-right.svg";
import caretDoubleLeft from "@phosphor-icons/core/regular/caret-double-left.svg";
import caretDoubleRight from "@phosphor-icons/core/regular/caret-double-right.svg";
import { PhosphorIcon } from "@khanacademy/wonder-blocks-icon";
import type { NavArrowProps } from "./types";
import { NavLink } from "react-router-dom";

export const NavArrow = ({
  direction,
  double,
  path,
  ...props
}: NavArrowProps) => (
  <NavLink to={path}>
    <PhosphorIcon
      icon={
        direction === "left"
          ? double
            ? caretDoubleLeft
            : caretLeft
          : double
          ? caretDoubleRight
          : caretRight
      }
      size="large"
      {...props}
    />
  </NavLink>
);
