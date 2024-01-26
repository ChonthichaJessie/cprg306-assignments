"use client";

import { useState } from "react";

const NewItem = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = { name, quantity, category };
    console.log(item);
    alert(`Added item ${item.name} ${item.quantity} ${item.category}`);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  const onChangeNumber = () => {
    setQuantity(quantity + 1);
  };
  const onChangeCat = (event) => {
    setCategory(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} class="flex flex-col max-w-sm w-full ">
      <input
        type="text"
        value={name}
        placeholder="Item name"
        onChange={(e) => setName(e.target.value)}
        required
        class="border-2 border-pink-200 rounded-lg py-2 px-4 mt-2"
      />
      <div class="flex flex-row justify-between mt-2">
        <input
          type="number"
          min={1}
          max={99}
          value={quantity}
          onChange={onChangeNumber}
          required
          class="border-2 border-pink-200 w-1/6 rounded-lg  py-2 px-4"
        />
        <select
          value={category}
          onChange={onChangeCat}
          placeholder="Produce"
          class="border-2 border-pink-200 w-3/6 rounded-lg py-2 px-4"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>
      <button class="bg-pink-400 hover:bg-pink-500 active:bg-pink-400 text-white font-bold py-2 px-4 rounded-lg mt-2 mb-2">
        +
      </button>
    </form>
  );
};
export default NewItem;
