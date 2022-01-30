import styled, { css } from 'styled-components';

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

export const StyledFormContact = styled.form`
  width: 100%;
`;

export const StyledTableContact = styled.table`
  margin: 0 0 24px 0;
  width: 100%;

  tr {
    width: 100%;
    height: 40px;

    display: table;
    border-collapse: collapse;
    border-bottom: 1px solid var(--color-black-opacity);
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

export const StyledButtonSubmit = styled.button`
  width: 100%;
  height: 40px;
  font-size: var(--font-size-12);
  transition: all 0.2s;

  ${(props) => props.isSubmitted && css`
    color: var(--color-white);
    background-color: var(--color-pink-opacity);
  `}
`;

export const StyledSpanBold = styled.span`
  font-size: var(--font-size-12);
  font-weight: bold;
`;