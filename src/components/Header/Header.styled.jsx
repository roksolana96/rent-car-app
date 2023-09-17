import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";


export const ContainerHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 5px;
  border-bottom: 1px solid black;
`;
export const Logo = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-weight: 700;
  font-size: 25px;
  margin: 0;

  border-radius: 5px;
  text-decoration: none;
  color: #121417;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);


  &:hover {
    opacity: 0.8;
  }
`;
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;
export const StyledLink = styled(NavLink)`
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  border: 1px solid #F7F7FB;
  color: #3470FF;
  font-weight: 500;
  background-color: white;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  transition: transform 0.2s linear 0s, box-shadow 0.2s linear 0s;

  &.active {
    color: white;
    border: none;
    background-color: #3470FF;
  }
  &:hover,
  &:focus {
    transform: scale(1.02);
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
      rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  }
`;