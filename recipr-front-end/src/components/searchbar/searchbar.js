import React, {useContext, useState} from "react";
import axios from "axios";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import {MyContext} from "../../context";
import "./styles.css";

function ShowSearchbar() {
  const [searchInput, setSearchInput] = useState("")
  const {setMeals} = useContext(MyContext)
  function handleSearch() {
    axios
    .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
    .then(({data}) => setMeals(data.meals));
  }
  return (
    <div className="searchbar_container">
      <div className="searchbar">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="search for recipe"
            aria-label="search for recipe"
            aria-describedby="meal-search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <Button variant="danger" id="button-addon2" onClick={handleSearch}>
            submit
          </Button>
        </InputGroup>
      </div>
    </div>
  );
}

export default ShowSearchbar;
