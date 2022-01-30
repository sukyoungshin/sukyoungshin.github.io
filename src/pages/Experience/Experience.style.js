import styled from 'styled-components';

export const StyledMainWrapper = styled.main`
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

export const StyledSectionDescription = styled.section`
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

export const StyledSectionContent = styled.section`
  h3 {
    margin: 0;
    font-size: var(--font-size-16);
    font-weight: 500;
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

export const Span = styled.span`
  font-size: var(--font-size-12);

  .pink {
    color: var(--color-pink);
  }
`;

export const StyledSpanHightLight = styled(Span)`
  display: inline-block;
  padding: 0px 4px;
  border-radius: 4px;
  background-color: var(--color-black-opacity);
`;

export const StyledSpanBold = styled(Span)`
  font-weight: bold;
`;