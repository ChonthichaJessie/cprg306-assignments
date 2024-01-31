"use client"
import Item from "./item";
import { useState } from "react";
import allItems from "./items.json";

const ItemList = () => {
  const [sortByName, setSortByName] = useState();
  const [sortByCat, setSortByCate] = useState();
  const [groupCat, setGroupCat] = useState()

  const nameHandle = (items) => {
    setSortByName(items.sort((a, b) => a.name.localeCompare(b.name)))
  }
  const catHandle = (items) => {
    setSortByName(items.sort((a, b) => a.category.localeCompare(b.category)))
  }

  return (
    <div>
      {allItems
        .map((item) => {
          return (
            <Item
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          );
        })}
    </div>
    // create 3 buttons
    // use useState for each button
    // https://cprg306-assignments.vercel.app/week-5
  );
};

export default ItemList;
