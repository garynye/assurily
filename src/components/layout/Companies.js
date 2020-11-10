import React from "react";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";
import "./companies.css";

const Companies = () => {
  return (
    <CarouselRoot>
      <CarouselTitle>Companies we shop:</CarouselTitle>
      <Carousel
        id="companies"
        controls={false}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        touch={false}
        autoPlay={true}
        interval={3000}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/assurily/image/upload/v1604979712/assurily/companies/nationwide.png"
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/assurily/image/upload/v1604979712/assurily/companies/progressive.png"
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/assurily/image/upload/v1604979712/assurily/companies/libertymutual.png"
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/assurily/image/upload/v1604979712/assurily/companies/travelers.png"
            alt=""
          />
        </Carousel.Item>
      </Carousel>
    </CarouselRoot>
  );
};





const CarouselTitle = styled.p`

  color: white;
  padding-top: 20px;
  margin: 0;
  text-align: center;

  font-size: 14px;
`;

const CarouselRoot = styled.div`
  padding-bottom: 20px;
  background-color: #1e1e1e;
  @media (max-width: 992px) {
    margin-top: 20px;
  }
`;

export default Companies;
