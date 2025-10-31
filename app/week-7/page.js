"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  function handleAddItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  return (
    <main className="mx-115 p-4 dark:text-gray-100">
      <h1 className="text-2xl font-bold text-gray-800">Week 7 — Shopping List</h1>

      <NewItem onAddItem={handleAddItem} />

      <ItemList items={items} onItemSelect={handleItemSelect} />
    </main>
  );
}
