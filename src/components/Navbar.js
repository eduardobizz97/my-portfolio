import React from "react";
import {
  Link,
  NavLink,
  Redirect,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../constants/Theme";
import AboutMeContainer from "../containers/about-me/AboutMeContainer";
import ContactContainer from "../containers/contact-me/ContactContainer";
import HomeContainer from "../containers/home/HomeContainer";
import ProjectsContainer from "../containers/projects/ProjectsContainer";


const NavContainer = styled.div``;

const BodyContainer = styled.div``;

const NavBar = styled.nav`
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  background-color: ${COLORS.accent};
`;

const UnorderedList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0;
`;

const ListItem = styled.li`
  text-decoration: none;
  display: inline-block;
  margin: 10px;
  font-weight: 400;
`;

const Navbar = (props) => {


  return (
    <div>
      <NavContainer>
        <header>
          <NavBar>
            <UnorderedList>
              <ListItem>
                <NavLink
                  to="/"
                  exact
                  style={{ color: "white", textDecoration: "none" }}
                  activeStyle={{ color: "#e9c46a" }}
                >
                  Inicio
                </NavLink>
              </ListItem>
              <ListItem>
                <NavLink
                  to="/projectos"
                  style={{ color: "white", textDecoration: "none" }}
                  activeStyle={{ color: "#e9c46a" }}
                >
                  Proyectos
                </NavLink>
              </ListItem>
              <ListItem>
                <NavLink
                  to="/acerca"
                  style={{ color: "white", textDecoration: "none" }}
                  activeStyle={{ color: "#e9c46a" }}
                >
                  Acerca de mi
                </NavLink>
              </ListItem>
              <ListItem>
                <NavLink
                  to="/contacto"
                  style={{ color: "white", textDecoration: "none" }}
                  activeStyle={{ color: "#e9c46a" }}
                >
                  Contacto
                </NavLink>
              </ListItem>
            </UnorderedList>
          </NavBar>
        </header>
      </NavContainer>
      <BodyContainer>
        <Switch>
          <Route path="/" exact component={HomeContainer} />
          <Route path="/projectos" component={ProjectsContainer} />
          <Route path="/acerca" component={AboutMeContainer} />
          <Route path="/contacto" component={ContactContainer} />
          <Route component={HomeContainer} />
        </Switch>
      </BodyContainer>
    </div>
  );
};

export default withRouter(Navbar);
