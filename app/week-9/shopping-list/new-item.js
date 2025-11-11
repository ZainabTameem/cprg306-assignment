"use client";
import React, { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function increment() {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  }

  function decrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      name,
      quantity,
      category,
    };

    onAddItem(newItem);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded border border-gray-200 p-4 bg-white"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Item Name
        </label>
        <input
          className="w-full rounded border px-3 py-2"
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g., milk, 4 L 🥛"
        />
        <label htmlFor="quantity" className="block text-sm font-medium mb-1 mt-3">
          Quantity (1–20)
        </label>
      </div>

      <section className="bg-white">
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            Current:
            <span className="font-semibold text-black text-xl">{quantity}</span>
          </p>
        </div>
        <div className="flex gap-4 mb-2 ">
          <button
            type="button"
            disabled={quantity <= 1}
            onClick={decrement}
            className="rounded px-4 py-2 bg-gray-300 hover:bg-gray-500 disabled:bg-gray-100"
          >
            –
          </button>
          <button
            type="button"
            disabled={quantity >= 20}
            onClick={increment}
            className="rounded px-4 bg-blue-600 hover:bg-blue-700 text-white disabled:bg-blue-200"
          >
            +
          </button>
        </div>
        <p className="text-xs text-gray-500">Allowed range: 1–20</p>
      </section>

      <div>
        <label htmlFor="category" className="block text-sm font-medium mb-1">
          Category
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full rounded border px-3 py-2 bg-white"
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

      <button
        type="submit"
        className="rounded bg-emerald-600 hover:bg-emerald-800 text-white px-4 py-2"
      >
        Add Item
      </button>
    </form>
  );
}
