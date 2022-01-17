import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function MyMealModal({ strMeal, strInstructions, strIngredient1 }) {
  const [show, setShow] = useState(false);

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
          <div>
            
           {strIngredient1} 
          </div>
          {strInstructions}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyMealModal;
