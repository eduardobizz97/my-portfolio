import React from "react";
import styled from "styled-components";

import Project from "./project/Project";
import { PROJECTS } from "../../data/projects-data";
import { Grid, makeStyles, Paper } from "@material-ui/core";
import { COLORS } from "../../constants/Theme";
import { useWindowSize } from "../../utils/useWindowsSize";

const ProjectsContainer = styled.div`
  margin: auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  

`;

const Lista = styled.div`
  background-color: transparent;
  width: 80%;
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
    </ProjectsContainer>
  );
};

export default Projects;
