import React, { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { MyContext } from "../../context";
import { useHistory } from "react-router-dom";
import axios from "../../Axios";

function ShowNav() {
  const history = useHistory();
  const { user, setUser } = useContext(MyContext);
  const handleLogout = () => {
    axios.post("./logout").then((res) => {
      localStorage.removeItem("token");
      setUser(null);
      history.replace("/");
    });
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {/* <LinkContainer to="/">
          <Navbar.Brand>Recipr</Navbar.Brand>
        </LinkContainer> */}
        <Nav.Link href="/">Recipr</Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav.Link href="/">Home</Nav.Link>
          {!user && (
            <Nav className="me-auto">
              {/* <LinkContainer to="/login"> */}
              <Nav.Link href="/login">Login</Nav.Link>
              {/* </LinkContainer> */}
              {/* <LinkContainer to="/signup"> */}
              <Nav.Link href="/signup">Signup</Nav.Link>
              {/* </LinkContainer> */}
            </Nav>
          )}
          {user && (
            <>
              {/* <LinkContainer to="/my-favorites"> */}
              <Nav.Link href="/my-favorites">Favorites</Nav.Link>
              {/* <LinkContainer to="/add_recipe"> */}
              <Nav.Link href="/add_recipe">Add Recipe</Nav.Link>
              {/* </LinkContainer> */}
              {/* <LinkContainer to="/my_recipes"> */}
              <Nav.Link href="/my_recipes">My Recipes</Nav.Link>
              {/* </LinkContainer> */}
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ShowNav;
