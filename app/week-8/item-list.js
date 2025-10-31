"use client";
import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <section>
      <div>
        Sort by:
        <button
          onClick={() => setSortBy("name")}
          className={`m-4 px-3 py-1 rounded ${sortBy === "name" ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300 "
            }`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`m-4s px-3 py-1 rounded ${sortBy === "category" ? "bg-blue-600 text-white " : "bg-gray-200 hover:bg-gray-300"
            }`}
        >
          Category
        </button>
      </div>

      <ul className="grid gap-3">
        {sortedItems.map((item, index) => (
          <Item key={index} {...item}
            onSelect={() => onItemSelect(item)}
          />
        ))}
      </ul>
    </section>
  );
}
