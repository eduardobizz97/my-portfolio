import React, { useState } from "react";
import { NavLink, Route, Switch, withRouter } from "react-router-dom";
import {
  Nav,
  HamburguerMenu,
  OpenMenu,
  CloseMenu,
  BodyContainer,
} from "./NavbarStyle";

import AboutMeContainer from "../containers/about-me/AboutMeContainer";
import ContactContainer from "../containers/contact-me/ContactContainer";
import HomeContainer from "../containers/home/HomeContainer";
import ProjectsContainer from "../containers/projects/ProjectsContainer";

const Navbar = (props) => {
  const [burguermenu, setBurguermenu] = useState(false);

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
          onClick={()=>setBurguermenu(false)}
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
          onClick={()=>setBurguermenu(false)}
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
          onClick={()=>setBurguermenu(false)}
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
          onClick={()=>setBurguermenu(false)}
        >
          Contacto
        </NavLink>
      </li>
    </ul>
  );

  return (
    <div>
      <div style={{position: 'sticky', top: 0}}>
        <header >
          <Nav>
            {NavbarComponent}
            <li>
              {burguermenu ? (
                <CloseMenu onClick={burguerMenuHandler} />
              ) : (
                <OpenMenu onClick={burguerMenuHandler} />
              )}
            </li>
          </Nav>
        </header>
        {burguermenu ? (
          <HamburguerMenu>{NavbarComponent}</HamburguerMenu>
        ) : null}
      </div>
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
