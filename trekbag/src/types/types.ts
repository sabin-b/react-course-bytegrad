//? action button type
export type ActionButton = {
  className?: string;
  label: string;
  btnType: "secondary" | "primary";
};

//? item type

export type Item = {
  id: number;
  name: string;
  packed: boolean;
};
