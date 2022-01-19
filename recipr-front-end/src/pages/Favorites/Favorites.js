import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../context";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import FaveContainer from "../../components/FaveContainer/FaveContainer";

function Favorites() {
  const { user } = useContext(MyContext);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // map through the favourites and for each one we fetch through the api data and output the data through json
    // this will give us an array with promises
    // The promise.all takes an array of requests and when they are all resolved, we console.log the response(which is an array)
    if (user.favorites.length) {
      const requests = user.favorites.map((favorite) =>
        fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${favorite}`
        ).then((res) => res.json()).then((res) => console.log(res))
      );
      Promise.all(requests).then((res) => setFavorites(res));
    }
  }, [user]);

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
      <FaveContainer meals={favorites} />
    </div>
  );
}

export default Favorites;
