import React from 'react'
import MealCard from '../Mealcard/Mealcard'


function MealContainer({meals}) {
    return (
        <div>
            {meals.map((meal) => (<MealCard {...meal}/>))}
        </div>
    )
}

export default MealContainer
