import styled from "styled-components";
import { COLORS } from "../constants/Theme";

import { FaBars, FaTimes } from "react-icons/fa";
export const BodyContainer = styled.div``;

export const Nav = styled.nav`
  height: 100px;
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

export const HamburguerMenu = styled.nav`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: relative;
    width: 100%;
    background-color: ${COLORS.accent};
    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0;
      padding: 30px;
    }

    li {
      
      list-style: none;
      text-decoration: none;
    }
  }
`;

export const OpenMenu = styled(FaBars)`
  padding: 5px;
  display: none;
  background-color: white;
  color: ${COLORS.accent};
  font-size: 35px;
  border: 1px solid white;
  border-radius: 8px;
  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

export const CloseMenu = styled(FaTimes)`
  padding: 5px;
  display: none;
  background-color: white;
  color: ${COLORS.accent};
  font-size: 35px;
  border: 1px solid white;
  border-radius: 8px;
  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;
