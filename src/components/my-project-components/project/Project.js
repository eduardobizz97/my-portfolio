import { colors } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { COLORS } from "../../../constants/Theme";

const ProjectContainer = styled.div`
  background-color: ${COLORS.accent};
  width: calc(33.3333333% - 20px);
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 10px;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: -2px 5px 10px 0px rgba(0, 0, 0, 0.75);
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ImageContainer = styled.img`
  width: 100%;
`;
const TextContainer = styled.div`
  padding: 30px;
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    color: ${COLORS.fontColorPrimay};
  }
  p {
    color: white;
  }
`;

const Languages = styled.div`
  display: flex;
  justify-content: space-between;
  .languages{
    color: grey;
  }
`;

const Project = (props) => {
  return (
    <ProjectContainer>
      <ImageContainer src={props.imageUrl} />
      <TextContainer>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <Languages>
          {props.languages.map((item, index) => {
            return (
              <p className="languages" key={index}>
                {item}
              </p>
            );
          })}
        </Languages>
      </TextContainer>
    </ProjectContainer>
  );
};

export default Project;
