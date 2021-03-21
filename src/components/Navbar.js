import { FaBars, FaTimes } from "react-icons/fa";
import React, { useEffect, useState } from "react";
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
import { useWindowSize } from "../utils/useWindowsSize";

const NavContainer = styled.div``;

const BodyContainer = styled.div``;

const Nav = styled.nav`
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  background-color: ${COLORS.accent};

  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0;
    @media (max-width: 768px) {
      .link {
        display: none;
      }
    }
  }
  li {
    text-decoration: none;
    display: inline-block;
    margin: 10px;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    .burguerMenu {
      background-color: red;
      ul {
        background-color: red;
      }
    }
  }
`;

const HamburguerMenu = styled.nav`
  position: relative;
  width: 100%;
  background-color: ${COLORS.accent};
  ul{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 30px;
    
    
  }

  li{
    list-style: none;
    text-decoration: none;
  }
`;

const OpenMenu = styled(FaBars)`
  padding: 5px;
  display: none;
  background-color: white;
  color: ${COLORS.accent};
  font-size: 40px;
  border: 1px solid white;
  border-radius: 8px;
  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const CloseMenu = styled(FaTimes)`
  display: none;
  background-color: white;
  color: ${COLORS.accent};
  font-size: 50px;
  border: 1px solid white;
  border-radius: 8px;
  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = (props) => {
  const [burguermenu, setBurguermenu] = useState(false);
  const { width } = useWindowSize();

  const burguerMenuHandler = () => {
    setBurguermenu(!burguermenu);
  };

  let NavbarComponent = (
      <ul>
        <li>
          <NavLink
            to="/"
            exact
            className="link"
            style={{ color: "white", textDecoration: "none" }}
            activeStyle={{ color: "#e9c46a" }}
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projectos"
            className="link"
            style={{ color: "white", textDecoration: "none" }}
            activeStyle={{ color: "#e9c46a" }}
          >
            Proyectos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/acerca"
            className="link"
            style={{ color: "white", textDecoration: "none" }}
            activeStyle={{ color: "#e9c46a" }}
          >
            Acerca de mi
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contacto"
            className="link"
            style={{ color: "white", textDecoration: "none" }}
            activeStyle={{ color: "#e9c46a" }}
          >
            Contacto
          </NavLink>
        </li>
        
      </ul>
  );

  return (
    <div>
      <NavContainer>
        <header>
          <Nav>
          {NavbarComponent}<li>
          {burguermenu ? (
            <CloseMenu onClick={burguerMenuHandler} />
          ) : (
            <OpenMenu onClick={burguerMenuHandler} />
          )}
        </li></Nav></header>
        {burguermenu ? <HamburguerMenu>{NavbarComponent}</HamburguerMenu> : null}
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
