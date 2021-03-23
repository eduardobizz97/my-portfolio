import React from "react";
import styled from "styled-components";

import Project from "./project/Project";
import { PROJECTS } from "../../data/projects-data";
import { Grid, makeStyles, Paper } from "@material-ui/core";
import { COLORS } from "../../constants/Theme";
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
    height: '100%',
    width: "100%",
    margin: "20px",
  },
  gridItem:{
    width: '40%',
    height: '50px'
  },
  paper: {
    backgroundColor: '#63a4ff',
    backgroundImage: `linear-gradient(315deg, #63a4ff 5%, ${COLORS.primaryColor} 74%)`,
    width: "80%",
    color: 'white',
    ['@media (max-width:768px)']: {
      width: '100%'
    }
  },
}));

const Projects = () => {
  

  const classes = useStyles();

  return (
    <ProjectsContainer>
      <Grid container align="center" spacing={3}  className={classes.grid}>
        {PROJECTS.map((project, id) => {
          return (
            <Grid item xs={12} md={4} key={project.id} color=""className={classes.gridItem}>
              <Paper  className={classes.paper}>
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
