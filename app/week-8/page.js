"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  // Add new items
  function handleAddItem(newItem) {
    setItems((prev) => [...prev, newItem]);
  }

  // Handle item selection and clean the name
  function handleItemSelect(item) {
    const cleanedName = item.name
      .split(",")[0]
      .replace(/[^\p{L}\p{N}\s]/gu, "")
      .trim()
      .toLowerCase();

    setSelectedItemName(cleanedName);
  }

  return (
    <main className="mx-50 p-4 dark:text-gray-100">

      <div className="grid md:grid-cols-2 gap-6">
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-800"> Shopping List + Meal Ideas</h1>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <div>
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>




  );
}
