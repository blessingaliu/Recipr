import React from "react";
import { useContext } from "react";
import MyMealContainer from "../../components/MyMealContainer/MyMealContainer";
import { MyContext } from "../../context";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./styles.css";

function MyRecipes() {
  const { user } = useContext(MyContext);
  if (!user.userrecipe.length) {
    return (
      <>
        <div className="page-container">
          <div className="myrecipe-title">
            <h2>You haven't saved any recipes yet</h2>
          </div>

          <div className="myrecipe-button">
            <LinkContainer to="/add_recipe">
              <Button variant="success" type="submit" className="button">
                Please add a new one
              </Button>
            </LinkContainer>
          </div>
        </div>
      </>
    );
  }
  return (
    <div>
      <MyMealContainer UserMeals={user.userrecipe} />
    </div>
  );
}

export default MyRecipes;
