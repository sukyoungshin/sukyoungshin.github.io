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

  p, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  a {
    text-decoration: none;
    color: var(--color-white);
  }
  input, button, textarea {
    outline: none;
    border: none;
  }
  textarea {
    resize: none;
  }

  /* FONT-FAMILY */
  body {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  /* COLOR, FONTSIZE */
  html {
    --color-white: #F2F2F2;
    --color-grey-light: #BFBFBF; 
    --color-grey-dark: #524b4b;
    --color-black-light: #333333;
    --color-black-dark: #2b2b2b;
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
// Layout Wrapper
export const LayoutWrapper = styled.div`
  margin: 0 auto;
  max-width: 360px;
  height: 640px;
  background-color: var(--color-black-light);

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
    height: 32px;
    line-height: 32px;

    color: var(--color-white);
    font-size: var(--font-size-10);

    position: absolute;
    right: 16px;
    bottom: 0;

    a {
      color: inherit;
      font-size: inherit;
      transition: color 0.4s;

      &:hover {
        color: var(--color-pink);
      }
    }
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

// COMMON 
export const MainWrapper = styled.main`
  padding: 16px;
  width: 100%;
  height: 100%;
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

  p {
    line-height: 20px;
    font-size: var(--font-size-12);
  }

  .education p,
  .certificate p {
    margin: 0;
  }

  footer {
    height: 32px;
    line-height: 32px;
    font-size: var(--font-size-10);

    position: absolute;
    right: 16px;
    bottom: 0;
  }
`;
export const Description = styled.section`
  margin: 0;
  padding: 8px 0;
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: 8px;

  font-size: var(--font-size-12);
  
  a:link, a:focus, a:visited {
    position: relative;
  }
  a:hover {
    text-decoration: underline;
  }

  p {
    margin: 12px 0;
    flex: 1;
  }

  img {
    width: 40%;
    height: 50%;
  }
  ul {
    font-size: var(--font-size-14);

    display: inline-flex;
    flex-direction: column;
    grid-gap: 4px;
    
    li::before {
      content: '-';
      display: inline-block;
      margin-right: 8px;
    }
  }
`;

// Home
export const HomeBgWrapper = styled.div`
  width: 220px;
  height: 340px;
  
  background-image: ${props => props.bgImg && `url(${props.bgImg})`};
  background-size: cover;
  background-repeat: no-repeat;
  
  position: absolute;
  top: 160px;
  right: 26px;

  &::before {
    display: inline-block;
    content: '';
    
    width: 220px;
    height: 340px;
    border: 2px solid #BFBFBF;
    
    position: absolute;
    top: -10px;
    right: -10px;
  }
`;
export const HomeTextWrapper = styled.div`
  width: 231px;
  height: fit-content;

  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);

  h1 {
    color: var(--color-white);

    &::before {
      content: '';
      display: inline-block;
      
      width: 160px;
      height: 47px;

      position: absolute;
      left: 0px;
      top: 50%;
      transform: translateY(-50%);

      backdrop-filter: invert(1);
    }
  }
`;

// About
export const AboutIntroSection = styled.section`
  p {
    margin: 4px 0;
    line-height: 20px;
    font-size: var(--font-size-12);
  }

  p:not(.greet) {
    text-indent: 4px;
  }
`;
export const IntroduceSection = styled.section`
  font-size: var(--font-size-14);

  p:not(.greet) {
    text-indent: 4px;
  }
`;
export const AboutHashtagSection = styled.section`
  margin: 24px 0 0 0;
  width: 100%;

  h3 {
    font-size: var(--font-size-14);
  }
  ul {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;  
    justify-content: center;
  }
`;

// Experience
export const MainSection = styled.section`
  h3 {
    margin: 0;
    font-size: var(--font-size-16);
  }

  ul {
    margin: 8px 0 0 0;
    padding: 0;
    font-size: var(--font-size-14);

    display: flex;
    flex-direction: column;
    grid-gap: 8px;
  }
`;

// Contact
export const ContactForm = styled.form`
  width: 100%;
`;
export const ContactTable = styled.table`
  margin: 0 0 24px 0;
  width: 100%;

  tr {
    width: 100%;
    height: 40px;
    display: table;
    border-bottom: 1px solid rgba(255,255,255,0.2);
    border-collapse: collapse;
  }
  th, td {
    padding: 0;
    text-align: left;
    font-size: var(--font-size-12);
  }
  th {
    width: 20%;
    vertical-align: middle;
  }
  td {
    width: 80%;
    height: fit-content;
  }
  tbody input{
    padding: 0 0 0 8px;
    width: 100%;
    height: 32px;
    
    color: var(--color-white);
    font-weight: 300;
    font-size: var(--font-size-12);
    background-color: var(--color-black-dark);
  }
  tbody textarea {
    padding: 14px 0 0 8px;
    width: 100%;
    height: 168px;

    color: var(--color-white);
    font-weight: 300;
    font-size: var(--font-size-12);
    background-color: var(--color-black-dark);
  }

`;
export const SubmitButton = styled.button`
  width: 100%;
  height: 40px;
  transition: all 0.2s;

  &:hover {
    color: var(--color-white);
    background-color: #f23d5ed3;
  }
`;

// SPAN STYLE
export const Span = styled.span`
  font-size: var(--font-size-12);
`;
export const HightLight = styled(Span)`
  display: inline-block;
  padding: 0px 4px;
  border-radius: 4px;
  background-color: rgba(191, 183, 176, 0.2);
`;
export const Bold = styled(Span)`
  font-weight: bold;
`;
export const HashTag = styled(Span)`
  display: inline-block;
`;