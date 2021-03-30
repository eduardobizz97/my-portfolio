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
const rotate = keyframes`
  0% {
    opacity: 0;
    transform: rotate(0deg);
  }30%{
    transform: rotate(50deg);
  }75%{
    transform: rotate(-180deg);
  }99%{
  
    border-bottom: 0px solid white;
  }100%{
    border-bottom: 1px solid white;
  }
`;

const MyProfileFoto = styled.img`
  opacity: 0.9;
  object-fit: cover;
  width: 150px;
  height: 150px;
  border-radius: 200px;
  border-left: 4px solid #fa163f;
  border-bottom: 4px solid #12cad6;
  border-right: 4px solid #e9c46a;
  border-top: 4px solid #480ca8;
  &:hover {
    opacity: 1;
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
        <MyButton clicked={projectsClickHandler}>Mis proyectos</MyButton>
      </FooterButton>
    </Container>
  );
};

export default HomeContainer;
