import React, { useContext, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { MyContext } from "../../context";

function MealModal({ strMeal, strInstructions, strIngredient1 }) {
  const [show, setShow] = useState(false);
  const { user } = useContext(MyContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            <Button variant="primary" onClick={handleClose}>
              Save to favourites
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MealModal;
