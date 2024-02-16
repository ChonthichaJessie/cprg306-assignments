"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";

const Page = () => {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (item) => {
    alert(`Added item ${item.name} ${item.quantity} ${item.category}`);
    setItems([...items, item]);
  };

  return (
    <main class="bg-slate-950 md:flex flex-col ">
      <h1 class="text-3xl font-bold m-2 text-white">Shopping List</h1>
      <h1 class="text-white text-xl font-bold m-2" >Add new item</h1>
      <NewItem onSubmit={handleAddItem}/>
      <ItemList items={items}/>
    </main>
  );
};

export default Page;
