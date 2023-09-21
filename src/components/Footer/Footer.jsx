import React from 'react';

import { FooterStyled, OwnerName } from './Footer.styled';


export const Footer = () => {

  return (
    <>
      <FooterStyled>
        <p>© 2023 | All Rights Reserved |</p>
        &nbsp;Developed by

        <OwnerName
        href="https://www.linkedin.com/in/roksolana-busko/"
        >Roksolana Busko</OwnerName>
      </FooterStyled>
    </>
  );
};

