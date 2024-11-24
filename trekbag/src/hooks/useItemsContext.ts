import React from "react";
import { ItemContext } from "../context/ItemsProvider";

export default function useItemsContext() {
  const context = React.useContext(ItemContext);

  if (context === undefined) {
    console.error("useItemsProvider called outside of component");
  }

  return context;
}
