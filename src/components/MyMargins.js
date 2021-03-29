import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants/Theme";
const Container = styled.div`
  padding: 20px;
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  @media (max-width: 1240px) {
    display: none;
  }

  p {
    font-size:40px;
    transform: inherit;
    text-align: center;
    writing-mode: vertical-rl;
    color: ${COLORS.fontColorAccent};
  }

`;

const TextContainer = styled.div`
  display: flex;
  width:50%;
  height: 100%;
`;
const MyMargins = (props) => {
  return (
    <Container>
        <TextContainer><p>Hecho por Eduardo Bizzarro </p></TextContainer>
        
    </Container>
  );
};

export default MyMargins;
