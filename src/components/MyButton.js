import React from "react";
import styled, { keyframes } from "styled-components";
import { COLORS } from '../constants/Theme';

const Button = styled.button`
  cursor: pointer; 
  font-size: 18px;
  opacity: 0.7;
  padding: 15px;
  background-color: transparent;
  border: 2px solid ${COLORS.primaryColor};
  color: ${COLORS.primaryColor};
  border-radius: 3px;
  
  &:hover{
    opacity: 1;
    
  }
`;

const MyButton = props => {
  return <Button {...props} >{props.children}</Button>;
};

export default MyButton;
