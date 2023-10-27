export type CheckboxProps = {
  label: string;
  checked: boolean;
  handleClick: () => void;
  [x: string | number | symbol]: unknown;
}

export type NavArrowProps = {
  path: string;
  direction: "left" | "right";
  double?: boolean;
  label: string;
  [x: string | number | symbol]: unknown;
};
