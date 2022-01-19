import React, { useContext, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { MyContext } from "../../context";
import axios from "axios";
import "./styles.css";

function MealModal({ strMeal, strInstructions, strIngredient1, idMeal }) {
  const [show, setShow] = useState(false);
  const { user, setUser } = useContext(MyContext);
  const [loading, setLoading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAddToFavorites = () => {
    console.log("mealId", idMeal);
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

  return (
    <>
      <Button
        className="myrecipe-button"
        variant="success"
        onClick={handleShow}
      >
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
