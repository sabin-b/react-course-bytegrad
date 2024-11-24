//? item type
export type Item = {
  id: number;
  name: string;
  packed: boolean;
};

//? sort options
export type SortOptions = "default" | "packed" | "unpacked";

//? context type

export type ItemProviderType = {
  items: Item[];
  handleAddItem: (newItem: Item) => void;
  handlePackedToggle: (itemId: number) => void;
  handleDeleteItem: (itemId: number) => void;
  handleMarkAsAllComplete: () => void;
  handleMarkAsAllInComplete: () => void;
  handleRemoveAllitems: () => void;
  handleResetToInitialItems: () => void;
};
