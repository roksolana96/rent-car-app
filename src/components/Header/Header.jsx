import { 
    ContainerHeader, 
    StyledLink, 
    Nav, 
    Logo,
 } from "./Header.styled";
export const Header = () => {
  return (
    <ContainerHeader>
      <Logo to="/">
        Car Rentals
      </Logo>

      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/favorite">Favotite</StyledLink>
      </Nav>
    </ContainerHeader>
  );
};