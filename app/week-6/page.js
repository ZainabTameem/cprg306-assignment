import React from 'react';
import ItemList from './item-list';

export default function Page() {
  return (
    <main className=" mx-115 p-4 dark:text-gray-100">
      <h1 className="text-3xl font-bold text-blue-500">
        Shopping List
      </h1>
      <ItemList />
    </main>
  );
}
