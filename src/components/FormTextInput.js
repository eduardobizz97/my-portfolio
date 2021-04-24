import React from "react";
import styled from "styled-components";
import { COLORS, SIZES } from "../constants/Theme";

const TextInput = styled.input`
  background-color: transparent;
  font-size: ${SIZES.paragraph};
  color: ${COLORS.fontColorPrimay};
  border: transparent;
  border-bottom: ${(props) => (props.invalid ? 
    "3px solid #ff3333" : `1px solid ${COLORS.primaryColor}` )};
  margin-top: ${(props) => props.marginTop};
  border-radius: 0px;
  padding: 5px;

  &&:focus {
    outline: none;
  }
`;

export const FormTextInput = (props) => {
  return (
    <>
      <TextInput {...props} />
    </>
  );
};
