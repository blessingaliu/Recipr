import React from "react";
import { Card, Button } from "react-bootstrap";
import "./styles.css"

function MealCard({ strMeal, strMealThumb }) {
    return (
        <Card className="mealCard" data-testid='card' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={strMealThumb} />
            <Card.Body>
                <Card.Title>{strMeal}</Card.Title>
                <Button variant="success">See recipe</Button>
            </Card.Body>
        </Card>
    );
}

export default MealCard
