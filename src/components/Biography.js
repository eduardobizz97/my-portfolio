import React from "react";
import styled from "styled-components";

const BiographyContainer = styled.div`
  text-align: center;
`;

const Biography = () => {
  return (
    <BiographyContainer>
      <h1>Hola, mi nombre es Eduardo Bizzarro.</h1>
      <p>Soy estudiante de tercer año de Ingeniería Informática.</p>
    </BiographyContainer>
  );
};

export default Biography;
