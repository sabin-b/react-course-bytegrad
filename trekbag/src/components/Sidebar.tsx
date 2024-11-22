import { Item } from "../types/types";
import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

interface SidebarProps {
  onAddItem: (newItem: Item) => void;
}

export default function Sidebar({ onAddItem }: SidebarProps) {
  return (
    <aside className="sidebar">
      <AddItemForm onAddItem={onAddItem} />
      <ButtonGroup />
    </aside>
  );
}
