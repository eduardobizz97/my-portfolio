import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants/Theme";
const Container = styled.div`
  padding: 20px;
  width: 10%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  @media (max-width: 1240px) {
    display: none;
  }

  p {
    font-size:60px;
    transform: inherit;
    text-align: center;
    writing-mode: vertical-rl;
    color: ${COLORS.fontColorAccent};
  }

`;
const MyMargins = (props) => {
  return (
    <Container>

        <p>Hecho por Eduardo Bizzarro </p>
    </Container>
  );
};

export default MyMargins;
