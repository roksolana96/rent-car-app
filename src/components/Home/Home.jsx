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
import { ArrowRightOutlined, CarOutlined } from '@ant-design/icons';

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
        <StyledNavLink to="/catalog"> START
        <ArrowRightOutlined />
        <CarOutlined />
         </StyledNavLink>
      </MainContent>
    </Container>
    </Main>

  );
};
