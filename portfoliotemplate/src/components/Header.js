import React from "react";
import {Link} from "react-router-dom";
import {Navbar, Nav, Container} from "react-bootstrap";

const Header = () => {
    return(
        <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="#">
            Home
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="#">
                Page 1
              </Nav.Link>
              <Nav.Link as={Link} to="#">
                Page 2
              </Nav.Link>
              <Nav.Link as={Link} to="#">
                Connect
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Header;