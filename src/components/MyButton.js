import React from "react";
import styled from "styled-components";
import { COLORS } from '../constants/Theme';

const Button = styled.button`
  cursor: pointer; 
  padding: 15px;
  background-color: white;
  border: 2px solid ${COLORS.primaryColor};
  color: ${COLORS.primaryColor};
  border-radius: 3px;
`;

const MyButton = props => {
  return <Button onClick={props.clicked}>Mis proyectos</Button>;
};

export default MyButton;
