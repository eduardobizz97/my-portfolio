import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Projects from "../../components/my-project-components/Projects";

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
          title="Proyectos desarrollados por mí recientemente:" 
          responsiveTitle="Mis proyectos:"
          />
          
      </HeaderContainer>

      <Projects />
    </MainContainer>
  );
};

export default ProjectsContainer;
