import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { MyContext } from "../../context";
import "./styles.css";
import axios from "../../Axios";
import { useHistory } from "react-router-dom";
import FileBase64 from "react-file-base64";

function AddRecipes() {
  const { user } = useContext(MyContext);
  const history = useHistory();
  // const {saveRecipe} = useContext(MyContext)
  const [recipeName, setRecipeName] = useState("");
  const [recipeIngredients, setRecipeIngredients] = useState([]);
  const [recipeInstructions, setRecipeInstructions] = useState([]);
  const [recipeImage, setImage] = useState();
  console.log(user);

  function addRecipe(c) {
    c.preventDefault();

    // if (!email || !password || !name) {
    //   return alert("Please fill out the fields");
    // }
    axios
      .post("/add_recipe", {
        recipeName,
        recipeIngredients,
        recipeInstructions,
        recipeImage,
      })
      .then(({ data }) => {})
      .catch((err) => console.log(err));
    //history.replace('/my_recipes');
    history.push("/");
    history.replace("/my_recipes");
    window.location.reload(false);
  }
  return (
    <div className="signup">
      <Form onSubmit={addRecipe}>
        <h1 className="page-title"> Add your recipes here, {user.name}</h1>
        <Form.Group className="mb-3 form-inline" controlId="formBasicName">
          <Form.Label className="label">Recipe Name </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter recipe name"
            onChange={(e) => setRecipeName(e.target.value)}
            value={recipeName}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label className="label">Ingredients</Form.Label>
          <Form.Control
            type="textarea"
            placeholder="Enter each ingredient and measure separated by a comma"
            onChange={(e) => setRecipeIngredients(e.target.value)}
            value={recipeIngredients}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label className="label">Instructions</Form.Label>
          <Form.Control
            type="textarea"
            placeholder="Enter each step separated by a comma"
            onChange={(e) => setRecipeInstructions(e.target.value)}
            value={recipeInstructions}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label className="label">Recipe Image</Form.Label>
          <Form.Control
            type="hidden"
            onChange={(e) => setImage(e.target.value)}
            value={recipeImage}

//           />
//           <FileBase64
//             multiple={false}
//             onDone={({ base64 }) => setImage(base64)}
//           />

          /><br/>
         <FileBase64
          multiple={ false }
          onDone={ ({base64})=>setImage(
            base64
          ) } />
        

        </Form.Group>

        <Button variant="success" type="submit" className="button">
          Add your recipe
        </Button>
      </Form>
    </div>
  );
}

export default AddRecipes;
