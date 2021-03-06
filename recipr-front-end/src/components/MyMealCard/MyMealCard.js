import React from "react";
import { Card, Button } from "react-bootstrap";
import "./styles.css";
import MyMealModal from "../MyMealModal/MyMealModal";

function MyMealCard({ recipeImage, recipeName, recipeInstructions, recipeIngredients }) {
  return (
    <Card className="mealCard" data-testid="card" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={recipeImage} />
      <Card.Body>
        <Card.Title>{recipeName}</Card.Title>
        {/* <Button variant="success">See recipe</Button> */}
        <MyMealModal strImage ={recipeImage} strMeal={recipeName} strIngredient1={recipeIngredients} strInstructions={recipeInstructions}/>
      </Card.Body>
    </Card>
  );
}

export default MyMealCard;
