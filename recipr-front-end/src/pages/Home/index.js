import { useState, useEffect } from "react";
import axios from "axios";
import MealContainer from "../../components/Mealcontainer/mealContainer";
import ShowSearchbar from "../../components/searchbar/searchbar";

function Homepage() {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then(({ data }) => setMeals(data.meals))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <MealContainer meals={meals} />
    </div>
  );
}

export default Homepage;
