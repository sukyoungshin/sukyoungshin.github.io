import React from 'react';
import { MenuIcon } from '../Styled';

const HamburgerMenu = ({ modalHandler }) => {

  return (
    <MenuIcon onClick={modalHandler}>
      <span></span>
    </MenuIcon>
  );
};

export default HamburgerMenu;