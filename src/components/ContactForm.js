import React, { useState } from "react";
import styled from "styled-components";
import { COLORS, SIZES } from "../constants/Theme";
import { FormTextInput } from "./FormTextInput";
import MyButton from "./MyButton";

const Form = styled.form`
  background-color: transparent;
  border: ${props => props.allInvalid ? `1px solid red` : `1px solid ${COLORS.primaryColor}`};
  border-radius: 5px;
  padding: 30px;
  width: clamp(400px, 100%, 550px);
  margin: auto;
  display: flex;
  flex-direction: column;
  text-align: left;
  h3{
    text-align: center;
    color: ${COLORS.fontColorPrimay};
  }
  label {
    font-weight: bold;
    font-size: ${SIZES.title};
    color: ${COLORS.fontColorAccent};
  }
  .name-invalid {
    text-align: left;
    font-size: ${SIZES.title};
    color: #ff3333;
  }
  .input {
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    input[type=text]{
      
      margin-top: 10px;
    }
  }
  .phone-number {
    margin-top: 25px;
    width: 100%;
    .prefix {
      
      width: 15%;
      &:disabled{

        background-color: transparent;
        border: 1px solid ${COLORS.primaryColor};
        padding: 5px;
        border-radius: 5px;
      }
    }
    .phone {
      width: 85%;
    }
  }
`;

const Buttons = styled(MyButton)`
  margin-top: 30px;
  &:disabled {
    color: orangered;
    border: 1px solid orangered;
    opacity: 1;
    
  }
  &:enabled {

    opacity: 1;
    
  }

`;

const ContactForm = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredNumber, setEnteredNumber] = useState("");
  const [enteredNumberTouched, setEnteredNumberTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  //Name input
  const enteredNameIsValid = enteredName.trim() !== "";

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  //Number input
  const enteredNumberValid =
    enteredNumber.trim() !== "" && enteredNumber.length > 8;

  const numberInputIsInvalid = !enteredNumberValid && enteredNumberTouched;

  //Email input
  const emailRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g;

  const enteredEmailIsValid =
    enteredEmail.trim() !== "" && emailRegEx.test(enteredEmail);

  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;
  let allInvalid = false;

  if (enteredNameIsValid && enteredNumberValid && enteredEmailIsValid) {
    formIsValid = true;
  }
  if(nameInputIsInvalid && numberInputIsInvalid && emailInputIsInvalid){
    allInvalid = true;
  }

  //Name handlers
  const nameInputChangedHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
  };

  //Number handlers
  const numberInputChangedHandler = (event) => {
    const value = event.target.value;
    let normalizedNumber = value.replace(/\D+/g, "");

    setEnteredNumber(normalizedNumber);
  };
  const numberInputBlurHandler = () => {
    setEnteredNumberTouched(true);
  };

  //Email handlers
  const emailInputChangedHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const emailInputBlurHandler = () => {
    setEnteredEmailTouched(true);
  };

  //form handlers
  const formSubmissionHandler = (event) => {
    
    event.preventDefault();
    console.log('a');
    setEnteredNameTouched(true);
    if (!enteredNameIsValid && !enteredNumberValid && !enteredEmailIsValid) {
      return;
    }    
    

  };
  return (
    <div>
      <Form method='POST' action={formSubmissionHandler}  allInvalid={allInvalid}>
        <h3>Formulario de contacto</h3>
        <div className="input">
          <label for="name">Nombre completo:</label>
          <FormTextInput
            type="text"
            name="txtName"
            id="txtName"
            onBlur={nameInputBlurHandler}
            onChange={nameInputChangedHandler}
            value='d'
            // value={enteredName}
            invalid={nameInputIsInvalid}
            // placeholder="Nombre o nombre de la empresa"
          />
          {nameInputIsInvalid && (
            <p className="name-invalid">El nombre no debe estar vacío</p>
          )}
        </div>
       
        <div className="phone-number">
          <label for="name">Teléfono:</label>
          <br/>
          <input value="+56" disabled className="prefix" />
          <FormTextInput
            className="phone"
            type="text"
            inputMode="numeric"
            name="txtNumebr"
            autoComplete="cc-number"
            maxLength="9"
            id="txtNumber"
            onChange={numberInputChangedHandler}
            onBlur={numberInputBlurHandler}
            value='22222222'
            // value={enteredNumber}
            invalid={numberInputIsInvalid}
            // placeholder="9 XX-XXX-XXX"
          />

          {numberInputIsInvalid && (
            <p className="name-invalid">
              Ingrese un número válido (9 XX-XXX-XXX)
            </p>
          )}
        </div>
        <div className="input">
          <label for="name">Correo: </label>

          <FormTextInput
            type="text"
            name="name"
            id="txtName"
            // placeholder="Correo electrónico"
            onChange={emailInputChangedHandler}
            onBlur={emailInputBlurHandler}
            value='ebmcangrejo@gmail.com'
            // value={enteredEmail}
            invalid={emailInputIsInvalid}
          />
        </div>
        <Buttons valid={formIsValid} type='submit' disabled={!formIsValid}>
          Enviar
        </Buttons>
      </Form>
    </div>
  );
};

export default ContactForm;
