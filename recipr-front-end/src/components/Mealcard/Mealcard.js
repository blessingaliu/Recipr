import React from "react";
import { Card, Button } from "react-bootstrap";

function MealCard({ strMeal, strMealThumb }) {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={strMealThumb} />
        <Card.Body>
            <Card.Title>{strMeal}Card Title</Card.Title>
            <Button variant="primary">See more</Button>
        </Card.Body>
        </Card>
    );
}

export default Mealcard
