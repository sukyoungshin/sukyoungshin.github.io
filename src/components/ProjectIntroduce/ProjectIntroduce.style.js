import styled from 'styled-components';

export const StyledSection = styled.section`
  height: calc(100% - 192px);
`;
export const StyledArticleImgWrapper = styled.article`
  width: 100%;
  height: 20%;
  overflow: hidden;

  ul {
    width: 100%;
    height: 100%;

    display: inline-flex;
    flex-direction: row;

    a {
      width: 100%;
    }
    li {
      width: 100%;
      height: 100%;
    }
  }
  img {
    width: 100%;
    height: 100%;
  }
`;
export const StyledArticleContentWrapper = styled.article`
  margin: 8px 0 0 0;
  width: 100%;
  height: 80%;

  position: relative;

  display: inline-flex;
  flex-direction: column;
  grid-gap: 8px;

  h3 {
    font-size: var(--font-size-14);
    font-weight: 500;
  }

  ul {
    margin: 8px 0;
    font-size: var(--font-size-12);

    display: inline-flex;
    flex-direction: column;
    grid-gap: 2px;
  }
`;
export const StyledDivTitle = styled.div`
  height: fit-content;

  p {
    margin: 8px 0;
  }
`;
export const StyledDivTechStack = styled.div`
  height: fit-content;

  ul {
    margin: 8px 0;

    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    grid-gap: 8px;

    font-size: var(--font-size-14);
  }

`;
export const StyledDivURL = styled.div`
  margin: 0;
  height: fit-content;
`;
export const StyleDivdDescription = styled.div`
  flex: 1; /* flex 1칸 전체를 차지하도록 */
  overflow-y: auto;

  /* custom scroll바 */
  &::-webkit-scrollbar{
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-track{
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb{
    background-color: var(--color-grey-light);
  }

  li {
    line-height: 1.3rem;
  }

  li::before {
    content: '· ';
    display: inline-block;
    margin-right: 4px;
  }
`;

export const HightLight = styled.span`
  font-size: var(--font-size-12);

  display: inline-block;
  padding: 0px 4px;
  border-radius: 4px;
  background-color: var(--color-black-opacity);
`;