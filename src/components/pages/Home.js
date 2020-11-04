import React from "react";
// import NavbarAss from "../layout/NavbarAss";
import NavbarCustom from "../layout/NavbarCustom";
import YoutubeBackground from "../layout/YoutubeBackground";

import "../layout/style.css";

const Home = () => {
  return (
    <div>
      <NavbarCustom />

      <YoutubeBackground
        videoID="9VFBRIhyG_M"
        
      />
      <h1 id="magicmoment">TAKE BACK WHAT IS YOURS </h1>
      <div id="magicmoment2">
        Your home & auto insurance shopper that saves you time and money.
      </div>
      <a href="./Signup">
        <button id="magicbutton">Sign Up for Free</button>
      </a>

      <div className="largepad"></div>
    </div>
  );
};

export default Home;
