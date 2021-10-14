import React from 'react';
import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  height: 100%;
  padding: 16px;
  box-sizing: border-box;
  color: #F2F2F2;

  .description {
    margin: 24px 0 32px 0;
    font-size: 12px;
  }
  a:link, a:focus, a:visited {
    color: #F2F2F2;
    text-decoration: none;

    position: relative;
  }

  h2 {
    margin: 40px 0 0 0px;
  }
  p {
    margin: 0;
  }
  .introduce p {
    margin: 8px 0;
  }
`;

export const Section = styled.section`
  h3 {
    margin: 0;
    font-size: 16px;
  }

  ul {
    margin: 8px 0 0 0;
    padding: 0;
    list-style: none;
    font-size: 14px;

    display: flex;
    flex-direction: column;
    grid-gap: 8px;
  }

  span {
    font-size: 14px;
  }

  .hightlight {
    display: inline-block;
    padding: 2px 4px;
    border-radius: 4px;
    background: rgba(191, 183, 176, 0.2);
  }

`;

export const Bold = styled.span`
  font-weight: bold;
`;