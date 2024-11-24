import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <AddItemForm />
      <ButtonGroup />
    </aside>
  );
}
