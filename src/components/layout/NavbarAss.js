import React from "react";
import "./navbar.css";
import { NavBar, Icon } from "antd-mobile";
import "antd-mobile/dist/antd-mobile.css";
// import aLogo from "../media/a-450-450WHITE.png";
// import { Link } from "react-router-dom";

const NavbarAss = () => {
  return (

    <div>
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => console.log("onLeftClick")}
        rightContent={[
          <Icon key="0" type="search" style={{ marginRight: "16px" }} />,
          <Icon key="1" type="ellipsis" />,
        ]}
      >
        NavBar text here
      </NavBar>

      <NavBar
        mode="dark"
        leftContent="Back"
        rightContent={[
          <Icon key="0" type="search" style={{ marginRight: "16px" }} />,
          <Icon key="1" type="ellipsis" />,
        ]}
      >
        NavBar second bar
      </NavBar>
    </div>
  );
};

export default NavbarAss;
