import React from "react";
import MyMealcard from "../MyMealCard/MyMealCard";
import { MyContext } from "../../context";
import { useContext } from "react";
import "./styles.css";

function MyMealContainer() {
  const { user } = useContext(MyContext);
  console.log(user);
  return (
    <div className="meals-container">
      {user.userrecipe.map((recipe) => (
        <MyMealcard key={recipe} {...recipe} />
      ))}
    </div>
  );
}

export default MyMealContainer;
