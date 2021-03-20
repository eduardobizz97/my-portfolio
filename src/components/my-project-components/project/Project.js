import React from "react";
import styled from "styled-components";

const ImageContainer = styled.img`
  width: 100%;
`;

const Title = styled.h1``;
const Description = styled.p``;
const TextContainer = styled.div`
padding: 10px;
`;

const Project = (props) => {
  return (
    <div>
      <ImageContainer src={props.imageUrl} />
      <TextContainer>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
      </TextContainer>
    </div>
  );
};

export default Project;
