import useItemsContext from "../hooks/useItemsContext";
import { ItemProviderType } from "../types/types";

interface ItemProps {
  name: string;
  packed: boolean;
  id: number;
}

export default function Item({ name, packed, id }: ItemProps) {
  //? context
  const data = useItemsContext();
  const { handlePackedToggle, handleDeleteItem } = data as ItemProviderType;
  return (
    <li className="item">
      <label>
        <input
          onChange={() => handlePackedToggle(id)}
          checked={packed}
          type="checkbox"
        />{" "}
        {name}
      </label>
      <button onClick={() => handleDeleteItem(id)}>❌</button>
    </li>
  );
}
