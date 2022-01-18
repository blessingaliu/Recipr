import React, { useContext, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { MyContext } from "../../context";
import axios from "axios";

function MealModal({ strMeal, strInstructions, strIngredient1, idMeal, meals }) {

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
  
  meals.map((e)=>{
  
    for (const [key, value] of Object.entries(e)) {
    if (key.includes("strIngredient")) {
      if (value){
        ingredientarray.push(`${value}`)
    }
    }
  }
  return ingredientarray
  })


meals.map((e)=>{
  
  for (const [key, value] of Object.entries(e)) {
  if (key.includes("strMeasure")) {
    if(value){
    measurearray.push(`${value}`)
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
      <Button variant="success" onClick={handleShow}>
        Show Recipe
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{strMeal}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Ingredients</h4>
          {zipped.map((e)=> (
            <li>{e}</li>
          ))}
          
          {/* <div>{strInstructions}</div> */}
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
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
