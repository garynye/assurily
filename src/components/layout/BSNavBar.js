import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import aLogo from "../media/a-450-450WHITE.png";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
// import "./navbar.css";
import useWindowScrollPosition from "@rehooks/window-scroll-position";
import useWindowWidth from "./useWindowSize";

function BSNavBar() {
  const [change, setChange] = useState(false);
  const [cwidth, setCWidth] = useState(false);
  const changePosition = 300;
  const changeWidth = 991;

  let position = useWindowScrollPosition();
  // position == { x: 0, y: 0 }
  let windowsize = useWindowWidth();

  if (position.y > changePosition && !change) {
    setChange(true);
  }

  if (position.y <= changePosition && change) {
    setChange(false);
  }

  if (windowsize.innerWidth < changeWidth && !cwidth) {
    setCWidth(true);
  }

  if (windowsize.innerWidth >= changeWidth && cwidth) {
    setCWidth(false);
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


  let topPadding = {
    paddingTop: "60px",
  };
  let rightPadding = {
    paddingRight: "20px",
    paddingTop: "18px",
  };


  let paddingFormat = {
    position: "fixed",
    backgroundColor: cwidth ? "rgb(0,0,0,0.8)" : "transparent",
    width: "100%",
    left: "0px",
    top: "0px",

    textAlign: "right",

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
        <div style={paddingFormat} id="responsive-navbar-nav">
          <Navbar.Collapse variant="dark" className="justify-content-end">
            <Nav style={rightPadding}>
              <Nav.Link style={topPadding} />
              <Nav.Link href="./Services">Our Services</Nav.Link>
              <Nav.Link href="./Purpose">Our Purpose</Nav.Link>
              <Nav.Link href="./FAQ">FAQ</Nav.Link>
              <Nav.Link href="./Contact">Contact us</Nav.Link>
              <Nav.Link href="./Signup">Sign Up Now!</Nav.Link>
              <Nav.Link href="tel:18886339632">1-888-633-9632</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
}

export default BSNavBar;
