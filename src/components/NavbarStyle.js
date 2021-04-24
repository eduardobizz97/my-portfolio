import styled, { keyframes } from "styled-components";
import { COLORS } from "../constants/Theme";
import { NavLink as Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height:100%;
`;

export const BodyContainer = styled.div`
  margin:0;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: transparent;
  justify-content: center;
`;

export const Nav = styled.nav`
  height: 80px;
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

  .link{
    color:white;
    text-decoration: none;
    &:hover {
      
      color: ${COLORS.primaryColor};
    }
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

const appear = keyframes`
  from{
    transform: translateY(-100%);
  }
  to{
    transform: translateY(0);

  }
`;
export const HamburguerMenu = styled.nav`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    position: relative;
    height:100%;
    width: 100%;
    background-color: ${COLORS.accent};
    border-bottom: 1px solid ${COLORS.primaryColor};
    animation: ${appear} 500ms ease;
    ul {
      
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0;
      padding: 30px;
    }

    li {
      padding: 10px;
      width: 100%;
      margin-top: 10px;
      border-radius: 5px;
      text-align: center;
      list-style: none;
      text-decoration: none;
      border-bottom: 1px solid white;
    }
    .link{
    color:white;
    text-decoration: none;
    &:hover {
      
      color: ${COLORS.primaryColor};
    }
  }
  }
`;



export const OpenMenu = styled(FaBars)`
  padding: 5px;
  display: none;
  color: ${COLORS.primaryColor};
  font-size: 35px;
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
  color: ${COLORS.primaryColor};
  font-size: 35px;
  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;
