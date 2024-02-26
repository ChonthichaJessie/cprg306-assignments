"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";
import MealIdeas from "./meal-ideas";

const cleanName = (name) => {
  return name.split(",")[0].replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, "").trim().toLowerCase();
}

const Page = () => {
  const [items, setItems] = useState(itemsData.map(item => ({
    ...item,
    cleanName: cleanName(item.name)
  })));
  const [selectedItem, setSelectedItem] = useState();

  const handleAddItem = (item) => {
    alert(`Added item ${item.name} ${item.quantity} ${item.category}`);
    setItems([...items, item]);
  };

  return (
    <main class="bg-slate-950 md:flex flex-row ">
      <div>
        <h1 class="text-3xl font-bold m-2 text-white">Shopping List</h1>
        <h1 class="text-white text-xl font-bold m-2" >Add new item</h1>
        <NewItem onSubmit={handleAddItem} />
        <ItemList items={items} onSelectItem={setSelectedItem} selectedItem={selectedItem} />
      </div>
      <div><MealIdeas ingredient={selectedItem?.cleanName} /></div>
    </main>
  );
};

export default Page;
