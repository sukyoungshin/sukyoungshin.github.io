import React, { useState } from 'react';
import HamburgerMenu from './HamburgerMenu';
import Modal from './Modal';


const Header = () => {
  const [ modal, setModal ] = useState(false); // when : (true)모달OPEN, (false)모달close
  const modalHandler = () => setModal(() => !modal); // 모달팝업 핸들러

  return (
    <>
        {/* 햄버거 메뉴아이콘 */}
        <HamburgerMenu modalHandler={modalHandler} />
        {/* 메뉴 모달팝업 */}
        {
          modal 
          ? <Modal modalHandler={modalHandler} />
          : null
        }
    </>
  );
};

export default Header;