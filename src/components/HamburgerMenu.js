import React from 'react';
import { MenuIcon } from '../Styled';

const HamburgerMenu = ({ modal, modalHandler }) => {

  return (
    <MenuIcon modal={modal} onClick={modalHandler}>
      <span></span>
    </MenuIcon>
  );
};

export default HamburgerMenu;