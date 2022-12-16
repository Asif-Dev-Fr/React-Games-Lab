import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import * as ProjectsList from "../assets/data/projectsList.json";
import { Link } from "react-router-dom";

const NavbarComponent = ({ isMobile }) => {
  const [projects] = useState(ProjectsList);
  return (
    <header>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        className={!isMobile ? "flex-column" : ""}
      >
        <Navbar.Brand style={{ marginLeft: 30, fontWeight: 700 }} href="/">
          React Game Lab
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {Object.entries(projects.list).map((project, key) => (
              <React.Fragment key={"project_" + key}>
                <Link to={project[1].path}>{project[1].title}</Link>
              </React.Fragment>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default NavbarComponent;
