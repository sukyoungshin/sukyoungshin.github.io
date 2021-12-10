import React from 'react';
import { Link } from 'react-router-dom';
import { ModalWrapper, ModalNavList } from '../Styled';

const ModalCategories = [
  {
    pathName: '/',
    categoryName : 'HOME',
  },
  {
    pathName: 'about',
    categoryName : 'ABOUT',
  },
  {
    pathName: 'experience',
    categoryName : 'EXPERIENCE',
  },
  {
    pathName: 'project',
    categoryName : 'PROJECT',
  },
  {
    pathName: 'contact',
    categoryName : 'CONTACT',
  }
];

const Modal = ({ modalHandler }) => {
  return (
    <ModalWrapper>      
      <nav>
        <ModalNavList>
          {
            ModalCategories.map((category) => (
              <li key={category.categoryName}>
                <Link 
                  to={category.pathName} 
                  onClick={modalHandler}
                >
                  {category.categoryName}
                </Link>
              </li>
            ))
          }
        </ModalNavList>
        <footer>
          신수경 / 010-8949-6027 / 
          <a 
            href="https://github.com/sukyoungshin" 
            target="_blank" 
            rel="noreferrer" 
            title="깃허브 바로가기"
          > GitHub</a>
        </footer>
      </nav>
    </ModalWrapper>
  );
};

export default Modal;