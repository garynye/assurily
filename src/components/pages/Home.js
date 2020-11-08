import React from "react";

import BSNavBar from "../layout/BSNavBar";
import Howitworks from "../layout/Howitworks";

import styled from "styled-components";
import "../layout/style.css";
import Testimonials from "../layout/Testimonials.js";

import { Video, Transformation } from "cloudinary-react";

const Home = () => {
  var [isPortrait, setIsPortrait] = React.useState(
    window.matchMedia("(orientation: portrait)").matches
  );

  //video css details
  // const below169 = window.matchMedia("(min-aspect-ratio: 16/9)");

  const isMobile =
    window.matchMedia("(pointer:none}").matches ||
    window.matchMedia("(pointer:coarse)").matches;
  // const narrowWidthMobile = 1.7778 * window.innerHeight;
  const narrowWidthMobile = isPortrait
    ? 1.7778 * window.innerHeight
    : 1.4286 * window.innerWidth;
  // const narrowHeightMobile = window.innerHeight;
  const narrowHeightMobile = isPortrait
    ? window.innerHeight
    : window.innerWidth;
  const narrowHeightDesktop = "100vh";
  const narrowWidthDesktop = "177.778vh";

  const divStyleMobile = {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    // height: window.innerHeight,
    height: isPortrait ? window.innerHeight : 0.7 * window.innerWidth,
  };
  const divStyleDesktop = {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    height: "100vh",
  };

  const narrowScreenFormat = {
    position: "absolute",
    top: "50%",
    left: "50%",
    height: isMobile ? narrowHeightMobile : narrowHeightDesktop,
    pointerEvents: "none",
    transform: "translate(-50%, -50%)",
    webkitFilter: "brightness(37%)",
    filter: "brightness(37%)",
    width: isMobile ? narrowWidthMobile : narrowWidthDesktop,
  };
  const ultraWideScreenFormat = {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "100%",
    pointerEvents: "none",
    transform: "translate(-50%, -50%)",
    webkitFilter: "brightness(37%)",
    filter: "brightness(37%)",
    height: "56.25vw",
  };

  //here we have to set an ultrawidescreen var so that way we can manage if the screen goes wider than 16/9.  we have to setstate as this varaible will need to move from true to false and rerender if the person resizes their window.
  var [isUltraWideScreen, setIsUltraWideScreen] = React.useState(
    window.matchMedia("(min-aspect-ratio: 16/9)").matches
  );

  var aspectRatio = window.matchMedia("(min-aspect-ratio: 16/9)");

  //adding event listener to the match media state, and then call the function
  aspectRatio.addEventListener("change", changeLayout);

  //each time the window resizes, we check to see if the aspect ratio changes, and if so, we switch the the widescreen boolean, which then applies the video css styles.
  function changeLayout() {
    if (aspectRatio.matches && !isMobile) {
      setIsUltraWideScreen(true);
    } else setIsUltraWideScreen(false);
  }

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
    width: 100%;
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
      text-decoration: none;
      color: white;
    }
    @media (max-width: 600px) {
      padding: 8px 60px;
    }
  `;

  return (
    <div>
      <BSNavBar />
      <div style={isMobile ? divStyleMobile : divStyleDesktop}>
        <Video
          style={
            isUltraWideScreen && !isMobile
              ? ultraWideScreenFormat
              : narrowScreenFormat
          }
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
      <Howitworks />
    </div>
  );
};

export default Home;
