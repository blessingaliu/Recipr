import React from "react";
import { Card, Button } from "react-bootstrap";
import "./styles.css";
import FaveModal from "../FaveModal/FaveModal";

function FaveCard({
  meal,
  strMeal,
  strMealThumb,
  strInstructions,
  strIngredient1,
  idMeal,
}) {
  return (
    <Card className="mealCard" data-testid="card" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={meal.strMealThumb} />
      <Card.Body>
        <Card.Title>{meal.strMeal}</Card.Title>
        {/* <Button variant="success">See recipe</Button> */}
        <FaveModal
          key = {idMeal}
          strMeal={strMeal}
          strMealThumb={strMealThumb}
          strInstructions={strInstructions}
          strIngredient1={strIngredient1}
          idMeal={meal.idMeal}
          strYoutube={meal.strYoutube}
          meal={meal}
        />
      </Card.Body>
    </Card>
  );
}

export default FaveCard;
