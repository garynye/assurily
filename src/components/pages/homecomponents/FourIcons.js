import React from "react";
import styled from "styled-components";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Fade } from "react-awesome-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMobileAlt,
  faCircle,
  faCheck,
  faDraftingCompass,
  faMoneyBillWaveAlt,
} from "@fortawesome/free-solid-svg-icons";
// import "@fortawesome/fontawesome-svg-core/styles.css";

const FourIcons = () => {
  return (
    <Container2>
      <Row
        sm={12}
        lg={4}
        style={{ paddingTop: "40px" }}
        className="justify-content-center"
      >
        <Fade direction={"up"} triggerOnce={true}>
          <Col style={{ paddingTop: "40px" }}>
            <FontAwesomeIcon
              icon={faMobileAlt}
              size="6x"
              mask={faCircle}
              transform="shrink-8"
            />
            <Title>SUBSCRIBE</Title>
            <Message>
              Sign up once by filling out a few questions to unlock a lifetime
              of savings.
            </Message>
          </Col>
        </Fade>
        <Fade direction={"up"} triggerOnce={true}>
          <Col style={{ paddingTop: "40px" }}>
            <FontAwesomeIcon
              icon={faCheck}
              size="6x"
              mask={faCircle}
              transform="shrink-8"
            />
            <Title>APPROVE</Title>
            <Message>
              When we find a better deal for you now or in the future, we will
              notify you for your approval to switch.
            </Message>
          </Col>
        </Fade>
        <Fade direction={"up"} triggerOnce={true}>
          <Col style={{ paddingTop: "40px" }}>
            <FontAwesomeIcon
              icon={faDraftingCompass}
              size="6x"
              mask={faCircle}
              transform="shrink-8"
            />
            <Title>CUSTOMIZE</Title>
            <Message>
              Tell us about your current coverage needs and we will customize a
              package tailored to your needs.
            </Message>
          </Col>
        </Fade>
        <Fade direction={"up"} triggerOnce={true}>
          <Col style={{ paddingTop: "40px" }}>
            <FontAwesomeIcon
              icon={faMoneyBillWaveAlt}
              size="6x"
              mask={faCircle}
              transform="shrink-8"
            />
            <Title>SAVE</Title>
            <Message>
              We pass 100% of the savings to you when we switch your home or
              auto insurance.
            </Message>
          </Col>
        </Fade>
      </Row>
    </Container2>
  );
};

const Container2 = styled.div`
  width: 70%;
  margin: auto;
    // text-align:left;
  @media (max-width: 992px) {
    width: 80%;
    text-align: center;
  }
`;

const Title = styled.h1`
  padding-top: 20px;
  margin: 0px;
  font-size: 16px;
  margin: 0;
  text-align: left;
  font-weight: 500;
  @media (max-width: 992px) {
      text-align:center;
   
  }
`;

const Message = styled.h2`
  margin: 0px;
  padding-top: 25px;
  font-size: 16px;
  text-align: left;
  line-height: 1.7rem;
  font-weight: 300;
  @media (max-width: 992px) {
    text-align: center;
  }
`;

export default FourIcons;
