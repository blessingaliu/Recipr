import React, {useContext} from "react";
import { Navbar, Container, Nav} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'
import { MyContext } from "../../context";

function ShowNav() {
  const { user } = useContext(MyContext);
  return (
    
        <Navbar bg="light" expand="lg">
          <Container>
            <LinkContainer to="/">
            <Navbar.Brand >Recipr</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav.Link href="/">Home</Nav.Link>
              {!user && (
              <Nav className="me-auto">
                <LinkContainer to="/login"> 
                <Nav.Link >Login</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/signup">
                <Nav.Link>Signup</Nav.Link>
                </LinkContainer>
              </Nav>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
  );
}

export default ShowNav;
