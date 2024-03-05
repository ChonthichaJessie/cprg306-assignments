"use client";
import { useState, useEffect } from "react";
import Meal from "./meal";

const fetchMealIdeas = async (ingredient) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(
      ingredient
    )}`
  );
  const data = await response.json();
  return data.meals ?? [];
};

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);
  const loadMealIdeas = async (ingredient) => {
    setMeals(await fetchMealIdeas(ingredient));
  };
  useEffect(() => {
    if (ingredient) {
      loadMealIdeas(ingredient);
    }
  }, [ingredient]);

  return (
    <div class="bg-slate-950 md:flex flex-col ">
      <h1 class="text-3xl font-bold m-2 text-white">Meal Ideas</h1>
      {!ingredient && "Select an item to see meal ideas"}
      {!!ingredient && !!meals.length && (
        <h1 class="m-2">{`Here are some meal ideas using ${ingredient}:`}</h1>
      )}
      {!!ingredient && !meals.length && <h1 class="m-2">{`No meal ideas found for ${ingredient}`}</h1>}
      {meals.map((meal) => {
        return <Meal key={meal.idMeal} meal={meal} />;
      })}
    </div>
  );
};
export default MealIdeas;
