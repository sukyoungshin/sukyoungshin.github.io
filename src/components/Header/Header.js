import React, { useState } from 'react';
import { HamburgerIcon, SideMenu } from 'components';

const Header = () => {
  const [ modal, setModal ] = useState(false); // when : (true)모달OPEN, (false)모달close
  const modalHandler = () => {
    setModal(() => !modal); // 모달팝업 핸들러
  }; 

  return (
    <>
      <HamburgerIcon modal={modal} modalHandler={modalHandler} />
      {
        modal 
        ? <SideMenu modalHandler={modalHandler} />
        : null
      }
    </>
  );
};

export default Header;