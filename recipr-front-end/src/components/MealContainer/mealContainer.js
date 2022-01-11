import React from 'react'
import MealCard from '../Mealcard/Mealcard'
import "./styles.css"

function MealContainer({meals}) {
    return (
        <div className="MealContainer">
            {meals.map((meal) => (<MealCard {...meal}/>))}
        </div>
    )
}

export default MealContainer
