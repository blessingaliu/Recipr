import React from "react";
import FaveCard from "../FaveCard/FaveCard";
import "./styles.css";

function FaveContainer({ meals }) {
  return (
    <div className="meals-container">
      {meals.map(({ meals: meal }) => (
        
        <FaveCard key={meal[0].idMeal} meal = {meal[0]} />
      ))}
    </div>
  );
}

export default FaveContainer;
