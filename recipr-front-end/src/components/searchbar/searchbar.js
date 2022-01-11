import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

function Searchbar() {
    return ( 
      <>
            <InputGroup className="mb-3">
                <FormControl
                placeholder="search for recipe"
                aria-label="search for recipe"
                aria-describedby="basic-addon2"
                />
                <Button variant="danger" id="button-addon2">
                submit
                </Button>
            </InputGroup>
        </>
    );
}

export default Searchbar;
