import React, { useContext } from "react";
import { MyContext } from "../../context";

function Favorites() {
  const { user } = useContext(MyContext);
  return <div></div>;
}

export default Favorites;
