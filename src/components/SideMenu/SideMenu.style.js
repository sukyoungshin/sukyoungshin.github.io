import styled from 'styled-components';

export const StyledAside = styled.aside`
  width: 360px;
  height: 640px;
  background-color: var(--color-black-dimmed);

  position: relative;
  z-index: 9998;

  nav {
    width: 80%;
    height: 100%;
    
    position: absolute;
    top: 0px;
    right: 0;
    
    color: var(--color-white);
    background-color: var(--color-grey-darkest);
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
export const StyledUl = styled.ul`
  margin: 80px 0;
  width: 100%;

  font-size: var(--font-size-24);

  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;
  grid-gap: 16px;
  gap: 16px;

  li {
    padding: 0 32px 0 0;

    a:link,
    a:visited,
    a:focus {
      display: block;
      color: var(--color-white);
      border-bottom: 3px solid transparent;
      transition: border-bottom 0.3s;

      &:hover {
        border-bottom: 3px solid var(--color-black-opacity);
      }
    }
  }
`;
