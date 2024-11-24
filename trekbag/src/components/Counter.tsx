import { useMemo } from "react";
import useItemsContext from "../hooks/useItemsContext";
import { ItemProviderType } from "../types/types";

export default function Counter() {
  //? consuming context
  const data = useItemsContext();
  const { items } = data as ItemProviderType;

  //? states
  const totalNoofPackedItems = useMemo(
    () => items.filter((item) => item.packed).length,
    [items]
  );
  const totalNoofItems = useMemo(() => items.length, [items]);

  return (
    <p>
      <b>{totalNoofPackedItems}</b> / {totalNoofItems} packed
    </p>
  );
}
