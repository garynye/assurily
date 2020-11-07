import React from "react";
import RButton from "../layout/RButton";
import styled from "styled-components";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Howitworks = () => {
  return (
    <div>
      <Row>
        <Col>
          <Image
            src="https://res.cloudinary.com/assurily/image/upload/v1604687931/assurily/howitworks/watchsmall.jpg"
            alt=""
          ></Image>
        </Col>
        <Col>
          <div>
            <h1>Your personal shopper</h1>
            <p>
              We are your expert insurance shopper. Our technology continuously
              monitors & compares quotes to find you the same or better coverage
              at a lower price. We handle all the dirty work with switching so
              you don’t have to.
            </p>
            <RButton />
            <h2>(one time, forever)</h2>
          </div>
        </Col>
      </Row>
    </div>
  );
};

const Image = styled.img`
  width: 67%;
  &:hover {
    transform: scale(1.5);
    transition: all 0.25s ease-in-out;
  }
  @media (max-width: 600px) {
    width: 24%;
  }
`;
export default Howitworks;
