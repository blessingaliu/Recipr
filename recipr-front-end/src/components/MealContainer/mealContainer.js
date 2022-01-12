import React from 'react'
import MealCard from '../Mealcard/Mealcard'
import "./styles.css"

function MealContainer({meals}) {
    return (
        <div className='meals-container'>
            {meals.map((meal) => (
                <MealCard key={meal.idMeal} {...meal} />
            ))}
        </div>
    );
}

export default MealContainer
