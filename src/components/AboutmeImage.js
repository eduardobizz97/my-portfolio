import React from "react";
import styled from "styled-components";

const MyImage = styled.img`
  width: 100%;
  height: 100%;
`;

const AboutmeImage = (props) => {
  return (
    <div style={{ width: " 100%", height: "100%" }}>
      <MyImage src="https://v1.nitrocdn.com/MAzcYbDxaTMXpJGnwJLhfuxpSoqMXlNW/assets/static/source/rev-c6fd0b8/wp-content/uploads/2018/08/Nature-Quotes-1-663x420.jpg" />
      {props.children}
    </div>
  );
};

export default AboutmeImage;
