import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants/Theme";

const BiographyContainer = styled.div`
  padding: 20px;
  text-align: center;

  h1,h2,h3,h5{
    color: ${COLORS.fontColorPrimay};
  }
  h4{color: ${COLORS.fontColorAccent};}
`;

const Biography = () => {
  return (
    <BiographyContainer>
      <h1>Hola, mi nombre es Eduardo Bizzarro.</h1>
      <h4>Soy estudiante de tercer año de Ingeniería Informática.</h4>
    </BiographyContainer>
  );
};

export default Biography;
