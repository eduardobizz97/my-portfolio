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
  height: 500px;
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
  return (
    <Container>
      <Header>
        <Biography />
        <AboutmeImage />
      </Header>
      <FooterButton>
        <MyButton />
      </FooterButton>
    </Container>
  );
};

export default HomeContainer;
