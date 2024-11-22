import { ActionButton, Item } from "../types/types";

export const actionButtons: ActionButton[] = [
  {
    btnType: "secondary",
    className: "capitalize btn",
    label: "Mark As All Complete",
  },
  {
    btnType: "secondary",
    className: "capitalize btn",
    label: "Mark As All InComplete",
  },
  {
    btnType: "secondary",
    className: "capitalize btn",
    label: " Reset to initial",
  },
  {
    btnType: "secondary",
    className: "capitalize btn",
    label: "Remove all items",
  },
];

export const initialItems: Item[] = [
  {
    id: 1,
    name: "travel bag",
    packed: false,
  },
  {
    id: 2,
    name: "pencil box",
    packed: true,
  },
  {
    id: 3,
    name: "wallet",
    packed: false,
  },
];
