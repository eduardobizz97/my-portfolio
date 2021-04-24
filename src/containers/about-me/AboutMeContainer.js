import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants/Theme";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {
  SiAmazonaws,
  SiCsharp,
  SiDocker,
  SiDotNet,
  SiFigma,
  SiGit,
  SiJava,
  SiJavascript,
  SiMysql,
  SiNodeDotJs,
  SiNpm,
  SiPhp,
  SiReact,
  SiRedux,
} from "react-icons/si";

const Container = styled.div`
  width: 100%;
  background-color: ${COLORS.accent};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  .biography-container {
    margin-top: 50px;
    width: 80%;
    
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    
  }

  .biography-text {
    width: 65%;
    padding-right: 100px;
    h1,
    h3 {
      margin: 0;
      color: ${COLORS.fontColorPrimay};
    }
    p {
      padding-top: 20px;
      text-align: justify;
      margin: 0;
      color: ${COLORS.fontColorAccent};
    }
    span {
      color: ${COLORS.primaryColor};
    }
  }
  .biography-image {
    width: 35%;
    height: 50%;
    img {
      width: 100%;
    }
  }

  .skills-container {
    background-color: ${COLORS.accent};
    width: 100%;
    .title {
      color: ${COLORS.fontColorPrimay};
      text-align: center;
      width: 100%;
    }
  }

  .skills {
    width: 60%;
    margin: auto;
    display: flex;
    justify-content: space-around;
    p{
       
        margin: 0px 0px 0px 10px;
      }
    .languages {
      color: white;
      
      h3 {
        color: #00e3e9;
        margin-bottom: 0;
      }
      
    }
    .frameworks {
      color: white;
      h3 {
        margin-bottom: 0;
        color: #00a0f5;
      }
    }
    .tech {
      color: white;
      h3 {
        margin-bottom: 0;
        color: #654bb6;
      }
    }
  }

  @media (max-width: 768px) {
    .biography-container {
      width: 100%;
      padding-left:50px;
      padding-right:50px;
      background-color: ${COLORS.accent};
    }
    .biography-text {
      width: 100%;
      padding: 0;
    }
    .biography-image {
      padding-top: 30px;
      padding-bottom: 30px;
      width: 100%;
      text-align: center;
      img {
        width: 80%;
      }
    }

    .skills {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .skills * {
      }
      .languages {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .frameworks {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .tech {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }
`;

const AboutMeContainer = () => {
  return (
    <Container>
      <div className="biography-container">
        <div className="biography-text">
          <h1>Eduardo Bizzarro Mata.</h1>
          <h3>
            Desarrollo <span>aplicaciones web</span> y <span>móviles.</span>
          </h3>
          <p>
            Vivo en Rancagua, Chile. Me apasiona la técnología y recrear la
            solución a cualquier problema a través de la programación. Como
            persona busco adaptarme a cualquier grupo de trabajo, siempre a
            través de la <span>empatía</span>, <span>honestidad</span> y
            <span> compromiso</span>.
          </p>
        </div>
        <div className="biography-image">
          <img src="https://res.cloudinary.com/db4k3lnsk/image/upload/v1617631016/sample.jpg" />
        </div>
      </div>
      <div className="skills-container">
        <div className="title">
          <h4>Tecnologías con las que he trabajado:</h4>
        </div>
        <div className="skills">
          <div className="languages">
            <h3>Lenguajes</h3>
            <List className='lista'>
              <ListItem>
                <SiJava />
                <p>Java</p>
              </ListItem>
              <ListItem>
                <SiJavascript />
                <p>Javascript</p>
              </ListItem>
              <ListItem>
                <SiPhp />
                <p>PHP</p>
              </ListItem>
              <ListItem>
                <SiCsharp />
                <p>C#</p>
              </ListItem>
              <ListItem>
                <SiMysql />
                <p>SQL</p>
              </ListItem>
            </List>
          </div>
          <div className="frameworks">
            <h3>Frameworks y librerias</h3>
            <List>
              <ListItem>
                <SiReact />
                <p>React</p>
              </ListItem>
              <ListItem>
                <SiReact />
                <p>React Native</p>
              </ListItem>
              <ListItem>
                <SiRedux />
                <p>Redux</p>
              </ListItem>
              <ListItem>
                <SiNodeDotJs />
                <p>Node</p>
              </ListItem>
              <ListItem>
                <SiDotNet />
                <p>.NET</p>
              </ListItem>
            </List>
          </div>
          <div className="tech">
            <h3>Tecnologías</h3>
            <List>
              <ListItem>
                <SiGit />
                <p>Git</p>
              </ListItem>
              <ListItem>
                <SiDocker />
                <p>Docker</p>
              </ListItem>
              <ListItem>
                <SiNpm />
                <p>NPM</p>
              </ListItem>
              <ListItem>
                <SiAmazonaws />
                <p>AWS</p>
              </ListItem>
              <ListItem>
                <SiFigma />
                <p>Figma</p>
              </ListItem>
            </List>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeContainer;
