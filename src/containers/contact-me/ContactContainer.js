import React, { useState } from "react";
import styled from "styled-components";
import { FormTextInput } from "../../components/FormTextInput";
import { COLORS, SIZES } from "../../constants/Theme";
import PhoneInput from "react-phone-number-input";
import ContactForm from "../../components/ContactForm";

const Container = styled.div`
  width: 100%;
  background-color: ${COLORS.accent};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;



const ContactContainer = () => {
  

  return (
    <Container>
      
      <ContactForm/>
    </Container>
  );
};

export default ContactContainer;
