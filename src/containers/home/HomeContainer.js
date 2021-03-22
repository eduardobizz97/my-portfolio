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
  background-color: ${COLORS.accent};
`;
const Header = styled.div`
  background-color:transparent;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items:center;
`;

const FooterButton = styled.div`
  background-color:transparent;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const HomeContainer = () => {
  const projectsClickHandler = ()=>{
    alert('chupklalo');
  }
  return (
    <Container>
      <Header>
        <Biography />
      </Header>
      <FooterButton>
        <MyButton clicked={projectsClickHandler}/>
      </FooterButton>
    </Container>
  );
};

export default HomeContainer;
