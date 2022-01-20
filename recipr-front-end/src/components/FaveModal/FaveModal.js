import React, { useContext, useState } from "react";
import { Modal, Button, NavItem, Nav } from "react-bootstrap";
import { MyContext } from "../../context";
import axios from "axios";

function FaveModal({
  strMeal,
  strMealThumb,
  strInstructions,
  strIngredient1,
  idMeal,
  meals,
  meal,
}) {
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

  const ingredientarray = []
  const measurearray =[]
  const instructions = meal.strInstructions.split("\r\n")

  for (const property in meal) {
    if (property.includes("strIngredient")) {
      if (meal[property] != null && meal[property].length > 1) {
        ingredientarray.push(meal[property])
    }
  }}

  for (const property in meal) {
    if (property.includes("strMeasure")) {
      if (meal[property] != null && meal[property].length > 1) {
        measurearray.push(meal[property])
    }
  }}

  const zip = (a, b) => a.map((k, i) => [k, b[i]])
  const zipped = zip(measurearray, ingredientarray).map((e)=>{
    return e.join(" ")
  })

  return (
    <>
      <Button
       variant="success"
       onClick={handleShow}
       className="myrecipe-button">
        Show Recipe
      </Button>
      <Modal scrollable={true} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{meal.strMeal}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={meal.strMealThumb} className="modal-image" />
          <h4>Ingredients</h4>
          <ul>
            {zipped.map((e)=> (
              <li>{e}</li>
            ))}
          </ul>
          <h4>Method</h4>
          <ul>
            {instructions.map((instruction) => {
              if (instruction != null && instruction.length > 1) {
                return (<li>{instruction}</li>)
              }}
            )}
              
          </ul>
          <Nav.Link href={meal.strYoutube}>Cooking guide on YouTube</Nav.Link>
          <br/>
        </Modal.Body>
        <Modal.Footer>
          <Button 
            variant="success"
            onClick={handleClose} 
            className="myrecipe-button">
            Close
          </Button>
          {user && (
            <>
              {user.favorites.includes(idMeal) ? (
                <Button
                  variant="danger"
                  onClick={handleRemoveFromFavorites}
                  disabled={loading}
                  className="myrecipe-button"
                >
                  Remove from Favorites
                </Button>
              ) : (
                <Button
                  className="myrecipe-button"
                  variant="primary"
                  onClick={handleAddToFavorites}
                  disabled={loading}
                  className="myrecipe-button"
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

export default FaveModal;
