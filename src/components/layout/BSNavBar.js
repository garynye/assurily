import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import aLogo from "../media/a-450-450WHITE.png";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import "./navbar.css";
import useWindowScrollPosition from "@rehooks/window-scroll-position";

function BSNavBar() {
  const [change, setChange] = useState(false);
  const changePosition = 300;

  let position = useWindowScrollPosition();
  // position == { x: 0, y: 0 }

  if (position.y > changePosition && !change) {
    setChange(true);
  }

  if (position.y <= changePosition && change) {
    setChange(false);
  }

  let style = {
    backgroundColor: change ? "rgb(0,0,0,0.6)" : "transparent",
    transition: "400ms ease",
    height: "74px",
    position: "fixed",
    margin: "0px",
    padding: "20px",
    right: 0,
    left: 0,
    top: 0,
  };

  let burgerStyle = {
    backgroundColor: "rgb(0,0,0, .8)",
    marginTop: "-74px",
    marginRight: "-20px",
    marginLeft: "-20px",
    paddingTop: "94px",
    borderTop: "solid",
    textAlign: "right",
    paddingRight: "20px",
    zIndex: "-1",
  };
  return (
    <>
      <Navbar
        style={style}
        fixed="top"
        expand="lg"
        variant="dark"
        collapseOnSelect
      >
        <Navbar.Brand href="#home">
          <img
            src={aLogo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Assurily logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" style={burgerStyle}>
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link href="./Services">Our Services</Nav.Link>
            <Nav.Link href="./Purpose">Our Purpose</Nav.Link>
            <Nav.Link href="./FAQ">FAQ</Nav.Link>
            <Nav.Link href="./Contact">Contact us</Nav.Link>
            <Nav.Link href="./Signup">Sign Up Now!</Nav.Link>
            <Nav.Link href="tel:18886339632">1-888-633-9632</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default BSNavBar;
