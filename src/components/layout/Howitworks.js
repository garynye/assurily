import React from "react";
import RButton from "../layout/RButton";
import styled from "styled-components";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const Howitworks = () => {
  return (
    <div>
      <Row>
        <Col style={noOverflow} md={7}>
          <Image
            className="img-fluid w-100"
            src="https://res.cloudinary.com/assurily/image/upload/v1604687931/assurily/howitworks/watchsmall.jpg"
            alt=""
          ></Image>
        </Col>
        <Col style={noOverflow} md={5}>
          <Textdiv className="h-100">
            <h1>Your personal shopper</h1>
            <p>
              We are your expert insurance shopper. Our technology continuously
              monitors & compares quotes to find you the same or better coverage
              at a lower price. We handle all the dirty work with switching so
              you don’t have to.
            </p>
            <RButton />
            <h2>(one time, forever)</h2>
          </Textdiv>
        </Col>
      </Row>
    </div>
  );
};

const noOverflow = {
  overflow: "hidden",
    margin:"0",
  padding:"0",
}

const Textdiv = styled.div`
  background-color: rgb(49, 49, 50);
  text-align: center;
  color: white;
`;

const Image = styled.img`
  width: 67%;

  
  &:hover {
    transform: scale(1.3);
    transition: all 0.5s ease-in-out;
  }
  @media (max-width: 600px) {
    width: 24%;
  }
`;
export default Howitworks;
