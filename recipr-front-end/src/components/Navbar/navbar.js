import React from "react";
import { Navbar, Container, Nav} from "react-bootstrap";

function ShowNav() {
  return (
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Recipr</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="login">Login</Nav.Link>
                <Nav.Link href="signup">Signup</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
  );
}

export default ShowNav;
