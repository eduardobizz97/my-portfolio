import React from "react";
import styled from "styled-components";
import AboutmeImage from "../../components/AboutmeImage";
import Biography from "../../components/Biography";
import MyButton from "../../components/MyButton";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Header = styled.div`
  padding:30px;
  height: 400px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items:center;
`;

const FooterButton = styled.div`
  display: flex;
  justify-content: center;
`;

const HomeContainer = () => {
  const projectsClickHandler = ()=>{
    alert('chupalo');
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
