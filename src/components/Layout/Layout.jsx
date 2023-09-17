import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import { Header } from "../../components/Header/Header";
// import { Loader } from 'components/Loader/Loader';

import { Container } from "./Layout.styled";

export const Layout = () => {
  return (
    <Container>
      <Header />
      <Suspense fallback={<div>Loader</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};