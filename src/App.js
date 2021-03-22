import React from "react";
import { HashRouter } from "react-router-dom";
import styled from "styled-components";

import Portfolio from "./containers/Portfolio";

const Portafolio = styled(Portfolio)`
  font-family: "Karla", sans-serif;
`;

const App = () => {
  return (
    <HashRouter>
      <Portafolio />
    </HashRouter>
  );
};

export default App;
