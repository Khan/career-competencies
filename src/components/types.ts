export interface CheckboxProps {
  label: string;
  checked: boolean;
  handleClick: () => void;
  [x: string | number | symbol]: unknown;
}

export interface NavArrowProps {
  path: string;
  direction: "left" | "right";
  double?: boolean;
  label: string;
  [x: string | number | symbol]: unknown;
}
