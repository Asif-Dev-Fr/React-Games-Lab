import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavbarComponent = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand style={{ marginLeft: 30, fontWeight: 700 }} href="/">
          React Game Lab
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/tic-tac-toe">Tic Tac Toe</Nav.Link>
            <Nav.Link href="/mastermind">Mastermind</Nav.Link>
            <Nav.Link href="/memory">Memory</Nav.Link>


          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default NavbarComponent;
