import React from 'react'
import { useContext } from "react";
import MyMealContainer from "../../components/MyMealContainer/MyMealContainer";
import { MyContext } from "../../context";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function MyRecipes() {
  const {user} = useContext(MyContext)
      if (!user.userrecipe.length) {

    return (
      
          <div>
            <h2>You haven't saved any recipes yet</h2>
            <LinkContainer to="/add_recipe">
              <Button>Please add a new one</Button>
            </LinkContainer>
          </div>
        );
    }
        return (
      <div>
        <MyMealContainer UserMeals={user.userrecipe} />
      </div>
    );
}

export default MyRecipes
