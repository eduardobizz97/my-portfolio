import React from "react";
import styled from "styled-components";

import Project from "./project/Project";
import { PROJECTS } from "../../data/projects-data";
import { Grid, makeStyles, Paper } from "@material-ui/core";
import { useWindowSize } from "../../utils/useWindowsSize";



const ProjectsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },

  grid: {
    width: "100%",
    margin: "20px",
  },
  paper: {
    width: "50%",
    ['@media (max-width:768px)']: {
      width: '100%'
    }
  },
}));

const Projects = () => {
  

  const classes = useStyles();

  return (
    <ProjectsContainer>
      <Grid container align="center" spacing={6} className={classes.grid}>
        {PROJECTS.map((project, id) => {
          return (
            <Grid item xs={12} md={6} key={project.id}>
              <Paper className={classes.paper}>
                <Project
                  title={project.title}
                  imageUrl={project.imageUrl}
                  description={project.description}
                />
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </ProjectsContainer>
  );
};

export default Projects;
