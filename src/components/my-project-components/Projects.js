import React from "react";
import styled from "styled-components";

import Project from "./project/Project";
import { PROJECTS } from "../../data/projects-data";

import MyMargins from "../MyMargins";

const ProjectsContainer = styled.div`
  margin: auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  

`;

const Lista = styled.div`
  background-color: transparent;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 10px;
  @media (max-width :1240px){

    width:100%;
  }
  @media (max-width :768px){
    width:100%;
  }
`;

const Projects = () => {
  return (
    <ProjectsContainer>
        <MyMargins />
        <Lista>
          {PROJECTS.map((project, index) => {
            return (
              <Project
                key={project.id}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                languages={project.languages}
              />
            );
          })}
        </Lista>
        <MyMargins/>
    </ProjectsContainer>
  );
};

export default Projects;
