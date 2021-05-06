import React from "react";
import Search from "./Search";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar className="navbar navbar-dark" style={{ background: "#212229" }}>
        <Navbar.Brand href="#home">IMDB Movie App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <i
              className="fab fa-imdb fa-2x mr-4"
              style={{ color: "#DBA506" }}
              id="imdb-logo"
            ></i>
            <i
              className="fab fa-react fa-2x"
              style={{ color: "#00d8ff" }}
              id="react-logo"
            ></i>
          </Nav>
          <Search />
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
