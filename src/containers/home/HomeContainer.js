import React from "react";
import styled from "styled-components";
import AboutmeImage from "../../components/AboutmeImage";
import Biography from "../../components/Biography";
import MyButton from "../../components/MyButton";
import { COLORS } from "../../constants/Theme";

const Container = styled.div`
  position:fixed;
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
  width: 90%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FooterButton = styled.div`
  background-color: transparent;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const MyProfileFoto = styled.img`
  object-fit: cover;
  width: 150px;
  height: 150px;
  border-radius: 200px;
  border: 4px solid ${COLORS.primaryColor};
`;
const ImageContent = styled.div`
  padding-bottom:20px;
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  border-bottom: 1px solid white;
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
