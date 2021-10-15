import React from 'react';
import './HamburgerMenu.css';

function HamburgerMenu({ modalHandler }) {

  return (
    <div className="menu-icon" onClick={modalHandler}>
      <span></span>
    </div>
  );
};

export default HamburgerMenu;