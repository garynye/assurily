import React from "react";
import "./navbar.css";
// import aLogo from "../media/a-450-450WHITE.png";
// import { Link } from "react-router-dom";

const NavbarCustom = () => {
  return (
    <div className="navbar scrolled">
      <img
        src="https://res.cloudinary.com/assurily/image/upload/v1604282250/assurily/logos/a-450-450WHITE_a2pspy.png"
        className="img"
        alt=""
      />
      <div id="linklist">
        <a href="/">Home</a>
        <a href="/">Our Services</a>
        <a href="/Purpose">Our Purpose</a>
        <a href="/">FAQ</a>
        <a href="/">Contact Us</a>
        <a href="/signup">Sign Up Now!</a>
        <a href="/">1-888-633-9632</a>
      </div>
    </div>
  );
};

export default NavbarCustom;
