import React from "react";

import BSNavBar from "../layout/BSNavBar";
import Footer from "../layout/Footer";
import Howitworks from "./homecomponents/Howitworks";

import styled from "styled-components";
import "../layout/style.css";
import Testimonials from "./homecomponents/Testimonials.js";
import Companies from "./homecomponents/Companies.js";
import RButton from "../layout/RButton";
import { Fade } from "react-awesome-reveal";
import { Video, Transformation } from "cloudinary-react";
import FourIcons from "./homecomponents/FourIcons";
import AssurilyResources from "./homecomponents/AssurilyResources";
import Services from "./homecomponents/Services";

const Home = () => {
  var [isPortrait, setIsPortrait] = React.useState(
    window.matchMedia("(orientation: portrait)").matches
  );

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
    padding: "0px",
    margin: "0px",
    background: "black",
    overflow: "hidden",
    width: "100%",
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
    WebkitFilter: "brightness(37%)",
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
    WebkitFilter: "brightness(37%)",
    filter: "brightness(37%)",
    height: "56.25vw",
  };

  //here we have to set an ultrawidescreen var so that way we can manage if the screen goes wider than 16/9.  we have to setstate as this varaible will need to move from true to false and rerender if the person resizes their window.
  var [isUltraWideScreen, setIsUltraWideScreen] = React.useState(
    window.matchMedia("(min-aspect-ratio: 16/9)").matches
  );

  //adding event listener to the match media state, and then call the function.  using use state so it only adds one listener on load vs. each render adding new listeners.
  //each time the window resizes, we check to see if the aspect ratio changes, and if so, we switch the the widescreen boolean, which then applies the video css styles.  movinging these in the use effect
  var aspectRatio = window.matchMedia("(min-aspect-ratio: 16/9)");
  var orientationObject = window.matchMedia("(orientation: portrait)");
  React.useEffect(() => {
    aspectRatio.addEventListener("change", changeLayout);
    orientationObject.addEventListener("change", changePortrait);

    function changeLayout() {
      if (aspectRatio.matches && !isMobile) {
        setIsUltraWideScreen(true);
      } else setIsUltraWideScreen(false);
    }

    // function changePortrait() {
    //   if (!isPortrait && isMobile) {

    //     setIsPortrait(true);
    //   } else setIsPortrait(false);
    // }

    function changePortrait() {
      if (!isPortrait && orientationObject && isMobile) {
        setIsPortrait(true);
      } else if (isPortrait && !orientationObject && isMobile) {
        setIsPortrait(false);
      }
    }

    //cleanup function to remove listner on each call
    return () => {
      aspectRatio.removeEventListener("change", changeLayout);
      orientationObject.removeEventListener("change", changePortrait);
    };
  }, [isMobile, aspectRatio, orientationObject, isPortrait]);

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
          <Transformation
            audioCodec="none"
            quality="auto:low"
            width="720"
            crop="scale"
          />
        </Video>
      </div>
      <MagicContainer isMob={isMobile} innerHeight={window.innerHeight}>
        <MagicTitle>TAKE BACK WHAT IS YOURS </MagicTitle>
        <MagicStatement>
          Your home & auto insurance shopper that saves you time and money.
        </MagicStatement>
        <MagicButton href="./Signup">Sign Up for Free</MagicButton>
      </MagicContainer>
      <div style={{ backgroundColor: "#F5F7F9" }}>
        <Testimonials />
      </div>

      <Howitworks />
      <Fade>
        <Companies />
      </Fade>
      <Fade>
        <WhyAssurily>Why Assurily?</WhyAssurily>
      </Fade>
      <Fade>
        <WhyAssurilyBody>
          You are likely overpaying for home and auto insurance every year.
          Insurance is complicated and the cost creeps up each year. Monitoring
          and switching insurance is a hassle.
        </WhyAssurilyBody>
      </Fade>
      <Fade>
        <WhyAssurilyBody2>
          Assurily manages it all for you, for <b>FREE</b>.
        </WhyAssurilyBody2>
      </Fade>
      <Fade style={{ textAlign: "center" }}>
        <RButton link="./Signup" text="Sign Up Now" />
      </Fade>
      <FourIcons />
      <Fade direction={"up"} triggerOnce={true}>
        <AssurilyTag>
          <b>ASSURILY RESOURCES</b>
        </AssurilyTag>
      </Fade>

      <Fade
        direction={"up"}
        triggerOnce={true}
        style={{ paddingBottom: "35px" }}
      >
        <LargeText>
          <b>Answers to common questions</b>
        </LargeText>
      </Fade>

      <AssurilyResources />

      <Fade direction={"up"} triggerOnce={true}>
        <AssurilyTag>
          <b>ASSURILY SERVICES</b>
        </AssurilyTag>
      </Fade>

      <Fade direction={"up"} triggerOnce={true}>
        <LargeText>
          <b>See what we can do for you</b>
        </LargeText>
      </Fade>
      <Fade
        direction={"up"}
        triggerOnce={true}
        style={{
          textAlign: "center",
          paddingTop: "30px",
          paddingBottom: "70px",
        }}
      >
        <RButton link="./Services" text="See How it Works" />
      </Fade>

      <Fade direction={"up"} triggerOnce={true}>
        <Services />
      </Fade>

      <Footer />
    </div>
  );
};

const MagicContainer = styled.div`
  position: absolute;
  width: 100%;
  color: white;
  text-align: center;
  top: ${(props) => (props.isMob ? 0.3 * props.innerHeight + "px" : "30%")};
  padding-top: 0%;
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

const WhyAssurily = styled.h2`
  font-size: 26px;
  padding-top: 50px;

  font-weight: 300;
  text-align: center;
`;

const WhyAssurilyBody = styled.p`
  font-size: 17px;
  margin-top: 50px;
  padding: 0 35px;

  line-height: 27px;
  font-weight: 300;
  text-align: center;
`;
const WhyAssurilyBody2 = styled.p`
  font-size: 17px;
  margin-top: 20px;
  margin-bottom: 60px;
  padding: 0 35px;

  line-height: 27px;
  font-weight: 300;
  text-align: center;
`;

const AssurilyTag = styled.p`
    font-size: 17px;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-top: 100px;
    padding-bottom: 30px

    line-height: 27px;
    font-weight: 300;
    text-align: center;
  `;
const LargeText = styled.h1`
    font-size: 35px;
    padding-top: 0px;
    padding-bottom: 30px
letter-spacing: .04rem;
    line-height: 27px;
    font-weight: 300;
    text-align: center;
    @media (max-width: 900px) {
      font-size: 24px;
      font-weight: 300;
      letter-spacing: .04rem;
      
    }
 `;

export default Home;
