"use client";
import Item from "./item";
import { useState } from "react";
import allItems from "./items.json";
import GroupedItems from "./groupedItems";

const sortByName = (a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0);
const sortByCategory = (a, b) =>
  a.category < b.category ? -1 : a.category > b.category ? 1 : 0;
const groupByCategory = () => {
  const groupedData = {};
  const allItemsForGrouping = [...allItems];
  allItemsForGrouping.forEach((items) => {
    if (!groupedData[items.category]) {
      groupedData[items.category] = [];
    }
    groupedData[items.category].push(items);
  });
  return groupedData;
};

const allItemsByName = [...allItems].sort(sortByName);
const allItemsByCategory = [...allItems].sort(sortByCategory);
const allItemsByGroup = groupByCategory();
const sortedGroupNames = Object.keys(allItemsByGroup).sort();

const ItemList = () => {
  const [items, setItems] = useState(allItems);
  const [groups, setGroups] = useState(false);

  const sortByName = () => {
    setItems(allItemsByName);
    setGroups(false);
  };
  const sortByCategory = () => {
    setItems(allItemsByCategory);
    setGroups(false);
  };

  return (
    <div>
      <button
        class="bg-pink-400 hover:bg-pink-500 active:bg-pink-400 text-white font-bold py-2 px-4 rounded-lg mt-2 mb-2"
        onClick={sortByName}
      >
        Sort by Name
      </button>
      <button
        class="bg-pink-400 hover:bg-pink-500 active:bg-pink-400 text-white font-bold py-2 px-4 rounded-lg mt-2 mb-2"
        onClick={sortByCategory}
      >
        Sort by Category
      </button>
      <button
        class="bg-pink-400 hover:bg-pink-500 active:bg-pink-400 text-white font-bold py-2 px-4 rounded-lg mt-2 mb-2"
        onClick={() => setGroups(true)}
      >
        Group by Category
      </button>
      {groups
        ? sortedGroupNames.map((category) => {
            const items = allItemsByGroup[category];
            return (
              <GroupedItems
                category={category}
                items={items}
              />
            );
          })
        : items.map((item) => {
            return (
              <Item
                name={item.name}
                quantity={item.quantity}
                category={item.category}
              />
            );
          })}
    </div>
  );
};


export default ItemList 
