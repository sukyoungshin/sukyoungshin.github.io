import styled, { createGlobalStyle } from 'styled-components';

/**************
  GLOBAL-STYLE
***************/
export const GlobalStyle = createGlobalStyle`
  // CSS RESET
  *, *::before, *::after{
    box-sizing: border-box;
  }
  html {
    background-color: rgba(0,0,0,.1);
  }
  html, body {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }
  #root {
    width: 100%;
    height: 100%;
  }

  ul {
    list-style-type: none;
  }
  a {
    text-decoration: none;
  }

  /* COLOR, FONTSIZE */
  html {
    --color-white: #F2F2F2;
    --color-lightgrey: #BFBFBF; 
    --color-darkgrey: #524b4b;
    --color-black: #333333;
    --color-pink: #F23D5E; 

    --font-size-32 : 32px;
    --font-size-24: 24px;
    --font-size-16: 16px;
    --font-size-14: 14px;
    --font-size-12: 12px;    
    --font-size-10: 10px;
  }
`;

/******************
  STYLED-COMPONENTS
********************/
// Main Wrapper
export const MainWrapper = styled.div`
  margin: 0 auto;
  max-width: 360px;
  height: 640px;
  background-color: var(--color-black);

  position: relative;
`;

// Header
export const MenuIcon = styled.div`
  width: 40px;
  height: 40px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 8px;
  right: 16px;
  z-index: 9999;

  &:hover {
    background: var(--color-pink); /* modify later */
  }

  span {
    display: inline-block;
    width: 24px;
    height: 2px;
    background: #F2F2F2;
    border-radius: 4px;
    
    position: relative;

    &::before,
    &::after {
      content: '';
      display: inline-block;
      width: 24px;
      height: 2px;
      background: #F2F2F2;
      border-radius: 4px;
    } 
    &::before {
      position: absolute;
      top: 8px;
    }
    &::after {
      position: absolute;
      bottom: 8px;
    }
  }
`;

// Modal
export const ModalWrapper = styled.aside`
  // modal bg
  width: 360px;
  height: 640px;
  background: rgba(0, 0, 0, 0.8);

  position: relative;
  z-index: 9998;

  nav {
    width: 80%;
    height: 100%;
    
    position: absolute;
    top: 0px;
    right: 0;
    
    background: #595959;
    color: var(--color-white);
  }
  footer {
    color: var(--color-white);
  }
`;
export const ModalNavList = styled.ul`
  margin: 80px 0;
  padding: 0;
  width: 100%;
  list-style: none;

  text-align: right;
  font-size: var(--font-size-24);

  display: inline-flex;
  flex-direction: column;
  grid-gap: 16px;

  li {
    padding: 0 32px 0 0;

    a:link,
    a:visited,
    a:focus {
      display: block;
      color: var(--color-white);
      
      &:hover {
        color: var(--color-pink);
        transition: all 0.5s;
      }
    }
  }
`;




// Main
export const Main = styled.main`
  width: 100%;
  height: 100%;
  padding: 16px;
  color: var(--color-white);

  position: absolute;
  top: 0;
  left: 0;

  h2 {
    margin: 40px 0 0 0px;
  }
  h2::first-letter {
    color: var(--color-pink);
  }

  .description {
    margin: 24px 0;
    font-size: var(--font-size-12);

  }
  a:link, a:focus, a:visited {
    color: var(--color-white);
    position: relative;
  }
  a:hover {
    text-decoration: underline;
  }

  p {
    line-height: 20px;
    font-size: var(--font-size-12);
  }

  .education p,
  .certificate p {
    margin: 0;
  }

  .introduce p {
    margin: 4px 0;
    line-height: 20px;
    font-size: var(--font-size-12);
  }
  .introduce p:not(.greet) {
    text-indent: 4px;
  }
`;

export const Section = styled.section`
  h3 {
    margin: 0;
    font-size: var(--font-size-16);
  }

  ul {
    margin: 8px 0 0 0;
    padding: 0;
    list-style: none;
    font-size: var(--font-size-14);

    display: flex;
    flex-direction: column;
    grid-gap: 8px;
  }

  span {
    font-size: var(--font-size-12);
  }

  .hightlight {
    display: inline;
    padding: 2px 4px;
    border-radius: 4px;
    background-color: rgba(191, 183, 176, 0.2);
  }
`;
