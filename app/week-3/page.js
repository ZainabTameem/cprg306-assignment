import React from 'react';
import ItemList from './item-list';

export default function Page() {
  return (
    <main className=" mx-115 p-4 bg-pink-100">
      <h1 className="text-3xl font-bold text-purple-900 p-2">
        Shopping List
      </h1>
      <ItemList />
    </main>
  );
}
