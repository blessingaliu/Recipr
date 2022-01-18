import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import './styles.css'

function MyMealModal({ strImage, strMeal, strInstructions, strIngredient1 }) {
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
          <div >
          <img src={strImage} className='modal-image'/>

          </div>

          <div>
          <h4>Ingredients</h4>
          {strIngredient1.split(',').map((ingredient) => (
          <li>{ingredient}</li>
            ))}
          </div><br/>
          <h4>Instructions</h4>
          {strInstructions.split(',').map((instruction) => (
          <li>{instruction}</li>
            ))}
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
