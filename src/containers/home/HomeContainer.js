import React from "react";
import styled from "styled-components";
import AboutmeImage from "../../components/AboutmeImage";
import Biography from "../../components/Biography";
import MyButton from "../../components/MyButton";
import { COLORS } from "../../constants/Theme";

const Container = styled.div`

  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.accent};
  @media (max-width: 738px){
    
  }
`;
const Header = styled.div`
  background-color: transparent;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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
  display: flex;
  justify-content: center;
  object-fit: cover;
  width: 150px;
  height: 150px;
  border-radius: 200px;
  border: 4px solid ${COLORS.primaryColor};
`;

const HomeContainer = () => {
  const projectsClickHandler = () => {
    alert("tqm");
  };
  return (
    <Container>
      
      <MyProfileFoto src="https://ucarecdn.com/0289e77b-bf52-49a5-94c6-97daa8fd4f71/foto.png" />
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
