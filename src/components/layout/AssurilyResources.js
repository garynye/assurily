import React from 'react'
import styled from "styled-components";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Fade } from "react-awesome-reveal";


const AssurilyResources = () => {
    return (
      <div>
        <Row sm={12} md={3}>
          <Fade direction={"left"} triggerOnce={true}>
            <Col style={noOverflow}>
              <Image
                className="img-fluid w-100"
                src="https://res.cloudinary.com/assurily/image/upload/v1604687931/assurily/FAQ/different.jpg"
                alt=""
              ></Image>
            </Col>
          </Fade>
          <Fade direction={"up"} triggerOnce={true}>
            <Col style={noOverflow}>
              <Image
                className="img-fluid w-100"
                src="https://res.cloudinary.com/assurily/image/upload/v1604687931/assurily/FAQ/lock.jpg"
                alt=""
              ></Image>
            </Col>
          </Fade>
          <Fade direction={"right"} triggerOnce={true}>
            <Col style={noOverflow}>
              <Image
                className="img-fluid w-100"
                src="https://res.cloudinary.com/assurily/image/upload/v1604687931/assurily/FAQ/differentleaf.jpg"
                alt=""
              ></Image>
            </Col>
          </Fade>
        </Row>
      </div>
    );
}

const noOverflow = {
  overflow: "hidden",
//   backgroundColor: "rgb(34, 37, 41)",
  margin: "0",
  padding: "0",
};


const Image = styled.img`
  &:hover {
    transform: scale(1.1);
    opacity: 0.7;
    transition: all 1s ease-in-out;
  }
`;
export default AssurilyResources
