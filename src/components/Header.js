import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" className="">
      <Container>
        <Navbar.Brand className="fw-bold">
          React Film
        </Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/" className="text-white">
            Home
          </Link>
        </Nav>
        
      </Container>
    </Navbar>
  );
};

export default Header;
