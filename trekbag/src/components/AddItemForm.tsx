import React, { useRef, useState } from "react";
import { Item } from "../types/types";
import Button from "./Button";

interface AddItemFormProps {
  onAddItem: (newItem: Item) => void;
}

export default function AddItemForm({ onAddItem }: AddItemFormProps) {
  const [item, setItem] = useState<string>("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  //? handle form submit
  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    //? prevent page reloading
    e.preventDefault();

    //? form input was empty simply return
    if (!item.length) {
      //? show alert dialog
      window.alert("please enter item name");

      //? focus the input element
      inputRef?.current?.focus();

      //? stop execution
      return;
    }

    //? otherwise proceed next steps
    onAddItem({ id: Date.now(), name: item, packed: false });

    //? reset the state
    setItem("");
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Add Item</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="shoes,shocks,charger..."
        value={item}
        onChange={(e) => setItem(e.target.value)}
        autoFocus
      />
      <Button className="btn">Add to List</Button>
    </form>
  );
}
