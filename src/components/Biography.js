import React from "react";
import styled from "styled-components";

const BiographyContainer = styled.div`
  padding: 30px;
  text-align: center;
`;

const Biography = () => {
  return (
    <BiographyContainer>
      <p>
        Hola, mi nombre es Eduardo Bizzarro, soy estudiante de tercer año de
        Ingeniería en Informática.
      </p>
    </BiographyContainer>
  );
};

export default Biography;
