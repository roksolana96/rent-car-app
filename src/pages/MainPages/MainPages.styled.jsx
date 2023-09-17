import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

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

  // background-image: linear-gradient(
  //     rgba(34, 35, 53, 0.7),
  //     rgba(34, 35, 53, 0.8)
  //   ),
  //   url(https://blog.ingate.ru/upload/medialibrary/f13/2.png);
  // background-repeat: no-repeat;
  // background-position: center;
  // background-size: cover;
  // text-align: center;
  // height: calc(100vh - 90px);
  // box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 40px;
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
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 18px;
  text-decoration: none;
  color: white;
  font-weight: 400;
  border: 1px solid var(--primary-green-color);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: var(--text-light-color);
    border: 2px solid var(--accent-green-color);
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