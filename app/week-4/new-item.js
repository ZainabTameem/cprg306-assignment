"use client";
import React from 'react';
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

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

  return (
    <section className="rounded border border-gray-200 p-4 bg-white">
      <div className="mb-4">
        <p className=" text-sm text-gray-600">
          Quantity: <span className="font-semibold text-black text-xl">{quantity}</span>
        </p>
      </div>
      <div className="flex gap-4 mb-2">
        <button
          disabled={quantity <= 1}
          onClick={decrement}
          className="rounded px-4 py-2 bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100"
        >
          –
        </button>
        <button
          disabled={quantity >= 20}
          onClick={increment}
          className="rounded px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white disabled:bg-blue-200"
        >
          +
        </button>
      </div>
      <p className="text-xs text-gray-500">Allowed range: 1–20</p>
    </section>
  );
}
