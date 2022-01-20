import React, { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { MyContext } from "../../context";
import { useHistory } from "react-router-dom";
import axios from "../../Axios";
import "./styles.css";

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
        <Nav.Link href="/" style={{fontWeight: "900"}}>Recipr</Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav.Link href="/">Home</Nav.Link>
          {!user && (
            <Nav className="me-auto">
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/signup">Signup</Nav.Link>
            </Nav>
          )}
          {user && (
            <>
              <Nav.Link href="/my-favorites">Favorites</Nav.Link>
              <Nav.Link href="/add_recipe">Add Recipe</Nav.Link>
              <Nav.Link href="/my_recipes">My Recipes</Nav.Link>
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ShowNav;
