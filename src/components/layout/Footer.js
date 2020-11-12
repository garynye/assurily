import React from 'react'
import styled from "styled-components";

const Footer = () => {
    return (
      <FooterContainer>
        <Link href="./Privacy">Privacy Policy</Link>
      </FooterContainer>
    );
}

const FooterContainer = styled.div`
  background-color: #1e1e1e;
  padding-top: 12px;
  width: 100%;
  height: 50px;

  text-align: center;
`;
const Link = styled.a`

  color: lightgray;
  text-decoration: none;

  &:hover {
    color: white;
    text-decoration: none;
  }
`;

export default Footer
