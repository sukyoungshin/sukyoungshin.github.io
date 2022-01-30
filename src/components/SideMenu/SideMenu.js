import React from 'react';
import { Link } from 'react-router-dom';
import { StyledAside, StyledUl } from './SideMenu.style';

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

const SideMenu = ({ modalHandler }) => {
  return (
    <StyledAside>      
      <nav>
        <StyledUl>
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
        </StyledUl>
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
    </StyledAside>
  );
};

export default SideMenu;