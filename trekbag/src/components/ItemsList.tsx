import React, { useMemo } from "react";
import Select from "react-select";
import useItemsContext from "../hooks/useItemsContext";
import { ItemProviderType, SortOptions } from "../types/types";
import EmptyItemView from "./EmptyItemView";
import Item from "./Item";

export default function ItemsList() {
  //? consuming context
  const data = useItemsContext();
  const { items } = data as ItemProviderType;

  //? states
  const [sortBy, setSortBy] = React.useState<SortOptions>("default");

  //? select component options
  const selectOptions = useMemo(
    () => [
      {
        label: "Sort by Default",
        value: "default",
      },
      {
        label: "Sort by Packed",
        value: "packed",
      },
      {
        label: "Sort by UnPacked",
        value: "unpacked",
      },
    ],
    []
  );

  //? sorting items
  const sortedItems = useMemo(
    () =>
      items.slice().sort((a, b) => {
        if (sortBy === "unpacked") {
          return Number(a.packed) - Number(b.packed);
        } else if (sortBy === "packed") {
          return Number(b.packed) - Number(a.packed);
        }
        return 0;
      }),
    [items, sortBy]
  );

  return (
    <ul className="item-list">
      {/* empty view */}
      {items.length === 0 ? <EmptyItemView /> : null}
      {/* sorting */}
      {items.length !== 0 ? (
        <section className="sorting">
          <Select
            defaultValue={selectOptions.at(0)}
            onChange={(value) => setSortBy(value?.value as SortOptions)}
            options={selectOptions}
          />
        </section>
      ) : null}
      {/* items list */}
      {sortedItems.map(({ id, name, packed }) => (
        <Item key={id} name={name} packed={packed} id={id} />
      ))}
    </ul>
  );
}
