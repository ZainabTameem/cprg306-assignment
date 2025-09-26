import React from 'react';
export default function Item({ name, quantity, category }) {
  return (
    <li className="border p-2 rounded-md">
      <p>{name}</p>
      <p>Quantity: {quantity}</p>
      <p className="capitalize">Category: {category}</p>
    </li>
  );
}
