import React from "react";
import {Link} from "react-router-dom";
import {Navbar, Nav, Container} from "react-bootstrap";
import "../css/componentCSS/Header.css"

const Header = () => {
    return(
        <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/" id="brand">
            Happy Trees
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" id="links">
              <Nav.Link as={Link} to="/page1">
                Page 1
              </Nav.Link>
              <Nav.Link as={Link} to="/page2">
                Page 2
              </Nav.Link>
              <Nav.Link as={Link} to="/connect">
                Connect
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Header;