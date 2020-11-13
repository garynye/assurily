import React, { Component } from "react";

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { Card, Row, Col } from "react-bootstrap";
import Slider from "react-slick";

const CardImg = styled(Card.Img)`
  border-radius: 50%;
  margin-top: 10px;
  height: 50px;
  width: 50px;
`;

const CardBody = styled(Card.Body)`
  // border: solid;
  // border-color: lavender;
  // background-color: white;
  // border-radius: 5px;
  // border-width: 1px;
  // padding: 10px;
`;

const CarouselRoot = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;

  max-width: 80%;
  margin: auto;
  @media (max-width: 600px) {
    max-width: 100%;
  }
`;
const Name = styled.h3`
  color: #222;
  font-weight: 100;
  letter-spacing: 0.2px;
  margin-top: 10px;
  margin-bottom: 4px;
  font-weight: 500;

  font-size: 17px;
`;
const Title = styled.h4`
  margin-top: 0;
  padding-top: 0;
  font-weight: 300;
  color: #787878;
  font-size: 14px;
`;

const Paragraph = styled.p`
  font-weight: 100;
  padding-top: 10px;
  line-height: 20px;
  color: #000;
  font-size: 15px;
  font-family: sans-serif;
`;

export default class Testimonials extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      focusOnSelect: false,
      speed: 500,
      rows: 1,
      autoplay: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <CarouselRoot>
        <Slider {...settings}>
          <CardBody>
            <Row
              style={{
                borderTop: "solid",
                borderBottom: "solid",
                borderTopColor: "solid",
                borderLeft: "solid",
                borderRight: "solid",
                borderTopRightRadius: "5px",
                borderTopLeftRadius: "5px",
                borderBottomRightRadius: "0px",
                borderBottomLeftRadius: "0px",
                borderColor: "lavender",
                borderWidth: "1px",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              <Col lg="auto" md="auto" sm="auto" xs="auto" xl="auto">
                <CardImg
                  variant="top"
                  src="https://res.cloudinary.com/assurily/image/upload/v1604583228/assurily/faces/SteveMcCallister_rzpuki.webp"
                  alt=""
                />
              </Col>
              <Col style={{ marginLeft: "0px", paddingLeft: "0px" }}>
                <Name>Steve McCallister</Name>
                <FontAwesomeIcon icon={faStar} color="sandybrown" />
                <FontAwesomeIcon icon={faStar} color="sandybrown" />
                <FontAwesomeIcon icon={faStar} color="sandybrown" />
                <FontAwesomeIcon icon={faStar} color="sandybrown" />
                <FontAwesomeIcon icon={faStar} color="sandybrown" />
                <Title>Portland, OR</Title>
              </Col>
            </Row>
            <Row
              style={{
                borderBottom: "solid",
                borderTopColor: "solid",
                borderLeft: "solid",
                borderRight: "solid",
                borderTopRightRadius: "0px",
                borderTopLeftRadius: "0px",
                borderBottomRightRadius: "5px",
                borderBottomLeftRadius: "5px",

                borderColor: "lavender",
                borderWidth: "1px",
                marginLeft: "10px",
                marginRight: "10px",
                padding: "0px 10px",
              }}
            >
              <Paragraph>
                Absolutely fantastic service. They saved us $750 a year on our
                Auto and Home insurance! I highly recommend their service!
              </Paragraph>
            </Row>
          </CardBody>
          <CardBody>
            <Row
              style={{
                borderTop: "solid",
                borderBottom: "solid",
                borderTopColor: "solid",
                borderLeft: "solid",
                borderRight: "solid",
                borderTopRightRadius: "5px",
                borderTopLeftRadius: "5px",
                borderBottomRightRadius: "0px",
                borderBottomLeftRadius: "0px",
                borderColor: "lavender",
                borderWidth: "1px",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              <Col lg="auto" md="auto" sm="auto" xs="auto" xl="auto">
                <CardImg
                  variant="top"
                  src="https://res.cloudinary.com/assurily/image/upload/v1604583228/assurily/faces/JennBecker_gu9ius.webp"
                  alt=""
                />
              </Col>
              <Col style={{ marginLeft: "0px", paddingLeft: "0px" }}>
                <Name>Jenn Becker</Name>
                <FontAwesomeIcon icon={faStar} color="sandybrown" />
                <FontAwesomeIcon icon={faStar} color="sandybrown" />
                <FontAwesomeIcon icon={faStar} color="sandybrown" />
                <FontAwesomeIcon icon={faStar} color="sandybrown" />
                <FontAwesomeIcon icon={faStarHalfAlt} color="sandybrown" />
                <Title>Trenton, NJ</Title>
              </Col>
            </Row>
            <Row
              style={{
                borderBottom: "solid",
                borderTopColor: "solid",
                borderLeft: "solid",
                borderRight: "solid",
                borderTopRightRadius: "0px",
                borderTopLeftRadius: "0px",
                borderBottomRightRadius: "5px",
                borderBottomLeftRadius: "5px",

                borderColor: "lavender",
                borderWidth: "1px",
                marginLeft: "10px",
                marginRight: "10px",
                padding: "0px 10px",
              }}
            >
              <Paragraph>
                My husband and I have 4 kids, and we both work, so we have no
                time to get multiple quotes or monitor our costs if they
                increase. We signed up just once, they did all the rest and
                alert us when we can save! It's the best!!
              </Paragraph>
            </Row>
          </CardBody>
          <CardBody>
            <Row
              style={{
                borderTop: "solid",
                borderBottom: "solid",
                borderTopColor: "solid",
                borderLeft: "solid",
                borderRight: "solid",
                borderTopRightRadius: "5px",
                borderTopLeftRadius: "5px",
                borderBottomRightRadius: "0px",
                borderBottomLeftRadius: "0px",
                borderColor: "lavender",
                borderWidth: "1px",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              <Col lg="auto" md="auto" sm="auto" xs="auto" xl="auto">
                <CardImg
                  variant="top"
                  src="https://res.cloudinary.com/assurily/image/upload/v1604583228/assurily/faces/KevinWright_wlkg8x.webp"
                  alt=""
                />
              </Col>
              <Col style={{ marginLeft: "0px", paddingLeft: "0px" }}>
                <Name>Kevin Wright</Name>
                <FontAwesomeIcon icon={faStar} color="sandybrown" />
                <FontAwesomeIcon icon={faStar} color="sandybrown" />
                <FontAwesomeIcon icon={faStar} color="sandybrown" />
                <FontAwesomeIcon icon={faStar} color="sandybrown" />
                <FontAwesomeIcon icon={faStar} color="sandybrown" />
                <Title>Chicago, IL</Title>
              </Col>
            </Row>
            <Row
              style={{
                borderBottom: "solid",
                borderTopColor: "solid",
                borderLeft: "solid",
                borderRight: "solid",
                borderTopRightRadius: "0px",
                borderTopLeftRadius: "0px",
                borderBottomRightRadius: "5px",
                borderBottomLeftRadius: "5px",

                borderColor: "lavender",
                borderWidth: "1px",
                marginLeft: "10px",
                marginRight: "10px",
                padding: "0px 10px",
              }}
            >
              <Paragraph>
                It feels good to have someone looking out for me. They made
                switching from my previous insurer very easy, and saved me $800
                a year! I recommend them to anyone who is tired of insurance
                companies overcharging you.
              </Paragraph>
            </Row>
          </CardBody>

          <CardBody>
            <Row
              style={{
                borderTop: "solid",
                borderBottom: "solid",
                borderTopColor: "solid",
                borderLeft: "solid",
                borderRight: "solid",
                borderTopRightRadius: "5px",
                borderTopLeftRadius: "5px",
                borderBottomRightRadius: "0px",
                borderBottomLeftRadius: "0px",
                borderColor: "lavender",
                borderWidth: "1px",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              <Col lg="auto" md="auto" sm="auto" xs="auto" xl="auto">
                <CardImg
                  variant="top"
                  src="https://res.cloudinary.com/assurily/image/upload/v1604583228/assurily/faces/PeterZepeda_lxtjl2.webp"
                  alt=""
                />
              </Col>
              <Col style={{ marginLeft: "0px", paddingLeft: "0px" }}>
                <Name>Peter Zepeda</Name>
                <FontAwesomeIcon icon={faStar} color="sandybrown" />
                <FontAwesomeIcon icon={faStar} color="sandybrown" />
                <FontAwesomeIcon icon={faStar} color="sandybrown" />
                <FontAwesomeIcon icon={faStar} color="sandybrown" />
                <FontAwesomeIcon icon={faStarHalfAlt} color="sandybrown" />
                <Title>Fredericksburg, TX</Title>
              </Col>
            </Row>
            <Row
              style={{
                borderBottom: "solid",
                borderTopColor: "solid",
                borderLeft: "solid",
                borderRight: "solid",
                borderTopRightRadius: "0px",
                borderTopLeftRadius: "0px",
                borderBottomRightRadius: "5px",
                borderBottomLeftRadius: "5px",

                borderColor: "lavender",
                borderWidth: "1px",
                marginLeft: "10px",
                marginRight: "10px",
                padding: "0px 10px",
              }}
            >
              <Paragraph>
                They work for me while I focus on my life ... that's just
                awesome, and I can finally get the "insurance man" to pay me for
                once!
              </Paragraph>
            </Row>
          </CardBody>
        </Slider>
      </CarouselRoot>
    );
  }
}
