import React from "react";
import { Card, Button } from "react-bootstrap";
import "./styles.css";
import MealModal from "../MealModal/MealModal";

function MealCard({
  strMeal,
  strMealThumb,
  strInstructions,
  strIngredient1,
  idMeal,
}) {
  return (
    <Card className="mealCard" data-testid="card" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={strMealThumb} />
      <Card.Body>
        <Card.Title>{strMeal}</Card.Title>
        {/* <Button variant="success">See recipe</Button> */}
        <MealModal
          strMeal={strMeal}
          strInstructions={strInstructions}
          strIngredient1={strIngredient1}
          idMeal={idMeal}
        />
      </Card.Body>
    </Card>
  );
}

export default MealCard;
