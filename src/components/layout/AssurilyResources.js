import React from 'react'
import styled from "styled-components";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Fade } from "react-awesome-reveal";


const AssurilyResources = () => {
    return (
      <DivStyle>
        <Row md={3} className="justify-content-center">
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
      </DivStyle>
    );
}

const DivStyle = styled.div`

//   width: 90%;
  margin:auto;
  @media (min-width: 1080px) {
    max-width: 1080px;
}
`;

const noOverflow = {
  overflow: "hidden",
//   backgroundColor: "rgb(34, 37, 41)",

};


const Image = styled.img`
  transition: all 0.25s ease-in-out;
    padding: 10px;

  width: 100%;
  &:hover {
    transform: scale(1.1);

    transition: all 0.25s ease-in-out;
  }
`;
export default AssurilyResources
