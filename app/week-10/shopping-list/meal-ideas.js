"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(null);

  async function fetchMealIdeas() {
    if (!ingredient) return;

    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      if (!response.ok) {
        throw new Error(`HTTP Error! status ${response.status}`);
      }
      const data = await response.json();
      setMeals(data.meals || []);
    } catch (err) {
      setError(err);
    }
  }

  useEffect(() => {
    fetchMealIdeas();
  }, [ingredient]);

  if (error) {
    return (
      <main className="bg-red-500 text-white h-full flex justify-center items-center text-center">
        <h1>Meal API Fetch Error</h1>
        <p>{error.message}</p>
      </main>
    );
  }

  if (!ingredient) {
    return (
      <main className="p-4 w-full max-w-md mx-auto">
        <p className="text-xl font-bold text-gray-800 mb-2">
          Meal ideas (select an item)
        </p>
        <p className="text-gray-500">Choose an item to see ideas.</p>
      </main>
    );
  }

  if (meals.length === 0) {
    return (
      <main className="p-4 w-full max-w-md mx-auto">
        <p className="text-xl font-bold text-gray-800 mb-2">
          Meal ideas for “{ingredient}”
        </p>
        <p className="text-gray-500">No meals found.</p>
      </main>
    );
  }

  return (
    <main className="p-4 w-full max-w-md mx-auto">
      <p className="text-xl font-bold text-gray-800 mb-2">
        Meal ideas for “{ingredient}”
      </p>


      <ul>
        {meals.length > 0 ? (
          meals.map((meal) => (
            <li key={meal.idMeal} className="font-medium my-2 border p-3">
              {meal.strMeal}
            </li>
          ))
        ) : (
          <p className="text-gray-300">No meals found.</p>
        )}
      </ul>
    </main>
  );
}