"use client"
import { useState, useEffect, } from "react";
import Meal from "./meal";

const fetchMealIdeas = async (selectedItem) => {
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(selectedItem)}`)
    const response = await data.json()
    return response.meals ?? []
}

const MealsIdeas = ({ selectedItem }) => {
    const [meals, setMeals] = useState([]);
    const loadMealIdeas = async (selectedItem) => {
        setMeals(await fetchMealIdeas(selectedItem))
    }

    useEffect(() => {
        loadMealIdeas(selectedItem)
    },[selectedItem])

    return (
        <div>
            <div><h1>Meal Ideas</h1></div>
            <div><h1>{meals.length === 0 ? `No meal ideas found for ${selectedItem}` : `Here are some meal ideas using ${selectedItem}:`}</h1></div>
            <div>{meals.map(
                (meal) => {
                    return(
                        <Meal key={meal.idMeal} meal={meal.strMeal}/>
                    )
                }
            )}</div>
        </div>

    )
}
export default MealsIdeas;