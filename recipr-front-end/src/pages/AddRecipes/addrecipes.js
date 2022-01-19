import React, { useContext, useState } from 'react'
import { Form, Button } from "react-bootstrap";
import { MyContext } from '../../context';
import "./styles.css";
import axios from "../../Axios";
import { useHistory } from 'react-router-dom'

function AddRecipes() {
  const {user} = useContext(MyContext)
  const history = useHistory();
  // const {saveRecipe} = useContext(MyContext)
  const [recipeName, setRecipeName] = useState("");
  const [recipeIngredients, setRecipeIngredients] = useState([]);
  const [recipeInstructions, setRecipeInstructions] = useState([]);
 

  function addRecipe (c) {
    c.preventDefault();
    // if (!email || !password || !name) {
    //   return alert("Please fill out the fields");
    // }
    axios
      .post("/add_recipe", { recipeName, recipeIngredients, recipeInstructions})
      .then(({ data }) => {
      })
      .catch((err) => console.log(err));
      //history.replace('/my_recipes');
      history.push('/');
      history.replace('/my_recipes');
      window.location.reload(false);
  }
    return (
        <div className="signup">
          
          
      <Form onSubmit= { addRecipe }>
      <h1> Add your recipes here, {user.name}</h1>
        <Form.Group className="mb-3 form-inline" controlId="formBasicName">
          <Form.Label>Recipe Name </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter recipe name"
            onChange={(e) => setRecipeName(e.target.value)}
            value={recipeName}
            required
          />
        
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Ingredients</Form.Label>
          <Form.Control
            type="textarea"
            placeholder="Enter recipe name"
            onChange={(e) => setRecipeIngredients(e.target.value)}
            value={recipeIngredients}
            required
          />
        
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Instructions</Form.Label>
          <Form.Control
            type="textarea"
            placeholder="Enter recipe name"
            onChange={(e) => setRecipeInstructions(e.target.value)}
            value={recipeInstructions}
            required
          />
        
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Recipe Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter recipe name"
            // onChange={(e) => setName(e.target.value)}
            // value={name}
            required
          />
        
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Recipe Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter recipe name"
            // onChange={(e) => setName(e.target.value)}
            // value={name}
            required
          />
        
        </Form.Group>
        
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button variant="success" type="submit">
          Add your recipe
        </Button>
      </Form>
    </div>
    )
}

// import AddRecipes from "./addrecipes";
// import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom";

// test("Whole page to add recipes", () => {
//     render(<AddRecipes />)
//     expect(screen.getByText('Add your recipe')).toBeInTheDocument();
//   });

export default AddRecipes
