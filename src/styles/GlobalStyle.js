import { createGlobalStyle } from 'styled-components';
import FONT from './font';
import SIZE from './fontsize';
import PALETTE from './palette';

export const GlobalStyle = createGlobalStyle`
  // CSS RESET
  *, *::before, *::after{
    box-sizing: border-box;
  }
  html {
    background-color: ${PALETTE.BLACK_OPACITY};
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

  p, h1, h2, h3, h4, h5, h6, ul {
    margin: 0;
    padding: 0;
  }
  ul {
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

  body {
    font-family: ${FONT.DEFAULT}, ${FONT.EN};
    -webkit-font-smoothing: antialiased;
  }

  html {
    --color-white: ${PALETTE.WHITE};
    --color-grey-light: ${PALETTE.GREY_LIGHT}; 
    --color-grey-dark: ${PALETTE.GREY_DARK};
    --color-grey-darkest: ${PALETTE.GREY_DARKEST};
    --color-black-light: ${PALETTE.BLACK_LIGHT};
    --color-black-dark: ${PALETTE.BLACK_DARK};
    --color-pink: ${PALETTE.PINK}; 
    --color-pink-opacity: ${PALETTE.PINK_OPACITY};
    --color-black-opacity: ${PALETTE.BLACK_OPACITY};
    --color-black-dimmed: ${PALETTE.BLACK_DIMMED};

    --font-size-32: ${SIZE.LARGE_32};
    --font-size-24: ${SIZE.LARGE_24};
    --font-size-16: ${SIZE.MIDDLE_16};
    --font-size-14: ${SIZE.MIDDLE_14};
    --font-size-12: ${SIZE.SMALL_12};    
    --font-size-10: ${SIZE.SMALL_10};
  }
`;