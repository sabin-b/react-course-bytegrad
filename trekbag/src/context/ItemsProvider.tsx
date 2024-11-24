import React, { PropsWithChildren } from "react";
import { initialItems } from "../lib/constants";
import { ItemProviderType, Item as ItemType } from "../types/types";

// eslint-disable-next-line react-refresh/only-export-components
export const ItemContext = React.createContext<ItemProviderType | null>(null);

export default function ItemsProvider({ children }: PropsWithChildren) {
  const [items, setItems] = React.useState<ItemType[]>(
    () => JSON.parse(localStorage.getItem("items")!) || initialItems
  );

  //? handle add item
  function handleAddItem(newItem: ItemType) {
    setItems((prev) => [...prev, newItem]);
  }

  //? handle packed toggle
  function handlePackedToggle(itemId: number) {
    const values = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, packed: !item.packed };
      }
      return item;
    });

    //? update the state
    setItems(values);
  }

  //? handleDeleteItem
  function handleDeleteItem(itemId: number) {
    setItems((previousItems) =>
      previousItems.filter((item) => item.id !== itemId)
    );
  }

  //? handle markas allcomplete
  function handleMarkAsAllComplete() {
    const completeItems = items.map((item) => ({ ...item, packed: true }));

    //? update the state
    setItems(completeItems);
  }

  //? handle markas allincomplete
  function handleMarkAsAllInComplete() {
    const inCompleteItems = items.map((item) => ({ ...item, packed: false }));

    //? update the state
    setItems(inCompleteItems);
  }

  // ? handle remove all items
  function handleRemoveAllitems() {
    setItems([]);
  }

  //? handle reset to initial items
  function handleResetToInitialItems() {
    setItems(initialItems);
  }

  //? when ever items values changes happened want to update localstorage
  React.useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <ItemContext.Provider
      value={{
        items,
        handleAddItem,
        handlePackedToggle,
        handleDeleteItem,
        handleMarkAsAllComplete,
        handleMarkAsAllInComplete,
        handleRemoveAllitems,
        handleResetToInitialItems,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
}
