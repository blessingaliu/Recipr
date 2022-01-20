import React, { useContext, useState } from "react";
import { Modal, Button, Nav } from "react-bootstrap";
import { MyContext } from "../../context";
import axios from "axios";
import "./styles.css";

function MealModal({ strMeal, strMealThumb, strInstructions, strIngredient1, idMeal, strYoutube, meals }) {
//console.log(meals)
  const [show, setShow] = useState(false);
  const { user, setUser } = useContext(MyContext);
  const [loading, setLoading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAddToFavorites = () => {
    
    setLoading(true);
    axios
      .post("/add-favorites", { mealId: idMeal })
      .then(({ data }) => {
        setLoading(false);
        setUser(data);
        alert("Meal added to favourites");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const handleRemoveFromFavorites = () => {
    setLoading(true);
    axios
      .post("/remove-favorites", { mealId: idMeal })
      .then(({ data }) => {
        setLoading(false);
        setUser(data);
        alert("Meal removed from favourites");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const ingredientarray=[]
  const measurearray=[]
  const instructions = []
 
  const split_instructions = meals.map((e) => {
		instructions.push(e.strInstructions.split('\r\n'));
    return instructions
  });

  meals.map((e)=>{
    for (const [key, value] of Object.entries(e)) {
    if (key.includes("strIngredient")) {
      if (value != null && value.length > 1){
        ingredientarray.push(value)
      }
    }
  }
    return ingredientarray
  })

  meals.map((e)=>{
    for (const [key, value] of Object.entries(e)) {
    if (key.includes("strMeasure")) {
      if(value != null && value.length > 1){
        measurearray.push(value)
      }
    }
  }
    return measurearray
  })

const zip = (a, b) => a.map((k, i) => [k, b[i]])

const zipped = zip(measurearray, ingredientarray).map((e)=>{
  return e.join(" ")
})
  return (
    <>
      <Button
        className="myrecipe-button"
        variant="success"
        onClick={handleShow}
      >
        Show Recipe
      </Button>
      <Modal scrollable={true} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{strMeal}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <img src={strMealThumb} className="modal-image"/>
          <h4>Ingredients</h4>
          <ul>
            {zipped.map((e)=> (
              <li>{e}</li>
            ))}
          </ul>
          <h4>Method</h4>
          <ul>
            {split_instructions.map((meal) => (
              meal.map((steps) => (
                steps.map(step => {
                  if (step.length > 0) {
                    return (<li>{step}</li>)
                  }})
                ))
              ))}
            </ul>
          <Nav.Link href={strYoutube}>Cooking guide on YouTube</Nav.Link>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="myrecipe-button"
            variant="success"
            onClick={handleClose}
          >
            Close
          </Button>
          {user && (
            <>
              {user.favorites.includes(idMeal) ? (
                <Button
                  variant="danger"
                  onClick={handleRemoveFromFavorites}
                  disabled={loading}
                >
                  Remove from Favorites
                </Button>
              ) : (
                <Button
                  variant="primary"
                  onClick={handleAddToFavorites}
                  disabled={loading}
                >
                  Save to favourites
                </Button>
              )}
            </>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MealModal;
