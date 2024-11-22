import { useState } from "react";
import { initialItems } from "../lib/constants";
import { Item as ItemType } from "../types/types";
import Header from "./Header";
import ItemsList from "./ItemsList";
import Sidebar from "./Sidebar";

export default function Container() {
  const [items, setItems] = useState<ItemType[]>(initialItems);

  //? handle add item
  function handleAddItem(newItem: ItemType) {
    setItems((prev) => [...prev, newItem]);
  }
  return (
    <main>
      <Header />
      <ItemsList items={items} />
      <Sidebar onAddItem={handleAddItem} />
    </main>
  );
}
