import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  height: 100%;
  padding: 16px;
  box-sizing: border-box;
  color: #F2F2F2;

  position: absolute;
  top: 0;
  left: 0;

  h2 {
    margin: 40px 0 0 0px;
  }
  h2::first-letter {
    color: #F23D5E;
  }

  .description {
    margin: 24px 0;
    font-size: 12px;
    height: 20px;
  }
  a:link, a:focus, a:visited {
    color: #F2F2F2;
    text-decoration: none;

    position: relative;
  }

  p {
    margin: 0;
    line-height: 20px;
    font-size: 12px;
  }

  .introduce p {
    margin: 4px 0;
    line-height: 20px;
    font-size: 12px;
  }
  .introduce p:not(.greet) {
    text-indent: 4px;
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
    font-size: 12px;
  }

  .hightlight {
    display: inline;
    padding: 2px 4px;
    border-radius: 4px;
    background: rgba(191, 183, 176, 0.2);
  }

`;

// export const Bold = styled.span`
//   font-weight: bold;
// `;