export type CheckboxProps = {
  labelledBy: string;
  checked: boolean;
  handleClick: () => void;
  [x: string | number | symbol]: unknown;
};

export type NavArrowProps = {
  path: string;
  direction: "left" | "right";
  double?: boolean;
  [x: string | number | symbol]: unknown;
};
