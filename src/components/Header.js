import React, { useEffect } from "react";
import styled from "styled-components";
import { COLORS, SIZES } from "../constants/Theme";
import { useWindowSize } from "../utils/useWindowsSize";

const Container = styled.div`
  width: 100%;
  height: 270px;
  overflow: hidden;
  background-color: ${COLORS.primaryColor};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const MyKnowledge = styled.p`
  text-align: center;
  color: white;
  font-size: ${SIZES.bigTitle};
`;


const Header = () => {

  const { width } = useWindowSize();

  let paragraph = `Hola! En esta seccion podras encontrar mis proyectos, los cuales han sido realizados en lenguajes como: java, javascript,
  PHP, utilizando frameworks como: Spring y laravel, asi como tambien la
  libreria React.js.`;

  if (width < 630) {
    paragraph = 'Mis proyectos:';
  }
  return (
    <Container>
      <div style={{ display: "flex", width: "50%" }}>
        <MyKnowledge>{paragraph}</MyKnowledge>
      </div>
    </Container>
  );
};

export default Header;
