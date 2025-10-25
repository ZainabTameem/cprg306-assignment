import React from 'react';
export default function Item({ name, quantity, category }) {
  return (
    <ul className="border p-2 rounded-md">
      <li>{name}</li>
      <li>Quantity: {quantity}</li>
      <li className="capitalize">Category: {category}</li>
    </ul>
  );
}

