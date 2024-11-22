import { Item as ItemType } from "../types/types";
import Item from "./Item";

interface ItemsListProps {
  items: ItemType[];
}
export default function ItemsList({ items }: ItemsListProps) {
  return (
    <ul className="item-list">
      {(items || []).map(({ id, name, packed }) => (
        <Item key={id} name={name} packed={packed} />
      ))}
    </ul>
  );
}
