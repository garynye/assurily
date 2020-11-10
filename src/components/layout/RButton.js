import React from 'react'
import styled from "styled-components";

const RButton = () => {
    return (
      
        <MagicButton href="./Signup">Sign Up Now</MagicButton>
      
    );
}


const MagicButton = styled.a`
  border-radius: 3px;
  border: none;
  background-color: #ff3347;
  
  color: white;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  padding: 10px 100px;
  text-decoration: none;
  transition: all 0.25s ease-in-out;
  &:hover {
    background-color: #ed0000;
    transition: all 0.25s ease-in-out;
    text-decoration: none;
    color: white;
  }
  @media (max-width: 1024px) {
    padding: 8px 60px;
 
  }
`;

export default RButton
