import styled from 'styled-components';

export const PaginationWrapper = styled.section`
  width: 100%;
  height: 32px;

  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PaginationButton = styled.button`
  width: 24px;
  height: 24px;
  font-size: var(--font-size-16);

  color: var(--color-white);
  background-color: transparent;

  &:hover {
    color: var(--color-white);
    background-color: var(--color-pink);
  }
`;

export const Span = styled.span`
  font-size: var(--font-size-12);

  .pink {
    color: var(--color-pink);
  }
`;