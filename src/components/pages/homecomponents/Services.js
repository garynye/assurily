import React from "react";
// import { Carousel } from "react-bootstrap";
import { Accordion, Card } from "react-bootstrap";
import Slider from "react-slick";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import "./services.css";

const Services = () => {
  const settings = {
    dots: false,
    infinite: true,
    focusOnSelect: false,
    speed: 500,
    rows: 1,
    autoplay: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <CarouselRoot>
      <Slider {...settings}>
        <Accordion>
          <CardImg
            variant="top"
            src="https://res.cloudinary.com/assurily/image/upload/v1605127574/assurily/services/monitor.webp"
          />
          <CardBody>
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
              <AccordionTitle>Monitoring</AccordionTitle>
              <div style={{ textAlign: "center" }}>
                <FontAwesomeIcon icon={faCaretDown} inverse size="2x" />
              </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <CardDrop>
                We’ve got your back. Our technology monitors insurance price
                algorithms and discounts to know when you can save money.
              </CardDrop>
            </Accordion.Collapse>
          </CardBody>
        </Accordion>

        <Accordion>
          <CardImg
            variant="top"
            src="https://res.cloudinary.com/assurily/image/upload/v1605127574/assurily/services/shop.webp"
          />
          <CardBody>
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
              <AccordionTitle>Shopping</AccordionTitle>
              <div style={{ textAlign: "center" }}>
                <FontAwesomeIcon icon={faCaretDown} inverse size="2x" />
              </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <CardDrop>
                We do the shopping so you do not have to. No more phone calls or
                wasting time doing it yourself.
              </CardDrop>
            </Accordion.Collapse>
          </CardBody>
        </Accordion>

        <Accordion>
          <CardImg
            variant="top"
            src="https://res.cloudinary.com/assurily/image/upload/v1605127574/assurily/services/quote.webp"
          />
          <CardBody>
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
              <AccordionTitle>Quoting</AccordionTitle>
              <div style={{ textAlign: "center" }}>
                <FontAwesomeIcon icon={faCaretDown} inverse size="2x" />
              </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <CardDrop>
                We get quotes from over 30 top-rated carriers to find the best
                coverage that meets your specific needs.
              </CardDrop>
            </Accordion.Collapse>
          </CardBody>
        </Accordion>

        <Accordion>
          <CardImg
            variant="top"
            src="https://res.cloudinary.com/assurily/image/upload/v1605127574/assurily/services/compare.webp"
          />
          <CardBody>
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
              <AccordionTitle>Comparing</AccordionTitle>
              <div style={{ textAlign: "center" }}>
                <FontAwesomeIcon icon={faCaretDown} inverse size="2x" />
              </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <CardDrop>
                We match your current policy to find you the same or better
                coverage at the lowest price.
              </CardDrop>
            </Accordion.Collapse>
          </CardBody>
        </Accordion>

        <Accordion>
          <CardImg
            variant="top"
            src="https://res.cloudinary.com/assurily/image/upload/v1605127574/assurily/services/alert.webp"
          />
          <CardBody>
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
              <AccordionTitle>Alerting</AccordionTitle>
              <div style={{ textAlign: "center" }}>
                <FontAwesomeIcon icon={faCaretDown} inverse size="2x" />
              </div>
            </Accordion.Toggle>

            <Accordion.Collapse eventKey="0">
              <CardDrop>
                No spam or calls. We notify you only if we find discounts or a
                better price.
              </CardDrop>
            </Accordion.Collapse>
          </CardBody>
        </Accordion>

        <Accordion>
          <CardImg
            variant="top"
            src="https://res.cloudinary.com/assurily/image/upload/v1605127574/assurily/services/advise.webp"
          />
          <CardBody>
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
              <AccordionTitle>Advising</AccordionTitle>
              <div style={{ textAlign: "center" }}>
                <FontAwesomeIcon icon={faCaretDown} inverse size="2x" />
              </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <CardDrop>
                Our certified experts are available to clarify policy details
                and answer your questions any time.
              </CardDrop>
            </Accordion.Collapse>
          </CardBody>
        </Accordion>

        <Accordion>
          <CardImg
            variant="top"
            src="https://res.cloudinary.com/assurily/image/upload/v1605127574/assurily/services/switch.webp"
          />
          <CardBody>
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
              <AccordionTitle>Switching</AccordionTitle>
              <div style={{ textAlign: "center" }}>
                <FontAwesomeIcon icon={faCaretDown} inverse size="2x" />
              </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <CardDrop>
                We handle and guide all of the work associated with switching to
                make it easy for you.
              </CardDrop>
            </Accordion.Collapse>
          </CardBody>
        </Accordion>

        <Accordion>
          <CardImg
            variant="top"
            src="https://res.cloudinary.com/assurily/image/upload/v1605127574/assurily/services/save.webp"
          />
          <CardBody>
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
              <AccordionTitle>Saving</AccordionTitle>
              <div style={{ textAlign: "center" }}>
                <FontAwesomeIcon icon={faCaretDown} inverse size="2x" />
              </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <CardDrop>
                We pass 100% of the savings to you. No hidden fees or mark ups.
              </CardDrop>
            </Accordion.Collapse>
          </CardBody>
        </Accordion>
      </Slider>
    </CarouselRoot>
  );
};

const AccordionTitle = styled.div`
  border-radius: 0px;
  background-color: transparent;
  border: none;
  color: white;

  font-size: 24px;
  font-weight: 300;
  margin-left: auto;
  margin-right: auto;
  letter-spacing: 0.05rem;
  text-align: center;
  box-shadow: 0 0px 40px -11px rgba(0, 0, 0, 0.5);
  @media (min-width: 1980px) {
    font-size: 35px;
  }
`;

const CardImg = styled(Card.Img)`
  border-radius: 5px;
  border: none;
  width: 90%;
  margin: auto;
`;

const CardDrop = styled(Card.Body)`
  box-shadow: 0 0px 40px -11px rgba(0, 0, 0, 0.5);
  font-size: 12px;
  background-color: black;
  color: white;
  font-weight: 300;
  margin: 0;
  padding: 0;
`;
const CardBody = styled(Card.Body)`
  margin-top: -40%;
  //   box-shadow: 0 0px 40px -11px rgba(0, 0, 0, 0.5);
  width: 90%;
  background-color: black;
  border-radius: 5px;
  padding: 0px 10px 10px 10px;
  margin-left: auto;
  margin-right: auto;
`;


const CarouselRoot = styled.div`
  padding-bottom: 20px;
  overflow: hidden;
  max-width: 100%;
  margin: auto;

  @media (max-width: 992px) {
    margin-top: 20px;
  }
`;

export default Services;
