import React from 'react';
import { StyledMenuIcon } from './HamburgerIcon.style';

const HamburgerIcon = ({ modal, modalHandler }) => {

  return (
    <StyledMenuIcon modal={modal} onClick={modalHandler}>
      <span></span>
    </StyledMenuIcon>
  );
};

export default HamburgerIcon;