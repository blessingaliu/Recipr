import React from "react";
import { Card, Button } from "react-bootstrap";
import "./styles.css";
import MyMealModal from "../MyMealModal/MyMealModal";

function MyMealCard({ recipeName, recipeInstructions, recipeIngredients }) {
  console.log(recipeInstructions)
  return (
    <Card className="mealCard" data-testid="card" style={{ width: "18rem" }}>
      {/* <Card.Img variant="top" src={strMealThumb} /> */}
      <Card.Body>
        <Card.Title>{recipeName}</Card.Title>
        {/* <Button variant="success">See recipe</Button> */}
        <MyMealModal strMeal={recipeName} strIngredient1={recipeIngredients} strInstructions={recipeInstructions}/>
      </Card.Body>
    </Card>
  );
}

export default MyMealCard;
