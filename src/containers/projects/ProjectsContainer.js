import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Projects from "../../components/my-project-components/Projects";
import Separator from "../../components/Separator";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectsContainer = () => {
  return (
    <MainContainer>
      <HeaderContainer>
        <Header 
          title="Hola! En esta seccion podras encontrar mis proyectos, los cuales han sido realizados en lenguajes como: java, javascript, PHP, utilizando frameworks como: Spring y laravel, asi como tambien la libreria React.js." 
          responsiveTitle="Mis proyectos:"
          />
          
      </HeaderContainer>
      <Separator/>

      <Projects />
    </MainContainer>
  );
};

export default ProjectsContainer;
