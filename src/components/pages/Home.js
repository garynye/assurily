import React from "react";
// import NavbarAss from "../layout/NavbarAss";
import NavbarCustom from "../layout/NavbarCustom";
// import YoutubeBackground from "../layout/YoutubeBackground";
import styled from "styled-components";
import "../layout/style.css";
import Testimonials from "../layout/Testimonials.js";
// import {
//   Image,
//   Video,
//   Transformation,
//   CloudinaryContext,
// } from "cloudinary-react";
import { Video, Transformation } from "cloudinary-react";

const Home = () => {
  return (
    <div>
      <NavbarCustom />

      {/* <YoutubeBackground videoID="9VFBRIhyG_M" /> */}
      <div style={isMobile.matches ? divStyleMobile : divStyleDesktop}>
        <Video
          style={below169.matches ? youStyle169min : youStyle169max}
          loop={true}
          autoPlay={true}
          cloudName="assurily"
          muted="muted"
          publicId="assurily/videos/desertdrive"
          playsInline="playsinline"
        >
          <Transformation crop="fit" quality="auto:low" />
        </Video>
      </div>

      <MagicContainer>
        <MagicTitle>TAKE BACK WHAT IS YOURS </MagicTitle>
        <MagicStatement>
          Your home & auto insurance shopper that saves you time and money.
        </MagicStatement>
        <MagicButton href="./Signup">Sign Up for Free</MagicButton>
        <div className="largepad"></div>
      </MagicContainer>
      <Testimonials />
    </div>
  );
};

const MagicContainer = styled.div`
  position: absolute;
  width: 100%;
  color: white;
  text-align: center;
  top: 0;
  padding-top: ${0.3 * window.innerHeight}px;
`;

const MagicTitle = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.1em;
  padding-bottom: 50px;
  width: 100vw;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const MagicStatement = styled.p`
  text-align: center;
  position: relative;
  font-size: 40px;
  line-height: 1.5;
  font-weight: 300;
  letter-spacing: 0.15rem;
  text-align: center;

  margin-bottom: 80px;
  @media (max-width: 600px) {
    font-size: 25px;
    font-weight: 100;
    padding: 0 2%;
    letter-spacing: 0.12rem;
  }
`;

const MagicButton = styled.a`
  border-radius: 3px;
  border: none;
  background-color: #ff3347a6;

  color: white;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  padding: 15px 80px;
  text-decoration: none;
  transition: all 0.25s ease-in-out;
  &:hover {
    background-color: #ed0000;
    transition: all 0.25s ease-in-out;
  }
  @media (max-width: 600px) {
    padding: 8px 60px;
  }
`;

//video css details
const below169 = window.matchMedia("(min-aspect-ratio: 16/9)");
const isMobile = window.matchMedia("(max-width: 600px)");
const divStyleMobile = {
  position: "relative",
  overflow: "hidden",
  width: "100%",
  height: window.innerHeight,
};
const divStyleDesktop = {
  position: "relative",
  overflow: "hidden",
  width: "100%",
  height: "100vh",
};

const youStyle169min = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "100%",
  pointerEvents: "none",
  transform: "translate(-50%, -50%)",
  filter: "brightness(37%)",
  height: "56.25vw",
};
const widthcss = 1.7778 * window.innerHeight;
const youStyle169max = {
  position: "absolute",
  top: "50%",
  left: "50%",
  height: window.innerHeight,
  pointerEvents: "none",
  transform: "translate(-50%, -50%)",
  webkitFilter: "brightness(37%)",
  filter: "brightness(37%)",
  width: widthcss,
};
export default Home;
