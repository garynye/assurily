import React from "react";
import RButton from "../layout/RButton";
import styled from "styled-components";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Fade } from "react-awesome-reveal";

//use intersection observer

const Howitworks = () => {
  return (
    <>
      <DivStyle>
        <Fade>
          <Row style={noOverflow} className="align-items-center">
            <Col style={noOverflow} lg={7}>
              <Image
                className="img-fluid w-100"
                src="https://res.cloudinary.com/assurily/image/upload/v1604687931/assurily/howitworks/watchsmall.jpg"
                alt=""
              ></Image>
            </Col>
            <Col lg={5}>
              <Textdiv>
                <Title>Your personal shopper</Title>
                <Paragraph>
                  We are your expert insurance shopper. Our technology
                  continuously monitors & compares quotes to find you the same
                  or better coverage at a lower price. We handle all the dirty
                  work with switching so you don’t have to.
                </Paragraph>
                <RButton link="./Signup" text="Sign Up Now" />
                <Thought>(one time, forever)</Thought>
              </Textdiv>
            </Col>
          </Row>
        </Fade>
      </DivStyle>
      <DivStyle>
        <Fade>
          <Row style={noOverflow} className="align-items-center">
            <Col lg={{ span: 5, order: 1 }} xs={{ span: 12, order: 2 }}>
              <Textdiv>
                <Title>Free to you, paid by carriers</Title>
                <Paragraph>
                  This service is free to you. We make the same amount of money
                  no matter the insurance carrier you go with. We work with more
                  than 30 insurance carriers across the US.
                </Paragraph>
                <RButton link="./Signup" text="Sign Up Now" />
                <Thought>(Make them pay for you)</Thought>
              </Textdiv>
            </Col>{" "}
            <Col
              style={noOverflow}
              lg={{ span: 7, order: 2 }}
              xs={{ span: 12, order: 1 }}
            >
              <Image
                className="img-fluid w-100"
                src="https://res.cloudinary.com/assurily/image/upload/v1604687931/assurily/howitworks/gift.jpg"
                alt=""
              ></Image>
            </Col>
          </Row>
        </Fade>
      </DivStyle>
      <DivStyle>
        <Fade>
          <Row style={noOverflow} className="align-items-center">
            <Col style={noOverflow} lg={7}>
              <Image
                className="img-fluid w-100"
                src="https://res.cloudinary.com/assurily/image/upload/v1604687931/assurily/howitworks/driverseat.jpg"
                alt=""
              ></Image>
            </Col>
            <Col lg={5}>
              <Textdiv>
                <Title>You’re in control</Title>
                <Paragraph>
                  Customize home and auto coverage that meets your needs. When
                  we find a better deal for you, you control how often we switch
                  and when it happens. We won’t do anything without you
                  approving it.
                </Paragraph>
                <RButton link="./Signup" text="Sign Up Now" />
                <Thought>(Turn the tables)</Thought>
              </Textdiv>
            </Col>
          </Row>
        </Fade>
      </DivStyle>
    </>
  );
};

const DivStyle = styled.div`
  margin: 0px;

  @media (max-width: 992px) {
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
`;

const noOverflow = {
  overflow: "hidden",
  backgroundColor: "rgb(34, 37, 41)",
  margin: "0",
  padding: "0",
};

const Title = styled.h1`
  font-size: 25px;
  text-align: left;
  font-weight: 400;
  padding-top: 20px;
  padding-bottom: 40px;
  letter-spacing: 0.12rem;
`;

const Paragraph = styled.p`
  font-size: 15px;
  text-align: left;
  font-weight: 300;
  line-height: 1.5rem;
  padding-bottom: 20px;
  letter-spacing: 0.04rem;
`;

const Thought = styled.h6`
  font-size: 13px;
  text-align: left;
  font-weight: 300;
  padding-top: 40px;
  font-style: italic;
  padding-bottom: 20px;
  text-align: center;
  letter-spacing: 0.08rem;
`;

const Textdiv = styled.div`
  text-align: center;
  width: 80%;
  color: white;
  margin: 0 auto;
`;

const Image = styled.img`
  &:hover {
    transform: scale(1.1);
    opacity: 0.7;
    transition: all 1s ease-in-out;
  }
`;
export default Howitworks;
