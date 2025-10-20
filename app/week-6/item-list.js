"use client";
import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === "name") {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    } else if (sortBy === "category") {
      if (a.category > b.category) return 1;
      if (a.category < b.category) return -1;
      return 0;
    }
    return 0;
  });

  return (
    <section >
      <div>
        Sort by:
        <button
          onClick={() => setSortBy("name")}
          className={`m-2 px-4 py-2 rounded ${sortBy === "name"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 hover:bg-gray-300"
            }`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`m-2 px-2 py-2 rounded ${sortBy === "category"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 hover:bg-gray-300"
            }`}
        >
          Category
        </button>
      </div>

      <ul className="grid gap-3">
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </section>
  );
}
