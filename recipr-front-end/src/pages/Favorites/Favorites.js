import React, { useContext, useEffect } from "react";
import { MyContext } from "../../context";

function Favorites() {
  const { user } = useContext(MyContext);
  useEffect(() => {
    // www.themealdb.com/api/json/v1/1/lookup.php?i=52772
  }, []);
  if (!user.favorites.length) {
    return (
      <div>
        <h2>You don't have any favorites yet</h2>
        <p>Please add a new one</p>
      </div>
    );
  }
  return (
    <div>
      <h2>Your favorites</h2>
    </div>
  );
}

export default Favorites;
