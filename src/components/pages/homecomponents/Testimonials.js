import React, { Component } from "react";
import "./carousel.css";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

//https://dev.to/aryaziai/modern-testimonials-in-react-tutorial-cn1

export default class Testimonials extends Component {
  render() {
    return (
      <Carousel
        id="testimonials"
        showArrows={true}
        controls={false}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={4000}
      >
        <CarouselRoot>

            <CarouselImg
              src="https://res.cloudinary.com/assurily/image/upload/v1604583228/assurily/faces/SteveMcCallister_rzpuki.webp"
              alt=""
            />
            <MyCarousel>
              <Name>Steve McCallister</Name>
              <Title>Portland, OR</Title>
              <Paragraph>
                "Absolutely fantastic service. They saved us $750 a year on our
                Auto and Home insurance! I highly recommend their service!"
              </Paragraph>
            </MyCarousel>

        </CarouselRoot>
        <CarouselRoot>
      
            <CarouselImg
              src="https://res.cloudinary.com/assurily/image/upload/v1604583228/assurily/faces/PeterZepeda_lxtjl2.webp"
              alt=""
            />
            <MyCarousel>
              <Name>Peter Zepeda</Name>
              <Title>Fredericksburg, TX</Title>
              <Paragraph>
                "They work for me while I focus on my life ... that's just
                awesome, and I can finally get the "insurance man" to pay me for
                once!"
              </Paragraph>
            </MyCarousel>
    
        </CarouselRoot>
        <CarouselRoot>
        
            <CarouselImg
              src="https://res.cloudinary.com/assurily/image/upload/v1604583228/assurily/faces/JennBecker_gu9ius.webp"
              alt=""
            />
            <MyCarousel>
              <Name>Jenn Becker</Name>
              <Title>Trenton, NJ</Title>
              <Paragraph>
                "My husband and I have 4 kids, and we both work, so we have no
                time to get multiple quotes or monitor our costs if they
                increase. We signed up just once, they did all the rest and
                alert us when we can save! It's the best!!"
              </Paragraph>
            </MyCarousel>
       
        </CarouselRoot>
        <CarouselRoot>
          
            <CarouselImg
              src="https://res.cloudinary.com/assurily/image/upload/v1604583228/assurily/faces/KevinWright_wlkg8x.jpg"
              alt=""
            />
            <MyCarousel>
              <Name>Kevin Wright</Name>
              <Title>Chicago, IL</Title>
              <Paragraph>
                "It feels good to have someone looking out for me. They made
                switching from my previous insurer very easy, and saved me $800
                a year! I recommend them to anyone who is tired of insurance
                companies overcharging you."
              </Paragraph>
            </MyCarousel>
        
        </CarouselRoot>
      </Carousel>
    );
  }
}
const CarouselRoot = styled.div`
  // width: calc(100% - 80px);
  margin: auto;
  margin-top: 3%;
  padding-top: 20px;
  background: #fff;
  color: black;

  @media (max-width: 600px) {
    outline: 0;

    margin: auto;
  }
`;
const CarouselImg = styled.img`
  width: 139px !important;
  border-radius: 50%;
  @media (max-width: 600px) {
    width: 24%;
  }
`;

const MyCarousel = styled.div`
  background: #fafafa;
  margin-top: -6%;

  margin-left: auto;
  margin-right: auto;
  padding-top: 6%;
  padding-bottom: 8%;
  padding-left: 5%;
  padding-right: 5%;
  border: 1px solid #ddd;

  @media (max-width: 1400px) {
    background: #fafafa;
    margin-top: -9%;

    margin-left: auto;
    margin-right: auto;
    padding-top: 8%;

    padding-left: 5%;
    padding-right: 5%;
    border: 1px solid #ddd;

  }
`;

const Name = styled.h3`
  color: #222;
  font-weight: 100;
  letter-spacing: 0.2px;
  margin-top: 10px;
  margin-bottom: 4px;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 17px;
`;
const Title = styled.h4`
  text-transform: uppercase;
  margin-top: 0;
  padding-top: 0;
  font-weight: 500;
  color: #787878;
  font-size: 14px;
`;

const Paragraph = styled.p`
  font-weight: 100;
  line-height: 29px;
  color: #222;
  font-size: 15px;
  font-family: sans-serif;
  max-height: 67px;
`;
