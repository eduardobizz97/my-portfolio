import React from "react";
import styled, { keyframes } from "styled-components";
import AboutmeImage from "../../components/AboutmeImage";
import Biography from "../../components/Biography";
import MyButton from "../../components/MyButton";
import { COLORS } from "../../constants/Theme";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.accent};
  @media (max-width: 738px) {
  }
`;
const Header = styled.div`
  background-color: transparent;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const appear = keyframes`
from{
  transform: translateX(-100%);
}to{
  transform: translateX(0%);
}
`;
const FooterButton = styled.div`
  display: inherit;
  background-color: transparent;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  transform: translateX(-100%);
  animation: ${appear} 2s ease forwards;
  animation-delay: 4s;
`;

const MyProfileFoto = styled.img`
  object-fit: cover;
  width: 150px;
  height: 150px;
  border-radius: 200px;
  border: 4px solid ${COLORS.primaryColor};
`;

const rotate = keyframes`
  0% {
    opacity: 0;
    
    transform: rotate(0deg);
  }30%{
    transform: rotate(50deg);
  }75%{
    border-bottom: 1px solid white;
    transform: rotate(-180deg);
  }100%{
    border-bottom: 3px solid white;
  }
`;
const ImageContent = styled.div`
  padding-bottom: 20px;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  animation: ${rotate} 4s ease forwards;

  @media (max-width: 738px) {
    width: 50%;
  }
`;
const HomeContainer = () => {
  const projectsClickHandler = () => {
    alert("tqm");
  };
  return (
    <Container>
      <ImageContent>
        <MyProfileFoto src="https://ucarecdn.com/0289e77b-bf52-49a5-94c6-97daa8fd4f71/foto.png" />
      </ImageContent>
      <Header>
        <Biography />
      </Header>
      <FooterButton>
        <MyButton clicked={projectsClickHandler} />
      </FooterButton>
    </Container>
  );
};

export default HomeContainer;
