"use client"
import { useState, useEffect, } from "react";
import Meal from "./meal";

const fetchMealIdeas = async (ingredient) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(ingredient)}`);
    const data = await response.json();
    console.log(data);
    return data.meals ?? []
}

const MealIdeas = ({ ingredient }) => {
    const [meals, setMeals] = useState([]);
    const loadMealIdeas = async (ingredient) => {
        setMeals(await fetchMealIdeas(ingredient))
    }
    useEffect(() => {
        loadMealIdeas(ingredient)
    }, [ingredient])

    return (
        <div class="bg-slate-950 md:flex flex-col ">
            <h1 class="text-3xl font-bold m-2 text-white">Meal Idea</h1>
            <h1 class="m-2">{`Here are some meal ideas using ${ingredient}:`}</h1>
            {meals.length === 0 && `No meal ideas found for ${ingredient}`}
            {meals.map((meal) => {
                return (
                    <Meal key={meal.idMeal} meal={meal} />
                )
            })}
        </div>

    )
}
export default MealIdeas;