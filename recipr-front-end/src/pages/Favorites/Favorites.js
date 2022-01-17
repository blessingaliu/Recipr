import React, { useContext, useEffect } from "react";
import { MyContext } from "../../context";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Favorites() {
  const { user } = useContext(MyContext);
  useEffect(() => {
    // www.themealdb.com/api/json/v1/1/lookup.php?i=52772
  }, []);
  if (!user.favorites.length) {
    return (
      <div>
        <h2>You don't have any favorites yet</h2>
        <LinkContainer to="/">
          <Button>Please add a new one</Button>
        </LinkContainer>
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
