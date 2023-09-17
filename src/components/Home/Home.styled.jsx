import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import carbgr from '../../img/carbgr.jpg'


export const Main = styled.div`
  background-color: #f7f6f9;
  height: 100%;
  margin-bottom: 0;

`;

export const Container = styled.div`
display: flex;
  width: 100%;
  text-align: center;
  min-height: 100vh;
  margin: 0 auto;
  max-width: 1440px;
  flex-direction: row;
  padding-left: 0;
  padding-top: 0;
  padding-bottom: 24px;

  background-image: linear-gradient(
      rgba(34, 35, 53, 0.7),
      rgba(34, 35, 53, 0.8)
    ),
    url(${carbgr});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  text-align: center;
  height: calc(100vh - 90px);
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
`;

export const MainContent = styled.div`
  display: flex;
  // justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding-top: 60px;
`;

export const Title = styled.h1`
  margin-bottom: 30px;
  font-size: 45px;
  font-weight: 700;
  color: white;
`;
export const Text = styled.p`
  color: #121417;
  font-size: 25px;
  margin-bottom: 50px;
`;

export const StyledNavLink = styled(NavLink)`
display: flex;
align-items: center;
justify-content: center;

  text-decoration: none;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  width: 150px;
  border: 1px solid #F7F7FB;
  color: #3470FF;
  font-weight: 500;
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

export const FooterStyled = styled.div`
  height: auto;
  padding-bottom: 15px;

  margin-top: 20px;


  font-family: 'Inter';
  font-weight: 400;
  font-size: 14px;
  line-height: 1.14;

  text-align: center;
  color: #343434;
  background-color: #ffffff;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 16px;
    line-height: 1.18;
  }

  & p {
    margin: 0;
    padding: 0;

    @media screen and (max-width: 767px) {
      padding-bottom: 5px;
    }
  }
`;

export const OwnerName = styled.span`
  color: #2476f1;
  margin-left: 5px;

  text-decoration-line: none;
  cursor: pointer;

  &:hover,
  &:focus {
    opacity: 0.8;
  }
`;