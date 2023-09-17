import React from 'react';

import { FooterStyled, OwnerName } from './Footer.styled';


export const Footer = () => {

  return (
    <>
      <FooterStyled>
        <p>© 2023 | All Rights Reserved |</p>
        &nbsp;Developed by

        <OwnerName>Roksolana Busko</OwnerName>
      </FooterStyled>
    </>
  );
};

