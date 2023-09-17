import { 
    ContainerHeader, 
    StyledLink, 
    Nav, 
    Logo,

 } from "./Header.styled";
export const Header = () => {
  return (
    <ContainerHeader>
      <Logo href="tel:+380730000000"
      // to="/"
      >
        Car Rentals
      </Logo>


      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/favorite">Favotite</StyledLink>
      </Nav>
    </ContainerHeader>
  );
};