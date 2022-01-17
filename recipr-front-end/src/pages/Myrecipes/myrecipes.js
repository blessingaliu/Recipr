import React from 'react'
import { useContext } from "react";
import MyMealContainer from "../../components/MyMealContainer/MyMealContainer";
import { MyContext } from "../../context";

function MyRecipes() {
  const {user} = useContext(MyContext)
    return (
      <div>
        <MyMealContainer UserMeals={user.userrecipe} />
      </div>
    );
}

export default MyRecipes
