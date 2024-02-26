
const Meal = ({ meal }) => {
    return (
        <div>
            <h1 class="bg-pink-400 bg-cover max-w-sm p-2 ml-2 mb-1
             hover:bg-pink-600">{meal.strMeal}</h1>
        </div>
    )
}
export default Meal;