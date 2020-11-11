import React from "react";
import styled from "styled-components";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { Fade } from "react-awesome-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCaretSquareDown } from "@fortawesome/free-solid-svg-icons";

const AssurilyResources = () => {
  return (
    <DivStyle>
      <Row
        md={3}
        className="justify-content-center"
        style={{  maxWidth: "100%", margin: "auto"}}
      >
        <Fade direction={"left"} triggerOnce={true}>
          <Col>
            <Image
              className="img-fluid w-100"
              src="https://res.cloudinary.com/assurily/image/upload/v1604687931/assurily/FAQ/different.webp"
              alt=""
            ></Image>
            <HoverMove>
              <Accordion>
                <Card style={dropStyle}>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="0"
                  >
                    <FontAwesomeIcon icon={faCaretSquareDown} /> How are you
                    different from my broker?
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      Unlike your traditional local broker, our technology is
                      always monitoring, shopping for discounts and cost savings
                      for you. Your traditional broker is paid a retention bonus
                      to keep you where you are — we on the other hand, have
                      designed switching into our business, so our incentive is
                      aligned with your needs.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </HoverMove>
          </Col>
        </Fade>
        <Fade direction={"up"} triggerOnce={true}>
          <Col>
            <Image
              className="img-fluid w-100"
              src="https://res.cloudinary.com/assurily/image/upload/v1604687931/assurily/FAQ/lock.webp"
              alt=""
            ></Image>{" "}
            <HoverMove>
              <Accordion>
                <Card style={dropStyle}>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="0"
                  >
                    <FontAwesomeIcon icon={faCaretSquareDown} /> How do you
                    ensure privacy and security?
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      We never share or sell your information. We use bank-level
                      security measures when storing your information in our
                      system. All your data is fully encrypted.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </HoverMove>
          </Col>
        </Fade>
        <Fade direction={"right"} triggerOnce={true}>
          <Col>
            <Image
              className="img-fluid w-100"
              src="https://res.cloudinary.com/assurily/image/upload/v1604687931/assurily/FAQ/differentleaf.webp"
              alt=""
            ></Image>{" "}
            <HoverMove>
              <Accordion>
                <Card style={dropStyle}>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="0"
                  >
                    <FontAwesomeIcon icon={faCaretSquareDown} /> Are you
                    different from other online sites?
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      We are a set-and-forget solution for your home & auto
                      insurance – meaning you do absolutely nothing. No more
                      shopping. No more comparing. No more paperwork or
                      wondering if (when) your insurance company is gouging you!
                      We monitor and manage your insurance costs over time and
                      alert you when you can save money for the same or better
                      coverage.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </HoverMove>
          </Col>
        </Fade>
      </Row>
    </DivStyle>
  );
};

const dropStyle = {
  borderRadius: "0",
    backgroundColor: "white",
  boxShadow: "0 0px 40px -11px rgba(0, 0, 0, 0.5)",
};

const HoverMove = styled.div`
    margin-top: -30px;
    overflow: visible;

    margin-left: 5%;
    width: 90%;
    font-size: 14px;
    box-shadow:  0 0px 40px -11 rgba(0, 0, 0, 0.5);
  &:hover {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);

    transition: all 0.2s ease-in;
  }
`;

const DivStyle = styled.div`
  //   width: 90%;

  margin: auto;
  @media (min-width: 1080px) {
    max-width: 1080px;
  }
`;


const Image = styled.img`
  transition: all 0.25s ease-in-out;
  padding: 10px;

  width: 100%;
  &:hover {
    transform: scale(1.1);

    transition: all 0.25s ease-in-out;
  }
`;
export default AssurilyResources;
