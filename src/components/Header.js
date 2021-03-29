import React, {  useEffect,useState } from "react";
import styled from "styled-components";
import { COLORS, SIZES } from "../constants/Theme";
import { useWindowSize } from "../utils/useWindowsSize";

const Container = styled.div`
  width: 100%;
  height: 270px;
  overflow: hidden;
  background-color: ${COLORS.accent};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
`;

const MyKnowledge = styled.p`
  text-align: center;
  color: ${COLORS.primaryColor};
  font-size: ${SIZES.bigTitle};
`;

const Header = props => {


  const [paragraph, setParagraph] = useState(
    props.title
  );

  const { width } = useWindowSize();

  useEffect(() => {

    if (width < 768) {
      setParagraph(props.responsiveTitle);
    }
    return ()=>{
      if (width > 768) {
        setParagraph(props.title);
      }
    }
  },[width]);

  return (
    <Container>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <MyKnowledge>{paragraph}</MyKnowledge>
        
      </div>
    </Container>
  );
};

export default Header;
