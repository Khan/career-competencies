import { PhosphorIcon } from "@khanacademy/wonder-blocks-icon";
import circleIconFill from "@phosphor-icons/core/fill/circle-fill.svg";
import circleIcon from "@phosphor-icons/core/bold/circle-bold.svg";

export const Status = ({ checked }: { checked: boolean }) => (
  <PhosphorIcon icon={checked ? circleIconFill : circleIcon} size="medium" />
);
