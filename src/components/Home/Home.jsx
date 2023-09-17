import {
  Container,
  Title,
  Text,
  MainContent,
  Main,
  // OwnerName,
  // FooterStyled,
  StyledNavLink,
} from "./Home.styled";
//  import { Loader } from "../Loader/Loader";

export const Home = () => {

  return (
    <Main> 
    <Container>
      
      <MainContent>
        <Title>Welcome to Car Rentals</Title>
        <Text>
          This application is for a company that provides car rental services in Ukraine.
          <br />
          Catalog of cars of various configurations. 
          <br />
          Enjoy!
        </Text>
        <StyledNavLink to="/catalog"> start </StyledNavLink>
      </MainContent>
    </Container>
    </Main>

  );
};
