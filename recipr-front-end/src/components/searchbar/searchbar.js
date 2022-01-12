import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import "./styles.css";

function ShowSearchbar() {
  return (
    <div className="searchbar_container">
      <div className="searchbar">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="search for recipe"
            aria-label="search for recipe"
            aria-describedby="meal-search"
          />
          <Button variant="danger" id="button-addon2">
            submit
          </Button>
        </InputGroup>
      </div>
    </div>
  );
}

export default ShowSearchbar;
