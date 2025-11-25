"use client"

export default function Item({ name, quantity, category, onSelect }) {
  return (
    <ul
      onClick={onSelect}
      className="border p-2 rounded-md "
    >
      <li>{name}</li>
      <li>Quantity: {quantity}</li>
      <li className="capitalize">Category: {category}</li>
    </ul>
  );
}
