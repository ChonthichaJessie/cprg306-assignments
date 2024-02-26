"use client";
import Item from "./item";
import { useMemo, useState } from "react";

const sortByName = (a, b) => {
  if (a.name.toLowerCase() > b.name.toLowerCase()) {
    return 1;
  }
  if (a.name.toLowerCase() < b.name.toLowerCase()) {
    return -1;
  }
  return 0;
};
const sortByCategory = (a, b) => {
  if (a.category.toLowerCase() > b.category.toLowerCase()) {
    return 1;
  }
  if (a.category.toLowerCase() < b.category.toLowerCase()) {
    return -1;
  }
  return 0;
};

const ItemList = ({ items, onSelectItem, selectedItem }) => {
  const [sortOrder, setSortOrder] = useState();


  const sortedItems = useMemo(() => {
    if (sortOrder === "name") {
      return [...items].sort(sortByName);
    }
    if (sortOrder === "category") {
      return [...items].sort(sortByCategory);
    }
    return items;
  }, [items, sortOrder]);

  return (
    <div>
      <div class="md:flex items-center">
        <h1 class="text-white font-bold m-2">Sort by: </h1>
        <button
          class="bg-pink-400 hover:bg-pink-500 active:bg-pink-400 text-white font-bold py-2 px-4 rounded-lg mt-2 mb-2 mr-2"
          onClick={() => setSortOrder("name")}
        >
          Sort by Name
        </button>
        <button
          class="bg-pink-400 hover:bg-pink-500 active:bg-pink-400 text-white font-bold py-2 px-4 rounded-lg mt-2 mb-2 mr-2"
          onClick={() => setSortOrder("category")}
        >
          Sort by Category
        </button>
      </div>
      {sortedItems.map((item) => {
        return (
          <Item
            item={item}
            onSelectItem={onSelectItem}
            isSelected={selectedItem?.name === item.name}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
