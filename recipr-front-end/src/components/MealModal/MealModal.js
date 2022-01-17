import React, { useContext, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { MyContext } from "../../context";
import axios from "axios";

function MealModal({ strMeal, strInstructions, strIngredient1, idMeal }) {
  const [show, setShow] = useState(false);
  const { user, setUser } = useContext(MyContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAddToFavorites = () => {
    axios
      .post("/add-favorites", { mealId: idMeal })
      .then(({ data }) => {
        setUser(data);
        alert("Meal added to favourites");
      })
      .catch((err) => console.log(err));
  };

  const handleRemoveFromFavorites = () => {
    axios
      .post("/remove-favorites", { mealId: idMeal })
      .then(({ data }) => {
        setUser(data);
        alert("Meal removed from favourites");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Show Recipe
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{strMeal}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>{strInstructions}</div>
          {strIngredient1}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Close
          </Button>
          {user && (
            <>
              {user.favorites.includes(idMeal) ? (
                <Button variant="danger" onClick={handleRemoveFromFavorites}>
                  Remove from Favorites
                </Button>
              ) : (
                <Button variant="primary" onClick={handleAddToFavorites}>
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
