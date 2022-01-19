import React from "react";
import { Card, Button } from "react-bootstrap";
import "./styles.css";
import MealModal from "../MealModal/MealModal";

function MealCard({
  meal
}) {
  return (
    <Card className="mealCard" data-testid="card" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={meal.strMealThumb} />
      <Card.Body>
        <Card.Title>{meal.strMeal}</Card.Title>
        {/* <Button variant="success">See recipe</Button> */}
        <MealModal
          strMeal={meal.strMeal}
          strMealThumb={meal.strMealThumb}
          strInstructions={meal.strInstructions}
          idMeal={meal.idMeal}
          strYoutube={meal.strYoutube}
          meals={[meal]}
        />
      </Card.Body>
    </Card>
  );
}

export default MealCard;
