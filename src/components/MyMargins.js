import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants/Theme";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
const Container = styled.div`
  margin-top: 50px;
  width: 5%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  @media (max-width: 1240px) {
    display: none;
  }

  
`;

const GithubIcon = styled(FaGithub)``;

const TextContainer = styled.div`
   
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  p {
    font-size: 1.875rem;
    transform: inherit;
    text-align: center;
    writing-mode: vertical-rl;
    color: ${COLORS.fontColorAccent};
  }
  a {
    
    margin-top: 10px;
    color: ${COLORS.fontColorAccent};
    &:visited {
      text-decoration: none;
      color: ${COLORS.fontColorAccent};
    }
    &:hover {
      color: ${COLORS.fontColorAccent};
    }
  }
  .margin{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .line{
    display: flex;
    width: 25%;
    height: 100%;
    background-color: ${COLORS.fontColorAccent}
    
  }
  .redes{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .me{
    
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-top:10px;
    margin-bottom:10px;
  }
`;
const MyMargins = (props) => {
  return (
    <Container>
      <TextContainer>
        <div className='margin'>
          <span className='line'/>
          <div className='redes'>
            <a target="_blank" href="https://github.com/eduardobizz97">
              <GithubIcon />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/eduardo-bizzarro-mata-208b36144/"
            >
              <FaLinkedin />
            </a>
            <a target="_blank" href="https://www.instagram.com/inacapdevs/">
              <FaInstagram />
            </a>
          </div>

          <div className='me'><p>Hecho por Eduardo Bizzarro</p></div>
          <span className='line'/>
        </div>
      </TextContainer>
    </Container>
  );
};

export default MyMargins;
