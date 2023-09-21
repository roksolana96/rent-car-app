import styled from 'styled-components';

export const FooterStyled = styled.footer`
  height: auto;
  padding-bottom: 15px;
  padding-top: 15px;



  font-family: 'Inter';
  font-weight: 400;
  line-height: 1.14;

  text-align: center;
  color: #343434;
  // background-color: #F7F7FB;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;

    display: flex;
    justify-content: center;

    font-size: 16px;
    line-height: 1.18;
  

  & p {
    margin: 0;
    padding: 0;

`;

export const OwnerName = styled.a`
  color: #2476f1;
  margin-left: 5px;

  text-decoration-line: none;
  cursor: pointer;

  &:hover,
  &:focus {
    opacity: 0.8;
  }
`;
